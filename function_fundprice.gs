function FUNDPRICE(fundName) {
  
  var fund = getFundByName(fundName);
  
  return fund.currentNav;
}
