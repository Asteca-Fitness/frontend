import { HeaderPages } from "../components/HeaderPages";
import { PageContent, Login} from "../styles/pageStyle";
import Head from 'next/head'


export default function Home() {
  return (
    <PageContent>
       <Head>
          <title>Pagina de Login | Asteca Fitness</title>    
        </Head>
        <Login>
            <header className="login__titulo">
                <h1>Login</h1>
            </header>
            
            <form action="#">

              <div className="login__forms_input">
                <div>
                <label for="usuario">Usuário</label>
                  <input id="usuario" type="text" name="login-senha" required></input>
                
                </div>
                <div>
                <label for="senha" >Senha</label>
                  <input id="senha" type="password" name="login-senha" className="input-senha" required></input>
                
                </div>
              </div>

              <div className="login__checkbox">

                  <input id="check-box" type="checkbox" name="check"></input>
                  <label for="check-box"/>Lembrar-me

              </div>

              <footer className="login__footer">
                  <button type="submit">Entrar</button>
              </footer>
            
            </form>

        </Login>
    </PageContent>
        
  )
}
