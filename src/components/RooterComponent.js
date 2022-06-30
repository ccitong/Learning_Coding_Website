import "./RooterComponent.css"
import {Link} from "react-router-dom"

const RooterComponent = () => {
    return(
        <nav className="RooterComponent">
            <ul>
                <li><Link to = "/" class="nav-link">Home</Link></li>
                <li><Link to = "/schedule" class="nav-link">Schedule of Classes</Link></li>
            </ul>
        </nav>
    )
}
export default RooterComponent;