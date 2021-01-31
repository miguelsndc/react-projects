import React from 'react'

const List = ({ name, age, image }) => {
  return (
    <article className="person">
      <img src={image} alt="person" />
      <div className="info">
        <h3>{name}</h3>
        <p>{age}</p>
      </div>
    </article>
  )
}

export default List
