import { PageContent } from "../styles/pageStyle";
import { FormsHome } from "../styles/pageStyle";
import Head from 'next/head'


export default function Workers() {
    return (
        <PageContent>
             <Head>
                <title>Funcionários | Asteca Fitness</title>    
            </Head>
            <FormsHome>
                <input type="text" placeholder="INFORME NOME DO(A) FUNCIONÁRIO (A)"></input>
                <button type="button">PESQUISAR</button>
                <button type="button">CADASTRAR</button>
            </FormsHome>
        </PageContent>
    )
}