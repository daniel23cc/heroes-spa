import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../../auth"
import { Navbar } from "../../ui"
import { DCPage, MarvelPage, HeroPage, SearchPage } from "../pages"


export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="menu">
                <Routes>
                    <Route path="marvel" element={<MarvelPage />} />
                    <Route path="dc" element={<DCPage />} />
                    <Route path="login" element={<LoginPage />} />

                    <Route path="search" element={<SearchPage/>} />
                    <Route path="hero/:id" element={<HeroPage/>} />
                    <Route path="/" element={<Navigate to="/marvel" />} />
                </Routes>
            </div>
        </>
    )
}
