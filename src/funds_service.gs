function getFunds(){
  var cacheKey = 'funds';
  var cache = CacheService.getScriptCache();
  var cachedFunds = cache.get(cacheKey);
  
  if (cachedFunds){
    Logger.log('Getting the funds from cache');
    return JSON.parse(cachedFunds); 
  }
  
  var funds = fetchFunds();
  cache.put(cacheKey, funds);
  PropertiesService.getScriptProperties().setProperty('lastUpdated', getFormattedDate(new Date()));
  return JSON.parse(funds);
}

function getFundByName(name) {
  var funds = getFunds();
  if (!funds){
   return undefined; 
  }
  for(var i = 0; i<funds.length; i++){
    var fund = funds[i];
    if (fund.fundName == name){
     return fund; 
    }
  }
}
