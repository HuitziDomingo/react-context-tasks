import { createContext, useReducer } from "react"
import appReducer from './AppReducer'
import { v4 } from 'uuid'

const initialState = {
    tasks: [
        {
            id: "1",
            title: "Titulo uno",
            description: "descripcion 1",
            done: false
        },
        {
            id: "2",
            title: "Titulo dos",
            description: "descripcion 2",
            done: false
        }
    ]
}

export const GlobalContext = createContext(initialState)

export const ContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(appReducer, initialState)

    const addTask = (task) => {
        // console.log(task)
        dispatch({
            type: 'Add task',
            payload: { ...task, id: v4() }
        })
    }

    const deleteTask = (id) => {
        dispatch({ type: 'Delete task', payload: id })
    }

    const updateTask = (task) => {
        dispatch({ type: 'Update task', payload: task })
    }

    return (
        <GlobalContext.Provider value={{ ...state, addTask, deleteTask, updateTask }}>
            {children}
        </GlobalContext.Provider>
    )
}