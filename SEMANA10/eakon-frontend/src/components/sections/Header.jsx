import { Link } from 'react-router-dom';
import logoEAKON from '../../assets/img/logo-eakon.webp';

const Header = () => {

  const header = document.querySelector('select');
  

  return (
    <header className="header">
      <nav className="nav">
        <div className="container f-elements f-elements--header">
          <Link to="/">
            <img src={logoEAKON} alt="Logo de EAKON" className="nav__logo" width="32" height="32" />
          </Link>
          
          <div className="modal modal--header">
            <ul className="list list--header">
              <li>
                <Link to="/productos" className="list__link">Productos</Link>
              </li>
              <li>
                <Link to="/servicios" className="list__link">Servicios</Link>
              </li>
              <li>
                <Link to="/nosotros" className="list__link">Nosotros</Link>
              </li>
              <li>
                <Link to="/contacto" className="list__link">Contacto</Link>
              </li>
            </ul>
          </div>
          <div className="f-elements f-elements--center">
            <select>
              <option value="value1">🌑</option>
              <option value="value2">☀</option>
              <option value="value3">💻</option>
            </select>
            <button className="icon">
              🍔
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;