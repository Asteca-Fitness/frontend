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
                <input type="text" value=""></input>
                <button type="button">PESQUISAR</button>
                <button type="button">CADASTRAR</button>
            </FormsHome>            
        </PageContent>
    )
}