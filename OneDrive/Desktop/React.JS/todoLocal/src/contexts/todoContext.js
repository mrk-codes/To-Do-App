import React from "react";
import {createContext} from 'react';
import { useContext } from "react";


export const todoContext = createContext({
    todos: [
        {
            id:101,
            todo: 'Todo message',
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})


export const useTodo = () => {
    return useContext(todoContext)
}
    
export const todoContextProvider = todoContext.Provider