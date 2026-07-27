function calcuatingshipping(weight){
    return new Promise((resolve, reject) => {
        if(weight>0){
            let cost=weight*5;
            resolve(cost);
        }else{
            reject("invalid weight");
        }
    });
}
//valid example
 calcuatingshipping(10)
.then(cost => {
    console.log("Shipping cost:", cost);
})
.catch(error => {
    console.log(error);
});
//unvalid examole
calcuatingshipping(-2)
.then(cost => {
    console.log("Shipping cost:", cost);
})
.catch(error => {
    console.log(error);
});




          