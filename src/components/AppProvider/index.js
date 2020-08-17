import React from "react"
import { ThemeProvider } from "@chakra-ui/core"
import { theme } from "@chakra-ui/core"

// Let's say you want to add custom colors
const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    test: "#564779",
    blue: {
      solid: "#2B2F6C",
      gradient: "linear-gradient(0deg, #2B2F6C, #564779);",
    },
    violet: {
      solid: "#564779",
      gradient: "linear-gradient(0deg, #564779, #9D6C82)",
    },
    pink: {
      solid: "#9D6C82",
      gradient: "linear-gradient(0deg, #9D6C82, #C17F8B)",
    },
    pinkMate: {
      solid: "#C17F8B",
      gradient: "linear-gradient(0deg, #C17F8B, #DE978F)",
    },
    peach: {
      solid: "#DE978F",
      gradient: "linear-gradient(0deg, #DE978F, #2B2F6C)",
    },
  },
}

const AppProvider = props => {
  return <ThemeProvider theme={customTheme}>{props.children}</ThemeProvider>
}

export default AppProvider
