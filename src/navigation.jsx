import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

function Navigation() {

    return (
        <>
            <nav className="bg-[#ecf39e] text-black" >
                <Link to="#">Home</Link> |{" "}
                <Link to="#my-projects">My Projects</Link> |{" "}
                <Link to="#contact">Contact</Link>
                <Link to="#footer">Footer</Link>
            </nav>
        </>
    )
}

export default Navigation