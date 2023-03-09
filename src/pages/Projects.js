import React from 'react'
import afro from '../pics/afro.png'
import thugluffy from '../pics/thugluffy.png'
import ania from '../pics/ania.png'
import damian from '../pics/damian.png'
import holeinone from '../pics/holeinone.png'
import bird from '../pics/bird.png'

const style = {
    width: '300px',
    height: '300px'
}

function Projects() {
  return (
    <div>
      <a href='https://github.com' target='_blank' rel='noreferrer'>
        <img style={style} src={afro} alt='afro' />
      </a>
      <a href='https://github.com' target='_blank' rel='noreferrer'>
        <img style={style} src={thugluffy} alt='thugluffy' />
      </a>
      <a href='https://github.com' target='_blank' rel='noreferrer'>
        <img style={style} src={ania} alt='ania' />
      </a>
      <a href='https://github.com' target='_blank' rel='noreferrer'>
        <img style={style} src={damian} alt='damian' />
      </a>
      <a href='https://github.com' target='_blank' rel='noreferrer'>
        <img style={style} src={holeinone} alt='holeinone' />
      </a>
      <a href='https://github.com' target='_blank' rel='noreferrer'>
        <img style={style} src={bird} alt='bird' />
      </a>
    </div>
  )
}

export default Projects