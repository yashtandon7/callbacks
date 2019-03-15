
function f1(callback){
    console.log("Inside f1 function");
    setTimeout(function (){
    console.log('inside f1 set Timeout');
    return callback(`India is the best country`);
    },2000)
};

function f2(callback){
    console.log("inside f2 function");
    setTimeout(function (){
        for(let i=0;i<10;i++){
        i%2==0?console.log(i):null;
        }
        f1(callback);
        console.log('below f1 callback');
    },5000)
};


function f3(x,callback){
    console.log("inside f3 function");
    setTimeout(function (){
        console.log(`Australia has kangaroos`);
        f2(callback);
        console.log('after f2 callback');
        //return callback(`Elephants`);
    },1000)
};

let x = 5;
f3(x,function(result){
    console.log("Inside f3 calling function");
    console.log(`Completed, ${result}`);
});

console.log(`Started ? `);
console.log(`Started ? `);
console.log(`Started ? `);
console.log(`Started ? `);











