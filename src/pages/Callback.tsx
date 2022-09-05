import {useLocation} from 'react-router-dom'

export default function CallBackPage() {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const code = params.get('code')

  if (!Boolean(code)) {
    return <p>Authorization Failed</p>
  }

  return (
    <>
      <h1>Authorization</h1>
      <p>{code}</p>
    </>
  )
}
