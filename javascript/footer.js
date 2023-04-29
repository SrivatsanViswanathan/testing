function footer() {
 const div = document.getElementById("footer");
 div.setAttribute("class", "footer");

 const rye2 = document.createElement("div");

 rye2.textContent = "Last modified: " + date();
 div.append(rye2);

 for (let i = 0; i < 1; i++) {
  const rand = document.createElement("div");
  rand.setAttribute("class", "space");
  div.append(rand);
 }

 const rye = document.createElement("div");
 rye.textContent = "\251"+ " Ryerson University";
 div.append(rye);

 for (let i = 0; i < 2; i++) {
  const rand = document.createElement("div");
  rand.setAttribute("class", "space");
  div.append(rand);
 }
}

function date() {

 var date = document.lastModified;

 const char = date.split('');
 var day = '';
 var month = '';
 var year = '';
 var time = '';
 var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
 var hours = '';
 var minutes = '';

 for (let i = 0; i < 2; i++) {
  month = month + char[i];
 }

 month = parseInt(month);
 month = months[month - 1];

 for (let i = 3; i < 5; i++) {
  day = day + char[i]
 }
 for (let i = 6; i < 10; i++) {
  year = year + char[i]
 }
 for (let i = 11; i < 19; i++) {
  time = time + char[i]
 }

 const char2 = time.split('');

 for (let i = 0; i < 2; i++) {
  hours = hours + char2[i];
 }
 hours = parseInt(hours);

 for (let i = 2; i < time.length - 3; i++) {
  var minutes = minutes + char2[i];
 }
 if (hours <= 12) {
  hours = hours;
  minutes = minutes + " AM";
 }
 else {
  hours = hours - 12;
  minutes = minutes + " PM";
 }

 var modified = month + " " + day + ", " + year + " " + hours + minutes + " " + "EDT";
 return modified;
}

footer();