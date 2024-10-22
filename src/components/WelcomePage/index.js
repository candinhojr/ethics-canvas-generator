
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'
import styled from 'styled-components'
import { push } from 'hooks/useSimpleRouter'

import InfoPage from 'components/InfoPage'


const Li = styled.li`
  margin-bottom: 0.5em;
`
const A = styled.a.attrs({
  rel: 'noopener noreferrer',
  target: '_blank',
})`
  color: inherit;
`
const Button = styled.button`
  background: #37A51C;
  border-radius: 0;
  border: none;
  color: #fff;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: bold;
  padding: 0.75em 2em;
  text-transform: uppercase;
`
const Signature = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2em;
  margin-bottom: 2em;
`


function WelcomePage({
  ...otherProps
}) {
  return (
    <InfoPage
      {...otherProps}
    >
      <h3>Canvas Ético</h3>
      <h1>Bem vindo!</h1>
      <p>Na próxima página, você terá a possibilidade de preencher seu canvas ético. Nenhum dado seu será armazenado ou mesmo enviado a um servidor. Isso é ótimo, pois ninguém pode usar indevidamente seus dados, mas você precisa se preocupar em armazená-los e recarregá-los por conta própria.</p>
      <ul>
        <Li>
          Seu canvas será armazenado no <strong>armazenamento local (local storage)</strong> do navegador. sso significa que ele persistirá se você recarregar a página ou até mesmo fechar o navegador e abri-lo novamente. No entanto, ele não estará disponível em outro navegador ou computador.
        </Li>
        <Li>
          Você tem a possibilidade de <strong>baixar seu trabalho como um arquivo de texto simples e legível</strong> (utilizando sintaxe <A href="https://de.wikipedia.org/wiki/Markdown">markdown</A>). Fique atento ao botão &#34;Save to file&#34; no canto superior direito.
        </Li>
        <Li>
          Você pode editar o arquivo de texto localmente (se desejar) e <strong>carregá-lo novamente</strong>. Fique atento ao botão &#34;Import from file&#34; no canto superior direito.
        </Li>
        <Li>
          Esta página está habilitada para uso <strong>offline</strong>. Isso significa que, se você carregá-la uma vez, ela persistirá caso perca sua conexão com a internet. Você pode até navegar novamente para a URL e ela será carregada sem conexão.
        </Li>
      </ul>
      <p>Espero que este canvas seja útil para você! Agradeço seu feedback através do <A href="https://www.linkedin.com/in/candinhojr/">linkedin</A>!</p>
      <p>O canvas aqui utilizado é o resultado do meu Trabalho de Conclusão de Curso do curso de Sistemas de Informação da Universidade Federal de Santa Catatina (<A href="https://ufsc.br/">UFSC</A>) ❤️.</p>
      <p>O projeto web foi baseado no trabalho de <A href="https://www.linkedin.com/in/tobias-zucali-3555b388/">Tobias Zucali</A>, que desenvolveu a ferramenta para o preenchimento do <A href="https://tobias-zucali.github.io/business-model-canvas-generator">Business Model Canvas</A>.</p>
      <Signature>Candinho Jr.</Signature>
      <Button onClick={() => push('/canvas')}>{(localStorage.getItem('isInited')) ? 'Criar novo canvas' : 'Carregar canvas'}</Button>
    </InfoPage>
  )
}


export default WelcomePage
