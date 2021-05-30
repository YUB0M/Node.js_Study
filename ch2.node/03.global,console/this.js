// exports와 this
console.log(this); // global scope의 빈 객체
console.log(this === module.exports)

function a () {
    console.log(this === global);
    // node의 function안에 있는 this는 global
}
a();