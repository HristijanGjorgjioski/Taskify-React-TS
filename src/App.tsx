import React, { useState } from 'react'
import InputFields from './components/InputFields';

import './App.css'

const App: React.FC = () => {
  return (
    <div>
      <span className='heading'>Taksify</span>
      <InputFields />
    </div>
  )
}

export default App
