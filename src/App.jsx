import {BrowserRouter, Routes, Route, Link, HashRouter} from 'react-router-dom';
import Intro from "./Intro.jsx";
import AboutMe from "./AboutMe.jsx";
import MyProjects from "./MyProjects.jsx";
import Contact from "./Contact.jsx";
import {useState} from "react";


function App() {
    const [activeModal, setActiveModal] = useState(null)

    const closeModal = () => setActiveModal(null)

    return (
        <HashRouter>
            <main className="backgroundDay bg-cover bg-no-repeat h-screen w-screen">
                <img src="/images/sun.png" alt="about me" className="size-40 object-top-right hover:cursor-pointer
                 scale-50"/>
                <section className="  flex justify-center items-center ">


                    <div className="relative">
                        <Intro onOpen={setActiveModal}/>

                        {activeModal === 'aboutMe' && (
                            <AboutMe onClose={(closeModal)}/>
                        )}

                        {activeModal === 'myProjects' && (
                            <MyProjects onClose={(closeModal)}/>
                        )}

                        {activeModal === 'contact' && (
                            <Contact onClose={(closeModal)}/>
                        )}


                    </div>


                </section>
                {/*<Footer/>*/}
            </main>
        </HashRouter>
    )
}

export default App
