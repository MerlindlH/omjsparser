var https = require('https');

//we want to parse:
// https://www.studentenwerk-potsdam.de/essen/unsere-mensen-cafeterien/detailinfos/?L=0&tx_typoscriptrendering%5Bcontext%5D=%7B%22record%22%3A%22pages_66%22%2C%22path%22%3A%22tt_content.list.20.ddfmensa_ddfmensajson%22%7D&tx_ddfmensa_ddfmensajson%5Bmensa%5D=6&cHash=0c7f1095dcc78ff74b6cd32cd231c75f
function parseMensapage() {
  return new Promise((resolve,reject) => {
    let jsonUrl = "https://www.studentenwerk-potsdam.de/essen/unsere-mensen-cafeterien/detailinfos/?L=0&tx_typoscriptrendering%5Bcontext%5D=%7B%22record%22%3A%22pages_66%22%2C%22path%22%3A%22tt_content.list.20.ddfmensa_ddfmensajson%22%7D&tx_ddfmensa_ddfmensajson%5Bmensa%5D=6&cHash=0c7f1095dcc78ff74b6cd32cd231c75f";

    // https://nodejs.org/api/http.html#http_http_get_url_options_callback
    https.get(jsonUrl,(response)=>{
      const { statusCode } = response;

      let error;
      if (statusCode !== 200) {
        error = new Error('Request Failed.\n' + `Status Code: ${statusCode}`);
      }

      if (error) {
        console.error(error.message);
        // consume response data to free up memory
        response.resume();
        reject("Error occurred: ${e.message}");
        return;
      }

      console.log("request successful");
      response.setEncoding('utf8');
      let rawData = "";
      response.on('data', (chunk) => rawData+=chunk);
      response.on('end', ()=>{
        try {
          let parsedData = JSON.parse(rawData);
          resolve(rawData);
        } catch (e) {
          reject("Error occurred: ${e.message}");
        }
      });
      response.on('error', (e)=>{
        reject("Error occurred: ${e.message}");
      });
    });
  });
}

exports.parseMensapage = parseMensapage;