import './App.css';
import { DarkModeProvider } from './context';
import HomeScreen from './pages/HomeScreen';

const App = () => {
  return (
    <DarkModeProvider>
      <div className="App">
        <HomeScreen subtitle="Prop passed from App.js" />
      </div>
    </DarkModeProvider>
  );
};

export default App;
