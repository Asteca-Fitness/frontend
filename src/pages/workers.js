import Link from 'next/link'
import Head from 'next/head'
import { useUser } from '@auth0/nextjs-auth0'

import { PageContent } from "../styles/pageStyle"
import { FormsHome, Button, List } from "../styles/contentStyle"

import LoginPage from './login'

export default function Workers() {
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
                    <title>Funcionários | Asteca Fitness</title>    
                </Head>
                <FormsHome>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="N° de matrícula" required></input>
                        <Button type="submit">Pesquisar</Button>
                        <Link href="formFuncionario"><Button>Cadastrar</Button></Link>
                    </form>
                    
                </FormsHome>

                <List>
                    <div>
                        <h3>Gabriel Pinheiro</h3>
                        <h3>654123</h3>
                        <h3>Administrador</h3>
                    </div>
                    <div>
                        <h3>Gabriel Pinheiro</h3>
                        <h3>654123</h3>
                        <h3>Administrador</h3>
                    </div>
                    
                </List>
            </PageContent>
        )
    }
    return <LoginPage />
}