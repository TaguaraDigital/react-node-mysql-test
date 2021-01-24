import PrivateRoute from './components/PrivateRoute'; 
import { GlobalStyle } from "./globalStyles";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AuthContextProvider from './contexts/AuthContext';

import Home from "./pages";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Clientes from "./pages/Clientes";
import Recibos from "./pages/Recibos";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <GlobalStyle />
        <Route exact path='/' component={ Home } />
        <Route exact path='/login' component={ Login } />
        <Route exact path='/signup' component={ SignUp } />
        <PrivateRoute exact path='/clientes' component={ Clientes } />
        <PrivateRoute exact path='/recibos' component={ Recibos } />
      </Router>
    </AuthContextProvider>
  );
}

export default App;
