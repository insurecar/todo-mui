import { useState } from "react";
import { useDispatch } from "react-redux";

import moment from "moment";

import { Input, Grid, Button, Select, MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import { useTranslation } from "react-i18next";

import { addTask } from "../../redux/actions/actions";

const styles = {
  header: {
    paddingTop: "20px",
    paddingBottom: "20px",
    background: "coral",
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
    marginBottom: "20px",
  },
  inputTask: {
    color: "lightgreen",
    width: "400px",
    fontSize: "20px",
    borderColor: "red",
    "&::before": {
      borderBottom: "3px solid red",
    },

    "&::after": {
      borderBottom: "3px solid green",
    },
  },
  btnSubmit: {
    border: "3px solid lightgreen",
    borderRadius: "10px",
    background: "lightyellow",
    padding: "10px 15px",
    transition: "All 1s",

    "&:hover": {
      transition: "All 1s",
      background: "lightgreen",
      borderColor: "green",
    },
  },
};
const AddForm = ({ classes: { header, inputTask, btnSubmit } }) => {
  const [inputText, setInputText] = useState("");
  const [language, setLanguage] = useState("en");
  // console.log(moment(Date()).format("DD-MM-yyyy"));
  // console.log(moment(new Date()).unix());
  const dispatch = useDispatch();

  const { t, i18n } = useTranslation("common");

  const handleChangeLanguage = ({ target: { value } }) => {
    setLanguage(value);
    i18n.changeLanguage(value);
  };

  const handlePress = (e) => {
    e.preventDefault();
    const task = {
      date: moment(new Date()).unix(),
      text: inputText,
    };
    dispatch(addTask(task));
  };

  return (
    <div className={header}>
      <form>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <Input
            onChange={({ target: { value } }) => setInputText(value)}
            type="text"
            className={inputTask}
            value={inputText}
          />
          <Button
            color="primary"
            type="submit"
            className={btnSubmit}
            onClick={handlePress}
          >
            {t("form.btn")}
          </Button>
          <Select onChange={handleChangeLanguage} value={language}>
            <MenuItem value="en">En</MenuItem>
            <MenuItem value="ua">Ua</MenuItem>
          </Select>
        </Grid>
      </form>
    </div>
  );
};

export default withStyles(styles)(AddForm);
