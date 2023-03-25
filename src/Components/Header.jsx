import { Link } from "react-router-dom";
import Logo from "../Assets/Canis_Logo.jfif";
import "./Header.css";

function Header() {
    return (
        <header className='header__container'>
            <figure className='header__figure'>
                <img src={Logo} alt='CanisLab Logo' />
                <figcaption className='header__figcaption text-xs font-mono text-center'>
                    Educación <br /> Canina
                </figcaption>
            </figure>
            <nav className='header__menu'>
                <ul className='header__ul'>
                    <li>
                        <Link to='/'> Home</Link>
                    </li>
                    <li>
                        <Link to='/Educacion'> Educacion</Link>
                    </li>
                    <li>
                        <Link to='/Adiestramiento'> Adiestramiento</Link>
                    </li>
                    <li>
                        <Link to='/Alimentacion'> Alimentacion</Link>
                    </li>
                    <li>
                        <Link to='/Accesorios'> Accesorios</Link>
                    </li>
                </ul>
            </nav>
            <div className='header__book'>
                <button>Book Now</button>
            </div>
        </header>
    );
}

export default Header;
