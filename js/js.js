var count = 0

var interval = setInterval(function(){
    count++

    if(count > 11){
        alert (count)
    }

},2000)

console.log(interval)