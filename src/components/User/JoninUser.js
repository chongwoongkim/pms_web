import React, { useState, useEffect, useCallback } from "react";

import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import Input from "../UI/Input/Input";
import useHttp from "./hooks/use-http";
import classes from "./User.module.css";

const JoninUser = () => {
  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();
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

  //전송영역
  const submitHandler = (event) => {
    event.preventDefault();
    const userInfoSet = {
      userid: enterUserId,
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
        url: "url",
        method: "post",
        headers: '"content-Type": "application/json"',
        body: userInfoSet,
      },
      sendResult
    );
    const sendResult = (resultData) => {
      console.log(resultData);
    };
    //addJoinMember(userInfo);
  };
  /* 
  function addJoinMember(userInfo) {
    fetch("URL", {
      method: "POST",
      body: JSON.stringify(userInfo),
      headers: {
        ,
      },
    });
  }
 */
  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          id="userId"
          label="사용자ID"
          type="text"
          isValid={null}
          value={enterUserId}
          onChange={null}
          onBlur={null}
        />
        <Input
          id="password"
          label="비밀번호"
          type="password"
          isValid={null}
          value={enterPassword}
          onChange={null}
          onBlur={null}
        />
        <Input
          id="rePassword"
          label="비밀번호 확인"
          type="password"
          isValid={null}
          value={enterRePassword}
          onChange={null}
          onBlur={null}
        />
        <Input
          id="name"
          label="이름"
          type="text"
          isValid={null}
          value={enterName}
          onChange={null}
          onBlur={null}
        />
        <Input
          id="company"
          label="회사"
          type="text"
          isValid={null}
          value={enterCompany}
          onChange={null}
          onBlur={null}
        />
        <Input
          id="position"
          label="직급"
          type="text"
          isValid={null}
          value={enterPosition}
          onChange={null}
          onBlur={null}
        />
        <Input
          id="team"
          label="팀"
          type="text"
          isValid={null}
          value={enterTeam}
          onChange={null}
          onBlur={null}
        />
        <Input
          id="mainDetailJob"
          label="주상세업무"
          type="text"
          isValid={null}
          value={enterMainDetailJob}
          onChange={null}
          onBlur={null}
        />
        <Input
          id="userRole"
          label="역활"
          type="text"
          isValid={null}
          value={enterUserRole}
          onChange={null}
          onBlur={null}
        />
        <Input
          id="cellphone"
          label="휴대폰번호"
          type="text"
          isValid={null}
          value={enterCellphone}
          onChange={null}
          onBlur={null}
        />
        <Input
          id="officePhone"
          label="사무실전화번호"
          type="text"
          isValid={null}
          value={enterOfficePhone}
          onChange={null}
          onBlur={null}
        />
        <Input
          id="birthday"
          label="생일"
          type="text"
          isValid={null}
          value={enterBirthday}
          onChange={null}
          onBlur={null}
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
