console.info(0);

function sayWelcome() {
  console.info("salut!" + prenume + " bine ai venit la noi!");
}

var nume = " Alex ";
var prenume = " Miclea";
var owner = " Alex's";
var msg1 = ' ai zis "nick"?';
var msg2 = '" nup"';
var template = `text cu ' si "`;
var skills = ["html", "css", "js"];
prenume = " Nick";
console.info("all variables were initialayzed");
console.log(nume);
console.debug(" cum te cheama? -" + prenume);
sayWelcome();

// schimb valutar

var cursEUR = 4.5;
var myEUR = 20;
var myRON = 0;
var friendEUR = 100;
var friendRON = 0;
// operator * / + -

myRON = myEUR * cursEUR;
console.info("eu am " + myRON + " RON");

friendRON = friendEUR * cursEUR * 0.99;
console.info("tu ai " + friendRON + " RON");
function extractfromATM(ammount) {
  console.info(" ======================");
  console.info("suma extrasa este : " + ammount);
  var comision = ammount * 0.01;
  if ((comision < 2, 5)) {
    comision = 2.5;
    console.warn("comision minim aplicat ");
  }
  console.info("comision aplicat : " + comision);
  console.info(" ======================");
}
extractfromATM(1000);

//////////////
console.info(3 + 7);
