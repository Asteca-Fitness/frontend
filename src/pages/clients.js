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
                <input type="text" value="INFORME NOME DO ALUNO (A)"></input>
                <button type="button">PESQUISAR</button>
                <button type="button">MATRICULAR</button>
            </FormsHome>
        </PageContent>
    )
}