function onOpen() {
  CacheService.getScriptCache().remove('funds');
  getFunds();
}
