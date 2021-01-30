import '../stylesheets/header.scss';

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <ul className="menu">
                    <li className="menu-item"><a href="#">Home</a></li>
                    <li className="menu-item"><a href="#">About</a></li>
                    <li className="menu-item"><a href="#">Portfolio</a></li>
                    <li className="menu-item"><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;