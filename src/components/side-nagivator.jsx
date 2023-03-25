import React from "react"
import { Outlet, Link } from "react-router-dom";

const SideNavigator = () => {
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default SideNavigator
