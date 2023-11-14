import Character from "./Character"
import { motion } from "framer-motion"

export default function Episode({
    episode
}) {
    return <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }} 
        className="flex flex-col"
    >
        <h2 className="text-xl">{ episode.name }</h2>
        
        <small className="text-main-lime">
            { episode.air_date }
        </small>

        <section 
            className="flex overflow-x-auto space-x-8 mt-5 whitespace-nowrap rounded-md"
        >
            {
                episode.characters.map(character => { 
                    return <Character 
                        key={ character }
                        character_endpoint={ character }
                    />
                })
            }
        </section>
    </motion.div>
}