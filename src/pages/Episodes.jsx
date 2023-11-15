import { useContext, useEffect, useState } from "react"; 
import { getEpisodes } from "../utils/fetch";
import Episode from "../components/Episode";   
import Pagination from "../components/Pagination";
import { ApplicationContext } from "../context/Application.context";
import { useSearchParams } from 'react-router-dom';

export default function Episodes() {
    const { state, dispatch } = useContext(ApplicationContext);
    const [pageInfo, setPageInfo] = useState(null);  
    const [searchParams, setSearchParams] = useSearchParams();

    const fetchEpisodes = async (newPage) => {
        let currentPage = searchParams.get("page") || 1; 

        if(newPage) {
            setSearchParams({
                ["page"]: newPage
            });

            currentPage = newPage;
        }

        const response = await getEpisodes(currentPage); 

        if(response) {
            setPageInfo(response.info);

            dispatch({
                type: "SET_EPISODES",
                payload: response.results
            });
        }
    }

    useEffect(() => {
        let currentPage = searchParams.get("page"); 

        if(!currentPage || isNaN(Number(currentPage))) {
            setSearchParams({
                ["page"]: 1
            })    
        }

        fetchEpisodes();
    }, []);

    return state.episodes && <div className="w-[70%] mt-20 flex flex-col gap-16 text-white">
        {
            state.episodes.map(episode => {
                return <Episode 
                    key={ episode.id + episode.name }
                    episode={ episode }
                />
            })
        }

        {
            pageInfo && <Pagination 
                fetch={ fetchEpisodes }
                prev={ pageInfo.prev }
                next={ pageInfo.next }
                page={ searchParams.get("page") }
            />
        }
    </div>
}