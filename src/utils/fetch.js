import axios from "axios";

export async function getEpisodes() {
    try {
        const response = await axios.get('https://rickandmortyapi.com/api/episode')

        if(
            response.status == 200
            && response.data.results
        ) return response.data.results; 

        return false; 
    } catch (error) {
        return false; 
    }
}

export async function getCharacter(endpoint) {
    if(!endpoint) return false; 

    try {
        const response = await axios.get(endpoint)

        if(
            response.status == 200
        ) return response.data; 

        return false; 
    } catch (error) {
        return false; 
    }
}