import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Input = () =>{

    const [text, setText] = useState('')
    
    const BinToDec = () =>{
        let bin = parseInt(text, 2) 
        setText(bin)
    } 

    const onSubmit = e =>{
        e.preventDefault()  
    }

    Input.prototypes = {
        value:PropTypes.number
    }
    return(
    <> 
        <h2 className="result">
                    { text === 1 || text === 0 ? "binery" : 'not binary'} 
                </h2>
        <form onSubmit={onSubmit}>
            <input 
                className='input-field' 
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                autoFocus

                placeholder="Enter text here..." 
            />
        </form>
    </>
    )
}
export default Input