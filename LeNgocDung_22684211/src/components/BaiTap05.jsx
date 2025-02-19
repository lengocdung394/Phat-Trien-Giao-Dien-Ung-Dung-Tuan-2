import { useState } from 'react'
import './BaiTap05.css';
export default function BaiTap05() {
    var a = ['do home', 'do work', 'do exercise', 'do homework']
    const [text, setText] = useState('')
    const [arr, setArr] = useState(a)
    function handleClick() {
        setArr([...arr, text])
        
        setText('')
    }
    function handleChangeDelete(index) {
        return function () {
            setArr(arr.filter((item, i) => i !== index))
        }
    }
    function handleChange(e) {
        setText(e.target.value)
    }
    var button = {
        width: '100px',
        background: 'red',
    }
    var buttonadd = {
        background: 'aquamarine',
    }
    return (
        <div class="line005">
            <input type="text" onChange={handleChange} placeholder='Input text...' value={text} />
            <button style={buttonadd} onClick={handleClick}>Add</button>

            <ul>
                {arr.map((item, index) => (
                    <li key={index}>{item}
                        <button onClick={handleChangeDelete(index)} style={button}>delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}