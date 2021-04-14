//<<<<<<   PALINDROMA   >>>>>>

//chiediamo all utente di inserire una parola 

var parola= prompt("Inserisci una parola");

var esito= palindroma(parola);  
console.log("complimenti hai digitato "  + parola +  esito);

/* funzione */
function palindroma(str){
  var arr  = []; // array vuota
  var limit = str.length; // lunghezza parola
  for( var i = 0; i < limit ; i++){ // inizio ciclo 
    var n = i + 1;
    arr.push(str.slice(i,n)); //l array si riempie
  }

  var contrario = "";
  for (var x = (limit-1); x >= 0 ; x--){ //ciclo al contrario
    var lettera = arr[x];
    contrario += lettera;

  }

  var risultato = "";
  //console.log(parola)
  //console.log(contrario)
  if (parola === contrario){  //condizione in cui stabilisco se la parola è o non è palindroma
    risultato = " è palindroma";
    return risultato;

  } else{
    risultato = " non è palindroma"
    return risultato;

  }
}


//TENTATIVO MISERAMENTE FALLITO

/* function palindroma(str){
  var parola_1 = str.split(''); //divido la stringa in un array
  console.log(parola_1);
  var parola_2 = parola_1.reverse().join(''); //inverto l ordine degli elementi di un array & restituisco l array come una stringa
  console.log(parola_2);
  if (parola_1 === parola_2){
    console.log(parola + " è palindroma");
  }else{
    console.log(parola + " non è palindroma");
  }
  
}
 */

