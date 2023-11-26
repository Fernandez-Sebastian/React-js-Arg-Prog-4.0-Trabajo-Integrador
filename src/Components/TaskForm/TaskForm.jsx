import React, { useState } from 'react';
import { Flex, Input, Button, InputGroup, InputRightElement } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

export const TaskForm = ({ onAddTask, oscuro }) => {
    const [taskName, setTaskName] = useState('');

    const handleInputChange = (e) => {
        setTaskName(e.target.value);
    };

    const handleSubmit = (e) => {
        if (taskName !== ''){
            e.preventDefault();
            onAddTask(taskName);
            setTaskName('');
        }
    };

    return (
        <Flex as="form" onSubmit={handleSubmit} alignItems="center">
            <InputGroup flex="1" mr={2}>
                <Input
                    type="text"
                    value={taskName}
                    onChange={handleInputChange}
                    bgColor={oscuro?'#282851': '#ebf1f5'}
                    color={oscuro?'#c7c7dd':'#767686'}
                    fontSize='1.1rem'
                    border='none'
                    rounded='25px'
                    placeholder='Agregar tarea'
                    _placeholder={{color:oscuro?'#c6c6e1': '#707186'}}
                    focusBorderColor={oscuro?'#282851': '#ebf1f5'}

                />
                <InputRightElement>
                    <Button
                        type="submit"
                        variant="solid"
                        borderRadius="300px"
                        mr="5px"
                        bgColor="#3d79b1"
                        color="white"
                        size='sm'
                        fontSize="0.2rem"
                        _hover={{
                            bgColor:'#3d79b1',
                        }}
                    >
                        <AddIcon boxSize={3}/>
                    </Button>
                </InputRightElement>
            </InputGroup>
        </Flex>
    );
};