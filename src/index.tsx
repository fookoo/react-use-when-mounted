import { useCallback, useEffect, useRef } from 'react'

type UseWhenMountedHookResponse = (callback: Function) => void

export const useWhenMounted = (): UseWhenMountedHookResponse => {
  const isMountedRef = useRef(true)
  const whenMounted = useCallback((callback: Function) => {
    if (isMountedRef.current) {
      callback()
    }
  }, [])

  useEffect(() => {
    return () => {
      isMountedRef.current = false
    }
  }, [])

  return whenMounted
}
