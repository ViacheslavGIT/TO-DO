import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import RemoveDoneIcon from "@mui/icons-material/RemoveDone";
import Stack from "@mui/material/Stack";

const ListItem = ({ name, isDone, completeItem, deleteItem }) => {
  const event = new Date();
  const options = { dateStyle: "short" };
  const createDate = event.toLocaleString("ua", options);

  return (
    <div>
      <span className="date-item">{createDate}</span>
      <div className="list-item">
        <span className={isDone ? "completed text" : "text"}>{name}</span>
        <Stack direction="row" spacing={2}>
          <Button
            onClick={() => deleteItem(name)}
            variant="outlined"
            startIcon={<DeleteIcon />}
          ></Button>
          <Button
            variant="contained"
            color={isDone ? "success" : "primary"}
            onClick={() => completeItem(name)}
            endIcon={isDone ? <RemoveDoneIcon /> : <DoneAllIcon />}
          ></Button>
        </Stack>
      </div>
    </div>
  );
};
export default ListItem;
