"use client"

import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import { ColorModeProvider} from "./color-mode"

export default function ChakraRootProvider(props: React.PropsWithChildren) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
