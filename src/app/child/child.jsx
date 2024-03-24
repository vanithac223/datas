import React from 'react'

export default function Child(props) {
  return (
    <div key={props.val.Id}>
        <h1>{props.val.Name}</h1>
        <h2>{props.val.Password}</h2>
      
    </div>
  )
}
