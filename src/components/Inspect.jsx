import { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { ApplicationContext } from "../context/Application.context";  

export default function Inspect() {
    const { state, dispatch } = useContext(ApplicationContext); 

    useEffect(() => {
        if(state.selectedCharacter) document.body.style.overflowY = "hidden";
        else document.body.style.overflowY = "scroll";
    }, [state.selectedCharacter])

    if(!state.selectedCharacter) return; 

    return <div onClick={() => {
        dispatch({
            type: 'SET_SELECTED_CHARACTER', 
            payload: null
        });
    }} className="fixed text-white top-0 right-0 bg-black/50 backdrop-blur-sm flex items-center justify-center w-screen h-screen" style={{
        zIndex: 35
    }}>
        <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5 }} 
            className="bg-gray-800 rounded-md w-[500px] p-5"
            onClick={(e) => {
                e.stopPropagation();
            }}
        >
            <section className="flex items-top gap-5">
                <img 
                    src={ state.selectedCharacter.image }
                    className="h-14 w-14 rounded-md"
                />

                <div className="flex flex-col flex-1 gap-3">
                    <h2 className="text-xl flex items-center gap-3">
                        <div className={ `h-[10px] w-[10px] ${ state.selectedCharacter.status == 'Alive' ? 'bg-green-500' : 'bg-red-500' } rounded-full` }></div>

                        { state.selectedCharacter.name }
                    </h2>

                    <small className="text-gray-300">
                        { state.selectedCharacter.species }, { state.selectedCharacter.gender }
                    </small>
                </div>

                <span className="material-symbols-outlined self-center cursor-pointer hover:opacity-50 transition-all">
                    public
                </span>
            </section>

            <section className="mt-5">
                <h2 className="text-xl text-main-lime">
                    Episodes
                </h2>

                <div className="flex gap-3 mt-3 flex-wrap">
                    {
                        state.selectedCharacter.episode.map((episode, index) => {
                            return <div 
                                key={ index }
                                className="bg-black h-[40px] w-[40px] rounded-md flex items-center justify-center cursor-pointer hover:bg-gray-800 transition-all"
                            >
                                { index }
                            </div>
                        })
                    }
                </div>
            </section>
        </motion.div> 
    </div>
}