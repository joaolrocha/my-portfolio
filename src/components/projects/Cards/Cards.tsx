import { Button, Card, Image } from "@chakra-ui/react"
import img from '../../../assets/gtecnologia/gtecnologia1.png'

const CardsProject = () => {
  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Image
        src={img.src}
        alt="Green double couch with wooden legs"
      />
      <Card.Body gap="2">
        <Card.Title>Genesis Tecnologia</Card.Title>
        <Card.Description>
          This sofa is perfect for modern tropical spaces, baroque inspired
          spaces.
        </Card.Description>
      </Card.Body>
      <Card.Footer gap="2">
        <Button variant="solid">See more</Button>
      </Card.Footer>
    </Card.Root>
  )
}


export default CardsProject