import { useEffect, useRef } from "react"

function usePrevious<TData>(value: TData) {
  const ref = useRef<TData>()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export {usePrevious}