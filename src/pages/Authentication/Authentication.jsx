import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { AuthContainer, Section } from "./AuthenticationStyle";
import { useForm } from "react-hook-form";
import { signinSchema } from "../../schemas/signinSchema";
import { ErrorSpan } from "../../components/Navbar/NavbarStyled";
import { signin, signup } from "../../services/userServices";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { signupSchema } from "../../schemas/signupSchema";

export function Authentication(){
    const {
        register: registerSignin,
        handleSubmit: handleSubmitSignin,
        formState: {errors: errorsSignin},
    } = useForm({ resolver: zodResolver(signinSchema)});

    const {
        register: registerSignup,
        handleSubmit: handleSubmitSignup,
        formState: {errors: errorsSignup},
    } = useForm({ resolver: zodResolver(signupSchema)});

    async function inHandlesubmit(data){
        try{
            const response = await signin(data);
            Cookies.set("token", response.data, { expires:1 })
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    const navigate = useNavigate();

    async function upHandleSubmit(data){
        try{
            const response = await signup(data);
            Cookies.set("token", response.data, { expires:1 })
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }



    return(
       <AuthContainer>
            <Section type="signin">
                <h2>Entrar</h2>
            <form onSubmit={handleSubmitSignin(inHandlesubmit)}> 
            <Input 
                type="email"
                placeholder="E-mail"
                name="email"
                register={registerSignin}
            />
            {errorsSignin.email && (
                <ErrorSpan>{errorsSignin.email.message}</ErrorSpan>
            )}
            <Input
                type="password"
                placeholder="Senha"
                name="password"
            />
            <Button type="submit" text="Entrar"/>
            </form>
            </Section>
            <Section type="signup">
                <h2>Cadastrar</h2>
                <form onSubmit={handleSubmitSignup(upHandleSubmit)}>
                    <Input 
                        type="text"
                        placeholder="Name" 
                        name="name" 
                        register={registerSignup}
                    />
                    {errorsSignup.name &&(
                        <ErrorSpan>{errorsSignup.name.message}</ErrorSpan>
                    )}
                    <Input 
                        type="email" 
                        placeholder="E-mail" 
                        name="email"
                        register={registerSignup}
                    />
                    {errorsSignup.email &&(
                        <ErrorSpan>{errorsSignup.email.message}</ErrorSpan>
                    )}
                    <Input 
                        type="password" 
                        placeholder="Senha" 
                        name="password"
                        register={registerSignup}
                    />
                    {errorsSignup.password &&(
                        <ErrorSpan>{errorsSignup.password.message}</ErrorSpan>
                    )}
                    <Input
                        type="password"
                        placeholder="Confirmar senha"
                        name="senha"
                        register={registerSignup}
                    />
                    {errorsSignup.password &&(
                        <ErrorSpan>{errorsSignup.confirmpassword.message}</ErrorSpan>
                    )}
                    <Button type="submit" text="Cadastrar"/>
                </form>
            </Section>
       </AuthContainer>
    );
}

