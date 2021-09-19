import Head from 'next/head'
import Link from 'next/link'

import { PageContent} from "../styles/pageStyle"
import { Button } from "../styles/contentStyle"



export default function LoginPage() {
  return (
    <PageContent>
       <Head>
          <title>Pagina de Login | Asteca Fitness</title>    
        </Head>
       <Link href="/api/auth/login"><Button>Fazer Login</Button></Link>
    </PageContent>    
  )
}