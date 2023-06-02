import { Content } from "./Content"
import { Navbar } from "./NavBar"

export const App = () => {
    return (
        <div className="font-sans">
            <Navbar/>
            <Content/>
        </div>
    )
}