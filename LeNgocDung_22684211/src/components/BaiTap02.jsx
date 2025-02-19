import { useState } from 'react'
import './BaiTap02.css';
export default function BaiTap01() {
    const [a, setA] = useState('')
    const [b, setB] = useState('')
    const [result, setResult] = useState('')
    
    function handleClick() {
        setResult(parseInt(a) + parseInt(b))
        setA('')
        setB('')
       
    }
    function handleChangeA(e) {
        setA(e.target.value)
    }
    function handleChangeB(e) {
        setB(e.target.value)
    }

    return (
        <div class="line">
            <input onChange={handleChangeA} type="text" placeholder='input a'
            />
            <br />
            <br />
            <input onChange={handleChangeB} type="text" placeholder='input b'
            />
            <br />
            <br />
            <button id='btn' onClick={handleClick}>Click me</button>
            <br />
            <span>{result}</span>
        </div>
    )
}