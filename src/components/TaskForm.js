import { useState, useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { useHistory, useParams } from 'react-router-dom'

export default function TaskForm() {

    const { addTask, tasks, updateTask } = useContext(GlobalContext)

    const history = useHistory()
    const params = useParams()

    const [task, setTask] = useState({
        title: '',
        description: ''
    })

    //Handle Cahnge para cada input
    const handleChange = (e) => {
        // console.log(e.target.name, e.target.value)
        setTask({ ...task, [e.target.name]: e.target.value })
    }

    //Handle para  el submit del formulario
    const handleSubmit = (e) => {
        e.preventDefault()
        if (task.id) {
            updateTask(task)
        } else {
            addTask(task)
        }
        history.push('/')
    }

    useEffect(() => {
        let taskFound = tasks.find(task => task.id === params.id)
        console.log(taskFound)
        if (taskFound)
            setTask(taskFound)
    }, [params.id, tasks])

    return (
        <div className="flex justify-center items-center h-3/4">
            <form className="bg-gray-900 p-10" onSubmit={handleSubmit}>
                <h2 className="mb-7 text-3x1">
                    {
                        task.id ? 'Editando tarea' : 'Creando tarea'
                    }
                </h2>
                <div className="mb-5">
                    <input
                        className="py-3 px-4 focus:text-gray-100 bg-gray-700 w-full rounded-full"
                        type="text"
                        placeholder="Escribe un titulo"
                        name="title"
                        value={task.title}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-5">
                    <textarea
                        name="description"
                        rows="1"
                        value={task.description}
                        placeholder="Escribe una descripcion"
                        className="py-3 px-4 focus:text-gray-100 bg-gray-700 w-full rounded-full"
                        onChange={handleChange}
                    ></textarea>
                </div>
                <button className="bg-green-600 w-full py-2 px-4 mt-5 hover:bg-green-400 rounded-full">{
                    task.id ? 'Editar' : 'Crear'
                }</button>
            </form>
        </div>
    )
}
