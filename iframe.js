function initIframe() {
  const autocomplete = new Autocomplete(sources);
  autocomplete.fillInput();
  autocomplete.fillSelect();
}
window.setTimeout(initIframe, 3500);