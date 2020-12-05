import { Button, Input } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import React, { useState } from 'react'
import Header from './Header/Header'
import styled from 'styled-components'

const Ul = styled.ul`
    width: 100%;
    border-top: 5px solid lightblue;
    border-left: 5px solid lightblue;
    border-right: 5px solid lightblue;
    margin: 20px
`;

function Todo() {
    const [input, setInput] = useState([]);
    const [todoList, setTodoList] = useState([]);
    const placeHolder = 'Enter here e.g - reading physics';

    const onchangeHandler = (event) => {
        setInput([event.target.value]);
    }

    const onsubmitHandler = () => {
        const list = todoList;
        list.push(input);
        setTodoList(list);
        setInput([]);
    }
    
    const onclickHandler = (index) => {
        let newList = todoList.filter(item => {
            return todoList.indexOf(item) !== index;
        })
        setTodoList(newList);
    }

    let listItems;

    if(todoList.length === 0) {
        listItems = <p>Start writing your tasks</p>
    } else {
        console.log(todoList);
        listItems = todoList.map(task => {
            const index = todoList.indexOf(task);
            return(
                <li key={index} 
                    onClick={onclickHandler.bind(this, index)} >
                        {task}
                        <Button onClick={onclickHandler.bind(this, index)}>
                            <DeleteIcon/>
                        </Button>
                </li>
            );
        })
    }

    return (
        <div style={{textAlign: "center", padding: 20}} >
            <Header content='To Do App' />
            <Input onChange={event => onchangeHandler(event)}
                placeholder={placeHolder}
                value={input}
                required={true}
                type='text'
                style={{width: 600}} />
            <div style={{padding: 30}}>
                <Button color="primary"
                    variant="outlined"
                    endIcon={<SaveIcon />}
                    onClick={onsubmitHandler} >Save</Button>
            </div>
            <Header content='Lists' />
            <Ul>
                {listItems}
            </Ul>
        </div>
    )
}

export default Todo
