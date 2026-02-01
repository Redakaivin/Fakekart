import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import { ThemeContext } from './context/ThemeContext.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app-root ${theme}`}>
      <Navbar />

      {/* outlet renders page content */}
      <Outlet />
    </div>
  );
}

export default App;
