import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import List from "@material-ui/core/List";

import Task from "../Task/Task";

import { getDate } from "../../redux/actions/actions";

const TaskList = () => {
  const tasks = useSelector(({ tasksReducer }) => tasksReducer);
  const dispatch = useDispatch();
  console.log(tasks);

  useEffect(() => {
    dispatch(getDate());
  }, []);

  console.log("T__A_S__S__R__S", tasks);
  return (
    <div>
      <List>
        {tasks.map((el) => (
          <Task key={el.id} {...el} />
        ))}
      </List>
    </div>
  );
};

export default TaskList;
