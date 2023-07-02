const Nav = () => {
    return (
        <div>
            <nav className="main-nav" style={{ background: "violet" }}>
                <ul style={{ listStyleType: "none", display: "flex", justifyContent: "space-between" }}>
                    <li>Home</li>
                    <li>Articles</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div >
    );
}

export default Nav;