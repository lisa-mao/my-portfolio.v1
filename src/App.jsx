import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Navigation from "./navigation.jsx";
import Intro from "./Intro.jsx";
import MyProjects from "./MyProjects.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";


function App() {

    return (
        <>
            <BrowserRouter>
                <Navigation/>
                <Intro/>
                <MyProjects/>
                <Contact/>
                <Footer/>
            </BrowserRouter>
        </>
    )
}

export default App
