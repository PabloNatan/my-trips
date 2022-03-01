import styled from 'styled-components'

export const Content = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  min-height: 100vh;
  max-width: var(--container);

  padding: var(--large) var(--small);
  margin-bottom: var(--large);
`
export const Heading = styled.h1`
  font-size: var(--large);
  margin-bottom: var(--large);
  color: var(--white);
`

export const Body = styled.div`
  margin: 0 auto;
  p {
    font-size: var(--small);
    color: var(--white);
    margin-bottom: var(--medium);
    line-height: var(--medium);
  }
  a {
    font-size: var(--small);
  }
`
