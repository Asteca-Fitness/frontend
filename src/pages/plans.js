import Head from 'next/head'
import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0'

import { PageContent } from "../styles/pageStyle"
import { FormsHome, List, Button } from "../styles/contentStyle"

import LoginPage from './login'

export default function Planos() {
    
    const handleSubmit=(e)=> {
        e.preventDefault();
        alert("Evento formulário.");

      }
    const { user } = useUser();
    if (user)
    {
        return (
            <PageContent>
                <Head>
                    <title>Planos | Asteca Fitness</title>    
                </Head>
                <FormsHome>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Inserir nome" required></input>
                        <Button type="submit">Pesquisar</Button>
                        <Link href="formPlano"><Button>Cadastrar</Button></Link>
                    </form>
                    
                </FormsHome>

                <List>
                    <div>
                        <h3>Básico</h3>
                        <p>Seg a Sex - 10h às 16h</p>
                        <h3>R$40,00</h3>
                    </div>
                    <div>
                        <h3>Médio</h3>
                        <p>Seg a Sáb - 08h às 18h</p>
                        <h3>R$60,00</h3>
                    </div>
                    <div>
                        <h3>Ultra</h3>
                        <p>Todos os dias - 06h às 23h</p>
                        <h3>R$120,00</h3>
                    </div>
                    
                </List> 
            </PageContent>
        )
    }
    return <LoginPage />
}