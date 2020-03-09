import React, { useState } from "react";
import { useDispatch } from "react-redux";


function TodoForm() {

  const initialData = {
    text: "",
  }

  const [formData, setFormData] = useState(initialData);
  const dispatch = useDispatch();

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    addTodo(formData);
    setFormData(initialData);
  };

  const addTodo = (formData) => {
    dispatch({ type: "ADD_TODO", payload: formData })
  };

  return (
    <form className="TodoForm-form" onSubmit={handleSubmit}>
      <label htmlFor="text">Add Todo</label>
      <input
        className="TodoForm-field"
        onChange={handleChange} name="text"
        id="text"
        value={formData.text} />
      <button className="TodoForm-btn">Add Todo!</button>
    </form>
  );
};

export default TodoForm;