import React from 'react'

export default function ExpenseAlert({type, text="Alert"}) {
  return (
    <div className={`alert alert-${type}`}>
      {text}
    </div>
  )
}
