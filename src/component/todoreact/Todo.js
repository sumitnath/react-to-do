    import React,{useEffect, useState} from 'react'
import './style.css'

        const getLocalItem = ()=>{
        const lists= localStorage.getItem("todolist")
        if(lists){
          return JSON.parse(lists)
        }else{
          return []
         }
        }
    const Todo = () => {
      const [inputData, setInputData] = useState('');
      const [items, setItems] = useState(getLocalItem());
      const [isEditItem, setEditItem] = useState('')
      const [toggle, setToggle] = useState(false)
        const addItems = ()=>{
          const itemData = {
            id: new Date().getTime().toString(),
            item:inputData
          }
          if(!inputData){
            alert ("Pl fill the form");
         } else if(inputData && toggle){
               setItems(
                items.map((curE)=>{
                  if(curE.id === isEditItem){
                   return{...curE, item:inputData}
                  }
                  return curE
                }
                  ))
                  setInputData('')
                  setEditItem()
                  setToggle(false) 
            } else{
            setItems([...items,itemData]);
            setInputData('')
          }
        };
     const deleteItem = (id)=>{
      const updateItems = 
       items.filter((curId)=>curId.id !== id  );
      // console.log(updateItems)
       setItems(updateItems)
        } ;
        
      const deleteAllItems = ()=>{
        setItems([])
      }

 const editItem = (id)=>{
    const edit_item_name = items.find((currentItem)=>
      currentItem.id === id
    )
  //  console.log(edit_item_name.item)
    setInputData(edit_item_name.item)
    setEditItem(id)
    setToggle(true)
    
 }
      useEffect(()=>{
     localStorage.setItem("todolist", JSON.stringify(items))
      },[items])

      return (
        <div className='main-div'>
        <div className="child-div">
        <figure>
        <img src="./images/todo.svg" alt="todologo" />
       <figcaption> Add your list here</figcaption>
        </figure>
        <div className="addItems">  
        <input type="text"
         placeholder=' Add item' 
         className='form-control'
         value ={inputData}
        onChange={(event)=>setInputData(event.target.value)}
         />
         {toggle ?   <i className="far fa-edit add-btn" onClick={addItems}>
         </i>:  <i className="fa fa-plus add-btn" onClick={addItems}>
         </i>}
       
        </div>
        {/* show item */}
        <div className="showItems">
        {items.map((currItem)=>
        <div className="eachItem"  key ={currItem.id}>
           <h3>{currItem.item }</h3>
     
        <div className="todo-btn">
        <i className="far fa-edit add-btn" onClick={()=>editItem(currItem.id)} > </i>
        <i className="far fa-trash-alt add-btn"
         onClick={()=>deleteItem(currItem.id)} > </i>
        </div>
        </div> )}
        </div>
        {/* remove all button */}
       <div className="show-items">
       <button className="btn effect04" 
       data-sm-link-text="Remove All"
       onClick ={deleteAllItems}
       >
       <span>CHECK LISt</span>
       </button>

       </div>

        </div>
        </div>
      )
    }
    
    export default Todo