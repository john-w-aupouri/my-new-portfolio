import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './App.css';
import GlobalStyle from './components/globalStyles';

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
