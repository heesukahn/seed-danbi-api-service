/**
 * Created by a1 on 2016. 11. 17..
 */
const express = require('express');
const router = express.Router();
const controlls = require('./controlls');

//app.js 에서 v1으로 라우팅해서 들어오면, index.js가 있는지 보고 인덱스 파일로 흐름이 넘어온다
//여기서는 한번 더 들어온 요청들을 각 컨트롤에 맞춰서 쪼개어준다

router.use("/controlls", controlls);
/*
router.use는 첫번째 인자에는 path, 두번째 인자에는 첫번째 인자의 경로를 넣어주면, 해당 요청의 처리를
그 경로에 맞는 곳으로 넘겨서 처리한다.
현재는 controlls밖에 없기때문에 위와 같지만 만약에 /users라는 유저 관리가 생긴다면

ex) router.use("/users", users);

위와 같이 라우팅 연결을 해주면된다
*/


module.exports = router;
