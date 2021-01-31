import React, { useState } from 'react'

import List from './List'
import data from './data'

function App() {
  const [people, setPeople] = useState(data)

  return (
    <div className="App">
      <section className="container">
        <h1>{people.length} birthdays today</h1>
        {people.map((person) => {
          return <List key={person.id} {...person} />
        })}
        <button className="btn" onClick={() => setPeople([])}>
          Clear
        </button>
      </section>
    </div>
  )
}

export default App
