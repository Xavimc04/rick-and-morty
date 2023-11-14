import { useEffect, useState } from "react"
import { getCharacter } from "../utils/fetch";
import { motion } from "framer-motion";

export default function Character({
    character_endpoint
}) {
    const [character, setCharacter] = useState({}); 

    const fetchCharacter = async () => { 
        const response = await getCharacter(character_endpoint); 
        
        if(response) setCharacter(response); 
    }

    useEffect(() => {
        fetchCharacter() 
    }, [character_endpoint])

    if(!character) return <div>
        Loading...
    </div>; 

    return <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-shrink-0 relative group cursor-pointer select-none"
        draggable="false"
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
            className="absolute hidden top-0 w-full h-full group-hover:flex group-hover:bg-black/70 items-center justify-center transition-all"
        >
            { character.name }
        </p>
    </motion.div>
}