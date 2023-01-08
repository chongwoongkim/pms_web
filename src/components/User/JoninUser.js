import React, {useEffect, useState} from "react";

import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import Input from "../UI/Input/Input";
import useHttp from "../../hooks/use-http";
import classes from "./User.module.css";
import useInput from "../../hooks/use-input";
import {useDispatch} from "react-redux";
import {headerActions} from "../../store/header";
import Select from "../UI/Select/SelectBox";

const JoninUser = () => {
    const dispatch = useDispatch();
    //임시 데이터
    const company = [{value: "아이티센", name: "아이티센"}, {value: "쌍용정보통신", name: "쌍용정보통신"}];
    // 사용자 관련 상태값을 세팅한다
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

    const {
        value: enteredRePassword,
        isValid: enteredRePasswordIsValid,
        hasError: rePasswordInputHasError,
        valueChangeHandler: rePasswordChangeHandler,
        inputBlurHandler: rePasswordBlurHandler,
        reset: resetRePasswordInput,
    } = useInput((value) => value.trim() !== "" && value.length > 5);

    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput,
    } = useInput((value) => value.trim() !== "" && value.length > 2);

    const {
        value: enteredCellPhone,
        isValid: enteredCellPhoneIsValid,
        hasError: cellphoneInputHasError,
        valueChangeHandler: cellPhoneChangeHandler,
        inputBlurHandler: cellPhoneBlurHandler,
        reset: resetCellPhoneInput,
    } = useInput((value) => value.trim() !== "");

    const {
        value: enteredOfficePhone,
        isValid: enteredOfficePhoneIsValid,
        hasError: officephoneInputHasError,
        valueChangeHandler: officePhoneChangeHandler,
        inputBlurHandler: officePhoneBlurHandler,
        reset: resetOfficePhoneInput,
    } = useInput((value) => value.trim() !== "");

    const {
        value: enteredBirthday,
        isValid: enteredBirthdayIsValid,
        hasError: birthdayInputHasError,
        valueChangeHandler: birthdayChangeHandler,
        inputBlurHandler: birthdayBlurHandler,
        reset: resetBirthdayInput,
    } = useInput((value) => value.trim() !== "");

    const [enterCompany, setCompany] = useState("");
    const [enterPosition, setPosition] = useState("");
    const [enterTeam, setTeam] = useState("");
    const [enterMainDetailJob, setMainDetailJob] = useState("");
    const [enterUserRole, setUserRole] = useState("");
    const companyChangeHandler = (e) => {
        setCompany(e.target.value);
    }

    useEffect(() => {
        dispatch(headerActions.setTitle('회원가입'));
        //sendTaskRequest({url: "/api/v1/loginKey"}, resultKey);
    }, []);
    //const [enterCellphone, setCellphone] = useState("");
    //const [enterOfficePhone, setOfficePhone] = useState("");
    //const [enterBirthday, setBirthday] = useState("");

    //const [enterUserId, setUserId] = useState("");
    //const [enterPassword, setPassword] = useState("");
    //const [enterRePassword, setRePassword] = useState("");
    //const [enterName, setName] = useState("");

    /*
    const [enterCompany, setCompany] = useState("");
    const [enterPosition, setPosition] = useState("");
    const [enterTeam, setTeam] = useState("");
    const [enterMainDetailJob, setMainDetailJob] = useState("");
    const [enterUserRole, setUserRole] = useState("");
   */

    // 유효성 검사 영역, 전체적으로 검사하기 좋은 방식을 확인한다
    /*
    const userIdChangeHandler = (event) => {
      setUserId(event.target.value);
    };
    const passwordChangeHandler = (event) => {
      setPassword(event.target.value);
    };
    const rePasswordChangeHandler = (event) => {
      setRePassword(event.target.value);
    };
    const nameChangeHandler = (event) => {
      setName(event.target.value);
    };
    const companyChangeHandler = (event) => {
      setCompany(event.target.value);
    };
    const positionChangeHandler = (event) => {
      setPosition(event.target.value);
    };
    const teamChangeHandler = (event) => {
      setTeam(event.target.value);
    };
    const mainDetailJobChangeHandler = (event) => {
      setMainDetailJob(event.target.value);
    };
    const userRoleChangeHandler = (event) => {
      setUserRole(event.target.value);
    };
    const cellphoneChangeHandler = (event) => {
      setCellphone(event.target.value);
    };
    const officePhoneChangeHandler = (event) => {
      setOfficePhone(event.target.value);
    };
    const birthDayChangeHandler = (event) => {
      setBirthday(event.target.value);
    };
     */
    /*
    useEffect(() => {
      submitHandler();
    }, []);
  */

    const {isLoading, error, sendRequest: sendTaskRequest} = useHttp();
    const resultFunc = (data) => {
        if (data.success) {
            alert("가입이 완료되었습니다.");
        } else {
            alert("가입이 실패했습니다.\n관라자에게 문의하세요.");
        }
        if (error) {
            alert("가입이 실패했습니다.\n관라자에게 문의하세요.");
        }
    };

    const submitHandler = (event) => {
        //error = null;
        event.preventDefault();

        const userInfoSet = {
            userId: enteredUserId,
            password: enteredPassword,
            name: enteredName,
            company: enterCompany,
            /*
                        position: enterPosition,
                        team: enterTeam,
                        mainDetailJob: enterMainDetailJob,
                        userRole: enterUserRole,
                  */
            cellphone: enteredCellPhone,
            officePhone: enteredOfficePhone,
            birthday: enteredBirthday,
        };
        sendTaskRequest(
            {
                url: "/api/v1/user",
                method: "post",
                headers: {"content-Type": "application/json"},
                body: userInfoSet,
            },
            resultFunc
        );
        if (isLoading) {
            console.log("로딩");
        }
        if (error != null) {
            console.log(error);
        }
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
                />
                {passwordInputHasError && (
                    <p className="error-text">비밀번호를 확인하세요.</p>
                )}
                <Input
                    id="rePassword"
                    label="비밀번호 확인"
                    type="password"
                    isValid={enteredRePasswordIsValid}
                    value={enteredRePassword}
                    onChange={rePasswordChangeHandler}
                    onBlur={rePasswordBlurHandler}
                />
                {rePasswordInputHasError && (
                    <p className="error-text">비밀번호를 확인하세요.</p>
                )}
                <Input
                    id="name"
                    label="이름"
                    type="text"
                    isValid={enteredNameIsValid}
                    value={enteredName}
                    onChange={nameChangeHandler}
                    onBlur={nameBlurHandler}
                />
                <Select id="company" label="회사" options={company} onChange={companyChangeHandler}></Select>
                {/*
        <Input
          id="company"
          label="회사"
          type="text"
          isValid={entered}
          value={enterCompany}
          onChange={companyChangeHandler}
          onBlur={() => {}}
        />
         */}
                {/*
        <Input
          id="position"
          label="직급"
          type="text"
          isValid={true}
          value={enterPosition}
          onChange={positionChangeHandler}
          onBlur={() => {}}
        />        
        <Input
          id="team"
          label="팀"
          type="text"
          isValid={true}
          value={enterTeam}
          onChange={teamChangeHandler}
          onBlur={() => {}}
        />
        <Input
          id="mainDetailJob"
          label="주상세업무"
          type="text"
          isValid={true}
          value={enterMainDetailJob}
          onChange={mainDetailJobChangeHandler}
          onBlur={() => {}}
        />
        <Input
          id="userRole"
          label="역활"
          type="text"
          isValid={true}
          value={enterUserRole}
          onChange={userRoleChangeHandler}
          onBlur={() => {}}
        />
         */}
                <Input
                    id="cellphone"
                    label="휴대폰번호"
                    type="tel"
                    isValid={enteredCellPhoneIsValid}
                    value={enteredCellPhone}
                    onChange={cellPhoneChangeHandler}
                    onBlur={cellPhoneBlurHandler}
                />
                <Input
                    id="officePhone"
                    label="사무실전화번호"
                    type="tel"
                    isValid={enteredOfficePhoneIsValid}
                    value={enteredOfficePhone}
                    onChange={officePhoneChangeHandler}
                    onBlur={officePhoneBlurHandler}
                />
                <Input
                    id="birthday"
                    label="생일"
                    type="date"
                    isValid={enteredBirthdayIsValid}
                    value={enteredBirthday}
                    onChange={birthdayChangeHandler}
                    onBlur={birthdayBlurHandler}
                />
                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn}>
                        회원가입
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default JoninUser;
