import { useRef, useEffect } from 'react'

export function usePrevious(value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  console.log('REF', ref)
  return ref
}
