async function orderfood(name,time) {
    return new Promise((resolve,reject)=>{
        if(name == "burger") reject("burger not available")
        setTimeout(()=>{
            resolve("order for the " +name+ " Prepared");
        },time);
    })
}
async function restaurant(){
    console.log("Place Order: ");
    let pizza = await orderfood("Pizza",2000);
    console.log(pizza);
    try{
    let burger = await orderfood("burger",3000);
    console.log(burger);
    }
   catch(error){
    console.log(error)
   }
    let noodles = await orderfood("Noodles",4000);
    console.log(noodles);
    
    console.log("All orders completed");
}
restaurant();