import { withStyles } from "@material-ui/core/styles";

import AddForm from "../AddForm/AddForm";
import TaskList from "../TasksList/TasksList";

const styles = {
  box: {
    margin: "0 auto",
    maxWidth: "700px",
  },
};

const App = ({ classes: { box } }) => {
  return (
    <div className={box}>
      <AddForm />
      <TaskList />
    </div>
  );
};

export default withStyles(styles)(App);
