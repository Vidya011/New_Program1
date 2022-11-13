//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

let database_username ="name123@gmail.com";
 database_password ="23456";

let username="name123@gmail.com";
user_password ="23456";

if(database_username==username){
  if(database_password==user_password){
    console.log("successfully logged ");
  }else{
    console.log("incorrect password");
  }
}else{
  console.log("invalid username");
}