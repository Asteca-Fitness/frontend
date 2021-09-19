import Head from 'next/head'
import { useUser } from '@auth0/nextjs-auth0'

import { PageContent } from "../styles/pageStyle"
import { FormsHome } from "../styles/contentStyle"

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
                    <form action="#">
                    <input type="text" placeholder="INFORME NOME DA PROMOÇÃO" required></input>
                    <button type="submit">PESQUISAR</button>
                    <button type="submit">CADASTRAR</button>
                    </form>
                </FormsHome>            
            </PageContent>
        )
    }
    return <LoginPage />
}