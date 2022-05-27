import { useDispatch } from "react-redux";
import ListItem from "@material-ui/core/ListItem";
import { Grid } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

import { deleteTask } from "../../redux/actions/actions";

const Task = ({ date, text, id }) => {
  const dispatch = useDispatch();
  return (
    <ListItem style={{ marginBottom: "10px" }}>
      <Grid container spacing={3}>
        <Grid sm={3} item style={{ background: "red" }}>
          {date}
        </Grid>
        <Grid sm={8} item style={{ background: "green" }}>
          {text}
        </Grid>
        <Grid
          sm={1}
          item
          style={{
            background: "yellow",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton
            edge="end"
            aria-label="delete"
            color="secondary"
            onClick={() => dispatch(deleteTask(id))}
          >
            <DeleteIcon />
          </IconButton>
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default Task;
