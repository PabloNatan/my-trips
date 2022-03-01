import LinkWrapper from 'components/LinkWrapper'
import dynamic from 'next/dynamic'

import { InfoOutline } from '@styled-icons/evaicons-outline'
import { MapProps } from 'components/Map'
import { NextSeo } from 'next-seo'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="My Trips"
        description="A simple project to show in a map the places that I went and show more informations and photos when clicked."
        canonical="https://mylink.com.br"
        openGraph={{
          url: 'mysite_url',
          description:
            'A simple project to show in a map the places that I went and show more informations and photos when clicked.',
          images: [
            { url: 'my_image-url', width: 1200, height: 720, alt: 'My trips' }
          ],
          site_name: 'My Trips'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
