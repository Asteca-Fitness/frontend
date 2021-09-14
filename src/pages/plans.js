import { PageContent } from "../styles/pageStyle";
import { FormsHome } from "../styles/pageStyle";
import Head from 'next/head'


export default function Planos() {
    return (
        <PageContent>
            <Head>
                <title>Planos | Asteca Fitness</title>    
            </Head>
            <FormsHome>
                <form action="#">
                <input type="text" placeholder="INFORME O NOME DO PLANO" required></input>
                <button type="submit">PESQUISAR</button>
                <button type="submit">CADASTRAR</button>
                </form>
            </FormsHome>
        </PageContent>
    )
}