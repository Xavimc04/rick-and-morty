import { useEffect, useReducer } from "react"; 
import { getEpisodes } from "../utils/fetch";
import Episode from "../components/Episode"; 
import MainLayout from "../components/Layouts/Main";
import reducer, { initialState } from "../utils/reducer";

export default function Episodes() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchEpisodes = async () => {
        const response = await getEpisodes(); 

        if(response) {
            dispatch({
                type: "SET_EPISODES",
                payload: response
            });
        }
    }

    useEffect(() => {
        fetchEpisodes();
    }, []);

    return <MainLayout>
        {
            state.episodes && <div className="w-[70%] mt-20 flex flex-col gap-16">
                {
                    state.episodes.map(episode => {
                        return <Episode 
                            key={ episode.id + episode.name }
                            episode={ episode }
                        />
                    })
                }
            </div>
        }
    </MainLayout>
}