"use client";

import {
  Box,
  Grid,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  SiJavascript,
  SiTypescript,
  SiGit,
  SiSass,
  SiNestjs,
  SiNextdotjs,
  SiVuedotjs,
  SiSocketdotio,
  SiAngular,
  SiReact,
} from "react-icons/si";
import { useColorModeValue } from "@/components/ui/color-mode";
import styles from "./Skills.module.css";

const skills = [
  { label: "Javascript", icon: <SiJavascript size={40} /> },
  { label: "TypeScript", icon: <SiTypescript size={40} /> },
  { label: "Git", icon: <SiGit size={40} /> },
  { label: "Sass/Scss", icon: <SiSass size={40} /> },
  { label: "Nest.js", icon: <SiNestjs size={40} /> },
  { label: "Next.js", icon: <SiNextdotjs size={40} /> },
  { label: "Vue", icon: <SiVuedotjs size={40} /> },
  { label: "Socket.io", icon: <SiSocketdotio size={40} /> },
  { label: "Angular", icon: <SiAngular size={40} /> },
  { label: "ReactJS", icon: <SiReact size={40} /> },
];

export default function Skills() {
  const cardBg = useColorModeValue("white", "gray.800");
  const hoverBg = useColorModeValue("black", "white");
  const hoverColor = useColorModeValue("white", "gray.800");

  return (
    <Box textAlign="center" py={{ base: 6, md: 10 }} px={{ base: 4, md: 10 }}>
      <h2 className={styles.tittle}>My Skills</h2>

      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(5, 1fr)",
          lg: "repeat(5, 1fr)",
        }}
        gap={6}
        justifyItems="center"
      >
        {skills.map((skill, index) => (
          <Box
            key={index}
            p={{ base: 4, md: 6 }}
            w="100%"
            maxW="140px"
            minH="130px"
            borderWidth={1}
            borderRadius="md"
            textAlign="center"
            bg={cardBg}
            transition="all 0.3s ease"
            _hover={{ bg: hoverBg, color: hoverColor }}
          >
            <VStack>
              {skill.icon}
              <Text fontWeight="bold" fontSize="sm">
                {skill.label}
              </Text>
            </VStack>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}
