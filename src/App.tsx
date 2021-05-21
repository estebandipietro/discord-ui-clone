import * as React from "react"
import { Stack } from "@chakra-ui/layout"


export const App = () => (
  <Stack isInline width="100vw" height="100vh" backgroundColor="gray.200">
    <Stack>Servers</Stack>
    <Stack>Channels</Stack>
    <Stack>Content</Stack>
  </Stack>
)
