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

  dateToYMD(date) {
    var d = date.getDate();
    var m = date.getMonth() + 1; //Month from 0 to 11
    var y = date.getFullYear();
    return '' + y + '-' + (m<=9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
  }

  fillInput() {
    for (var i = 0; i < this.frmInput.length; i++) {

      const name = this.frmInput[i].name.split('_')[0];

      if(this.frmInput[i].type === "checkbox" || typeof this.sources[name] === 'undefined') {//We avoid checkboxes or undefined values
        continue;
      }

      const lengthSource = this.sources[name].length;
      const index = Math.floor(Math.random() * lengthSource);

      if(name === "departure" || name === "return") {
        const year  = (new Date()).getFullYear();
        const month = (new Date()).getMonth() + 1;
        const day   = (new Date()).getDate();
        const today = new Date(year, month, day);

        today.setMonth(today.getMonth() + (name === "departure" ? 1 : 2));
        const finalMonth = today.getMonth() <= 9 ? "0"+today.getMonth() : today.getMonth();

        var value = today.getFullYear()+"-"+finalMonth+"-"+today.getDate();
      } else {
        var value = this.sources[name][index];  
      }
      
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
      if(this.frmSelect[i].name === 'paymentOption') {
        continue;
      }
      const length = this.frmSelect[i].length;
      const index = Math.floor(Math.random() * (length-1) + 1);

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