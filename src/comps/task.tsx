
import { Ttask } from '../libs/type'
import './css/task.css'

export default function Task({task, updateTask} : {task : Ttask, updateTask : (idTask: number, idDel: boolean)=>void}) {

  function formatDate(monTimestamp : number) {
    const maDate = new Date(monTimestamp)
    const jour = maDate.getDate().toString().padStart(2, '0');
    const mois = (maDate.getMonth() + 1).toString().padStart(2, '0'); // Les mois sont indexés à partir de 0
    const annee = maDate.getFullYear();
    const heures = maDate.getHours().toString().padStart(2, '0');
    const minutes = maDate.getMinutes().toString().padStart(2, '0');
    const secondes = maDate.getSeconds().toString().padStart(2, '0');
    return `${jour}/${mois}/${annee} ${heures}:${minutes}:${secondes}`;
  }

  return (
    <div className='task-cont0'>
      <div className='task-cont1'>
        <input onChange={()=>{updateTask(task.idTask, false)}} type="checkbox" checked={task.isDone}/>
        <p className={`task-description ${task.isDone ? 'raye' : ''}`}>{task.description}</p>
      </div>
      <div className='task-cont2'>
        <p className={`task-date ${task.isDone ? 'raye' : ''}`}>{`[${formatDate(task.idTask)})]`}</p>
        <button onClick={()=>{updateTask(task.idTask, true)}}><i className="fa-solid fa-trash"></i></button>
      </div>
    </div>
  )
}
