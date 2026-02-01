import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ThemeContext } from '../context/ThemeContext.jsx';
import { CartContext } from '../context/CartContext.jsx';

function Navbar() {
  const { theme, settheme } = useContext(ThemeContext);
  const { cart } = useContext(CartContext);

  const toggleTheme = () => {
    settheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <nav className="main">
      <h2 className="heading">FakeStore</h2>

      <div className="short">
        <Link to="/cart">
          <ShoppingCartIcon />
          {cart.length}
        </Link>

        <Link to="/login">Login</Link>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/product">Products</Link>
        <Link to="/register"> Register</Link>

        {/* Toggle icon */}
        {theme === 'light' ? (
          <ToggleOffIcon onClick={toggleTheme} style={{ cursor: 'pointer' }} />
        ) : (
          <ToggleOnIcon onClick={toggleTheme} style={{ cursor: 'pointer' }} />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
