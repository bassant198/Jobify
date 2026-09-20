import { Link, NavLink } from "react-router";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">

                <Link className="logo" to="/">
                    Jobify
                </Link>

                <div className="nav-links">
                    <NavLink
                        to="/jobs"
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                    >
                        Jobs
                    </NavLink>

                    <NavLink
                        to="/saved"
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                    >
                        Saved Jobs
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                    >
                        About
                    </NavLink>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;