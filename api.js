global.fetch = require('node-fetch');
const config = require('universal-config');
const Unsplash = require('unsplash-js').default;
const toJson = require('unsplash-js').toJson;
const express = require('express');
const router = express.Router();

const unsplash = new Unsplash({
  accessKey: config.get("APP_ACCESS_KEY"),
  secret: config.get("SECRET"),
  callbackUrl: config.get("CALLBACK_URL"),
});

router.get("/api/photos", (req, res) => {
  unsplash.search
    .photos(req.query.keyword, req.query.page, 30)
    .then(toJson)
    .then((json) => res.json(json));
});


module.exports = router;