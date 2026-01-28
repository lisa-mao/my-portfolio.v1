function MyProjects({onClose}) {
    return (
        <section className="fixed inset-0 flex justify-center items-center z-50a text-black">
            <div
                className="bg-[#FFFFFF] border-[#A2C579] border-solid border-6 max-w-120 max-h-150 w-120 h-70">
                <div className="flex flex-row ">
                    <h1 id="my-projects">
                    My Projects
                </h1>
                    <button onClick={onClose} className="hover:cursor-pointer">
                        <img alt="close button" src="/images/closebutton.png"/>
                    </button>
                </div>
                <p>Soon to come</p>
            </div>
        </section>
    );
}

export default MyProjects