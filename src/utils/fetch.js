import axios from "axios";

export async function getEpisodes(page) { 
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/episode?page=${ page }`)

        if(
            response.status == 200
            && response.data
        ) return response.data; 

        return false; 
    } catch (error) {
        return false; 
    }
}

export async function getEpisode(id) {
    if(!id) return false; 

    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/episode/${ id }`)

        if(
            response.status == 200
        ) return response.data; 

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

export async function getLocations(page) { 
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/location?page=${ page }`)

        if(
            response.status == 200
            && response.data
        ) return response.data; 

        return false; 
    } catch (error) {
        return false; 
    }
}