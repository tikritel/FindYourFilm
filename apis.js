function removeElement(id) {
    var elem = document.getElementById(id);
    return elem.parentNode.removeChild(elem);
}


document.getElementById('myButton').addEventListener('click',function () {
      
        
        const userInput = document.getElementById('input1').value;
        const url1 = 'http://62.217.127.19:8010/movie';

        let xhr = new XMLHttpRequest();
        xhr.open('POST',url1, true);

        xhr.setRequestHeader("Content-Type", "application/json"); // gia na parei thn timh

        const requestBody = {'keyword': userInput};
        xhr.send(JSON.stringify(requestBody)); // dexetai mono string

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4){
                
                if (xhr.status == 200){
                    const result = JSON.parse(xhr.responseText);
                    console.log(result);
                
//Αρχικοποιηση συνθηκων για την for
var i = 0;
let divElem = document.getElementById('content');
var len = result.length;
var film_ratings = [];   
                    


//for loop                  

for (; i < len; ) {

// Δημιουργια Παραγραφου
    
var para = document.createElement("P");                           // Create a <p> element
para.setAttribute("id", "para" + i);
const data =  result[i].title;
console.log(data);
//console.log(data[i]);
var partext = document.createTextNode(data);
// Create a text node
para.appendChild(partext);                                       // Append the text to <p>
divElem.appendChild(para);                                       //append paragrapg to the divElem
divElem.appendChild(document.createElement("br"));  //προσθετει το br, δεν λειτουργει στη ιδια γραμμη. γτ?
i++;
    
}

                
//Με  κλικ πανω στη καθε ταινια:
for(let j=0; j<len; j++){  
console.log(j);
let index="para"+j;
console.log(index);


document.getElementById(index).addEventListener('click', function(){
//αν πατησεις σε καποια συγκεκριμενη ταινια:
if(index.click = true){
    /*alert(index);
    alert(result[j].title);
    alert(result[j].movieId);*/
    var x = result[j].movieId;
    
var radios = document.getElementsByName('rating');
var film_ratings = [];  

document.getElementById('btn').addEventListener('click', function(){
        for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
        // do whatever you want with the checked radio
        
        alert(radios[i].value);
        film_ratings.push({movieid: result[j].movieId, rating: radios[i].value});
  console.log(film_ratings);
       
        
        
        // Put the object into storage
     localStorage.setItem('film_ratings', JSON.stringify(film_ratings));
        // Retrieve the object from storage
        var retrievedObject = localStorage.getItem('film_ratings');
console.log('retrievedObject: ', JSON.parse(retrievedObject));
for (var i = 0, len = localStorage.length; i < len; ++i) {
  console.log(localStorage.getItem(localStorage.key(i)));
}
        
    
        break;
    }
}
    
//νεο xmlhttp request για να μπορει ο αλγοριθμος να  βρισκει αναλογα με το userid και το movie id το rating της ταινιας. Εδω λογικα θα πρπει ο αλγοριθμος να  συγκρινει αναλογα με το rating που εχει βαθμολογησει ο χρηστης τη ταινια και να βρισκει συντελεστη συσχετισης με τον αλγοριθμο στο * κατω απο to httprequest:
    const url2 = 'http://62.217.127.19:8010/ratings';

        let xhr2 = new XMLHttpRequest();
        xhr2.open('POST',url2, true);

        xhr2.setRequestHeader("Content-Type", "application/json"); // gia na parei thn timh
//παραδειγμα πινακα που ομως δεν λειτουργει [4,5,12]
        const requestBody2 = {'movieList':[4,5,12]};
        xhr2.send(JSON.stringify(requestBody2)); // dexetai mono string

        xhr2.onreadystatechange = function () {
            if (xhr2.readyState == 4){
                
                if (xhr2.status == 200){
                    const result2 = JSON.parse(xhr2.responseText);
                    
                }
            }
        }
        
        
        
        
        //*
      /*function mesos_oros(data)
{
    if(movieId[i] = x){
    let total = 0;

    
    for(let i = 0, l = data.length; i < l; total += data[i], i++);

    return total / data.length;
}}



function_athrisma(data,mesos_oros){

if(movieId[i] = x){
    let total= 0;

for(let i = 0, l = data1.length; i < l; total = total + (Math.pow((data1[i]-mesos_oros),2), i++));
return total
}}


//data1 kai data 2 ειναι αντιστοιχα πινακας που περιεχει giα καθε  userid  το αντιστοιχο rating για τη συκεκριμενη ταινια που εχει κανει submit ο χρηστης
function arithmitis(data1,data2,mesos_oros1,mesos_oros2){
if(movieId[i] = x){
total=0;
for(let i = 0, l = data1.length; i < l; total += ((data[i]-mesos_oros1)*(data[i]-mesos_oros2))  , i++));
return total
}




//Βρισκει το συντελεστη συσχετισης και κραταει τον πρωτο user id με r=1

while(r != 1){

var athrisma1= function_athrisma(data1);
var athrisma2= function_athrisma(data2);
var par =  Math.sqrt(athrisma1*athrisma2);
var ari = arithmitis(data1,data2,mesos_oros1,mesos_oros2);
var r = ari/par;
    var met = userId;
    
 i++;   
}


//Μετα πρεπει να φτιαχτει ενας αλγοριθμος με το userid οπου θα χρησιμοποει αυτο το user id που βρηκα παραπανω για να βρει τις ταινιες του συγκεκριμενου userid που εχουν rating 5 και ιδιο genre μεσω μιας while. Θα εμφανιζει μετα τις πρωτες 7 ταινιες απο αυτον τον πινακα (for loop) αλλαζοντας τηn html με τη innerhtml


*/
        
        
    
    });

    
    
  
   var newdiv = document.createTextNode(result[j].title);
    document.getElementById("movie_details").appendChild(newdiv);
    film_rating = [result[j].movieId]
    
}

//η λιστα με τις ταινεις εξαφανιζεται
removeElement("content");
removeElement("input1");
removeElement("myButton");


//Εμφανιζεται η φορμα για τα ratings
document.getElementById("rating").style.display = "block";


});
}
                    


    
                }
            }
        }

    })

