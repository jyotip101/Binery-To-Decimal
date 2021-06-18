import React from 'react'

import Input from './Input'

const Home = () =>{
    return(
        <div className="Home-contant">
            <div className="home-display">
                <h1 className="header">Binary To Decimal</h1>
                <Input />
                
            </div>
            <footer> 
                <a href="">
                    Git soure code here <i className="fab fa-github"> </i> 
                </a>
            </footer>
        </div>
    )
}

export default Home