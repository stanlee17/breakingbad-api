import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Spinner from '../ui/Spinner'
import CharacterQuotes from '../ui/CharacterQuotes'
import CharacterInfo from '../characters/CharacterInfo'

const MoreInfo = () => {
  const [quotes, setQuotes] = useState([])
  const [characterInfo, setCharacterInfo] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  let { author } = useParams()
  // + will be replaced instead of a blank space
  const replaced = author.split(' ').join('+')

  useEffect(() => {
    const fetchData = async () => {
      const quotesData = await axios(
        `https://www.breakingbadapi.com/api/quote?author=${replaced}`,
      )
      const characterInfoData = await axios(
        `https://breakingbadapi.com/api/characters?name=${replaced}`,
      )

      setQuotes(quotesData.data)
      console.log(characterInfoData.data)
      setCharacterInfo(characterInfoData.data)
      setIsLoading(false)
    }

    fetchData()
  }, [])

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="more-info container">
      {characterInfo.map((char) => (
        <CharacterInfo key={char.char_id} char={char}></CharacterInfo>
      ))}
      <div className="quotes">
        <h2>Quotes</h2>
        {quotes.map((quote) => (
          <CharacterQuotes key={quote.quote_id} quote={quote}></CharacterQuotes>
        ))}
      </div>
    </div>
  )
}

export default MoreInfo
