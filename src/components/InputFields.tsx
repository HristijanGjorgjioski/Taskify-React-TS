import React from 'react'

import './styles.css'

const InputFields: React.FC = () => {
  return (
    <form className='input'>
      <input type="input" placeholder='Enter a task' className='input__box'/>
      <button className='input__submit' type='submit'>Go</button>
    </form>
  )
}

export default InputFields
