import React from "react";


const Darkmode = () => {
  const [theme, setTheme] = useState("light-theme");
  const toggleTheme = () => {
    theme === "dark-theme" ? setTheme("light-theme") : setTheme("dark-theme");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <label class="switch">
      <input className="toogl" type="checkbox" />
      <span class="slider"></span>
    </label>
  );
  

};

export default Darkmode

