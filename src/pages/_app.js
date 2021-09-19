import { ThemeProvider } from 'styled-components'
import { UserProvider } from '@auth0/nextjs-auth0';

import theme from '../styles/theme'
import GlobalStyle from '../styles/global'
import { HeaderPages } from '../components/HeaderPages'
import { FooterPage } from '../styles/pageStyle'


const MyApp = ({ Component, pageProps }) => {
  const { user } = pageProps;
  return (
    <ThemeProvider theme={theme}>
      <UserProvider user={user}>
        <GlobalStyle />
        <HeaderPages />
        <FooterPage />
        <Component {...pageProps} />        
      </UserProvider>
    </ThemeProvider>
  )
}

export default MyApp