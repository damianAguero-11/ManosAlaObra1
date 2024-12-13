
import './App.css'
function App() {
  

  return (
    <>
    <div className='body'>
     <h1 className='titulo'>lista de tareas de damián</h1>
      
        <form className='formulario'>
          <input type='text' className='entrada'/>
          <button className='boton'>

         add
          </button>

        </form>

     <ul>
      
        
      <li >
      <input type='checkbox'className='checkboton'/>
        <label>tarea n°6</label>
        <button className='boton-basura'>
        <img className="imagen-basura"src='https://cdn-icons-png.flaticon.com/512/105/105739.png' alt='tacho de basura'></img>
        </button>
        
      </li>
      
      <li >
      <input type='checkbox'className='checkboton'/>
      <label>tarea n°5</label>
        <button className='boton-basura'>
        <img className="imagen-basura"src='https://cdn-icons-png.flaticon.com/512/105/105739.png' alt='tacho de basura'></img>
        </button>
        
      </li>

      <li >
      <input type='checkbox'className='checkboton' checked/>
      <label className='compleat'>tarea n°4 completada</label>
        <button className='boton-basura'>
        <img className="imagen-basura"src='https://cdn-icons-png.flaticon.com/512/105/105739.png' alt='tacho de basura'></img>
        </button>
        
      </li>

      <li >
      <input type='checkbox'className='checkboton'/>
      <label>tarea n°3</label>
        <button className='boton-basura'>
        <img className="imagen-basura"src='https://cdn-icons-png.flaticon.com/512/105/105739.png' alt='tacho de basura'></img>
        </button>
        
      </li>

      <li >
      <input type='checkbox'className='checkboton' />
      <label>tarea n°2</label>
        <button className='boton-basura'>
        <img className="imagen-basura"src='https://cdn-icons-png.flaticon.com/512/105/105739.png' alt='tacho de basura'></img>
        </button>
        
      </li>

      <li >
      <input type='checkbox'className='checkboton' checked/>
      <label className='compleat'>tarea n°1 completada</label>
        <button className='boton-basura'>
        <img className="imagen-basura"src='https://cdn-icons-png.flaticon.com/512/105/105739.png' alt='tacho de basura'></img>
        </button>
        
      </li>
    
     </ul>
     </div>
    </>
  )
}

export default App
