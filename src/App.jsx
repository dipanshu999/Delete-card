import { useState } from 'react'
import Card from './components/Card'

function App() {

let person=[
  {name:'Dipanshu' , position:'React-JS developer', age:18 },
  {name:'Anshul' , position:'Painter', age:21 },
  {name:'Alexis' , position:'Cyclist', age:25 },
  {name:'M-bappe' , position:'Footballer', age:24 },
]

const [users, setUsers] = useState(person);

let deleteData=(id)=>{
   setUsers(users.filter((item,index)=>index!=id))
}

  return (
    
    <div className=' '>
      {
        users.length==0 ?
        (<p className='text-red-600 font-semibold text-center text-7xl mt-16'>no card found !!</p>)
        
        : 
          
        (users.map((item,index)=>  <Card id={index} deleteData={deleteData} data={item} key={index} /> ))
      }
    </div>
  )
}

export default App
