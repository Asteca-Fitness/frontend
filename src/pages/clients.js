import Head from 'next/head'
import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0'

import { PageContent} from "../styles/pageStyle"
import { FormsHome, List, Button } from "../styles/contentStyle"

import LoginPage from './login'

export default function Clients({clients}) {

        const handleSubmit=(e)=> {
          e.preventDefault();
          alert("Evento formulário.")

        }
    const { user } = useUser()
    if (user)
    {
        return (
            <PageContent>
                <Head>
                    <title>Clientes | Asteca Fitness</title>    
                </Head>

                <FormsHome>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="N° de matrícula" required></input>
                        <Button type="submit">Pesquisar</Button>
                        <Link href="formMatricula"><Button>Matricular</Button></Link>
                    </form>
                    
                </FormsHome>

                <List>
                {clients.length === 0 ? (
                        <h2>Não há clientes cadastrados.</h2>
                    ) : (
                        <ul>
                            {clients.map((clients, i) => (
                                <div clients={clients} key={i}>
                                    <h2>{clients.nome}</h2>
                                    <h2>{clients.matricula}</h2>
                                    <h2>{clients.status}</h2>
                                </div>
                            ))}
                        </ul>
                    )}
                    
                </List> 
            </PageContent>
        )
    }
    return <LoginPage />
}


export async function getServerSideProps(ctx) {
    let dev = process.env.NODE_ENV !== 'production';
    let { DEV_URL, PROD_URL } = process.env;

    let response = await fetch(`${dev ? DEV_URL : PROD_URL}/api/apiAsteca`);
    let data = await response.json();

    return {
        props: {
            clients: data['message'],
        },
    };
}