const product = {
    1: "Laptop",
    2: "Phone",
    3: "Tablet"
};
function getproduct(id){
    return new Promise((resolve, reject) => {
        if(product[id]){
            resolve(product[id]);
        }else{
             reject("Product not found");
        }
    });
}

getproduct(2)
.then(product => {
    console.log(product);
})
.catch(error => {
    console.log(error);
});