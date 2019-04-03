function trocarClasse() {
     var obj = document.getElementById("container");

     if (screen.width == "800"){
        obj.className = 800;
     }
     else if (screen.width == "1024"){
        obj.className = 1024;
     }
     else if (screen.width == "1280" ){
        obj.className = 1280;
     }
     else if (screen.width == "1440"){
        obj.className = 1440;
     }      
     else if (screen.width == "1600"){
        obj.className = 1600;
     }
     else {
        obj.className = outra;
     }
  }

  </script>