const btnPrimarys = document.getElementsByClassName("btn-primary")[0];
const frmInput    = window.document.getElementsByTagName('input');
const frmSelect   = window.document.getElementsByTagName('select');
const iframe      = document.getElementById('eepay');
const sources     = {
  "firstName": ["Zacarias", "Kasimiro", "Rosa", "Benito", "Elber", "Hugo", "Melasuda", "Maria Dolores", "Elsa", "Debora", "Lola", "Lago", "Aquiles"],
  "lastName": ["Piedras", "Melchoto", "Melano", "Tucuca", "Camelas", "Galarga", "Norrea", "Rico", "Del Orto", "Porrico", "Teste", "Meraz", "Loza", "Baila"],
  "phoneNumber": ["12345567890", "0987654321"],
  "email": ["diego@2e-systems.com", "diego.vargas@2e-systems.com", "vargas@2e-systems.com"]
};

let event = new Event('change', { bubbles: true });
    event.simulated = true;

//autofills input-form
for (var i = 0; i < frmInput.length; i++) {
  if(frmInput[i] !== "text") {
    continue;
  }
  const name = frmInput[i].name.split('_')[0];
  const lengthSource = sources[name].length;
  const index = Math.floor(Math.random() * lengthSource);
  const value = sources[name][index];
  
  frmInput[i].value = value;
  let tracker = frmInput[i]._valueTracker;
  if (tracker) {
    tracker.setValue(value);
  }
  frmInput[i].dispatchEvent(event);
}

//autofills dropdown-form
for (var i = 0; i < frmSelect.length; i++) {
  const length = frmSelect[i].length;
  const index = Math.floor(Math.random() * (length - 1 + 1)) + 1;

  let event = new Event('change', { bubbles: true });
      event.simulated = true;

  frmSelect[i][index].selected = true;
  let tracker = frmSelect[i]._valueTracker;

  if (tracker) {
    tracker.setValue(value);
  }
  frmSelect[i].dispatchEvent(event);
}

//Submits the form
//btnPrimarys.click();