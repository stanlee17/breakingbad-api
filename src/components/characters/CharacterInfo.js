import React from 'react'

const CharacterInfo = ({ char }) => {
  const dateFormat = {
    day: '2-digit',
    weekday: 'long',
    month: 'short',
    year: 'numeric'
  }

  const characterBirthday = new Date(char.birthday).toLocaleDateString('en-US', dateFormat); 

  return (
    <div className="character-container">
      <img className="character-image" src={char.img} alt="" />
      <div className="character-info">
        <h1>{char.name}</h1>
        <ul>
          <li>
            <strong>Actor Name:</strong> {char.portrayed}
          </li>
          <li>
            <strong>Nickname:</strong> {char.nickname}
          </li>
          <li>
            <strong>Birthday:</strong> {characterBirthday}
          </li>
          <li>
            <strong>Occupation:</strong> {char.occupation.map(
              (occupation, index) => (index ? ', ' : '') + occupation
            )}
          </li>
          <li>
            <strong>Status:</strong> {char.status}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CharacterInfo
