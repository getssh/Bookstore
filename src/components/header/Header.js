import './Header.css';
import { Outlet, Link } from 'react-router-dom';

const Header = () => (
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/categories">Catagory</Link>
        </li>
      </ul>
    </nav>
    <Outlet />
  </div>
);

export default Header;
