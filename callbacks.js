//callback example
// function add(val1, val2,callback){
//     setTimeout(function(){
//         return callback(val1 + val2);
//     },2000)
// };

// console.log('before add');
// add(5,9,function(val){
//     console.log(val);
//     console.log('after add');
// });



//simple code with problem and it has 3 different solutions to it. (callbacks, promises, async/await)
function add(val1, val2){
    setTimeout(function(){
        return val1 + val2;
    },2000);
};

console.log('before add');
var val = add(5,9);
console.log(val);
console.log('after add');
