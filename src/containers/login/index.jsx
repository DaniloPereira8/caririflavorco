import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { toast } from 'react-toastify';

import Logo from '../../assets/Logo.svg';
import { Container, Form, InputContainer, LeftContainer, RightContainer, Title } from './styles';
import {Button} from '../../components/button';
import {api} from '../../services/api';

export function Login() {

    const schema = yup.object({
        email: yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
        password: yup.string().min(6, 'A senha deve conter no mínimo 6 digitos').required('Digite uma senha'),
      }).required();

      const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });
      const onSubmit = async (data) => {
       const response = await toast.promise(
        api.post('/sessions', {
            email: data.email,
            password: data.password,
        }),
        {
            pending: 'Verificando seus dados',
            success: 'Seja bem-vindo(a) 👌',
            error: 'Email ou senha Invalidos 🤯'
        },
       );
       
        console.log(response)
      }


    return (
        <Container>
            <LeftContainer>
            <img src={Logo} alt="logo-deuburger" />
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
                    <p>{errors?.email?.message}</p>
                    </InputContainer>

                    <InputContainer>
                    <label>Senha</label>
                    <input type="Passoword" {...register('password')}/>
                    <p>{errors?.password?.message}</p>
                    </InputContainer>
                    <Button type="submit">Entrar</Button>
                    </Form>
                    <p>Não possui conta? <a>Clique aqui.</a></p>
            </RightContainer>

        </Container>
    )
}