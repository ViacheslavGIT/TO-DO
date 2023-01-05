import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import ListItem from "./listItem";

const MainComponent = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  const handleAddItem = () => {
    setValue("");
    if (value.trim()) {
      setList([...list, { name: value, isDone: false }]);
    } else {
      return;
    }
  };

  const deleteItem = (name) => {
    setList(list.filter((item) => item.name !== name));
  };

  const completeItem = (name) => {
    const updatedList = list.map((element) => {
      if (element.name === name) {
        if (element.isDone) {
          return { ...element, isDone: false };
        } else {
          return { ...element, isDone: true };
        }
      } else {
        return element;
      }
    });
    setList(updatedList);
  };

  return (
    <section className="todo-wrapper">
      <h1>To do list</h1>
      <div className="input-container">
        <TextField
          id="outlined-basic"
          value={value}
          variant="outlined"
          onChange={(e) => setValue(e.target.value)}
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
            deleteItem={deleteItem}
            key={`${el.name}_${index}`}
          />
        ))}
      </div>
    </section>
  );
};
export default MainComponent;
