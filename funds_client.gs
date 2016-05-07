function getFunds(){
  var cacheKey = 'funds';
  var cache = CacheService.getScriptCache();
  var cachedFunds = cache.get(cacheKey);
  
  if (cachedFunds){
   return JSON.parse(cachedFunds); 
  }
  
  var url = "https://nknb2xyowi.execute-api.eu-west-1.amazonaws.com/prod/funds?language=ro&country=RO&audience=PRIVATE&strategy=&_=1462630992531";
  
  var fundsString = UrlFetchApp.fetch(url).getContentText();
  cache.put(cacheKey, fundsString);
  
  return JSON.parse(fundsString);
}

function getFundByName(name) {
  var funds = getFunds();
  for(var i = 0; i<funds.length; i++){
    var fund = funds[i];
    if (fund.fundName == name){
     return fund; 
    }
  }
}
