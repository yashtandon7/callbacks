
//async await
var result = 5, mul_result;

function add(val1, val2){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            const error = false;
            if(error){
                reject('Some New Error(Add)');
            }
            else{
                result = val1 + val2;
                resolve();
            }
        },2000);
    });   
};

function multiply(val1, val2){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            const error = false;
            if(error){
                reject('Some New Error(Multiply)');
            }
            else{
                mul_result = val1 * val2;
                resolve();
            }
        },3000);
    });
};


console.log('before add');

async function handle(){
    try{
        add(5,9); 
        await multiply(5,9);
        console.log(result);
        console.log(mul_result);    
        console.log('after add');  
    }
    catch(error){
        console.log(error);
    }
}

handle();

