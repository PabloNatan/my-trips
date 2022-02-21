import styled from 'styled-components'

export const Content = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  max-width: var(--container);
  margin: auto;
`
export const Heading = styled.h1`
  font-size: var(--large);
  margin-bottom: var(--large);
  color: var(--white);
`

export const Body = styled.div`
  p {
    font-size: var(--medium);
    color: var(--white);
    margin-bottom: var(--medium);
    line-height: var(--medium);
  }
`
