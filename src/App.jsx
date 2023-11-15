import { BrowserRouter, Routes, Route } from "react-router-dom";
import Episodes from  './pages/Episodes';
import Main from './pages/Main';
import MainLayout from "./components/Layouts/Main";
import { useReducer } from "react";
import reducer, { initialState } from "./utils/reducer";

export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState); 

    return (
        <BrowserRouter>
            <MainLayout state={ state } dispatch={ dispatch }>
                <Routes>
                    <Route path="/" element={ <Main /> } />
                    <Route path="/episodes" element={ <Episodes /> } />
                </Routes>
            </MainLayout>
        </BrowserRouter>
    );
}; 