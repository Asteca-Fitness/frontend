import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import GlobalStyle from '../styles/global'
import { HeaderPages } from '../components/HeaderPages'
import { FooterPage } from '../styles/pageStyle'


export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <HeaderPages />
      <FooterPage />
      <Component {...pageProps} />
      <GlobalStyle />
      
    </ThemeProvider>
  )
}