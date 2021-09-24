import Head from 'next/head'
import Link from   'next/link'
import { useUser } from '@auth0/nextjs-auth0'

import { PageContent } from "../styles/pageStyle"
import { FormsHome, List, Button } from "../styles/contentStyle"

import LoginPage from './login'

export default function Promotion() {
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
                    <title>Promoções | Asteca Fitness</title>    
                </Head>
                <FormsHome>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Inserir nome" required></input>
                        <Button type="submit">Pesquisar</Button>
                        <Link href="formPromo"><Button>Cadastrar</Button></Link>
                    </form>
                    
                </FormsHome>

                <List>
                    <div>
                        <h3>Indicação amigos</h3>
                        <h3>Ativo</h3>
                    </div>                    
                </List>            
            </PageContent>
        )
    }
    return <LoginPage />
}