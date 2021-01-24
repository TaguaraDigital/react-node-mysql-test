import React, {useContext} from 'react';
import Header from '../../components/Header'

import { AuthContext } from '../../contexts/AuthContext';

const Clientes = () => {

    const { currentUser } = useContext(AuthContext);

    return (
        <div>
            <Header page="clientes" />
            <h1>Estamos en el Home Page de los clientes y para llegar aqui se debe autenticado</h1>
            <h2>Welcome {currentUser.email} </h2>
        </div>
    )
}

export default Clientes
