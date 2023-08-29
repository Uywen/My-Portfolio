
import './App.css';


import { Route,Routes } from 'react-router-dom';

import { Home } from './components/Home';
import { Heading } from './components/Heading';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { TechStack } from './components/TechStack';

function App() {
  return (
    <div>
      <Heading />
      <Routes>
        <Route path='/' element={[<Home />,<TechStack/>]} />
        <Route path='/about' element={<About />}/>
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
