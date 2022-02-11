import logo from './logo.svg';
import './App.css';
import RequestAccess from './Pages/RequestAccess';
import LoginScreen from './Pages/LoginScreen';

import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route index element={<LoginScreen/>}/>
    <Route path="/RequestAccess" element={<RequestAccess/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
