var express = require('express');
var fs = require('fs');
var router = express.Router();

var index = 0;

/* GET home page. */
router.put('/1', function(req, res, next) {
  fs.writeFileSync('test1.json', Buffer.from(JSON.stringify(req.body), 'utf-8'))
  console.log(index++)
  //console.log(req.body.clues[0].contacts[0].data[0])
  let data = JSON.stringify( {
    "code": "0",
    "message": "12",
    "data":{
        "ids":[11,12,13]
    }
  }
  )
  res.status(200).send(data)
});
router.get('/2', function(req, res, next) {
  fs.writeFileSync('test2.json', Buffer.from(JSON.stringify(req.query), 'utf-8'))
  console.log(index++)
  //console.log(req.body.clues[0].contacts[0].data[0])
  let data = JSON.stringify( {
    "code": "0",
    "message": "111",
    "data":{
        "list":[
            {
                "id":10,
                "name":"话术模板1"
            },
            {
                "id":11,
                "name":"话术模板2"
            }
        ]
    }
  }
  )
  res.status(200).send(data)
});
router.post('/3', function(req, res, next) {
  fs.writeFileSync('test3.json', Buffer.from(JSON.stringify(req.body), 'utf-8'))
  console.log(index++)
  //console.log(req.body.clues[0].contacts[0].data[0])
  let data = JSON.stringify( {
    "code": "0",
    "message": "111",
    "data":"12111"
    }
  )
  res.status(200).send(data)
});
module.exports = router;
