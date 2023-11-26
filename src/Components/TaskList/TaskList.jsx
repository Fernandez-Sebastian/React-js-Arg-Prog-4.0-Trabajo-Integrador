import React, {useState} from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import { TaskItem } from '../TaskItem/TaskItem';

export const TaskList = ({ tasks, onTaskCompleted, onDeleteTask, setTasks, onAddDueDate, oscuro }) => {
  const [updateKey, setUpdateKey] = useState(0);

    const handleTaskCompleted = (taskId, isCompleted) => {
      const updatedTasks = tasks.map((task) =>
        task.id === taskId ? { ...task, completed: isCompleted } : task
      );
      setTasks(updatedTasks);
      setUpdateKey((prevKey) => prevKey + 1);
    };

    const handleAddDueDate = (taskId, dueDate) => {
      const updatedTasks = tasks.map((task) =>
        task.id === taskId ? { ...task, dueDate } : task
      );
      setTasks(updatedTasks);
      setUpdateKey((prevKey) => prevKey + 1);
    };

  // Filtrar tareas por completar y tareas completadas
  const incompleteTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <>
      <Flex flexDirection="column" mt={4}>
        {/* Lista de tareas por completar */}
        <Heading size="xs" color='#8e8fb5' mb={2}>
          POR HACER
        </Heading>
        {incompleteTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onTaskCompleted={handleTaskCompleted}
            onDeleteTask={onDeleteTask}            
            onAddDueDate={handleAddDueDate}
            onDateAdded={() => setUpdateKey((prevKey) => prevKey + 1)}
            oscuro={oscuro}
          />
        ))}

        {/* Lista de tareas completadas */}
        {completedTasks.length > 0 && (
          <>
            <Heading size="xs" color='#8e8fb5' mt={4} mb={2}>
              COMPLETADAS
            </Heading>
            {completedTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onTaskCompleted={onTaskCompleted}
                onDeleteTask={onDeleteTask}
                oscuro={oscuro}
              />
            ))}
          </>
        )}
      </Flex>
    </>
  );
};