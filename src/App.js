import './stylesheets/App.scss';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {

  const [language, setLanguage] = useState("spanish");

  return (
    <div className="App">
      <Header language={language} setLanguage={setLanguage}/>
      <Home language={language} />
      <About language={language} />
      <Skills language={language} />
      <Projects language={language} />
      <Footer language={language} />
    </div>
  );
}

export default App;
