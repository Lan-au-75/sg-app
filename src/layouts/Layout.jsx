import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Home from '../pages/Home'

function Layout() {
    return (
        <>
            <Header></Header>
            {location.pathname === '/' ? <Home /> : <Outlet />}
            <Footer></Footer>
        </>
    )
}

export default Layout
