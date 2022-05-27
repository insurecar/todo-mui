import { useSelector } from "react-redux";

import List from "@material-ui/core/List";

import Task from "../Task/Task";

const TaskList = ({ tasksReducer }) => (
  <div>
    <List>
      {tasksReducer.map((el) => (
        <Task key={el.id} {...el} />
      ))}
    </List>
  </div>
);

export default TaskList;
