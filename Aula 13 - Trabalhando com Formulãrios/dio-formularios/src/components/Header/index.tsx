import React from 'react'
import { Button } from '../Button'
import logo from '../../assets/logo-dio.png'
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

import { IHeader } from './types'


const Header = ({autenticado} : IHeader) => {
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
                        <MenuRight href='#'>Entrar</MenuRight>
                        <Button title="Entrar"/>
                        <Button title="Cadastrar"/>
                        </>
                    )}

                </Row>
            </Container>
        </Wrapper>
    )
}

export {Header}