import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Stepper } from './steps/stepper';
import {Contact} from './steps/contact';
import {Education} from './steps/education';
import {About} from './steps/about';
import {Confirm} from './steps/confirm';

import { AppProvider } from './appState/State';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {

  return (
    <AppProvider>
      <div className="container">
      <Router>
        <Stepper />
        <Routes>
          <Route path="/" element={<Contact />} />
          <Route path="/education" element={<Education />} />
          <Route path="/about" element={<About />} />
          <Route path="/confirm" element={<Confirm />} />
        </Routes>
      </Router>
      </div>
    </AppProvider>
  )
}

export default App
