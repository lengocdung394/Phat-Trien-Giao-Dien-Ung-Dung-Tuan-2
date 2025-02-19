import { useState } from 'react'
import './BaiTap04.css';
export default function BaiTap04() {
    const [tab, setTab] = useState('')
    const [content, setContent] = useState('')
    function handelTab(e) {
        switch(e.target.innerText) {
            case 'Component':
                setContent('Component content Component content  Component content  Component content ')
                break
            case 'JSX':
                setContent('JSX content JSX content JSX content JSX content JSX content ')
                break
            case 'Props':
                setContent('Props content Props content Props content Props content Props content ')
                break
            case 'State':
                setContent('State content State content State content State content State content ')
                break
        }
    }

    const arr = [
        {
            tab: 'Component',
            content: 'Component content Component content  Component content  Component content ' 
        },
        {
            tab: 'JSX',
            content: 'JSX content JSX content JSX content JSX content JSX content '
        },
        {
            tab: 'Props',
            content: 'Props content Props content Props content Props content Props content '
        },
        {
            tab: 'State',
            content: 'State content State content State content State content State content '
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
            <span>{content}</span>
        </div>
    )
}