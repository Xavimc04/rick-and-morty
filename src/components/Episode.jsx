import Character from "./Character"
import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"

export default function Episode({
    episode, 
    scrollable
}) {
    return <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }} 
        className="flex flex-col"
    >  
        <NavLink  
            to={ `/episodes/${ episode.id }` } 
            className='text-xl cursor-pointer hover:opacity-70 transition-all'
        >
            { episode.name }
        </NavLink>
        
        <small className="text-main-lime">
            { episode.air_date }
        </small>

        <section 
            className={ `flex ${ scrollable ? 'overflow-x-auto space-x-8' : 'flex-wrap gap-5' } mt-5 whitespace-nowrap rounded-md` }
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