import { useState } from 'react'
import './BaiTap04.css';
export default function BaiTap04() {
    const [tab, setTab] = useState('')
    function handelTab(e) {
        setTab(e.target.innerText)
    }

    const arr = [
        {
            tab: 'Component',
            content: 'Component content'
        },
        {
            tab: 'JSX',
            content: 'JSX content'
        },
        {
            tab: 'Props',
            content: 'Props content'
        },
        {
            tab: 'State',
            content: 'State content'
        }
    ]

    return (
        <div class="line004">
            <div class="line04">
                <button onClick={handelTab}>Component</button>
                <button onClick={handelTab}>JSX</button>
                <button onClick={handelTab}>Props</button>
                <button onClick={handelTab}>State</button>
                <br />

            </div>
            <span>{tab}</span>
        </div>
    )
}