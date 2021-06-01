import React from 'react';
import { Avatar, Stack, Text } from '@chakra-ui/react';
import { Message } from '../data';

interface MessagesProps {
    messages: Message[]
}

const Messages = ({ messages }: MessagesProps) => (
    <Stack flex={1} spacing={0} paddingX={4} paddingY={0}>
        {messages.map(({ user, avatar, message, timestamp }) => (
            <Stack isInline borderBottomWidth={1} borderBottomColor="gray.600" paddingY={8} spacing={4}>
                <Avatar name={avatar} />
                <Stack spacing={0}>
                    <Stack isInline alignItems="baseline">
                        <Text color="gray.400" fontWeight="bold">{user}</Text>
                        <Text color="gray.600" fontSize="xs">{timestamp}</Text>
                    </Stack>
                    <Text color="gray.400">{message}</Text>
                </Stack>
            </Stack>
        ))}
    </Stack>
)

export default Messages;