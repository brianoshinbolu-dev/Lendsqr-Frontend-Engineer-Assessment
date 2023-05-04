
import DashboardPage from './Pages/Dashboard/DashboardPage.tsx';
import LoginPage from './Pages/Login/LoginPage.tsx';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<LoginPage/>} />
          <Route path='/dashboard' element={<DashboardPage/>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
