import React,{useRef} from 'react'
import "./Qustions.scss"
import Title from '../Title/Title'

const Qustions = () => {
    const inputcon = useRef(null)
    const activeInput = ()=>{
        inputcon.current.style.outline = "2px solid #fe9d0c53";
    }
    return (
        <div className='qustions container' id='contact'>
            <Title heading={"Have Question In Mind ?"} />
            <div className="input-box" ref={inputcon}>
                <input type="text" placeholder='Enter Your Email Address' name="" id="" onFocus={activeInput} onBlur={()=>inputcon.current.style.outline = "none"} />
                <button>Send</button>
            </div>
        </div>
    )
}

export default Qustions
