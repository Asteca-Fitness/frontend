import Head from 'next/head'
import { useUser } from '@auth0/nextjs-auth0'

import { PageContent } from "../styles/pageStyle"
import { FormsHome } from "../styles/contentStyle"

import LoginPage from './login'

export default function Workers() {
    const { user } = useUser();
    if (user)
    {
        return (
            <PageContent>
                <Head>
                    <title>Funcionários | Asteca Fitness</title>    
                </Head>
                <FormsHome>
                    
                </FormsHome>
            </PageContent>
        )
    }
    return <LoginPage />
}