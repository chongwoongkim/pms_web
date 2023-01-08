import React from "react";
import PropTypes from "prop-types";
import Card from "../UI/Card/Card";
import classes from "./Admin.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import useHttp from "../../hooks/use-http";
import useInput from "../../hooks/use-input";

const positionInsert = (props) => {
  const {
    value: enteredPositonName,
    isValid: enteredPositonNameIsValid,
    hasError: PositonNameInputHasError,
    valueChangeHandler: PositonNameChangeHandler,
    inputBlurHandler: PositonNameBlurHandler,
    reset: resetPositonNameInput,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (enteredPositonNameIsValid) {
    formIsValid = true;
  }
  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();

  const resultSave = (data) => {
    if (data.success) {
      alert("직급 정보를 저장했습니다.");
    } else {
      alert("직급 정보를 저장을 실패하였습니다.");
    }
    if (error) {
      alert("직급 정보를 저장을 실패하였습니다.");
    }
  };
  const submitHandler = (event) => {
    event.preventDefault();
    //props.onLogin(enteredEmail, enteredPassword);
    if (!formIsValid) {
      return;
    }

    const PositonInfoSet = {
      PositonName: enteredPositonName,
    };
    sendTaskRequest(
      {
        url: "",
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: PositonInfoSet,
      },
      resultSave
    );
    if (isLoading) {
      console.log("로딩");
    }
    if (error != null) {
      console.log(error);
    }

    resetPositonNameInput();
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          id="PositonName"
          label="직급"
          type="text"
          isValid={enteredPositonNameIsValid}
          value={enteredPositonName}
          onChange={PositonNameChangeHandler}
          onBlur={PositonNameBlurHandler}
        />
        {PositonNameInputHasError && (
          <p className="error-text">직급명을 입력하세요.</p>
        )}
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            저장
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default positionInsert;
