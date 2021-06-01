export interface Role {
    title: string;
    users: {
        name: string;
        avatar: string;
        status: 'online' | 'away';
    }[]
}

export interface Group {
    title: string;
    channels: {
        name: string;
    }[]
}

export interface Message {
    user: string;
    avatar: string;
    message: string;
    timestamp: string;
}

export const GROUPS: Group[] = [
    { title: 'GENERAL', channels: [{ name: '# general' }, { name: '# preguntas' }, { name: '# links' }, { name: '# random' }] },
    { title: 'INFORMACION', channels: [{ name: '# anuncios' }, { name: '# reglas' }, { name: '# bienvenida' }, { name: '# recursos' }] }
];

export const MESSAGES: Message[] = [
    { user: 'name', avatar: 'sarasa', message: 'some message', timestamp: 'today at 6:21am' },
    { user: 'name', avatar: 'sarasa', message: 'some message', timestamp: 'today at 6:21am' },
    { user: 'name', avatar: 'sarasa', message: 'some message', timestamp: 'today at 6:21am' },
    { user: 'name', avatar: 'sarasa', message: 'some message', timestamp: 'today at 6:21am' },
    { user: 'name', avatar: 'sarasa', message: 'some message', timestamp: 'today at 6:21am' },
    { user: 'name', avatar: 'sarasa', message: 'some message', timestamp: 'today at 6:21am' }
];

export const ROLES: Role[] = [
    {
        title: 'ADMIN', users: [{
            name: 'Name',
            avatar: 'Avatar',
            status: 'online'
        },
        {
            name: 'Name',
            avatar: 'Avatar',
            status: 'online'
        }]
    },
    {
        title: 'CONECTADO', users: [{
            name: 'Name',
            avatar: 'Avatar',
            status: 'online'
        },
        {
            name: 'Name',
            avatar: 'Avatar',
            status: 'online'
        },
        {
            name: 'Name',
            avatar: 'Avatar',
            status: 'online'
        }]
    },
];

export const STATUS_COLORS = {
    "online": "green.500",
    "away": "yellow.500",
}