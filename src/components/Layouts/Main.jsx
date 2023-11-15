import Header from "../Header"
import { ApplicationContext } from "../../context/Application.context"
import Footer from "../Footer"
import { AnimatePresence } from "framer-motion"
import Navigator from "../Navigator"
import Inspect from "../Inspect"

export default function MainLayout({
    children,
    state, 
    dispatch
}) {
    return <div className="flex flex-col justify-between items-center w-screen overflow-y-scroll bg-black">
        <ApplicationContext.Provider
            value={{
                state,
                dispatch
            }}
        >
            <AnimatePresence>
                <Navigator />

                <Header />
                
                <Inspect />

                { children }

                <Footer />
            </AnimatePresence>
        </ApplicationContext.Provider>
    </div>
}