let counter = 0;
function increment(){
    if (counter>=0) {
        counter++;
        document.getElementById('counter').innerHTML = counter;
        document.getElementById('error').innerHTML ="";
        document.getElementById('buttonID').style.display='inline';
    }
}
 
function decrement(){
    {
        if (counter>0) {
            counter--;
            document.getElementById('counter').innerHTML = counter;
        } else {
            document.getElementById('error').innerHTML ="Error : Cannot go below 0";
        }
    }
    if (counter==0) {
        document.getElementById('buttonID').style.display='none';
    }
}
 
function reset(){
    counter = 0;
    document.getElementById('counter').innerHTML = counter;
    if (counter==0) {
        document.getElementById('buttonID').style.display='none';
    }
}