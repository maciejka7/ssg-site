import React from "react"
import AppProvider from "../components/AppProvider"
import { Button, Box } from "@chakra-ui/core"

const Home = () => {
  return (
    <AppProvider>
      <h3>Hello world</h3>
      <Button color="test">Button</Button>
      {/* // => `theme.colors.gray[50]` */}
      <Box bg="tomato" w="100%" p={4} color="blue.gradient">
        This is the Box
      </Box>
    </AppProvider>
  )
}

export default Home
