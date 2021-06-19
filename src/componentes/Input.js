import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Input = (text, setText) =>{

    const [text, setText] = useState('')
    

    const BinToDec = () =>{
        let bin = parseInt(text, 2)
        const dec = bin 
    } 

    const onSubmit = e =>{
        e.preventDefault()  
 
        setText('')    
    }

    Input.prototypes = {
        value:PropTypes.number
    }
    return(
    <> 
        
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