import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <nav className="main-nav" style={{ background: "violet" }}>
                <ul style={{ listStyleType: "none", display: "flex", justifyContent: "space-between" }}>
                    <Link to="/">Home</Link>
                    <Link to="/article">Articles</Link>
                    <Link to="/about">About</Link>
                    <Link to="/articles">Articles</Link>
                    <Link to="/contact">Contact</Link>
                </ul>
            </nav>
        </div >
    );
}

export default Nav;