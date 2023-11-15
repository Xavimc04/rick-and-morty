import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getEpisode } from "../utils/fetch";
import Episode from "../components/Episode";

export default function SingleEpisode() {
    const params = useParams(); 
    const { episode } = params;

    const [data, setData] = useState(null); 

    const fetchEpisode = async () => {
        const response = await getEpisode(episode);
        
        if(response) setData(response)
    }

    useEffect(() => {
        fetchEpisode(); 
    }, [])

    if(!data) return; 

    return <Episode 
        episode={ data }
    />
}