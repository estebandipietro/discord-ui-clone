import React from 'react';
import { Avatar, Stack } from '@chakra-ui/react';

const Discords = () => (
    <Stack width="60px" height="full" backgroundColor="gray.900" alignItems="center" spacing={3}>
        <Avatar name="FC" />
        <Avatar name="AC" />
        <Avatar name="GC" />
        <Avatar name="CG" />
        <Avatar name="DC" />
    </Stack>
)

export default Discords;