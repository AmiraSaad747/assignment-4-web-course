function send_verifiction_email(email){
    return new Promise((resolve, reject) => {
        console.log("sending verifiaction email");
        setTimeout(()=>{
            console.log("email sent successfully");
            resolve();

        },2000);    
    });
}
async function register_user(name,email){
try{
    if(!name||!email){
        throw new Error("name and email are required");
    }
    await send_verifiction_email(email);
    console.log("user registered successfully")
}
catch (error){
    console.log(error.message);
}
}
register_user("Esraa", "esraa@gmail.com");