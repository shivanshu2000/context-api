import React from 'react';
import { useContext } from 'react';
import { DarkModeContext } from '../context';

const NestedHome = () => {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  return (
    <div
      style={{
        border: `1px solid ${darkMode ? '#fff' : '#000'}`,
        height: '200px',
        marginTop: '50px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <p>A nested component to the home component</p>
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
        Toggle 2
      </p>
    </div>
  );
};

export default NestedHome;
