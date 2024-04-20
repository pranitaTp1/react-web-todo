import { useState } from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import './todoList.css';

const Main = () => {
    const [task,setTask] = useState('');
    const [items,setItems] = useState([]);
    const setTaskVal = (event) => {
        setTask(event.target.value);
    }
    const handleAdd = () => {
        console.log('task'+task);
        setItems([...items,task]);
        setTask('');
    };

    const handleDeleteAll = () => (
        setItems([])
    );
    return (
        <div>
            <br />
            <br />
            <div className="topContainer">
                <input className="inputtext" type="text" value={task} placeholder="Add a task" onChange={setTaskVal} />
                <Button className="AddBtn" onClick={handleAdd}><AddIcon /></Button>
                <br/>
                <br/>
                <ul className="textFont">
                {
                    items.map(item => {
                        return <li key={item}>{item}</li>
                    })
                }
                </ul>
            </div>
            <br/>
            <br/>
            <div className="bottomContainer">
                <Button className="delBtn" onClick={handleDeleteAll}>
                    <DeleteIcon /> Delete All
                </Button>
            </div>
        </div>
    )
};
export default Main;