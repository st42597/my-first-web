const express = require('express');
const router = express.Router();
const convert = require('xml-js'); 
const request = require('request');

const url = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson';
const ServiceKey = 'Zp2NSpq7UK%2FB1x%2BciULAuiYpEuXXCsKG25rIfpS7pdEvwYcCRgAeD7sLni5DDwfZUXjkwJ39k55Js4hvGPLNUw%3D%3D';
let queryParams = '?' + encodeURIComponent('ServiceKey') + '=' + ServiceKey; /* Service Key*/
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* */
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('100'); /* */
queryParams += '&' + encodeURIComponent('startCreateDt') + '=' + encodeURIComponent('20210611'); /* */
queryParams += '&' + encodeURIComponent('endCreateDt') + '=' + encodeURIComponent('20210612'); /* */

router.get('/', (req, res) => {
  request({
    url: url + queryParams,
    method: 'GET'
  }, function (error, response, body) {
    let bodyJson = JSON.parse(convert.xml2json(body, {compact: true, spaces: 4}));
    res.send(bodyJson.response.body.items.item);
  });
});

module.exports = router;