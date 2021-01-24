// import PrivateRoute from './components/PrivateRoute'; 
import { GlobalStyle } from "./globalStyles";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AuthContextProvider from './contexts/AuthContext';

import Home from "./pages";
import Login from "./pages/Login";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <GlobalStyle />
        <Route exact path='/' component={ Login } />
        <Route exact path='/clientes' component={ Home } />
      </Router>
    </AuthContextProvider>
  );
}

export default App;
