import { Outlet } from "react-router-dom"
import './MainContainer.css'
const MainContainer = ()=>{
    return <>
    <main>
        <Outlet></Outlet>
    </main>
    </>
}
export default MainContainer