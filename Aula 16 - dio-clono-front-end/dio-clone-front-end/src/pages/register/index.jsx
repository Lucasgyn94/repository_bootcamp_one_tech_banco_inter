
import {MdEmail, MdLock} from 'react-icons/md'

import { useNavigate } from 'react-router-dom'

import { Button } from "../../components/Button";

import { Header } from "../../components/Header"

import { Input } from "../../components/Input"


import { BsFillPersonFill } from "react-icons/bs"

import {Column, Container, FazerLogin ,ExisteAccount, Row, SubtitleLogin, Title, TitleLogin, Wrapper, Policy} from "./styles"

const Register = () => {

    const navigate = useNavigate();

    const handleClickRegister = () => {
        navigate('/login')
    }

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                A plataforma para você aprender com experts, dominar as principais tecnologias
                e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Comece agora grátis</TitleLogin>
                    <SubtitleLogin>Crie sua conta e make the change</SubtitleLogin>
                    <form>
                        <Input placeholder="E-mail" leftIcon={<BsFillPersonFill/>}/>
                        <Input placeholder="E-mail" leftIcon={<MdEmail/>}/>
                        <Input placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
                        <Button title="Criar minha conta" variant="secondary" onClick={handleClickRegister} type="button"/>
                        <br /><br/>
                        <Policy>Ao clicar em "criar minha conta grátis",
                            declaro que aceito as Políticas de
                            Privacidade e os Termos de Uso da Dio.
                        </Policy>
                    </form>
                    <Row>
                        <ExisteAccount>Já tenho conta. </ExisteAccount>
                        <FazerLogin> Fazer login</FazerLogin>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Register }