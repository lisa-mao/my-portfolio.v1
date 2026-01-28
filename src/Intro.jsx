import {GiBowTieRibbon} from "react-icons/gi";
import {GiBookshelf} from "react-icons/gi";
import {GiChatBubble} from "react-icons/gi";
import {GiClick} from "react-icons/gi";

function Intro({onOpen}) {
    return (
        <section
            className="bg-[#FFFFDD] border-[#A2C579] border-solid rounded-2xl border-6 w-150 h-100 space-y-10 flex justify-around flex-col">

            <div className="flex items-center justify-center ">
                <div
                    className="bg-[#FFFFFF] border-[#A2C579] border-solid rounded-s border-6 max-w-120 max-h-120 w-120 h-45 flex flex-col justify-around">
                    <span className="flex items-center justify-center text-5xl ">
                        Hi I'm Lisa
                    </span>
                    <span className="flex items-center justify-center ">Front-end developer</span>
                </div>
            </div>

            <div className=" flex justify-around" >
                <div className="flex flex-row space-x-5" >
                    <div className=" flex flex-col items-center space-y-5">
                        <label id="abtme">About me </label>
                        <button className="hover:cursor-pointer" id="abtme" aria-label="About me" onClick={() =>
                        onOpen('aboutMe')}>
                            <GiBowTieRibbon className="bg-[#D2DE32] size-10"/>
                        </button>
                    </div>

                    <div className="flex flex-col items-center space-y-5  ">
                        <label id="myprojects">My Projects </label>
                        <button className="hover:cursor-pointer" id="myprojects" aria-label="My Projects" onClick={() =>
                            onOpen('myProjects')}>
                            <GiBookshelf className="bg-[#D2DE32] size-10"/>
                        </button>
                    </div>

                    <div className="flex flex-col items-center space-y-5  ">
                        <label id="contact">Contact </label>
                        <button className="hover:cursor-pointer" id="contact" aria-label="Contact" onClick={() =>
                            onOpen('contact')}>
                            <GiChatBubble className="bg-[#D2DE32] size-10"/>
                        </button>
                    </div>

                    <div className="flex flex-col items-center space-y-5  ">
                        <label className="" id="spawn">Spawn Animal </label>
                        <button className="hover:cursor-pointer" id="spawn" aria-label="Spawn animal" >
                            <GiClick className="bg-[#D2DE32] size-10"/>
                        </button>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Intro