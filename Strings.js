function vacio(texto) {
    if(texto==null){
     return "Esta cadena esta vacia.";
    } else {
     return texto.charAt(0);
    }}
    console.log (vacio("Esta cadena"));




    function dobletexto(str1, str2) {
        if (str1.toLowerCase ()==str2.toLowerCase ()){
    return "Son Iguales";
        }else {
    return false;
        }}
console.log (dobletexto("String2", "string1"));