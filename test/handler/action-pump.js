/**
 * Created by a1 on 2016. 11. 18..
 */

const handler = require('../../http/v1/handler/action-pump');
const assert = require('assert');

describe("action-pump", () => {
  //onOff, periodInMinutes, now, callback
  it('should fetch a user by email', done => {
    handler("1", 3, new Date(), (err, result) => {
      assert.equal(result, {result: 1});
      done(err);
    });
  });
});