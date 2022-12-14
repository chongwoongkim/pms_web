import React, {useEffect} from "react";
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import useHttp from "../../hooks/use-http";
import useInput from "../../hooks/use-input";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {headerActions} from "../../store/header";
import {useScript} from "../../hooks/use-script";

const Login = () => {
    const dispatch = useDispatch();
    //was에 JS를 두자..
    const status1 = useScript("https://code.jquery.com/jquery-3.6.3.min.js");
    const {
        value: enteredUserId,
        isValid: enteredUserIdIsValid,
        hasError: userIdInputHasError,
        valueChangeHandler: userIdChangeHandler,
        inputBlurHandler: userIdBlurHandler,
        reset: resetUserIdInput,
    } = useInput((value) => value.trim() !== "" && value.length > 3);

    const {
        value: enteredPassword,
        isValid: enteredPasswordIsValid,
        hasError: passwordInputHasError,
        valueChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordBlurHandler,
        reset: resetPasswordInput,
    } = useInput((value) => value.trim() !== "" && value.length > 5);

    let formIsValid = false;

    if (enteredUserIdIsValid && enteredPasswordIsValid) {
        formIsValid = true;
    }
    const {isLoading, error, sendRequest: sendTaskRequest} = useHttp();

    useEffect(() => {
        dispatch(headerActions.setTitle("로그인"));
        sendTaskRequest({url: "/pms/api/v1/loginKey"}, resultKey);
        if (status1 === "ready") {
            console.log(window.$("#userId"));
            //console.log(window._.camelCase("aaaaa"));
        }
    }, []);

    const resultKey = (data) => {
        console.log(data);
    };

    const resultLogin = (data) => {
        if (data.success) {
            alert("로그인 성공 다음페이지.");
        } else {
            alert("로그인에 실패 하였습니다. ID/PW를 확인하세요");
        }
        if (error) {
            alert("로그인에 실패 하였습니다. ID/PW를 확인하세요");
        }
    };
    const submitHandler = (event) => {
        event.preventDefault();

        //props.onLogin(enteredEmail, enteredPassword);
        if (!formIsValid) {
            return;
        }

        const userInfoSet = {
            userId: enteredUserId,
            password: enteredPassword,
        };
        sendTaskRequest(
            {
                url: "/api/v1/login",
                method: "POST",
                headers: {"content-Type": "application/json"},
                body: userInfoSet,
            },
            resultLogin
        );
        if (isLoading) {
            console.log("로딩");
        }
        if (error != null) {
            console.log(error);
        }

        resetUserIdInput();
        resetPasswordInput();
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <Input
                    id="userId"
                    label="사용자아이디"
                    type="text"
                    isValid={enteredUserIdIsValid}
                    value={enteredUserId}
                    onChange={userIdChangeHandler}
                    onBlur={userIdBlurHandler}
                />
                {userIdInputHasError && (
                    <p className="error-text">사용자ID를 입력하세요.</p>
                )}
                <Input
                    id="password"
                    label="비밀번호"
                    type="password"
                    isValid={enteredPasswordIsValid}
                    value={enteredPassword}
                    onChange={passwordChangeHandler}
                    onBlur={passwordBlurHandler}
                ></Input>
                {passwordInputHasError && (
                    <p className="error-text">PASSWORD를 입력하세요.</p>
                )}
                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn} disabled={!formIsValid}>
                        로그인
                    </Button>
                </div>
                <div className={classes.joinbtn}><Link to="/joinUser">회원가입</Link></div>
            </form>
        </Card>
    );
};

export default Login;
