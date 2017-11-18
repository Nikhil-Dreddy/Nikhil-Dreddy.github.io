
            $(document).ready(function(){
                $("#maincontainer").hide();
                $("#maincontainer").fadeIn(2000);
                $("#jumbotron").hide();
                $("#jumbotron").fadeIn(4000);
            });
      
            $(document).ready(function(){
                $("#padding").mouseenter(function(){
                    $("#about").css("background-color","gray");    
                    $("#about").css("border-bottom","3px solid gray");
                });
            });
            $(document).ready(function(){
                $("#padding").mouseleave(function(){
                    $("#about").css("background-color","#fdfdfd");
                    $("#about").css("border-bottom","0px solid gray");
                });
            });
            $(document).ready(function(){
                $("#about").mouseenter(function(){
                    $("#about").css("background-color","gray");    
                    $("#about").css("border-bottom","3px solid gray");
                });
            });
            $(document).ready(function(){
                $("#about").mouseleave(function(){
                    $("#about").css("background-color","#fdfdfd");
                    $("#about").css("border-bottom","0px solid gray");
                });
            });
 