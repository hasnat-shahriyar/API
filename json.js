const user = {id: 1, name: "Nahin", specialization: "Web Developer"};
// JavaScript Object Notation (JSON)
const stringyfied = JSON.stringify(user);
console.log (user);
console.log (stringyfied);

// { id: 1, name: 'Nahin', specialization: 'Web Developer' } -> JS Object
// {"id":1,"name":"Nahin","specialization":"Web Developer"} -> JSON (strings of the object)

// Example 
const shop = {
    owner : "Hasnat",
    address : {
        area : "Farmgate",
        city : "Dhaka",
        country : "Bangladesh"
    },
    products : ["laptop", "keyboard", "headphone", "monitor"],
    revenue : 45000,
    isOpen : true,
    isNew : false,
}
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);