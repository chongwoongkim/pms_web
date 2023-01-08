import React from "react";
import PropTypes from "prop-types";
import Card from "../UI/Card/Card";
import classes from "./Admin.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import useHttp from "../../hooks/use-http";
import useInput from "../../hooks/use-input";

const companyInsert = (props) => {
  const {
    value: enteredCompanyName,
    isValid: enteredCompanyNameIsValid,
    hasError: CompanyNameInputHasError,
    valueChangeHandler: CompanyNameChangeHandler,
    inputBlurHandler: CompanyNameBlurHandler,
    reset: resetCompanyNameInput,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (enteredCompanyNameIsValid) {
    formIsValid = true;
  }
  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();

  const resultSave = (data) => {
    if (data.success) {
      alert("회사 정보를 저장했습니다.");
    } else {
      alert("회사 정보를 저장을 실패하였습니다.");
    }
    if (error) {
      alert("회사 정보를 저장을 실패하였습니다.");
    }
  };
  const submitHandler = (event) => {
    event.preventDefault();
    //props.onLogin(enteredEmail, enteredPassword);
    if (!formIsValid) {
      return;
    }

    const companyInfoSet = {
      companyName: enteredCompanyName,
    };
    sendTaskRequest(
      {
        url: "",
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: companyInfoSet,
      },
      resultSave
    );
    if (isLoading) {
      console.log("로딩");
    }
    if (error != null) {
      console.log(error);
    }

    resetCompanyNameInput();
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          id="CompanyName"
          label="회사명"
          type="text"
          isValid={enteredCompanyNameIsValid}
          value={enteredCompanyName}
          onChange={CompanyNameChangeHandler}
          onBlur={CompanyNameBlurHandler}
        />
        {CompanyNameInputHasError && (
          <p className="error-text">회사명을 입력하세요.</p>
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

export default companyInsert;
