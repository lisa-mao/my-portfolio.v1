function AboutMe({onClose}) {
    return (
        <section className="fixed inset-45 flex items-center  z-70a text-black">
            <div className="bg-[#FFFFFF] border-[#A2C579] border-solid border-6 max-w-120 max-h-150 w-90 h-150 flex flex-col">


            <h1 id="aboutme">
               About me
            </h1>
            <button onClick={onClose} className="hover:cursor-pointer">
                <img alt="close button" src="/images/closebutton.png"/>
            </button>
            </div>
        </section>
    );
}

export default AboutMe