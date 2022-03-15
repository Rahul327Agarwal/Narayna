import React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import "./AddToDo.css";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { ADD_TODO, DELETE_COMPLEATED_TODOS } from "../redux/actionTypes";

const AddToDo = () => {
  const dispatch = useDispatch();

  const [value, setValue] = React.useState(new Date());
  const [text, setText] = React.useState("");

  const hadelClick = () => {
    if (text.trim() === "") {
      alert("Please enter text");
      return;
    }
    const newTodo = {
      id: nanoid(),
      text,
      date: value,
      completed: false,
    };
    dispatch({ type: ADD_TODO, payload: newTodo });
    setText("");
  };
  return (
    <div>
      <div className="input">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <TextField
            id="outlined-basic"
            label="Input Text"
            variant="outlined"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <DateTimePicker
            renderInput={(params) => <TextField {...params} />}
            label="Last Date And Time"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
          />

          <button className="add-icon" onClick={hadelClick}>
            Add Todo
          </button>
          <button
            className="add-icon"
            onClick={() => {
              dispatch({ type: DELETE_COMPLEATED_TODOS, payload: null });
            }}
          >
            Remove All Compleated Task
          </button>
        </LocalizationProvider>
      </div>
    </div>
  );
};

export default AddToDo;
