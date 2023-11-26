import React, { useState } from 'react';
import { Checkbox, Flex, Text, IconButton, Box } from '@chakra-ui/react';
import { FaRegCalendarAlt } from "react-icons/fa";
import { DeleteIcon } from '@chakra-ui/icons';
import Calendar from 'react-calendar';
import '../../assets/Calendar.css';

export const TaskItem = ({ task, onTaskCompleted, onDeleteTask, onAddDueDate, onDateAdded, oscuro }) => {
  const [showCalendar, setShowCalendar] = useState(false);

  const handleCompleteTask = () => {
    const completedDate = !task.completed ? task.dueDate : null;
    onTaskCompleted(task.id, !task.completed, completedDate);
  };

  const handleDeleteTask = () => {
    onDeleteTask(task.id);
  };

  const handleToggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const handleDateChange = (date) => {
    if (typeof onAddDueDate === 'function') {
      onAddDueDate(task.id, date);
      if (typeof onDateAdded === 'function') {
        onDateAdded();
      }
    }

    setShowCalendar(false);
  };

  return (
    <Flex key={task.id} 
      alignItems="center" 
      justifyContent="space-between" mt={2} p={1} 
      borderRadius="5px" 
      bgColor={oscuro?'#44446b':'#ffffff'} 
      opacity={task.completed?0.5:1}
      border={oscuro?"1px solid #44446b":task.completed ? "none":"1px solid #eff3f7"}
      boxShadow= {task.completed?"":"0px 2px 5px rgba(0, 0, 0, 0.1)"}
    >
      <Flex alignItems="center" mr="5px" marginBlock="6px">
        <Checkbox
          mr={2}
          ml={2}
          variant='circular'       
          onChange={handleCompleteTask}
          isChecked={task.completed}
          iconColor={task.completed?'#249a5a':'#249a5a'}
          borderRadius="50%"
          borderColor={oscuro?'#ffffff':'#eff3f7'}
          colorScheme='custom'
          bgColor={task.completed?"#d7f9d1":"#ffffff"}
        />
        <Text fontSize="1rem" textDecoration={task.completed ? 'line-through' : 'none'} color={oscuro?'#c7c7dd':'#767686'}>
          {task.name} 
        </Text>
      </Flex>
      <Flex alignItems="center" >
        {task.dueDate ? (
          <Text fontSize="0.8rem" color={oscuro?"#8EAED9":'#9293B3'} mr={2}>
            {new Date(task.dueDate).toLocaleDateString()} 
          </Text>
        ) : null}
        {!task.completed && !task.dueDate && (
          <IconButton
            icon={<FaRegCalendarAlt/>}
            colorScheme="costom"
            color={oscuro?"#8EAED9":'#9293B3'}
            size="sm"
            boxSize="0.8rem"
            mr={2}
            ml={2}
            onClick={handleToggleCalendar}
          />
        )}
        {showCalendar && (
          <Box position="absolute" zIndex="10">
            <Calendar onChange={handleDateChange} value={task.dueDate} onClickDay={() => setShowCalendar(false)} />
          </Box>
        )}
        <IconButton
          type="button"
          onClick={handleDeleteTask}
          isRound={true}
          variant="solid"
          color={oscuro?"#8EAED9":'#9293B3'}
          bg={oscuro?'#44446b':'#ffffff'}
          _hover={{
            bgColor:oscuro?'#44446b':'#ffffff',
          }}
          aria-label="Eliminar"
          size='sm'
          fontSize="0.8rem"
          icon={<DeleteIcon />}
        />
      </Flex>
    </Flex>    
  );
};