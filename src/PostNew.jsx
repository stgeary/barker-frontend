/* eslint-disable react/prop-types */
import React, { useState } from "react";
import axios from "axios";

export function ToDosNew({ onClose }) {
  const [todo, setTodo] = useState({
    title: "",
    category_id: "",
    description: "",
    deadline: "",
    completed: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTodo({
      ...todo,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const token = localStorage.getItem("jwt");

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .post("http://localhost:3000/todos.json", todo, config)
      .then((response) => {
        console.log(response.data);
        setTodo({
          title: "",
          category_id: "",
          description: "",
          deadline: "",
          completed: false,
        });
        onClose(); // Close the form upon successful submission
      })
      .catch((error) => {
        console.error("Error creating todo: ", error.response?.data?.errors);
      });
  };

  return (
    <div>
      <h1>New ToDo</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            name="title"
            type="text"
            className="form-control"
            placeholder="Enter Title"
            value={todo.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Category ID</label>
          <input
            type="number"
            name="category_id"
            className="form-control"
            placeholder="Category ID"
            value={todo.category_id}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            name="description"
            type="text"
            className="form-control"
            placeholder="Enter description"
            value={todo.description}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Deadline</label>
          <input
            type="date"
            name="deadline"
            className="form-control"
            placeholder="Deadline"
            value={todo.deadline}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Completed</label>
          <select
            name="completed"
            className="form-control"
            value={todo.completed}
            onChange={handleChange}
          >
            <option value={false}>No</option>
            <option value={true}>Yes</option>
          </select>
        </div>
        <button type="submit" className="btn btn-success">
          Create ToDo
        </button>
      </form>
    </div>
  );
}

export default ToDosNew;
