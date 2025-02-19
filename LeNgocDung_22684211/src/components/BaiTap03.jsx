import { useState } from 'react'
import './BaiTap03.css';
export default function BaiTap01() {
    const [a, setA] = useState('')
    const [b, setB] = useState('')
    const [result, setResult] = useState('')

    function handleClick() {
        switch (document.querySelector('input[name="group"]:checked').value) {
            case '+':
                setResult(parseInt(a) + parseInt(b))
                break
            case '-':
                setResult(parseInt(a) - parseInt(b))
                break
            case '*':
                setResult(parseInt(a) * parseInt(b))
                break
            case '/':
                setResult(parseInt(a) / parseInt(b))
                break
        }

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
            <div>
                <input type="radio" name="group" value="+"/>+
                <input type="radio" name="group" value="-" />-
                <input type="radio" name="group" value="*" />*
                <input type="radio" name="group" value="/" />/
            </div>


            <button onClick={handleClick}>Click me</button>
            <br />
            <span>{result}</span>
        </div>
    )
}