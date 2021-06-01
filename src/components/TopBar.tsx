import React from 'react';
import { Stack, Text } from '@chakra-ui/react';

interface TopBarProps {
    selectedGroup: string;
}

const TopBar = ({ selectedGroup }: TopBarProps) => (
    <Stack height="40px" backgroundColor="gray.700" borderBottomWidth={1} borderBottomColor="gray.800" isInline paddingX={4} alignItems="center" justifyContent="space-between">
        <Stack alignItems="baseline" isInline spacing={4}>
            <Text color="gray.300" fontWeight="bold">{selectedGroup}</Text>
        </Stack>
        <Stack isInline color="gray.400">
            <Text>1</Text>
            <Text>2</Text>
            <Text>3</Text>
        </Stack>
    </Stack>
)

export default TopBar;