import { ThemeProvider } from 'styled-components'
import { UserProvider } from '@auth0/nextjs-auth0';

import theme from '../styles/theme'
import GlobalStyle from '../styles/global'
import { HeaderPages } from '../components/HeaderPages'
import { Footer } from '../components/FooterPages';


const MyApp = ({ Component, pageProps }) => {
  const { user } = pageProps;
  return (
    <ThemeProvider theme={theme}>
      <UserProvider user={user}>
        <GlobalStyle />
        <HeaderPages />
        <Footer />
        <Component {...pageProps} />        
      </UserProvider>
    </ThemeProvider>
  )
}

export default MyApp