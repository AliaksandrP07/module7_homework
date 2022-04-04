const str = 'name';
const obj = {
    name: 'Nick',
    age: 55,     
};

function checkObj(n1, n2){
    if(n1 in n2){
        return true;
    }
    else{
        return false;
    }
}
console.log(checkObj(str, obj));

// Модуль 7 задание 2