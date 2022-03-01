import { CloseOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from 'components/LinkWrapper'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import { useRouter } from 'next/router'

import * as S from './styles'

type ImageProps = {
  url: string
  height: number
  width: number
}

export type PlaceTemplateProps = {
  place: {
    slug: string
    name: string
    description: {
      html: string
      text: string
    }
    gallery: ImageProps[]
  }
}

const PlaceTemplate = ({ place }: PlaceTemplateProps) => {
  const router = useRouter()

  if (router.isFallback) return null

  return (
    <>
      <NextSeo
        title={`${place.name} - My Trips`}
        description={place.description?.text}
        canonical="my_site_url"
        openGraph={{
          url: 'my_site_url',
          title: `${place.name} - My Trips`,
          description: place.description?.text,
          images: [
            {
              url: place?.gallery?.[0].url,
              width: place?.gallery?.[0].width,
              height: place?.gallery?.[0].height,
              alt: place.name
            }
          ]
        }}
      />
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Go back to map" />
      </LinkWrapper>
      <S.Wrapper>
        <S.Container>
          <S.Heading>{place.name}</S.Heading>

          <S.Body
            dangerouslySetInnerHTML={{ __html: place?.description?.html }}
          />

          <S.Gallery>
            {place.gallery.map((image, index) => (
              <Image
                key={index.toString()}
                src={image.url}
                alt={place.name}
                width={1000}
                height={600}
                quality={75}
              />
            ))}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  )
}

export default PlaceTemplate
