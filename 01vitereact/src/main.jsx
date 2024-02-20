import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <a href="https://google.com">Google</a>
        </div>
    )
}



// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://googole.com',
//         target: '_blank'
//     },
//     children: 'click me to visit Google'

// }



const anotherElement = (
    <a href="https://google.com">Visit Google</a>
)

//Global variable declare
const name = "Tiwari"
const reactElement = React.createElement(
    'a', 
    {href: 'https://googole.com', target: '_blank'},
    "click me to visit google",
    name
)

ReactDOM.createRoot(document.getElementById('root')).render(
    // <div>
    // <App/>
    // <MyApp />
 
    
    
    // </div>

    // anotherElement

    reactElement
)
