function initIframe() {
  console.log('IFRAME CALLED CHROME');
  const autocomplete = new Autocomplete(sources);
  autocomplete.fillInput();
  autocomplete.fillSelect();
}

window.setTimeout(initIframe, 4000);