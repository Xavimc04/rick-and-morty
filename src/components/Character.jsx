import { useEffect, useState } from "react"
import { getCharacter } from "../utils/fetch";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ApplicationContext } from "../context/Application.context";

export default function Character({
    character_endpoint, 
    single_character
}) {
    const { dispatch } = useContext(ApplicationContext);
    const [character, setCharacter] = useState({}); 

    const fetchCharacter = async () => { 
        const response = await getCharacter(character_endpoint); 
        
        if(response) setCharacter(response); 
    }

    useEffect(() => {
        if(character_endpoint) fetchCharacter();
        
        if(single_character) setCharacter(single_character)
    }, [character_endpoint, single_character])

    if(!character) return <div>
        Loading...
    </div>; 

    return <>
        <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0 relative group cursor-pointer select-none"
            draggable="false"
            onClick={() => dispatch({
                type: 'SET_SELECTED_CHARACTER',
                payload: character
            
            })}
        >
            <img
                className="h-[200px] w-[200px] rounded-md"
                src={ character.image } 
                alt={ character.name }
            />

            <p
                style={{
                    zIndex: 30
                }}
                className="absolute hidden text-ellipsis truncate top-0 w-full h-full group-hover:flex group-hover:bg-black/70 items-center justify-center transition-all"
            >
                { character.name }
            </p>
        </motion.div>
    </>
}