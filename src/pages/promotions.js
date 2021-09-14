import { PageContent } from "../styles/pageStyle";
import { FormsHome } from "../styles/pageStyle";
import Head from 'next/head'


export default function Promotion() {
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