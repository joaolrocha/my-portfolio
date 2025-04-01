"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button, HStack } from "@chakra-ui/react";
import styles from "./Header.module.css";

export default function HeaderApp() {
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = pathname.split("/")[1] || "en";


  return (
    <header className={styles.header}>

      <div className={styles.nav}>
        <Link href={`/${currentLocale}`}>Home</Link>
        <Link href={`/${currentLocale}#about`}>About</Link>
        <Link href={`/${currentLocale}#experience`}>Experience</Link>
        <Link href={`/${currentLocale}#contact`}>Contact</Link>

        {/* Toggle Idioma */}
        <HStack
          ml={6}
          border="1px solid #ccc"
          borderRadius="full"
          p="2px"
          spacing={0}
        >
          <Button
            onClick={() => router.push(`/en`)}
            size="sm"
            borderRadius="full"
            bg={currentLocale === "en" ? "blue.500" : "transparent"}
            color={currentLocale === "en" ? "white" : "gray.700"}
            _hover={{ bg: currentLocale === "en" ? "blue.600" : "gray.100" }}
          >
            EN
          </Button>
          <Button
            onClick={() => router.push(`/pt`)}
            size="sm"
            borderRadius="full"
            bg={currentLocale === "pt" ? "blue.500" : "transparent"}
            color={currentLocale === "pt" ? "white" : "gray.700"}
            _hover={{ bg: currentLocale === "pt" ? "blue.600" : "gray.100" }}
          >
            PT
          </Button>
        </HStack>
      </div>
    </header>
  );
}
