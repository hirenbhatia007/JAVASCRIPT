//XMLHTTP REQUEST/
var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    
//      uses of if else if 
      
      if (this.readyState == 4 && this.status == 200) {
      var json = JSON.parse(this.responseText);
        var i =1;
        $.each(json, function(k,v){
           var x =   "<div><img class='img1' src='" + v.img +"'>"+
                        "<h3>" + v.name+ "</h3></div>";
            if (i > 3){
                 $(".hir2").append(x);
            }else{
                 $(".bc").append(x);
            }
           i++;
        });
    }
  };
  xhttp.open("GET", "js/data.json", true);
  xhttp.send();