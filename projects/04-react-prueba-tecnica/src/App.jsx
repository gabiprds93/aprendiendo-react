import './App.css'
import { useCatFact } from './hooks/useCatFact'
import { useFirstWord } from './hooks/useFirstWord'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat/says/'

export function App() {
  const { fact, refreshFact } = useCatFact()
  const { firstWord } = useFirstWord({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>

      <button onClick={handleClick}>Get new fact</button>

      {fact && <p>{fact}</p>}

      {firstWord && (
        <img
          src={`${CAT_PREFIX_IMAGE_URL}${firstWord}`}
          alt={`Image extracted using the first word for ${fact}`}
        />
      )}
    </main>
  )
}
