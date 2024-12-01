import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


import { Container, Form, InputContainer, LeftContainer, RightContainer, Title } from './styles';
import {Button} from '../../components/button'

export function Login() {

    const schema = yup.object({
        email: yup.string().email().required(),
        password: yup.string().min(6).required(),
      }).required();

      const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });
      const onSubmit = data => console.log(data);

    return (
        <Container>
            <LeftContainer>
            <img src="/src/assets/logo.svg" alt="logo-deuburger"/>
            </LeftContainer>
            <RightContainer>
                <Title>
                    Olá, seja bem vindo ao <span> Deu burger! </span>
                    <br/>
                     Acesse com seu <span>Login e senha.</span> 
                </Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                    <label>Email</label>
                    <input type="email" {...register('email')}/>
                    </InputContainer>

                    <InputContainer>
                    <label>Senha</label>
                    <input type="Passoword" {...register('password')}/>
                    </InputContainer>
                    <Button type="submit">Entrar</Button>
                    </Form>
                    <p>Não possui conta? <a>Clique aqui.</a></p>
            </RightContainer>

        </Container>
    )
}