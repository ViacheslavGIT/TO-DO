import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";

import ListItem from "./listItem";
import {
  addItem,
  deleteItem,
  compliteItem,
  setValue,
} from "../store/slices/toDoSlice";

const MainComponent = () => {
  const dispatch = useDispatch();
  const toDoObj = useSelector((state) => state.toDo);
  const { value, list } = toDoObj;

  const handleAddItem = () => {
    if (value.trim()) {
      dispatch(addItem(value));
    } else {
      return;
    }
    dispatch(setValue(""));
  };

  const handleDeleteItem = (name) => {
    dispatch(deleteItem(name));
  };

  const completeItem = (name) => {
    dispatch(compliteItem(name));
  };

  return (
    <section className="todo-wrapper">
      <h1>To do list</h1>
      <div className="input-container">
        <TextField
          id="outlined-basic"
          value={value}
          variant="outlined"
          onChange={(e) => dispatch(setValue(e.target.value))}
          size="small"
          multiline
          maxRows={4}
          label="Add to do"
        />
        <span style={{ marginLeft: "14px" }}>
          <Button variant="contained" onClick={() => handleAddItem()}>
            submit
          </Button>
        </span>
      </div>
      <div className="list-wrapper">
        {list?.map((el, index) => (
          <ListItem
            name={el.name}
            isDone={el.isDone}
            completeItem={completeItem}
            deleteItem={handleDeleteItem}
            key={`${el.name}_${index}`}
          />
        ))}
      </div>
    </section>
  );
};
export default MainComponent;
