"use client";

import {
  Box,
  Button,
  Card,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import img from "../../../assets/gtecnologia/gtecnologia1.png";
import img2 from "../../../assets/gtecnologia/gtecnologia2.png";
import img3 from "../../../assets/gtecnologia/gtecnologia3.png";
import img4 from "../../../assets/gtecnologia/gtecnologia4.png";
import imgmobile from "../../../assets/gtecnologia/gtecnologiamobile.png";
import imgmuu1 from "../../../assets/muuagrotech/muu1.png";
import imgmuu2 from "../../../assets/muuagrotech/muu2.png";
import imgmuu3 from "../../../assets/muuagrotech/muu3.png";
import imgmuu4 from "../../../assets/muuagrotech/muumobile.jpeg";

type ProjectsProps = {
  dict: {
    title: string;
    button: string;
  };
};

const projects = [
  {
    id: 1,
    title: "Genesis Tecnologia",
    description: "Projeto desenvolvido com foco em integração de módulos administrativos e responsividade total. Interface moderna e acessível, com suporte para visualização mobile e desktop.",
    images: [img.src, img2.src, img3.src, img4.src, imgmobile.src],
  },
  {
    id: 2,
    title: "Muu AgroTech",
    description: "Sistema completo para controle de cadastro e gestão de rebanhos, formulários complexos com validações e integração com APIs internas da empresa. Adaptado para mobile.",
    images: [imgmuu1.src, imgmuu2.src, imgmuu3.src, imgmuu4.src],
  },
];

export default function CardsProject({ dict }: ProjectsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [imageIndex, setImageIndex] = useState(0);

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setImageIndex(0);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => setSelectedProject(null), 300); // delay para fechar suavemente
  };

  const nextImage = () => {
    if (!selectedProject) return;
    setImageIndex((prev) => (prev + 1) % selectedProject.images.length);
  };

  const prevImage = () => {
    if (!selectedProject) return;
    setImageIndex((prev) => (prev === 0 ? selectedProject.images.length - 1 : prev - 1));
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
            <Button mt={4} onClick={() => openModal(project)} colorScheme="blue">
              {dict.button}
            </Button>
          </Card.Root>
        ))}
      </Stack>

      <AnimatePresence>
        {isOpen && selectedProject && (
          <Box
            as={motion.div}
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
            px={4}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                background: "white",
                borderRadius: "1rem",
                maxWidth: "800px",
                width: "100%",
                maxHeight: "90vh",
                overflowY: "auto",
                position: "relative",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <Button
                position="absolute"
                top={2}
                right={2}
                size="sm"
                zIndex={1}
                onClick={closeModal}
                style={{
                  color: "black",
                  background: "transparent",
                }}
              >
                ✕
              </Button>

              <Stack direction="row" justify="space-between" align="center" mt={2}>
                <Button onClick={prevImage} size="sm" variant="outline">
                  ◀
                </Button>
                <Box mb={4} p={2}>
                  <Image
                    src={selectedProject.images[imageIndex]}
                    alt={selectedProject.title}
                    borderRadius="md"
                    style={{ width: "100%", height: "400px" }}
                    objectFit="contain"
                    boxShadow="md"
                  />
                </Box>
                <Button onClick={nextImage} size="sm" variant="outline">
                  ▶
                </Button>
              </Stack>

              <Text mt={4} fontSize="md" color="gray.700" px={2}>
                {selectedProject.description}
              </Text>
            </motion.div>
          </Box>
        )}
      </AnimatePresence>
    </>
  );
}
