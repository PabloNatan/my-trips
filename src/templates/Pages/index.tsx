import LinkWrapper from 'components/LinkWrapper'
import * as S from './styles'

import { CloseOutline } from '@styled-icons/evaicons-outline'

export type PageTemplateProps = {
  heading: string
  body: string
}

const PageTemplate = ({ body, heading }: PageTemplateProps) => {
  return (
    <S.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} />
      </LinkWrapper>

      <S.Heading>{heading}</S.Heading>

      <S.Body>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </S.Body>
    </S.Content>
  )
}

export default PageTemplate
