import LinkWrapper from 'components/LinkWrapper'
import * as S from './styles'

import { CloseOutline } from '@styled-icons/evaicons-outline'

const AboutTemplate = () => {
  return (
    <S.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} />
      </LinkWrapper>

      <S.Heading>My Trips</S.Heading>

      <S.Body>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias,
          ab sapiente distinctio omnis molestiae a obcaecati ad non ex facere.
          Atque, iste amet natus architecto totam dignissimos velit itaque
          pariatur!
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Necessitatibus consectetur ducimus pariatur quod officiis est
          accusamus quaerat maxime blanditiis fugiat natus amet consequatur,
          eaque laudantium recusandae dolor et. Nam, amet.
        </p>
      </S.Body>
    </S.Content>
  )
}

export default AboutTemplate
