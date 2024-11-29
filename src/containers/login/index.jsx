import { Button, Container, Form, InputContainer, LeftContainer, Link, RightContainer, Title } from './styles';

export function Login() {

    return (
        <Container>
            <LeftContainer>
            <img src="/src/assets/logo.png" alt="logo-deuburger"/>
            </LeftContainer>
            <RightContainer>
                <Title>
                    Olá, seja bem vindo ao <span> Deu burger! </span> Acesse com seu <span>Login e senha.</span> 
                </Title>
                <Form>
                    <InputContainer>
                    <label>Email</label>
                    <input type="email"/>
                    </InputContainer>

                    <InputContainer>
                    <label>Senha</label>
                    <input type="Passoword"/>
                    </InputContainer>
                    <Button>Entrar</Button>
                    </Form>
                    <Link>Não possui conta? Clique aqui</Link>
            </RightContainer>

        </Container>
    )
}