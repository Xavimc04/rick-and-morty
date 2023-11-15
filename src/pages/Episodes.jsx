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

    return state.episodes && <>
        {
            state.episodes.map(episode => {
                return <Episode 
                    key={ episode.id + episode.name }
                    episode={ episode }
                    scrollable={ true }
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
    </>
}