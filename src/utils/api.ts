import {getUserToken} from './getUserToken'

const BASE_PATH = process.env.REACT_APP_API_BASE_PATH

type Options = {
  data: Record<string, unknown>
  headers?: Record<string, unknown>
} & Omit<RequestInit, 'body'>

export type ErrorResponse = {
  success: false
  error: {
    code?: string
    message?: string
  }
}

export type SuccessResponse<TData> = {
  success: true
  data: TData
}

export type Response<TData> = SuccessResponse<TData> | ErrorResponse

async function client<TResponse>(
  path: string,
  options?: Options,
): Promise<Response<TResponse>> {
  const {headers, ...config} = options ?? {}
  const token = getUserToken()
  const requestInit: RequestInit = {
    method: Boolean(options?.data) ? 'POST' : 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      ...headers,
    },
    body: Boolean(options?.data) ? JSON.stringify(options?.data) : null,
    ...config,
  }

  try {
    const response = await fetch(`${BASE_PATH}/${path}`, requestInit)
    const data: Response<TResponse> = await response.json()

    if (response.ok) {
      return data
    } else {
      return Promise.reject(data)
    }
  } catch (error) {
    if (error instanceof SyntaxError) {
      return Promise.reject({
        success: false,
        error: {
          message: 'There was something wrong in reading the response.',
        },
      })
    }

    return Promise.reject({
      success: false,
      error: {
        message: 'There was something wrong in completing the request.',
      },
    })
  }
}

export {client}
