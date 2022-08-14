import React from "react";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo, editTodo } from "../redux/todoSlice";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  function handleCompleteClick() {
    dispatch(
      toggleComplete({
        id,
        completed: !completed,
      })
    );
  }
  function deleteTodoItem() {
    dispatch(deleteTodo({ id: id }));
  }

  function editTodoitem() {
    const modifiedTodo = prompt("enter your Todo's modification", title);
    dispatch(
      editTodo({
        id,
        title: modifiedTodo,
      })
    );
  }

  return (
    <li className={`list-group-item ${completed && "list-group-item-success"}`}>
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <input
            type="checkbox"
            className="mr-3"
            checked={completed}
            onChange={handleCompleteClick}
          ></input>
          {title}
        </span>
        <div className="d-flex justify-content-between  ">
          <button onClick={editTodoitem} className="btn btn-danger mr-3 ">
            Edit
          </button>
          <button onClick={deleteTodoItem} className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
