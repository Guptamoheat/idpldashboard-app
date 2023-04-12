import './App.scss';
import { MatchPage } from './pages/MatchPage';

import { TeamPage } from './pages/TeamPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
function App() {

  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
          <Route path="/teams/:teamName" element = {<TeamPage></TeamPage>}/>
          <Route path="/teams/:teamName/matches/:year" element = {<MatchPage></MatchPage>}/>
          <Route path="/team" element = {<HomePage></HomePage>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
