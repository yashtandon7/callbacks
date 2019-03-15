//.then promise
var result;

function add(val1, val2){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            const error = false;
            if(error){
                reject('Some New Error');
            }
            else{
                result = val1 + val2;
                resolve();
            }
        },2000);
    });   
};

console.log('before add');

add(5,9).then(print).then(after).catch(err => console.log(err));

function print(){
    console.log(result);
}

function after(){
    console.log('after add');
}
