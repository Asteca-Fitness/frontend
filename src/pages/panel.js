import { PageContent, PainelPrincipal} from '../styles/pageStyle';
import Head from 'next/head'

export default function Painel() {
    return (
        <PageContent>
            <Head>
                <title>Painel principal | Asteca Fitness</title>    
            </Head>
            <PainelPrincipal>
                <section className="section">
                    Digital
                </section>
                <nav>
                    <form>
                        <input id="codigo-painel" type="text" name="input-código "placeholder="Insirir código" required></input>
                        <button className="button-painel" type="submit"> Liberar</button>
                    </form>
                </nav>
            </PainelPrincipal>
        </PageContent>
    )
}