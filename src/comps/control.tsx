
import { useRef, useState } from 'react'
import './css/control.css'
import { Ttask } from '../libs/type';


export default function Control({addTask, setFilter} : {addTask : (task : Ttask) => void, setFilter : (filtre : string) => void}) {

  const [isSearch, setIsSearch] = useState(false)
  const saisie = useRef<HTMLInputElement>(null)
  
  const clicAdd = () => {
    if(!isSearch){ // si l'on vient du mode search, ne pas créer de tâche à partir du critère de la recherche
      const description = saisie.current!.value.trim()
      if (description !== ''){
        const newTask = {
          idTask: Date.now(),
          description: saisie.current!.value,
          isDone: false
        }
        addTask(newTask)
      }
    }
    saisie.current!.value = ""
    saisie.current!.focus()
    setIsSearch(false);
    setFilter('')
  }

  const clicSearch = () => {
    saisie.current!.value = ""
    saisie.current!.focus()
    setIsSearch(true)
    setFilter('')
  }

  const change = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(isSearch){ setFilter(event.target.value)}
  }

  const keyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') { if(!isSearch){clicAdd()} }
  }

  return (
    <div className="control-cont0">
      <input id="saisie" placeholder='new task' onChange={change} onKeyDown={keyDown} ref={saisie}/>
      <button id="bouton-add" className={isSearch ? 'disabled' : ''} onClick={clicAdd}>Add task</button>
      <button id="bouton-search" className={isSearch ? '' : 'disabled'} onClick={clicSearch}><i className="fa-solid fa-magnifying-glass"></i></button>
    </div>
  )
}
