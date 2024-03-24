
import { Ttask } from '../libs/type'
import './css/tasks.css'
import Task from './task'

export default function Tasks({tasks, updateTask} : {tasks: Ttask[], updateTask: (idTask: number, isDel: boolean)=>void}) {

  return (
    <div className='tasks-cont0'>
      {tasks.map((task, index)=>(
        <Task key={index} task={task} updateTask={updateTask}/>
      ))}
    </div>
  )
}
