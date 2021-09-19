import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { HeaderPage } from "../styles/pageStyle"  
import logomarca from '../assets/logo.png'

export function HeaderPages() {
    return (
      <HeaderPage>
        <div style={{display: 'flex'}}>
          <Image width={140} height={50} src={logomarca} alt="logomarca Asteca Fitness" />
          <h1 style={{margin: '1rem 0 0 1rem'}}>Asteca Fitness</h1>
        </div>
        <ul>
          <Link href="/"><li>Painel</li></Link>
          <Link href="/clients"><li>Alunos(as)</li></Link>
          <Link href="/workers"><li>Funcionários(as)</li></Link>
          <Link href="/plans"><li>Planos</li></Link>
          <Link href="/promotions"><li>Promoções</li></Link>
        </ul>
      </HeaderPage>
    )
  }
  