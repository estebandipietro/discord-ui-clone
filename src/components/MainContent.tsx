import React, { Fragment, useState } from 'react';
import { Stack } from '@chakra-ui/react';
import { GROUPS, MESSAGES, ROLES } from '../data';
import Messages from './Messages';
import NewMessage from './NewMessage';
import Roles from './Roles';
import TopBar from './TopBar';
import Groups from './Groups';

const MainContent = () => {

    const [selectedGroup, setSelectedGroup] = useState<string>("general");

    return (
        <Fragment>
            <Groups groups={GROUPS} onClick={setSelectedGroup} selectedGroup={selectedGroup} />
            <Stack height="full" flex={1} spacing={0}>
                <TopBar selectedGroup={selectedGroup} />
                <Stack height="full" backgroundColor="gray.600" flexDirection="row" spacing={0}>
                    <Stack height="full" width="100%" backgroundColor="gray.700">
                        <Messages messages={MESSAGES} />
                        <NewMessage />
                    </Stack>
                    <Roles roles={ROLES} />
                </Stack>
            </Stack>
        </Fragment>
    )
}

export default MainContent;