import React from 'react'
import { Button } from '../Button'
import logo from '../../assets/logo-dio.png'
import { useNavigate } from 'react-router-dom';

import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles'

const Header = ({autenticado}) => {

    const register = useNavigate();

    const handleClickRegister = () => {
        register('/register')
    }

    const login = useNavigate();
    const handleClickLogin = () => {
        login('/login')
    }

    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Logo da dio" />
                    {autenticado ? (
                    <>
                        <BuscarInputContainer>
                        <Input placeholder="BuscarInputContainer" />
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu> Global</Menu>
                    </>
                    ) : null}
                    
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src="https://hermes.digitalinnovation.one/users/student/c5136592-311a-44f0-ba9c-28cc571bdc8f.jpg"/>
                    ) : (
                        <>
                        <MenuRight href='#'>Home</MenuRight>
                        <Button title="Entrar" onClick={handleClickLogin}/>
                        <Button title="Cadastrar" onClick={handleClickRegister} />
                        </>
                    )}

                </Row>
            </Container>
        </Wrapper>
    )
}

export {Header}