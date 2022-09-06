import "./Navbar.css";
// import information from "./information.png";
import logo from '../assets/information.png';
const Navbar = () => {

    return (

        <header>
            <div className="header-container">
                <a href={logo} className="header-a">Logo</a>
                <nav>

                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href='#' className="header-a">Home</a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href='#' className="header-a">About</a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href='#' className="header-a">Contact</a>
                    <input type="text" placeholder="Search.." className="search"></input>
                </nav>

            </div>
        </header>


    );
};

export default Navbar;
