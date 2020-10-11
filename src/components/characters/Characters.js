import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Spinner from '../ui/Spinner'
import CharacterItem from './CharacterItem'
import Search from '../ui/Search'

const Characters = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`,
      )
      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])
  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <Search getQuery={(q) => setQuery(q)} />
      <section className="cards">
        {items.map((item) => (
          <CharacterItem key={item.char_id} item={item}></CharacterItem>
        ))}
      </section>
    </>
  )
}

export default Characters
