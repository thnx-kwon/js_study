

function a(){
    console.log(this);
}

const b = () => {
    console.log(this);
}

a();    // global
b();    // module.export
console.log(this);    // module.export
console.log(process.env)