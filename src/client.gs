function fetchFunds() {
    
  var url = "https://nknb2xyowi.execute-api.eu-west-1.amazonaws.com/prod/funds?language=ro&country=RO&audience=PRIVATE&strategy=&_=1462630992531";
  
  Logger.log('Getting the funds from URL');
  
  try {
    return UrlFetchApp.fetch(url).getContentText();
  } catch(e){
    Logger.log('Error while calling the URL', e);
  }
  
}
