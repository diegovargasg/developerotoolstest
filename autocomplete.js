class Autocomplete {

  constructor(sources) {
    this.btnPrimarys = document.getElementsByClassName("btn-primary")[0];
    this.frmInput    = window.document.getElementsByTagName('input');
    this.frmSelect   = window.document.getElementsByTagName('select');
    this.iframe      = document.getElementById('eepay');
    this.sources     = sources;
    this.event = new Event('change', { bubbles: true });
    this.event.simulated = true;
  }

  fillInput() {
    for (var i = 0; i < this.frmInput.length; i++) {

      const name = this.frmInput[i].name.split('_')[0];

      if(this.frmInput[i].type === "checkbox" || typeof this.sources[name] === 'undefined') {//We avoid checkboxes or undefined values
        continue;
      }

      const lengthSource = this.sources[name].length;
      const index = Math.floor(Math.random() * lengthSource);
      const value = this.sources[name][index];
      
      this.frmInput[i].value = value;
      let tracker = this.frmInput[i]._valueTracker;
      if (tracker) {
        tracker.setValue(value);
      }
      this.frmInput[i].dispatchEvent(this.event);
    }
  }

  fillSelect() {
    for (var i = 0; i < this.frmSelect.length; i++) {
      const length = this.frmSelect[i].length;
      const index = Math.floor(Math.random() * (length-1));

      this.frmSelect[i][index].selected = true;
      let tracker = this.frmSelect[i]._valueTracker;

      if (tracker) {
        tracker.setValue(value);
      }
      this.frmSelect[i].dispatchEvent(this.event);
    }
  }

  submit() {
    btnPrimarys.click();
  }
}