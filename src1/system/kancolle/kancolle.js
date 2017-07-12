module.exports = function(){
  return {
    api: require('api/kancolle-api.js'),
    data: require('data/kancolle-data.js'),
    master: require('master/kancolle-master.js'),
    mechanics: require('mechanics/kancolle-mechanics.js')
  };
}();