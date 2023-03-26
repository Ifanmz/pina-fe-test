import React from "react"
import { Link } from "react-router-dom";

const Navigator = () => {
    return(
        <>
            <div>
                <ul style={{justifyContent:'space-between'}}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navigator
