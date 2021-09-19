import React, {useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useUser } from '@auth0/nextjs-auth0'

import LoginPage from './login'

import digital from '../assets/digital.png'
import people from '../assets/people.jpg'


import { PageContent } from '../styles/pageStyle'
import { Button, FormsHome } from '../styles/contentStyle'

export default function Painel()
{
    const handleSubmit=(e)=>
    {
        e.preventDefault();
        alert("Evento checar matrícula.");
        const matricula = new FormData(e.target);
        
        console.log (matricula.get('nMatricula'))
        
        setToogle(state => !state)
    }

    const handleAccess=(e)=>
    {
        e.preventDefault();
        alert("Evento liberar aluno(a).");
        
        setToogle(state => !state)
    }

    const handleExit=(e)=>
    {
        e.preventDefault();
        setToogle(state => !state)
    }

    const [toogle, setToogle] = React.useState(true);
    const [display, setDisplay] = React.useState('flex');
    const [displayPeople, setDisplayPeople] = React.useState('none');

    React.useEffect(() =>
    {
        setDisplay((state) => toogle ? 'flex': 'none');
        setDisplayPeople((state) => toogle ? 'none': 'grid');
    }, [toogle]);


    const { user } = useUser();
    if (user)
    {
        return(
            <PageContent>
                <Head>
                    <title>Painel principal | Asteca Fitness</title>
                </Head>
                <div style={{display: display, justifyContent:'center', marginBottom: '2rem'}}>
                    <Image width={150} height={150} src={digital} alt="Digital" />
                </div>
                <FormsHome>
                <form style={{display: display}} onSubmit={handleSubmit}>
                    <input name="nMatricula" placeholder="N° de matrícula" />
                </form>

                <form onSubmit={handleAccess} style={{display: displayPeople}}>
                    <div style={{marginBottom: '2rem', justifyContent: 'center', display: 'flex'}}>
                        <Image width={140} height={180} src={people} alt="logomarca Asteca Fitness" />
                    </div>
                    
                    <h1>Gabriela Pinheiro</h1>
                    <p>Aluno</p>
                    <p>Plano: Normal</p>
                    <p>Vencimento: em 02 dias</p>
                    
                    <div style={{
                        position: 'absolute',          
                        bottom: '0',
                        margin: '0 0 5rem -5rem',
                        display:'flex',
                        justifyContent: 'center',
                    }}>
                        <Button type="submit" style={{width: '12rem'}}>Liberar</Button>
                        <Button onClick={handleExit} style={{width: '12rem', background: '#ff0000'}}>Sair</Button>
                    </div>
                </form>
                        
                </FormsHome>
            </PageContent>
        )
    }
    return <LoginPage />
}