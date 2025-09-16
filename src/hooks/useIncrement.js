import { useCallback, useState } from 'react'

export default function useIncrement({ base = 0, max = Infinity, min = -Infinity }) {
  const [state, setState] = useState(base)

  return {
    count: state,
    setIncrement: useCallback(() => setState(v => (v < max ? v + 1 : v)), [max]),
    setDecrement: useCallback(() => setState(v => (v > min ? v - 1 : v)), [min])
  }
}
