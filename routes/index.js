'use strict';
const router = require('express').Router();

const mytoken = process.env.Meta_WA_VerifyToken;

router.get('/webhook', (req, res) => {

  console.log('GET: Someone is pinging me!');

  let mode = req.query['hub.mode'];
  let challenge = req.query['hub.challenge'];
  let token = req.query['hub.verify_token'];

  if (mode && token) {
    if (mode === "subscribe" && token === mytoken) {
      res.status(200).send(challenge);
    } else {
      res.status(403)
    }
  }

});

router.post('/meta_wa_callbackurl', async (req, res) => {
  try {
    console.log('POST: Someone is pinging me!');
    return res.sendStatus(200);
  } catch (error) {
    console.error({ error })
    return res.sendStatus(500);
  }
});
module.exports = router;