

import './css/header.css'

export default function Header({dark, setDark} : {dark: boolean, setDark: (bool: boolean) => void}) {

  const click = () => { setDark(!dark) }
  
  return (
    <div className="header-cont0">
      <div className="header-cont1">
        <p><i className="fa-regular fa-rectangle-list"></i></p>
        <p>Todo List</p>
      </div>
      <p onClick={click}><i className="fa-solid fa-circle-half-stroke"></i></p>
    </div>
  )
}
