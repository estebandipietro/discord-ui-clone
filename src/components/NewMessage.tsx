import React from 'react';
import { Box, Icon, Input, InputGroup, InputLeftElement, InputRightElement, Stack } from '@chakra-ui/react';
import { IoMdAddCircle } from "react-icons/io";
import { AiFillGift, AiOutlineGif } from "react-icons/ai";

const rightInputIcons = () => (
    <Stack isInline spacing={2}>
        <Icon as={AiFillGift} />
        <Icon as={AiOutlineGif} />
    </Stack>
);

const NewMessage = () => (
    <Box padding={4}>
        <Stack justifyContent="center" borderRadius="md" backgroundColor="gray.600" height="40px" borderWidth={1} borderColor="gray.700">
            <InputGroup>
                <InputLeftElement
                    color="gray.300"
                    fontSize="1.2em"
                    children={<Icon as={IoMdAddCircle} />}
                />
                <Input color="gray.200" fontSize="sm" placeholder="Chat in general discussion" />
                <InputRightElement
                    color="gray.300"
                    fontSize="1.2em"
                    children={rightInputIcons()}
                />
            </InputGroup>
        </Stack>
    </Box>
)

export default NewMessage;