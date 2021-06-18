import React, { useState } from 'react'

const Input = () =>{

    const [text, setText] = useState('')

    const onSubmit = e =>{
        e.preventDefault()  
 
        setText('')      
    }
    return(
    <> 
        <h2 className="result">
            { !text? 'Decimal': text}
        </h2>
        <form onSubmit={onSubmit}>
            <input 
                className='input-field' 
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                placeholder="Enter text here..." 
            />
        </form>
    </>
    )
}
export default Input