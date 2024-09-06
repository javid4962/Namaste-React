import React from 'react'
import ReactDOM from 'react-dom/client'

const Header = function (){
    return(
        <h1>Heading 1</h1>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Header />)