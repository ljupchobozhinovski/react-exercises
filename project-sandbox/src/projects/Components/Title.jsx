import React from 'react'

const Title = ({text}) => {
  return (
    <h1 className='text-center'>{!text? "Title" : text}</h1>
  )
}

export default Title