import { useEffect, useState } from 'react'

export const useFirstWord = ({ fact }) => {
  const [firstWord, setFirstWord] = useState()

  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ')[0]
    setFirstWord(firstWord)
  }, [fact])

  return { firstWord }
}
