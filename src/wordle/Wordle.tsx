import React, { useState } from 'react'
import './Wordle.css'

const MAX_ATTEMPT = 6
const MAX_LETTER = 5

const Wordle = () => {
  const [words, setWords] = useState<string[][]>(Array(MAX_ATTEMPT).fill(Array(MAX_LETTER).fill('')))

  const handleKeyPress: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    console.log('hihihi')
    console.log(e.key)
  }

  return (
    <div className='wordle-container' onKeyPress={handleKeyPress}>
      <h1 className='font-bold underline'>Hello wordle</h1>
      <div>
        {words.map((word, wordIdx) => (
          <div className='block-row' key={`row-${wordIdx}`}>
            {word.map((letter, letterIdx) => (
              <div className='block' key={`row-${wordIdx}-letter-${letterIdx}`}>{letter}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Wordle
