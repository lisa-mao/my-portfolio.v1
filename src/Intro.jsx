import {GiBowTieRibbon} from "react-icons/gi";
import {GiBookshelf} from "react-icons/gi";
import {GiChatBubble} from "react-icons/gi";
import {GiClick} from "react-icons/gi";

function Intro() {
    return (
        <section className="bg-[#FFFFDD] border-[#A2C579] border-solid border-6 w-150 h-100 justify-between  ">
            <div className="bg-[#FFFFFF] border-[#A2C579] border-solid border-6 max-w-40 max-h-100 flex items-center  ">
                <h1 className="flex justify-center items-center">
                    Hi, I'm Lisa
                </h1>
            </div>
            <div className="flex justify-between flex-row  ">
                <div className="flex justify-between flex-col items-center ">
                    <label id="abtme">About me </label>
                    <button className="hover:cursor-pointer" id="abtme" aria-label="About me">
                        <GiBowTieRibbon className="bg-[#D2DE32] size-10"/>
                    </button>
                </div>

                <div className="flex justify-between flex-row items-center  ">
                    <label id="myprojects">My Projects </label>
                    <button className="hover:cursor-pointer" id="myprojects" aria-label="My Projects">
                        <GiBookshelf className="bg-[#D2DE32] size-10"/>
                    </button>
                </div>

                <div className="flex justify-between flex-row items-center  ">
                    <label id="contact">Contact </label>
                    <button className="hover:cursor-pointer" id="contact" aria-label="Contact">
                        <GiChatBubble className="bg-[#D2DE32] size-10"/>
                    </button>
                </div>

                <div className="flex justify-between flex-row items-center  ">
                    <label id="spawn">Spawn Animal </label>
                    <button className="hover:cursor-pointer" id="spawn" aria-label="Spawn animal">
                        <GiClick className="bg-[#D2DE32] size-10"/>
                    </button>
                </div>
            </div>

        </section>

    );
}

export default Intro