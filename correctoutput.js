
    var counter=0;
    function showCounter()
    {   
        
         document.getElementById("span").innerHTML=counter;
    }
    function incre()
    {      
        counterReducer("INC",counter++);
    }
    function decre()
    {
        counterReducer("DEC",counter--);
    }
    function counterReducer(actionType,counter)
    {
        showCounter();
    }