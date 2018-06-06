let autocomplete = document.getElementById('autocomplete');

autocomplete.onclick = function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript({
      file: 'noIframe.js'
    });
  });
};