import React from 'react'
import  ReactDOM from 'react-dom'
let list=[
    {
        name:'Elsa',
        age:32,
        gender:"female",
        id:1
    },
    {
        name:'Mehreteab',
        age:38,
        gender:"male",
        id:2
    },
    {
        name:'Martha',
        age:1,
        gender:"female",
        id:3
    }
]
const App = () =>{
  
    return(
        <div>
            <form>
        <input type="text" placeholder="Search.." name="search"/>   
      <button type="submit"><i class="fa fa-search"></i></button>
    </form>
    <ul>
        {list.map(function(item){
        return(
        <li>{item.name},{item.age},{item.gender}</li>)})}
    </ul>
        </div>
    )

}
ReactDOM.render(<App />,document.querySelector('#root'))