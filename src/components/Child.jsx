import React, { useState } from "react"

function People({ name, age }) {
  return (
    <div>
      <h2>
        Hi, I'm {name} and I am {age}.
      </h2>
    </div>
  )
}

export default People
