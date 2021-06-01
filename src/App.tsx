import * as React from "react"
import { Stack } from "@chakra-ui/layout"
import Discords from "./components/Discords";
import MainContent from "./components/MainContent";

export const App = () => (
  <Stack isInline width="100vw" height="100vh" spacing={0}>
    <Discords />
    <MainContent />
  </Stack>
)
