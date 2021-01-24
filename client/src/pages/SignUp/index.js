import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

import Header from "../../components/Header";
import {
    Card,
    CardBody,
    Title,
    SmallText,
    CardMsgs,
    Form,
    FormGroup,
    Input,
    Button,
    LoginContainer,
    MuteLink,
    BoldLink
} from './SignUp.Styles'

const SignUp = () => {

    const { createUser } = useContext(AuthContext);

    const [isError, setIsError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    let user = {}
    const history = useHistory();

    const handleEmail = e => setEmail(e.target.value);
    const handlePassword = e => setPassword(e.target.value);
    const handlePasswordConfirm = e => setPasswordConfirm(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        setIsError( '' )

        // se debe validar los datos introducidos

        let isDataOk = true;
        // fin de la vlidadcion

        if (isDataOk) {

            user = { email, password }

            const resultado = await createUser(user);

            if (resultado === "ok") {
                history.push("/clientes")
            }
            else {
                setIsError( resultado )
            }

        }         
    }

    return (
        <>
        <Header page="login"/>
        <LoginContainer>
            <Card>
                <CardMsgs>
                    <Title> Bienvenido </Title>
                    <SmallText>Gracias por volver</SmallText>
                    <SmallText>inicie sesión con sus datos</SmallText>
                    {isError && <p className='error' >{isError}</p>}
                </CardMsgs>
                <CardBody>
                    <Form onSubmit={handleSubmit} >
                        <FormGroup id="email">
                            <Input
                                value={ email }
                                type="email"
                                name="email"
                                placeholder="Usuario"
                                onChange={handleEmail} />
                        </FormGroup>   

                        <FormGroup id="password">
                            <Input
                                value={ password }
                                type="text"
                                name="password"
                                placeholder="Contraseña"
                                onChange={handlePassword} />
                        </FormGroup>   

                        <FormGroup id="passwordConfirm">
                            <Input
                                value={ passwordConfirm }
                                type="password"
                                name="password"
                                placeholder="Confirmar Contraseña"
                                onChange={handlePasswordConfirm} />
                        </FormGroup>   
                        <Button> Registrarse </Button>
                    </Form>
                </CardBody>

                <MuteLink> 
                    <BoldLink to='/signUp'> ¿Olvidastes tu contraseña? </BoldLink>
                </MuteLink>
            </Card>
        </LoginContainer>
        </>
    )
}

export default SignUp
