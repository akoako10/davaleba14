function fizzBuzz(x){
    if(x%15==0){
        console.log("fizzBuzz")
    }else {
        if(x%5==0){
            console.log("buzz")
        }else {
            if(x%3==0){
                console.log("fizz")
            }else {
                if(x==1){
                    console.log("1")
                }else {
                    console.log(x)
                }
            }
        }
    }
}
//fizzBuzz(30)

function luwebisJami(){
    var x = prompt("შეიყვანეთ პირველი რიცხვი:")
    var y = prompt("შეიყვანეთ მეორე რიცხვი:")

   if(x<y){
    for(var a=x;a<=y;a++) {
    if(a%2==0){
        console.log(a)
    }
   }

   }else {
    for(var a=y;a<=x;a++){
        if(a%2==0){
            console.log(a)
        }
    }
   }
}





function fibonacci(n) {
    if ( n == 1) {
        console.log(1);
        return;
    }
    if ( n == 2) {
        console.log(1);
        console.log(1);
        return;
    }
    var num1 = 1;
    var num2 = 1;
    console.log(1);
    console.log(1);
    for (let index = 0; index < n-2; index++) {
        let x = num2;
        num2 = num1 + num2;
        num1 = x;
        console.log(num2);
    }
}
