import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css';
import { ThemeContext } from './Pages/ThemeContext.jsx';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from './Pages/CartContext.jsx';
import { UserContext } from './Pages/UserContext.jsx';

function App() {
  const { theme, settheme } = useContext(ThemeContext);

  let {cart} = useContext(CartContext)

  const toggleTheme = () => {
    settheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`app-root ${theme}`}>
      <nav className="main">
        <h2 className="heading">FakeStore</h2>

        <div className="short">
           
           
           <Link to="/cart">
            <ShoppingCartIcon />{cart.length}
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

      {/* outlet renders page content */}
      <Outlet />
    </div>
  );
}

export default App;
