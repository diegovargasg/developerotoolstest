function initIframe() {
  const autocomplete = new Autocomplete(sources);
  autocomplete.fillInput();
  autocomplete.fillSelect();    
}

window.setTimeout(function() {
  //we only call iframe-autocomplete
  //when we are inside the iframe
  var twoeApp = window.document.getElementById('twoe-app');
  if(twoeApp === null) {
    initIframe();
  }
}, 3500);