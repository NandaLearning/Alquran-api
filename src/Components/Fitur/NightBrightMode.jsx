import { useState, useEffect } from 'react';

const NightBrightMode = () => {
  // Mengambil mode dari local storage saat komponen dimuat
  const storedMode = localStorage.getItem('mode');
  const initialMode = storedMode === 'dark';
  const [mode, setMode] = useState(initialMode);

  useEffect(() => {
    if (storedMode) {
      setMode(storedMode === 'dark');
    }
  }, []); 

  const handleToggle = () => {
    const newMode = !mode;
    setMode(newMode);
    localStorage.setItem('mode', newMode ? 'dark' : 'light');
  };

  return (
    <input
      type="checkbox"
      value="synthwave"
      className={`toggle theme-controller bg-amber-300 border-sky-400 [--tglbg:theme(colors.sky.500)] checked:bg-blue-300 checked:border-blue-800 checked:[--tglbg:theme(colors.blue.900)] row-start-1 col-start-1 col-span-2 ${mode ? 'night-mode' : 'light-mode'}`}
      checked={mode}
      onChange={handleToggle}
    />
  );
};

export default NightBrightMode;
