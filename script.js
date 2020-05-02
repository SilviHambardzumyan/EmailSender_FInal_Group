var logpass = { 
  email: "silvihambardzumyan1999@gmail.com",
  password: "123456"
}

function login(nextPage) {
  var email = document.getElementById("email").value;
  var pass = document.getElementById("password").value;

  if (email == logpass["email"] && pass == logpass["password"]) {
    goToPage(nextPage)
  } else {
    document.getElementById("loginvalid").innerHTML = "Email or Password is not correct!"
  }
}

function goToPage(nextpage) {
  
  pages = document.getElementsByClassName("page");
  for (i = 0; i < pages.length; i++) {
    pages[i].style = "display: none;";
  }
 
  document.getElementById(nextpage).style = "display: block;"
  if (nextpage == "page3") {
    loadRecepients()
  } else if (nextpage == "page1") {
    document.getElementById(nextpage).style = "display: flex;"
  }
}

function ChooseFromTheListBelow() {
   
  var col = [];
    for (var i = 0; i < mails.length; i++) {
      for (var key in mails[i]) {
        if (col.indexOf(key) === -1) {
          col.push(key);
        }
      }
  }
       
  var table = document.createElement("table");

  var tr = table.insertRow(-1);                   

  for (var i = 0; i < col.length; i++) {
      var th = document.createElement("th");      
      th.innerHTML = col[i];
      tr.appendChild(th);
  }

        
  for (var i = 0; i < mails.length; i++) {

      tr = table.insertRow(-1);

      for (var j = 0; j < col.length; j++) {
          var tabCell = tr.insertCell(-1);
          tabCell.innerHTML = mails[i][col[j]];
      }
  }

    
  var divContainer = document.getElementById("showData");
  divContainer.innerHTML = "";
  divContainer.appendChild(table);
}

function loadRecepients(){
  for (var i = 0; i < mails.length; i++) {
    document.getElementById("EmailList").innerHTML += "<option value=" + mails[i]["Email"] + ">";
  }
}

function SubjectCharacters (inputtxt, minlength, maxlength) {
  var field = inputtxt.value;
  var mnlen = minlength;
  var mxlen = maxlength;

  if(field.length <mnlen || field> mxlen.length) { 
    document.getElementById("subjectValid").innerHTML = "We suggest that you keep your subject between " +mnlen+ " and " +mxlen+ " characters";
  } else { 
    document.getElementById("subjectValid").innerHTML = "Looks good!";
  }
}

function sendfunction() {
  document.getElementById("submitvalid").innerHTML = "Your email has been sent.";
}

function myFunction(){
	var username = document.getElementById('username').value;
	var login = document.getElementById('login').value;
	var pass = document.getElementById('password').value;
	var hellodiv = document.getElementById('hellodiv');

	console.log(username, login, pass);
}
