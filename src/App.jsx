import { BrowserRouter, Routes, Route } from "react-router-dom";
import Episodes from  './pages/Episodes'; 
import MainLayout from "./components/Layouts/Main";
import { useReducer } from "react";
import reducer, { initialState } from "./utils/reducer";
import SingleEpisode from "./pages/SingleEpisode";
import Characters from "./pages/Characters";

export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState); 

    return (
        <BrowserRouter>
            <MainLayout state={ state } dispatch={ dispatch }>
                <Routes>
                    <Route path="/" element={ <Characters /> } />
                    <Route path="/episodes" element={ <Episodes /> } />
                    <Route path="/episodes/:episode" element={ <SingleEpisode /> } />
                </Routes>
            </MainLayout>
        </BrowserRouter>
    );
}; 