
import { useEffect, useState } from 'react'
import './App.css'
import {Ttask} from './libs/type'
import Header from './comps/header'
import Tasks from './comps/tasks'
import Footer from './comps/footer'
import Control from './comps/control'

function App() {

  const [tasks, setTasks] = useState<Ttask[]>([])
  const [dark, setDark] = useState(false)
  const [filter, setFilter] = useState('')
  const [filtred, setFiltred] = useState<Ttask[]>([]) // les tâches filtrées par le critère de recherche

  const addTask = (task: Ttask) => {
    setTasks([...tasks, task])
  }

  const updateTask = (idTask: number, isDel: boolean) => { // supprime la tâche ou bien modifie son état (done/not done)
    if(isDel){deleteTask(idTask)}
    else{toggleTask(idTask)}
  }

  const deleteTask = (idTask: number) => {
    console.log("coucou")
    const newTasks = [...tasks]
    newTasks.splice(tasks.findIndex(task=>task.idTask === idTask), 1)
    setTasks(newTasks)
  }

  const toggleTask = (idTask: number) => {
    const newTasks = [...tasks]
    const task = newTasks.find(task=> task.idTask === idTask)!
    task.isDone = !task.isDone
    setTasks(newTasks)
  }

  useEffect(()=>{
    if(filter === ''){ setFiltred(tasks)} // toutes les tâches s'il n'y a pas de filtre
    else{setFiltred(tasks.filter(task=>task.description.includes(filter)))} // sinon filtrer les tâches 
  }, [filter, tasks])

  return (
    <div className={'app-cont0' + (dark ? ' dark' : '')}>
      <Header dark={dark} setDark={setDark}/>
      <div className='app-cont1'>
        <Tasks tasks={filtred.filter(task=>task.isDone === false)} updateTask={updateTask}/>
        <Control addTask={addTask} setFilter={setFilter}/>
        <Tasks tasks={filtred.filter(task=>task.isDone === true)} updateTask={updateTask}/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
