export default function appReducer(state, action) {
    // console.log(state, action)

    switch (action.type) {
        case 'Add task':
            return {
                tasks: [...state.tasks, action.payload]
            }
        case 'Delete task':
            // console.log(action.payload)
            // console.log(state)
            return {
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }

        case 'Update task':
            // console.log(action.payload)
            const updatedTask = action.payload

            const updatedTasks = state.tasks.map(task => {
                if (task.id === updatedTask.id) {
                    task.title = updatedTask.title
                    task.description = updatedTask.description
                }
                return task
            })
            return {
                tasks: updatedTasks
            }
        default:
            break
    }


}