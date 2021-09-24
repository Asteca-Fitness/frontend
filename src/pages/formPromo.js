import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { useUser } from '@auth0/nextjs-auth0'

import { PageContent} from '../styles/pageStyle'
import { FormsHome, List, Button } from '../styles/contentStyle'

import digital from '../assets/digital.png'
import people from '../assets/people.jpg'

import LoginPage from './login'

export default function FormPromo() {

        const handleSubmit=(e)=> {
          e.preventDefault();
          alert("Evento formulário.");

        }
      
    const { user } = useUser();
    if (user)
    {
        return (
            <PageContent>
                <Head>
                    <title>Cadastro Promoções | Asteca Fitness</title>    
                </Head>
                <h1>Promoções</h1>
            </PageContent>
        )
    }
    return <LoginPage />
}
