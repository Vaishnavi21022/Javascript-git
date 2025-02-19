let count=0
function increasecount(){
    count++
    display()
}

function resetcount(){
    count=0
    display()
}
function display(){
    document.getElementById("counter").innerHTML=count;
}
