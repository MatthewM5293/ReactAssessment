import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">View All Products</Link>
                </li>
                <li>
                    <Link to="/create">Create Product</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
