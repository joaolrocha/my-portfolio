"use client";

import {
  Box,
  Button,
  HStack,
  IconButton,
  VStack,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MdClose, MdMenu } from "react-icons/md";
import { ColorModeButton } from "../ui/color-mode";
import styles from "./Header.module.css";


export default function HeaderApp() {
  const { open, onToggle, onClose } = useDisclosure();
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = pathname.split("/")[1] || "en";
  const isMobile = useBreakpointValue({ base: true, md: false });
  const LanguageToggle = () => (
    <HStack border="1px solid #ccc" borderRadius="full" p="2px" gap="2">
      <Button
        onClick={() => router.push(`/en`)}
        size="sm"
        borderRadius="full"
        bg={currentLocale === "en" ? "blue.500" : "transparent"}
        color={currentLocale === "en" ? "white" : "gray.700"}
      >
        EN
      </Button>
      <Button
        onClick={() => router.push(`/pt`)}
        size="sm"
        borderRadius="full"
        bg={currentLocale === "pt" ? "blue.500" : "transparent"}
        color={currentLocale === "pt" ? "white" : "gray.700"}
      >
        PT
      </Button>
    </HStack>
  );

  return (
    <HStack className={styles.header} bg={{ base: "#e2e2e2", _dark: "#191919" }}>
      <Box className={styles.nav} display="flex" alignItems="center" justifyContent="space-between" width="100%">
        <h2 className={styles.tittle}>&lt;JoaoLuiz/&gt;</h2>
        {isMobile ? (
          <>
            <IconButton
              aria-label="Toggle menu"
              variant="ghost"
              onClick={onToggle}
            >
              {open ? <MdClose /> : <MdMenu />}
            </IconButton>

            <AnimatePresence>
              <>
                {open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={open ? { height: "auto", opacity: 1 } : {}}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    style={{
                      overflow: "hidden",
                      width: "100%",
                      backgroundColor: "#191919",
                    }}
                  >
                    <VStack align="center" gap="4" color="white">
                      <Link href={`/${currentLocale}`} onClick={onClose}>Home</Link>
                      <Link href={`/${currentLocale}#about`} onClick={onClose}>About</Link>
                      <Link href={`/${currentLocale}#experience`} onClick={onClose}>Experience</Link>
                      <Link href={`/${currentLocale}#contact`} onClick={onClose}>Contact</Link>
                      <LanguageToggle />
                      <ColorModeButton bg={{ base: "#e2e2e2", _dark: "#191919" }} />
                    </VStack>
                  </motion.div>

                )}
              </>
            </AnimatePresence>
          </>
        ) : (
          <HStack gap="6">
            <Link href={`/${currentLocale}`}>Home</Link>
            <Link href={`/${currentLocale}#about`}>About</Link>
            <Link href={`/${currentLocale}#experience`}>Experience</Link>
            <Link href={`/${currentLocale}#contact`}>Contact</Link>
            <LanguageToggle />
            <ColorModeButton />
          </HStack>
        )}
      </Box>
    </HStack>
  );
}
