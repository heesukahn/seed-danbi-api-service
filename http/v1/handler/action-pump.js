/**
 * Created by heepo on 2016. 11. 17..
 */

"use strict";

const gpio = require('onoff').Gpio;
const pumpControl = new gpio(18,'out');

module.exports = (onOff, periodInMinutes, now, callback) => {

  now.setMinutes(periodInMinutes * Math.floor(now.getMinutes() / periodInMinutes));
  now.setSeconds(0);
  now.setMilliseconds(0);
  /*
  node에서는 5분이라고해서 5 * 60 * 1000로 밀리세컨트로 변환해도 정확히 5분이아니라 5분에서 6분 사이가 된다
  그래서 정확히 시간을 0초로 맞춰주기위한 작업을 위와같이 처리해준다
  */
  try {
    const getOnOff = (onOff === '1') ? 1 : 0;
    pumpControl.writeSync(getOnOff);
    setTimeout(pumpControl.writeSync(0), now.toISOString());
    callback(null, {result: 1});
  } catch (ex) {
    callback("500 internal server error")
  }
};
