function FUNDPRICE(fundName) {
  
  var fund = getFundByName(fundName);
  
  if (!fund){
   return 0; 
  }
  
  return fund.currentNav;
}