import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { Link } from 'react-router-dom'

export default function TaskList() {

    const { tasks, deleteTask } = useContext(GlobalContext)

    return (
        <div className="flex justify-center">
            <div className="w-6/12">
                {
                    tasks.map(task => (
                        <div className="bg-gray-900 px-20 py-5 text-white shadow-2x1 mb-4 flex justify-between" key={task.id}>
                            <div>
                                <h1>{task.title}</h1>
                                <h6>{task.id}</h6>
                                <p>{task.description}</p>
                            </div>
                            <div>
                                <Link to={`/edit/${task.id}`} className="bg-gray-600 hover:bg-gray-500 py-2 px-4 mr-2">Editar</Link>
                                <button className="bg-red-600 hover:bg-red-500 py-2 px-4 mr-2" onClick={() => deleteTask(task.id)}>Eliminar</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
