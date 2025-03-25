import { Button, Card, Image } from "@chakra-ui/react";
import img from '../../../assets/gtecnologia/gtecnologia1.png'
const projects = [
  {
    id: 1,
    title: "Genesis Tecnologia",
    description: "A cutting-edge technology project focused on innovation and performance.",
    img: img,
  },
  {
    id: 2,
    title: "Project X",
    description: "An innovative platform designed to streamline workflow efficiency.",
    img: img,
  },
  {
    id: 3,
    title: "NextGen App",
    description: "A modern mobile-first application built with Next.js and Chakra UI.",
    img: img,
  },
  {
    id: 4,
    title: "EcoVision",
    description: "A sustainability-focused initiative promoting green energy solutions.",
    img: img,
  },
  {
    id: 5,
    title: "Skyline AI",
    description: "A deep-learning model trained to analyze city skylines in real-time.",
    img: img,
  },
];

const CardsProject = () => {
  return (
    <>
      {projects.map((project) => (
        <Card.Root key={project.id} maxW="sm" overflow="hidden">
          <Image src={project.img.src} alt={project.title} />
          <Card.Body gap="2">
            <Card.Title>{project.title}</Card.Title>
            <Card.Description>{project.description}</Card.Description>
          </Card.Body>
          <Card.Footer gap="2">
            <Button variant="solid">See more</Button>
          </Card.Footer>
        </Card.Root>
      ))}
    </>
  );
};

export default CardsProject;
