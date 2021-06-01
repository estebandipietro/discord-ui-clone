import React from 'react';
import { Avatar, Box, Stack, Text } from '@chakra-ui/react';
import { Role, STATUS_COLORS } from '../data';

interface RolesProps {
    roles: Role[]
}

const Roles = ({ roles }: RolesProps) => (
    <Stack padding={4} height="full" width="200px" backgroundColor="gray.800">
        {roles.map(({ title, users }) => (
            <Stack spacing={3}>
                <Text color="gray.500" fontWeight="bold" fontSize="sm">{title}</Text>
                <Stack spacing={3}>
                    {users.map(({ name, avatar, status }) => (
                        <Stack isInline alignItems="center" spacing={3}>
                            <Box position="relative">
                                <Avatar size="sm" name="avatar" />
                                <Box right={0} bottom={0} borderWidth={2} borderColor="gray.800" position="absolute" width="12px" height="12px" backgroundColor={STATUS_COLORS[status]} borderRadius="full" />
                            </Box>
                            <Text fontWeight={500} color="gray.500">{name}</Text>
                        </Stack>
                    ))}
                </Stack>
            </Stack>
        ))}
    </Stack>
)

export default Roles;