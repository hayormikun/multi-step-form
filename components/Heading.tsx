
type HeadingProps = {
    title: string
    description: string
}

export const Heading = ({ title, description }: HeadingProps) => {
  return (
    <div>
        <h1>{title}</h1>
        <p>{description}</p>
    </div>
  )
}
