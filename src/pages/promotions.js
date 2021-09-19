import Head from 'next/head'
import Link from   'next/link'
import { useUser } from '@auth0/nextjs-auth0'

import { PageContent } from "../styles/pageStyle"
import { FormsHome, List, Button } from "../styles/contentStyle"

import LoginPage from './login'

export default function Promotion() {
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
                        <input type="text" placeholder="N° de matrícula" required></input>
                        <Button type="submit">Pesquisar</Button>
                    </form>
                    <Link href="#"><Button>Cadastrar</Button></Link>
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