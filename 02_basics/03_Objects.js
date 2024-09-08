// Singleton
// Object.create

// Object literals

const mySym = Symbol("Key1")

const jsuser = {
      name: "Yogesh",
      "full name": "yogesh nag",
      [mySym]:"Key1",
      Age: 18,
      Location: "Raipur",
      Email: "ynag452gmail.com",
      IsLoggedIn: "False",
      lastLoginDays: ["Monday","tuesday"]

}
// console.log(jsuser.Email)        // to access objects
// console.log(jsuser["Email"])
// console.log(jsuser["full name"])
// console.log(typeof(jsuser[mySym]));

jsuser.Email = "yogesh@Chatgpt.com"
// Object.freeze(jsuser)
jsuser.Email = "yogesh@google.com"
// console.log(jsuser);

jsuser.greeting = function(){
      console.log("Hello js user");
}
jsuser.greetingTwo = function(){
      console.log(`Hello js user,${this.name}`);
      
}
console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());
