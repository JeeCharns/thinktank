import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: "Inter, sans-serif",
      },
      button: {
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 700,
      },
    },
  },
  textStyles: {
    b1: {
      fontSize: "16px",
      fontWeight: "500",
      fontFamily: "Inter, sans-serif",
      lineHeight: "24px",
    },
    b2: {
      fontSize: "14px",
      fontWeight: "500",
      fontFamily: "Inter, sans-serif",
      lineHeight: "21px",
    },
    h1: {
      fontSize: "18px",
      fontWeight: "700",
      fontFamily: "Work Sans, sans-serif",
    },
    h2: {
      fontSize: ["14px", "16px"],
      fontWeight: "700",
      fontFamily: "Work Sans, sans-serif",
      lineHeight: "20.8px",
    },
    h3: {
      fontSize: "12px",
      fontWeight: "700",
      fontFamily: "Work Sans, sans-serif",
      lineHeight: "15.6px",
    },
  },
});

const root = createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </ChakraProvider>
);
