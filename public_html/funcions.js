

function hora(nom, recep) {
    var d = new Date();
    var hora = d.getHours();
    var resultat = "Bon";
    
    if(hora < 12) { 
        resultat += " dia, "; 
    }else if(hora > 12 && hora < 19){ 
        resultat += "a tarda, ";
    }else if(hora >19){
        resultat += "a nit, ";
    }
    resultat += nom + "!";
    
    document.getElementById(recep).innerHTML = resultat;
    
    return true;
}

function dataNaixement(data, recep) {
    var resultat = 0;
    var vectorData = data.split("/");
    var any = vectorData[2];//L'ùltim element del vector contè l'any
    var mes = vectorData[1];//El mes
    var dia = vectorData[0];//EL dia
    var d = new Date();
    var anyActual = d.getFullYear();
    var mesActual = d.getMonth();
    var diaActual = d.getDate();
    //var anyFinal = anyActual - 2000;//Dues últimes xifres
    //var edat = 0;
    var cumple = 0;//Afegir any si passa el cumple
    var adult = 18;
    var avi = 65;
    
    if(mes >= mesActual) {
        if(dia > diaActual){
            cumple = -1;
        }
    }
    //console.log(cumple);
    
    /*if(any > anyFinal) { //any actual
        edat = parseInt(any) + 1900;
    } else {
        edat = parseInt(any) + 2000;
    }*/

    resultat = anyActual - any + cumple;
    
    if(resultat < adult){
       document.getElementById(recep).style.backgroundColor = "pink";
       resultat += " bebe";
    } else if(resultat > adult && resultat < avi) {
        document.getElementById(recep).style.backgroundColor = "lightblue";
        resultat += " adult";
    } else {
        document.getElementById(recep).style.backgroundColor = "red";
        resultat += " avi";
    }
    
    document.getElementById(recep).innerHTML = "Anys: " + resultat;
    
    return true;
}

function resolucio(resolucio) {
    resultat = "";
    
    resultat += "Width: " + screen.width + " px - Height: " + screen.height + " px";
    
    document.getElementById(resolucio).innerHTML = resultat;
    return true;
}


