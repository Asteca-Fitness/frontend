import { HeaderPages } from "../components/HeaderPages";
import { PageContent } from "../styles/pageStyle";
import Head from 'next/head'


export default function Home() {
  return (
    <PageContent>
       <Head>
          <title>Pagina de Login | Asteca Fitness</title>    
        </Head>
      <h1>Login</h1>
    </PageContent>
        
  )
}
