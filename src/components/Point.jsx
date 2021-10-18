import React from "react"

import "../styles/Point.scss"

class Point extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <article className="point">
                <div>
                    <i></i>
                    <p>[x, y]</p>
                </div>

                <button>X</button>
            </article>
        )
    }
}

export default Point