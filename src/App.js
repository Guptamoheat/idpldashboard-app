import './App.css';
import { MatchPage } from './pages/MatchPage';

import { TeamPage } from './pages/TeamPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
          <Route path="/teams/:teamName" element = {<TeamPage></TeamPage>}/>
          <Route path="/teams/:teamName/matches/:year" element = {<MatchPage></MatchPage>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
