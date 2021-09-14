import { PageContent } from "../styles/pageStyle";
import { FormsHome } from "../styles/pageStyle";
import Head from 'next/head'


export default function Clients() {
    return (
        <PageContent>
             <Head>
                <title>Clientes | Asteca Fitness</title>    
            </Head>

            <FormsHome>
                <form action="#">
                <input type="text" placeholder="INFORME NOME DO ALUNO (A)" required></input>
                <button type="submit">PESQUISAR</button>
                <button type="submit">MATRICULAR</button>
                </form>
            </FormsHome>
        </PageContent>
    )
}