import { createContext, useEffect, useState } from "react";
export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, settheme] = useState("light");

  useEffect(() => {
    document.body.className = "";   
    document.body.classList.add(theme); 
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, settheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
