class Category {
  id: number
  image: string
  tags: string[]
  title: string
  rating: number
  description: string
  slug: string

  constructor(
    id: number,
    image: string,
    tags: string[],
    title: string,
    rating: number,
    description: string,
    slug: string
  ) {
    this.id = id
    this.image = image
    this.tags = tags
    this.title = title
    this.rating = rating
    this.description = description
    this.slug = slug
  }
}

export default Category
