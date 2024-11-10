class Item {
  image: string
  title: string
  rate?: number
  description: string
  infoTags?: string[]
  id: number
  onClick?: () => void

  constructor(
    image: string,
    title: string,
    rate: number,
    description: string,
    infoTags: string[],
    id: number,
    onClick: () => void
  ) {
    this.image = image
    this.title = title
    this.rate = rate
    this.description = description
    this.infoTags = infoTags
    this.id = id
    this.onClick = onClick
  }
}

export default Item
