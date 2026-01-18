import React from 'react'

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  // TODO: Implement dark mode toggle logic
  
  // This function handles the button click
  const handleClick = () => {
    if (toggleDarkMode) {
      toggleDarkMode();
    }
  };

  return (
    <button onClick={handleClick}>
      {darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
    </button>
  )
}

export default DarkModeToggle