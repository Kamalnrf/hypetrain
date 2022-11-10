import {useState, useEffect} from 'react'

type Props = {
  destroyAfter: number
  onComplete: () => void
  children: React.ReactNode
}

function SelfDestruct({destroyAfter, children, onComplete}: Props) {
  const [isVisible, setVisible] = useState(false)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null
    if (destroyAfter) {
      setVisible(true)
      timeoutId = setTimeout(() => {
        setVisible(false)
        onComplete()
      }, destroyAfter)
    }

    return () => {
      if (timeoutId) {
        clearInterval(timeoutId)
      }
    }
  }, [destroyAfter, onComplete])

  if (isVisible) {
    return <>{children}</>
  }

  return <></>
}

export {SelfDestruct}
