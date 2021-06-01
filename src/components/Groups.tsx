import React from 'react';
import { Avatar, Flex, Icon, Stack, Text } from '@chakra-ui/react';
import { FaMicrophone, FaHeadphones } from "react-icons/fa";
import { RiSettings5Fill } from "react-icons/ri";
import Channel from './Channel';
import { Group } from '../data'

interface GroupsProps {
    groups: Group[];
    selectedGroup: string;
    onClick: (value: string) => void;
}

const Groups = ({ groups, selectedGroup, onClick }: GroupsProps) => (
    <Stack width="200px" height="full" backgroundColor="gray.800" justifyContent="space-between">
        <Stack>
            <Flex paddingY={2} paddingX={4} borderBottomWidth={1} borderBottomColor="gray.900" height="40px" alignItems="center">
                <Text color="white" fontWeight="bold">Dincy</Text>
            </Flex>
            <Stack paddingX={2} spacing={8}>
                {groups.map(({ title, channels }) => (
                    <Stack>
                        <Text color="gray.500" fontSize="xs" fontWeight={500} >{title}</Text>
                        {channels.map(({ name }) => (
                            <Channel onClick={onClick} name={name} selectedGroup={selectedGroup} />
                        ))}
                    </Stack>
                ))}
            </Stack>
        </Stack>
        <Stack isInline color="gray.500" paddingX={2} paddingY={5} justifyContent="space-between" alignItems="center" backgroundColor="gray.900">
            <Stack isInline alignItems="center">
                <Avatar size="sm" name="D" />
                <Text fontWeight={500}>Dipi</Text>
            </Stack>
            <Stack isInline alignItems="center">
                <Icon as={FaMicrophone} />
                <Icon as={FaHeadphones} />
                <Icon as={RiSettings5Fill} />
            </Stack>
        </Stack>
    </Stack>
)

export default Groups;