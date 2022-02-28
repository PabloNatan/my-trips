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
    }
    gallery: ImageProps[]
  }
}
const PlaceTemplate = ({ place }: PlaceTemplateProps) => {
  return (
    <>
      <h1>{place.name}</h1>

      <div dangerouslySetInnerHTML={{ __html: place.description.html }}></div>

      {place.gallery.map((image, index) => (
        <img key={index.toString()} src={image.url} alt={place.name} />
      ))}
    </>
  )
}

export default PlaceTemplate
