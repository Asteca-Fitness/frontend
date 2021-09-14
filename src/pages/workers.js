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
                <form action="#">
                <input type="text" placeholder="INFORME NOME DO(A) FUNCIONÁRIO (A)" required></input>
                <button type="submit">PESQUISAR</button>
                <button type="submit">CADASTRAR</button>
                </form>
            </FormsHome>
        </PageContent>
    )
}