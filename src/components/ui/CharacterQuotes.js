import React from 'react'

const Quotes = ({ quote }) => {
  return (
    <div className="quote">
      <strong className="quote-author">{quote.author}:</strong>
      {quote.quote}
    </div>
  )
}

export default Quotes
