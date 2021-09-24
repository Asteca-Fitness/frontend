import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { useUser } from '@auth0/nextjs-auth0'

import { PageContent} from '../styles/pageStyle'
import { FormsHome, List, Button } from '../styles/contentStyle'

import digital from '../assets/digital.png'
import people from '../assets/people.jpg'

import LoginPage from './login'

export default function FormMatricula() {

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
                    <title>Cadastro Aluno(a) | Asteca Fitness</title>    
                </Head>

                <div style={{ display:"grid", justifyContent: "flex-start"}}>
                    <Link href="clients"><Button>Voltar</Button></Link>
                </div>
                
                <div style={{ display: "flex", justifyContent: "space-between", width: "30rem", margin: "0 auto"}}>
                    <Image width={140} height={180} src={people} alt="logomarca Asteca Fitness" />
                    <Image width={160} height={150} src={digital} alt="Digital" />
                </div>
                <div style={{background: "#ccc"}}>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "1rem",
                        width: "60rem",
                        margin: "2rem auto",
                        background: "#ccc"
                    }}>
                        <Button>Dados pessoais</Button>
                        <Button style={{cursor: 'not-allowed'}}>Anamnese</Button>
                        <Button style={{cursor: 'not-allowed'}}>Pagamento</Button>
                    </div>
                        <div style={{display: 'grid', width: "60rem", margin: "2rem auto",}}>
                            <form  onSubmit={handleSubmit}>
                                <div style={{display:'flex'}}>
                                    <h4>Nome</h4><input type="text" placeholder="N° de matrícula" required></input>  
                                </div>
                                <div style={{display:'flex'}}>
                                    <h4>CPF</h4><input type="text" placeholder="N° de matrícula" required></input>
                                    <h4>E-mail</h4><input type="text" placeholder="N° de matrícula" required></input>
                                </div>
                                <div style={{display:'flex'}}>
                                    <h4>Est. Civil</h4><input type="text" placeholder="N° de matrícula" required></input>
                                    <h4>Data de nascimento</h4><input type="text" placeholder="N° de matrícula" required></input>
                                </div>
                                <div style={{display:'flex'}}>
                                    <h4>Sexo</h4><input type="text" placeholder="N° de matrícula" required></input>
                                    <h4>Tel.</h4><input type="text" placeholder="N° de matrícula" required></input>
                                </div>
                                <div style={{display:'flex'}}>
                                    <h4>Cidade</h4><input type="text" placeholder="N° de matrícula" required></input>
                                    <h4>Estado</h4><input type="text" placeholder="N° de matrícula" required></input>
                                </div>
                                <div style={{display:'flex'}}>
                                    <h4>Bairro</h4><input type="text" placeholder="N° de matrícula" required></input>
                                    <h4>CEP</h4><input type="text" placeholder="N° de matrícula" required></input>
                                    </div>
                                <div style={{display:'flex'}}>
                                    <h4>Rua</h4><input type="text" placeholder="N° de matrícula" required></input>  
                                </div>
                                <Button type="submit">Salvar</Button>
                            </form>
                        
                    </div>
                </div>
            </PageContent>
        )
    }
    return <LoginPage />
}
