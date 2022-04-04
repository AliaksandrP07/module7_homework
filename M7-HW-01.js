let obj = {
    name: 'Brad',
    surname: 'Pitt',
    age: 58,
    position: 'actor',
};

function getKey () {
for (let key in obj){
if (obj.hasOwnProperty(key)) {
console.log(`${key} - ${obj[key]}`)
}}}

getKey(obj);

// Модуль 7 задание 1