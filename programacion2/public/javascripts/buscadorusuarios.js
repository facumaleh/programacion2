function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
   var text;
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
        text= 'Esperamos que hayas encontrado lo que buscabas :)'
      }
      else {
        li[i].style.display = "none";
      }
   
      document.getElementById("acaIriaElTextoSiNoHayNada").innerHTML = text;

    }



      
    };


    // if (text=="undefined") {
    //   text= "no hay nada";
    // }
    // document.getElementById("acaIriaElTextoSiNoHayNada").innerHTML = text;

