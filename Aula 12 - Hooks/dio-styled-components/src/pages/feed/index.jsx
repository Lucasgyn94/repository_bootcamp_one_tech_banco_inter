
import { Card } from "../../components/Card"
import { Header } from '../../components/Header';
import { UserInfo } from '../../components/UserInfo'
import { Container, Column ,Title, TitleHighlight} from './styles';


const Feed = () => {

    return (<>
        <Header autenticado={true} />
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlight>
                    # RANKING 5 TOP DA SEMANA

                    <UserInfo nome="Lucas Ferreira" percentual={35} image='https://hermes.digitalinnovation.one/users/student/c5136592-311a-44f0-ba9c-28cc571bdc8f.jpg' />
                    <UserInfo nome="Lucas Ferreira" percentual={35} image='https://hermes.digitalinnovation.one/users/student/c5136592-311a-44f0-ba9c-28cc571bdc8f.jpg' />
                    <UserInfo nome="Lucas Ferreira" percentual={25} image='https://hermes.digitalinnovation.one/users/student/c5136592-311a-44f0-ba9c-28cc571bdc8f.jpg' />
                    <UserInfo nome="Lucas Ferreira" percentual={10} image='https://hermes.digitalinnovation.one/users/student/c5136592-311a-44f0-ba9c-28cc571bdc8f.jpg' />
                    <UserInfo nome="Lucas Ferreira" percentual={5} image='https://hermes.digitalinnovation.one/users/student/c5136592-311a-44f0-ba9c-28cc571bdc8f.jpg' />
                    <UserInfo nome="Lucas Ferreira" percentual={35} image='https://hermes.digitalinnovation.one/users/student/c5136592-311a-44f0-ba9c-28cc571bdc8f.jpg' />

                </TitleHighlight>
            </Column>
        </Container>
    </>)
}

export { Feed }