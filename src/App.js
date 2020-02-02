import React, {useState} from 'react';

//persist the to-dos list on page refreshes:
//consider combining the browser's localStorage with the useEffect hook
const ToDoCard = props => {

  const [name, setName] = useState("");
  const [isComplete, setComplete] = useState(false);
  const [items, setItems] = useState([]);

  const addItemToList = e =>{
    e.preventDefault();
    let tempItems = [...items];
    tempItems.push({name: name, isComplete:isComplete});
    setItems(tempItems);
    setName("");
    setComplete(false);
  }

  const remove = i =>{
    console.log(i);
    let tempItems = [...items]
    tempItems.splice(i, 1);
    setItems(tempItems);
  }

  const toggleComplete = i =>{
    console.log(i);
    let tempItems = [...items];
    tempItems[i].isComplete = !(items[i].isComplete);
    setItems(tempItems);
    console.log(items[i].isComplete);
  }

  return( 
      <div className="container">
        <h3 className="text-center">To Do List</h3>
          {
            items.map((item, i) =>
              <div key={i} className="bg-light text-right">
                <div className="d-inline-block">
                  {(item.isComplete) ?
                    <div><strike>{item.name} </strike></div>
                    :
                    <div>{item.name}</div>
                  }
                </div>
                <div className="d-inline-block p-2">
                  {(item.isComplete) ?
                    <input
                      type="checkbox" 
                      onClick={ e => toggleComplete(i)}
                      checked
                    />                  
                    :
                    <input
                      type="checkbox" 
                      onClick={ e => toggleComplete(i)}
                    />                    
                  }
                  &nbsp;

                  <button onClick={ e => remove(i)} className="btn btn-outline-danger">Delete</button>
                </div>
              </div>
            )
          }  

      <hr/>
      <div>
        <form onSubmit={ addItemToList } className="form-row justify-content-center">
          <label className="col-form-label">To Do</label>
          <input
            type="text"
            onChange={ e => setName(e.target.value)}
            value={name} 
          />
          &nbsp;
          <input type="submit" value="Add" className="btn btn-outline-info"/>
        </form>
      </div>

    </div> 

  );
}

function App() {
  return (
    <ToDoCard />
  );
}

export default App;

