import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Input, Grid, Button, Select, MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  box: {
    background: "coral",
    margin: "0 auto",
    maxWidth: "700px",
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
  },
  header: {
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  inputTask: {
    color: "lightgreen",
    width: "400px",
    fontSize: "20px",
    borderColor: "red",
    "&::before": {
      borderBottom: "10px solid red",
    },

    "&::after": {
      borderBottom: "10px solid green",
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

const App = ({ classes: { box, header, inputTask, btnSubmit } }) => {
  const [language, setLanguage] = useState("en");
  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);
  const { t, i18n } = useTranslation("common");

  const handleChangeLanguage = ({ target: { value } }) => {
    setLanguage(value);
    i18n.changeLanguage(value);
  };

  return (
    <div className={box}>
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
              onClick={() => setInputText("")}
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
    </div>
  );
};

export default withStyles(styles)(App);
