const express = require('express');
const request = require('request');
const app = new express;




app.use(express.static('./dist'))
app.get(/hy/,function(req,res){
  var url = `http://ustbhuangyi.com/${req.url.substr(3)}`

  request.get(url, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(JSON.parse(body))
    }
  })
})

app.get(/banner/,function(req,res){
  var url = ` https://c.y.qq.com/${req.url.substr(7)}`

  request.get(url, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(JSON.parse(body))
    }
  })
})
// https://c.y.qq.com

app.listen(8090,function(){
  console.log('sucess');
})
