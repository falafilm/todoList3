import { useState } from "react";

import { useDispatch } from "react-redux";

import { addNewTodo } from "../redux/actions";


const Todoform = () => {
    const[text, setText] = useState("");

    const dispatch = useDispatch();


    const onFormSubmit = (e) =>{
        e.preventDefault();

        dispatch(addNewTodo(text));

        setText('');
    }

    const onInputChange = (e) =>{
        // console.log(e.target.value);
        setText(e.target.value);
    }

    return(
        <form className="form" onSubmit={onFormSubmit}>
            <input 
            placeholder="Enter todo.." 
            className="input"
            onChange={onInputChange}
            />
        </form>
    )
}

export default Todoform;