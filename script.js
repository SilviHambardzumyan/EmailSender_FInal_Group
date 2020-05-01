var logpass =  [
  { 
    email: "silvihambardzumyan1999@gmail.com",
    password: "123456"
  }
]

function getInfo() {
  var email = document.getElementById("email").value
  var lock = document.getElementById("password").value

  console.log("correct")
}
                                                                                                                                                  
function ChooseFromTheListBelow() {
        var mails = [
{
"Name": "Ethan ",
"Surname": "Coleman",
"Email": "ethan85@gmail.com"
},
{
"Name": "Albert ",
"Surname": "Gardner",
"Email": "albert-92@yahoo.com "
},
{
"Name": "Michael",
"Surname": "Jacobs ",
"Email": "michael_97@gmail.com"
},
{
"Name": "Christian ",
"Surname": "Reyes",
"Email": "christian97@mail.com"
},
{
"Name": "Judith",
"Surname": "Greene",
"Email": "judith-87@mail.com"
},
{
"Name": "Julia ",
"Surname": "Dixon ",
"Email": "julia-dixon@gmail.com"
},
{
"Name": "Alice ",
"Surname": "Ross",
"Email": "alice.ross@gmail.com"
},
{
"Name": "Frank",
"Surname": "Larson",
"Email": "frank-larson@yahoo.com"
},
{
"Name": "Marie ",
"Surname": "Peters",
"Email": "marie-peters@mail.ru"
},
{
"Name": "Diana ",
"Surname": "Vasquez",
"Email": "diana85@yandex.ru"
},
{
"Name": "Jerry ",
"Surname": "Diaz",
"Email": "jerry_diaz@yandex.ru "
},
{
"Name": "Cullen",
"Surname": "Berneir",
"Email": "turner.clemens@yahoo.com"
},
{
"Name": "Salma",
"Surname": "Densik",
"Email": "salma_salma@gmail.com"
},
{
"Name": "Junior ",
"Surname": "Beahan ",
"Email": "Junior_887@yandex.ru"
},
{
"Name": "Anthony ",
"Surname": "Lynch",
"Email": "anthony_93@gmail.com"
},
{
"Name": "Jessica ",
"Surname": "Sanders ",
"Email": "jessica92@gmail.com"
},
{
"Name": "Stephen ",
"Surname": "Crutis ",
"Email": "stephen-95@gmail.com"
},
{
"Name": "Tyler ",
"Surname": "Chen ",
"Email": "tyler.chen@yahoo.com"
},
{
"Name": "Sara ",
"Surname": "Rios ",
"Email": "sara-rios@gmail.com"
},
{
"Name": "Arthur ",
"Surname": "Obrien ",
"Email": "arthur77@mail.com"
},
{
"Name": "Jazmyne ",
"Surname": "Dooley ",
"Email": "jazmyne.52@gmail.com"
},
{
"Name": "Scott ",
"Surname": "Weber ",
"Email": "scott_weber@gmail.com"
},
{
"Name": "Frances ",
"Surname": "Martin",
"Email": "frances94@mail.com"
},
{
"Name": "Alan",
"Surname": "Howell ", "Email": "alan.alan.howell@gmail.com"
},
{
"Name": "Christian ",
"Surname": "Oliver",
"Email": "oliver.2000@yaoo.com"
},
{
"Name": "Lisa ",
"Surname": "Wells ",
"Email": "lisa_wells_lisa@yahoo.com"
},
{
"Name": "Nathan ",
"Surname": "Hicks",
"Email": "nathan.hicks@gmail.com"
},
{
"Name": "Evelyn ",
"Surname": "Wright",
"Email": "evelyn_95@gmail.com"
},
{
"Name": "Beverly ",
"Surname": "Little ", "Email": "beveryly.beverly@yahoo.com"
},
{
"Name": "Jeffery ",
"Surname": "Simpson ",
"Email": "simpson.jeff@mail.com"
}
]     
        
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
