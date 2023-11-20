import { useEffect, useState } from "react"
import { getCharacter } from "../utils/fetch";
import Character from "../components/Character";
import { useSearchParams } from "react-router-dom";
import Pagination from "../components/Pagination";

export default function Characters() {
    const [data, setData] = useState([]); 
    const [searchParams, setSearchParams] = useSearchParams();
    const [search, setSearch] = useState("");

    const fetchCharacters = async (newPage) => {
        let currentPage = searchParams.get("page") || 1;

        if(newPage) {
            currentPage = newPage > 0 ? newPage : 1;
        }
    
        const response = await getCharacter(`https://rickandmortyapi.com/api/character?page=${ currentPage }${
            search && search.length > 0 ? '&name=' + search : ''
        }`)

        if(response) setData(response); 
    }

    // @ onSearchUpdate
    useEffect(() => {
        if(search.length > 0) {
            setSearchParams({ page: 1, name: search });
        } else {
            setSearchParams({ page: 1 });
        }

        fetchCharacters();
    }, [search])

    // @ onLoad
    useEffect(() => {
        if(searchParams.get("name") && searchParams.get("name").length > 0) {
            setSearch(searchParams.get("name"));
        }

        fetchCharacters(); 
    }, [])

    if(!data || !data.results) return; 

    return <div className="flex flex-wrap gap-5 mt-5 whitespace-nowrap rounded-md">
        <div className="w-full flex items-center rounded-md gap-3 mb-3">
            <span className="material-symbols-outlined">
                search                
            </span>

            <input 
                type="text"
                placeholder="Search by character name..."
                className="flex-1 bg-transparent outline-none text-white"
                value={ search }
                onInput={(e) => setSearch(e.target.value)}
            />
        </div>

        {
            data.results.map(character => {
                return <Character 
                    key={ character.id }
                    single_character={ character }
                />
            })
        }

        {
            data.info && <Pagination 
                fetch={ fetchCharacters }
                prev={ data.info.prev }
                next={ data.info.next }
                page={ searchParams.get("page") }
            />
        }
    </div>
}