/*var name = '小明';
var age = 20;
var message = `你好，${name},你今年${age}岁了！`
alert(message)*/

function foo(x){
    alert('x = ' + x);
    for (var i = 0; i < arguments.length; i++){
        alert('arg' + i + '=' + arguments[i]);
    }
}
foo(10,20,30);