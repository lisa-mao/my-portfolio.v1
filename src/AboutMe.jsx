function AboutMe({onClose}) {
    return (
        <section className="fixed inset-45 flex items-center  z-70a text-black">
            <div

                className="bg-[#FFFFFF] border-[#A2C579] border-solid border-6 max-w-120 max-h-150 w-90 h-150 p-2 ">
                <div className="flex flex-row justify-between ">

                    <h1 id="aboutme">
                        About me
                    </h1>

                    <button onClick={onClose} className="hover:cursor-pointer">
                        <img alt="close button" src="/images/closebutton.png"/>
                    </button>
                </div>
                <div className="justify-between flex flex-col space-y-7">
                    <div className="">
                        <h2>Hello, I'm Lisa and i enjoy... </h2>
                        <p>- Front-end Web Development </p>
                        <p>Reach me at email.lisamao@gmail.com!</p>
                    </div>
                    <div>
                        <h2>Education</h2>
                        <h3>Creative Media and Game Technologies</h3>
                        <p>2024-present</p>
                    </div>
                    <div>
                        <h2>Other interests</h2>
                        <p>- Designing </p>
                        <p>- Drawing</p>
                        <p>- Any handicraft </p>
                        <p>- Games </p>
                    </div>
                    <div>
                        <h2>Language proficiency</h2>
                        <p>I have native fluency in Dutch and can speak in conversational English</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe