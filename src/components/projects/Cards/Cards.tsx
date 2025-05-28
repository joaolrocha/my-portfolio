"use client";

import { useState } from "react";
import { Button, Card, Image, Stack, Text, Box } from "@chakra-ui/react";
import img from "../../../assets/gtecnologia/gtecnologia1.png";
import img2 from "../../../assets/gtecnologia/gtecnologia2.png";
import img3 from "../../../assets/gtecnologia/gtecnologia3.png";
import img4 from "../../../assets/gtecnologia/gtecnologia4.png";

import imgmuu1 from "../../../assets/muuagrotech/muu1.png";
import imgmuu2 from "../../../assets/muuagrotech/muu2.png";
import imgmuu3 from "../../../assets/muuagrotech/muu3.png";
import imgmuu4 from "../../../assets/muuagrotech/muumobile.jpeg";
import imgmobile from "../../../assets/gtecnologia/gtecnologiamobile.png";

type ProjectsProps = {
  dict: {
    title: string;
    button: string;
  };
}

const projects = [
  {
    id: 1,
    title: "Genesis Tecnologia",
    description:
      "Genesis Tecnologia",
    images: [img.src, img2.src, img3.src, img4.src, imgmobile.src],
  },
  {
    id: 2,
    title: "Muu AgroTech",
    description:
      "Muu Agrotech",
    images: [imgmuu1.src, imgmuu2.src, imgmuu3.src, imgmuu4.src],
  },
];

const CardsProject = ({dict}: ProjectsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [imageIndex, setImageIndex] = useState(0);

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setImageIndex(0);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsOpen(false);
  };

  const nextImage = () => {
    if (!selectedProject) return;
    setImageIndex((prev) => (prev + 1) % selectedProject.images.length);
  };

  const prevImage = () => {
    if (!selectedProject) return;
    setImageIndex((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  return (
    <>
      <Stack direction="row" flexWrap="wrap" gap={6} justify="center">
        {projects.map((project) => (
          <Card.Root key={project.id} maxW="sm" overflow="hidden" p={4}>
            <Image src={project.images[0]} alt={project.title} borderRadius="md" height={250} />
            <Text fontWeight="bold" mt={3}>
              {project.title}
            </Text>
            {/* <Text fontSize="sm" color="gray.600">
              {project.description}
            </Text> */}
            <Button mt={4} onClick={() => openModal(project)} colorScheme="blue">
              {dict.button}
            </Button>
          </Card.Root>
        ))}
      </Stack>

     {isOpen && selectedProject && (
      <Box
        position="fixed"
        top={0}
        left={0}
        w="100vw"
        h="100vh"
        bg="blackAlpha.700"
        display="flex"
        alignItems="center"
        justifyContent="center"
        zIndex={999}
        px={4} // padding horizontal extra para evitar bordas coladas
      >
    <Box
      bg="white"
      borderRadius="lg"
      w="100%"
      maxW="800px"
      maxH="90vh"
      overflowY="auto"
      p={4}
      textAlign="center"
      position="relative"
      display="flex"
      flexDirection="column"
    >
      <Button
        position="absolute"
        top={2}
        right={2}
        size="sm"
        zIndex={1}
        onClick={closeModal}
      >
        ✕
      </Button>

      {/* Carrossel */}
      <Box position="relative" mt={6}>
        <Image
          src={selectedProject.images[imageIndex]}
          alt={selectedProject.title}
          borderRadius="md"
          maxH={{ base: "60vh", md: "500px" }}
          mx="auto"
          objectFit="contain"
          w="100%"
        />

        {selectedProject.images.length > 1 && (
          <>
            <Button
              position="absolute"
              top="50%"
              left={2}
              transform="translateY(-50%)"
              onClick={prevImage}
              size="sm"
              variant="ghost"
              bg="whiteAlpha.800"
              _hover={{ bg: "whiteAlpha.900" }}
            >
              ◀
            </Button>
            <Button
              position="absolute"
              top="50%"
              right={2}
              transform="translateY(-50%)"
              onClick={nextImage}
              size="sm"
              variant="ghost"
              bg="whiteAlpha.800"
              _hover={{ bg: "whiteAlpha.900" }}
            >
              ▶
            </Button>
          </>
        )}
      </Box>

      <Text mt={4} fontSize="md" color="black">
        {selectedProject.description}
      </Text>
    </Box>
  </Box>
)}

    </>
  );
};

export default CardsProject;
