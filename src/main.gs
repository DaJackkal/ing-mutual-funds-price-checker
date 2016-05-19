function customOnOpen() {
  
  var funds = getFunds();
 
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Charts');
  var currentRow = parseInt(PropertiesService.getScriptProperties().getProperty('crtChartRowIndex'));
  
  if (!currentRow){
   currentRow = 2; 
  }
  
  var lastDateInCharts = getFormattedDate(sheet.getRange(parseInt(currentRow - 1), 1, 1, 1).getValue());
  var lastUpdatedFromUrl = PropertiesService.getScriptProperties().getProperty('lastUpdated');

  
  //TODO: if opened more than once per day, update the current day's in the chart
  if (lastUpdatedFromUrl != lastDateInCharts){
    
    var date = getFormattedDate(new Date());
    Logger.log('New date added to chart: ' + date);

    writeChartRow(sheet, date, currentRow, 6);
    
    PropertiesService.getScriptProperties().setProperty('crtChartRowIndex', ++currentRow);
    
  } else {
    Logger.log('Date already added to chart: ' + lastUpdatedFromUrl); 
  }
  
}

function writeChartRow(sheet, date, row, noOfFunds){
  
  var currentRow = parseInt(row);
 
  sheet.getRange(currentRow, 1, 1, 1).setValue(date);
  
  for(var i = 2; i <= noOfFunds+1; i++){
   var fundName = sheet.getRange(1, i, 1, 1).getValue();
   sheet.getRange(currentRow, i, 1, 1).setValue(getFundByName(fundName).currentNav); 
  } 
}

function getFormattedDate(date){
  if (!date){
   return ''; 
  }
  return Utilities.formatDate(date, "GMT", "yyyy-MM-dd");
}
