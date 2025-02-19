import { useState } from 'react'
import './BaiTap01.css';
export default function BaiTap01() {
    const [name, setName] = useState('')
    const [text, setText] = useState('')
    function handleClick() {
        setText(name)
    }
    function handleChange(e) {
        setName(e.target.value)
    }

    return (
        <div class="line">
            <input onChange={handleChange} type="text"
            />
            <br />
            <br />

            <button onClick={handleClick}>Click me</button>
            <br />
            <span>{text}</span>

            
        </div>
    )
}