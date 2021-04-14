//<<<<<<   pari e dispari   >>>>>>

//creo due variabili prompt per il segno e per il numero
var scelta = prompt('scegli tra pari o dispari');
var numero = parseInt(prompt('Inserisci un numero da 1  a 5'));

pardisp (scelta,numero) //dichiaro la funzione

function pardisp (pd,number){

  console.log('il numero scelto da te è: ' + number); //numero utente

  var n_pc = Math.floor(Math.random() * 5) + 1;
  console.log('il numero scelto  dal computer  è: ' + n_pc); //numero pc

  //somma dei valori utente e pc
  var somma = number + n_pc;
  console.log(somma)

  // utilizzo switch per non ripetere gli if più volte
  switch (pd){
    case "pari" :
      if(somma%2 === 0){
      console.log('la somma dei numeri è << PARI, HAI VINTO >>')
    }else{
      console.log('la somma dei numeri è << DISPARI, HAI PERSO>>')
    }
    break;
    case "dispari" :
      if(somma%2 !== 0){
      console.log('La somma dei numeri è << DISPARI, HAI VINTO>>')
    }else{
      console.log('La somma dei numeri è << PARI, HAI PERSO>>')
    }
    break;

    default:
      console.log('Hai inserito male i dati, ritenta')
  }

}

