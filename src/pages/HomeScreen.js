import React from 'react';
import { useContext } from 'react';
import { DarkModeContext } from '../context';
import NestedHome from './NestedHome';

const HomeScreen = (props) => {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  return (
    <div
      style={{
        paddingTop: '20px',
        minHeight: '100vh',
        backgroundColor: darkMode ? '#000' : '#fff',
        color: darkMode ? '#fff' : '#000',
      }}
    >
      <h4>Current mode: {darkMode ? 'Dark' : 'Light'}</h4>
      <div style={{marginTop:'30px'}}>
      <h1>This is a Home Screen.</h1>
      <h3>{props.subtitle}</h3>
      </div>

      <p
        onClick={() => setDarkMode(!darkMode)}
        style={{
          cursor: 'pointer',
          margin: '20px auto',
          border: `1px solid ${darkMode ? '#fff' : '#000'}`,
          // color: darkMode ? '#000' : '#fff',
          borderRadius: '7px',
          padding: '9px 5px',
          width: '150px',
        }}
      >
        Toggle dark mode
      </p>
      <NestedHome />
    </div>
  );
};

export default HomeScreen;
