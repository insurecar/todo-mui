import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { withStyles } from "@material-ui/core/styles";

import AddForm from "../AddForm/AddForm";
import TaskList from "../TasksList/TasksList";
import Loader from "../Loader/Loader";

import { getDate } from "../../redux/actions/actions";

const styles = {
  box: {
    margin: "0 auto",
    maxWidth: "700px",
  },
};

const App = ({ classes: { box } }) => {
  const { tasksReducer } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDate());
  }, []);

  return (
    <div className={box}>
      <AddForm />
      {tasksReducer.length ? (
        <TaskList tasksReducer={tasksReducer} />
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default withStyles(styles)(App);
