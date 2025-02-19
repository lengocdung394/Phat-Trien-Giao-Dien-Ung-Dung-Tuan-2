import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BaiTap01 from './components/BaiTap01'
import BaiTap02 from './components/BaiTap02'
import BaiTap03 from './components/BaiTap03'
import BaiTap04 from './components/BaiTap04'
function App() {
  var style =
  {
    display: 'flex',
  }
  var style2={
    justifyContent: 'center',
    alignItems: 'center',
  }
  return (
    <>
      <div style={style}>
        <BaiTap01></BaiTap01>
        <BaiTap02></BaiTap02>
        <BaiTap03></BaiTap03>
      </div>
      <div style={style2}>
        <BaiTap04></BaiTap04>
      </div>

    </>

  )
}

export default App
