//we want to parse:
// https://www.studentenwerk-potsdam.de/essen/unsere-mensen-cafeterien/detailinfos/?L=0&tx_typoscriptrendering%5Bcontext%5D=%7B%22record%22%3A%22pages_66%22%2C%22path%22%3A%22tt_content.list.20.ddfmensa_ddfmensajson%22%7D&tx_ddfmensa_ddfmensajson%5Bmensa%5D=6&cHash=0c7f1095dcc78ff74b6cd32cd231c75f
function parseMensapage() {
  document.getElementById("text").innerHTML = "Parsed text";
}

