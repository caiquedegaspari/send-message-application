import { ApolloProvider } from '@apollo/client'
import React from 'react'
import { Form } from './components/Form'
import { apolloClient } from './services/graphql.client'
import { CentralizedContainer, Footer, GlobalStyle, StyledText } from './styles'
import facebook from './assets/facebook.svg'
import pintrest from './assets/pintrest.svg'
import twitter from './assets/twitter.svg'
import linkedin from './assets/linkedin.svg'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <GlobalStyle />
      <CentralizedContainer>
        <StyledText>Reach out to us!</StyledText>
        <Form />
      </CentralizedContainer>
      <Footer>
        <div>
          <img alt="linkedin" src={linkedin} />
          <img alt="twitter" src={twitter} />
          <img alt="facebook" src={facebook} />
          <img alt="pintrest" src={pintrest} />
        </div>
      </Footer>
      <ToastContainer />
    </ApolloProvider>
  )
}

export default App
