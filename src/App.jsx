import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Navigation from "./navigation.jsx";
import Intro from "./Intro.jsx";
import MyProjects from "./MyProjects.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";


function App() {

    return (
        <BrowserRouter>
            <main className="backgroundDay bg-cover bg-no-repeat h-screen w-screen">
                <img src="images/sun.png" alt="about me" className="size-40 object-top-right hover:cursor-pointer
                 scale-50"/>
                <section className="  flex justify-center items-center ">


                    {/*<Navigation/>*/}
                    <Intro/>
                    {/*<MyProjects/>*/}
                    {/*<Contact/>*/}

            </section>
            {/*<Footer/>*/}
        </main>
</BrowserRouter>
)
}

export default App
