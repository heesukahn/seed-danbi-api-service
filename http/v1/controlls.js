/**
 * Created by a1 on 2016. 11. 17..
 */

const express = require('express');
const _ = require('lodash');

const router = express.Router();
const actionPump = require('./handler/action-pump');
const actionDoor = require('./handler/action-door');
const getTemp = require('./handler/get-temp');

/*
index.js에서 router.use를 통해 이쪽으로 라우팅 처리했을 것이다.
하지만 여기도 비즈니스 로직은 아니다

(?) 비즈니스 로직이란 : 실제 어떤 서비스를 제공하기 위해서 실질적인 구현이 이루어지는 로직을 비즈니스 로직이라고 한다
(?) 서버에서 컨트롤러 컴포넌트의 역할은 무엇일까? : 컨트롤러는 어떤 구현을 하는 곳이아니라 단순히 요청을 파싱하여 비즈니스 로직으로 넘기고
비즈니스 로직에서 어떤 action 처리를 하고 돌려받은 결과 값만 response로 넘겨주는 역할을 한다

ex) 커피를 결제한다라고 해보자 여기서 비즈니쓰 로직과 컨트롤러 로직은 어떻게 구분될까?

request : /커피주세요(손님) ---> 카운터(controller) : "커피를 달라고? 얘 점원아! 커피좀 주렴" ----> 점원(비즈니스로직): 아메리카노를 열심히 만든다

점원(비즈니스로직) : "커피 다만들었어요" ---> 카운터(controller): "손님 여기 커피있습니다" ---> response : 커피
 */

/*
 **** 파라미터란? ****

 일반적으로 URL에 함께 포함되어 가는 데이터 변수들을 파라미터라고한다
 원래 post 메소드로 보낼 경우에는 body에 데이터가 담겨서 가지만 이렇게 get이나 post, put등의 메소드를 사용할 때
 URL에 직접 변수를 넣어서 보낼때 사용한다.

 <파라미터의 종류>

 파라미터에는 1) 패스파라미터 2) 파라미터 이렇게 두가지 종류가 있다
 패스파라미터는 URL경로에 하나의 path처럼 들어가는 변수이다.

 ex) http://stg-service.awair.is/v1/users/:user_id

 위와 같은  url이 있다고 해보자 맨 끝에 : 로 표시된 파라미터가 패스파라미터이다 파라미터에 실제로 어떤 값이 들어간다면
 아래와 같이 될 것이다

 result) http://stg-service.awair.is/v1/users/1

 위에서 맽 끝에 1이 들어갔다 즉 user_id 가 1인 것이다
 이와 다르게 패스파람이 아닌 파라미터는 어떻게 표현될까

 ex) http://stg-service.awair.is/v1/users?user_id=1

 좀더 익숙한 형태일 것이다 ?로 여기서부터 파라미터라는 것을 알리고 파라미터명 그리고 벨류가들어간다 (파라미터값은 string이다)
 */

router.get("/water/:onoff/:minute", (req, res, next) => {

  const onOff = req.params.onoff;
  const periodInMinutes = req.params.minute;
  //요청들어온 파라미터 값들을 받아준다

  actionPump(onOff, periodInMinutes, new Date(), (err, result) => {
    err ? next(err) : res.json(result)
  });
  //pump를 동작시키고 동작결과를 클라이언트에 반환한다
});

router.get("/tem", (req, res, next) => {

});


router.get("/door/:onoff", (req, res, next) => {

});



module.exports = router;
