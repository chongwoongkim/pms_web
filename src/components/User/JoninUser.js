import React, { useState, useEffect, useCallback } from "react";

import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import Input from "../UI/Input/Input";
import useHttp from "../../hooks/use-http";
import classes from "./User.module.css";

const JoninUser = () => {
  /* 
  const testData = (taskObj) => {
    console.log(taskObj);
  };
  const { isLoading, error, sendRequest: submitHandler } = useHttp(
    { url: "http://54.180.142.131/hello" },
    testData
  );
   */
  // 사용자 관련 상태값을 세팅한다

  const [enterUserId, setUserId] = useState("");
  const [enterPassword, setPassword] = useState("");
  const [enterRePassword, setRePassword] = useState("");
  const [enterName, setName] = useState("");
  const [enterCompany, setCompany] = useState("");
  const [enterPosition, setPosition] = useState("");
  const [enterTeam, setTeam] = useState("");
  const [enterMainDetailJob, setMainDetailJob] = useState("");
  const [enterUserRole, setUserRole] = useState("");
  const [enterCellphone, setCellphone] = useState("");
  const [enterOfficePhone, setOfficePhone] = useState("");
  const [enterBirthday, setBirthday] = useState("");
  // 유효성 검사 영역, 전체적으로 검사하기 좋은 방식을 확인한다
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
  /*
  useEffect(() => {
    submitHandler();
  }, []);
*/

  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();
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
      userId: enterUserId,
      password: enterPassword,
      name: enterName,
      company: enterCompany,
      position: enterPosition,
      team: enterTeam,
      mainDetailJob: enterMainDetailJob,
      userRole: enterUserRole,
      cellphone: enterCellphone,
      officePhone: enterOfficePhone,
      birthday: enterBirthday,
    };
    sendTaskRequest(
      {
        url: "/api/v1/user",
        method: "post",
        headers: { "content-Type": "application/json" },
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
          label="사용자ID"
          type="text"
          isValid={true}
          value={enterUserId}
          onChange={userIdChangeHandler}
          onBlur={() => {}}
        />
        <Input
          id="password"
          label="비밀번호"
          type="password"
          isValid={true}
          value={enterPassword}
          onChange={passwordChangeHandler}
          onBlur={() => {}}
        />
        <Input
          id="rePassword"
          label="비밀번호 확인"
          type="password"
          isValid={true}
          value={enterRePassword}
          onChange={rePasswordChangeHandler}
          onBlur={() => {}}
        />
        <Input
          id="name"
          label="이름"
          type="text"
          isValid={true}
          value={enterName}
          onChange={nameChangeHandler}
          onBlur={() => {}}
        />
        <Input
          id="company"
          label="회사"
          type="text"
          isValid={true}
          value={enterCompany}
          onChange={companyChangeHandler}
          onBlur={() => {}}
        />
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
        <Input
          id="cellphone"
          label="휴대폰번호"
          type="text"
          isValid={true}
          value={enterCellphone}
          onChange={cellphoneChangeHandler}
          onBlur={() => {}}
        />
        <Input
          id="officePhone"
          label="사무실전화번호"
          type="text"
          isValid={true}
          value={enterOfficePhone}
          onChange={officePhoneChangeHandler}
          onBlur={() => {}}
        />
        <Input
          id="birthday"
          label="생일"
          type="text"
          isValid={true}
          value={enterBirthday}
          onChange={birthDayChangeHandler}
          onBlur={() => {}}
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
