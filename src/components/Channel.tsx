import React, { useState, useEffect } from 'react';
import { Text } from "@chakra-ui/layout";

interface Props {
    name: string;
    selectedGroup: string;
    onClick: (value: string) => void;
}

const Channel: React.FC<Props> = ({ name, selectedGroup, onClick }) => {

    const [activeStyle, setActiveStyle] = useState({ color: "gray.500", fontWeight: "500" });

    useEffect(() => {
        if (selectedGroup !== name) {
            setActiveStyle({ color: "gray.500", fontWeight: "500" });
        }
    }, [selectedGroup, name])

    const handleClick = (event: any) => {

        if (event.target.innerText === name) {
            setActiveStyle({ color: "gray.100", fontWeight: "bold" });
        }

        onClick(name);
    }

    return (
        <Text cursor="pointer" color={activeStyle.color} fontWeight={activeStyle.fontWeight} fontSize="sm" onClick={(event) => handleClick(event)}>{name}</Text>
    )
}

export default Channel;