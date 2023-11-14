import Header from "../Header"
import { ApplicationContext } from "../../context/Application.context"
import Footer from "../Footer"
import { AnimatePresence } from "framer-motion"

export default function MainLayout({
    children,
    state, 
    dispatch
}) {
    return <div className="text-white flex flex-col justify-between gap-3 h-screen items-center w-screen overflow-y-scroll bg-black">
        <ApplicationContext.Provider
            value={{
                state,
                dispatch
            }}
        >
            <AnimatePresence>
                <Header />
                
                { children}

                <Footer />
            </AnimatePresence>
        </ApplicationContext.Provider>
    </div>
}