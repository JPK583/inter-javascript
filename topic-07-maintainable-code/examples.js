user = {
    name:"Greg",
    email:"greg@greg.com",
    phone:"123-456-7890"
}

console.log("User:" + user.name);
console.log("Email:" + user.email);
console.log("Phone:" + user.phone);

function logUserField(label, value) {
    console.log(label,":",value);
}

logUserField("User", user.name)
logUserField("Email", user.email)
logUserField("Phone", user.phone)

function showField(field,user) {
    console.log(field," -- ",user[field]);
}

showField("phone",user)

// x = "5"

data = { 
    value:"5.5"
}

x = data.value
console.log(x)

y = 1
console.log(y)

console.log(x," + ",y)

console.log(x," + ",y, " = " , x + y)

// JAVASCRIPT STRING COERCION IS EVIL AND IT _WILL_ GET YOU SOMEDAY

// assert "4" == 5 - 1

// assert "4" === 5 - 1

function setFlag() {
    flag=true   // this is creating a _global_ variable
    return flag
}

setFlag()

console.log(flag)

use strict;

i = 17

function f() {
    i = 12
    for (i = 0; i < 3; i++)
    {
        console.log(i)
    }
    console.log(i)
}

f()

console.log(i)

// "let" and "const" ARE HELPFUL, "var" IS SKETCHY AND SHOULD BE AVOIDED

// USE NEW FEATURES CAREFULLY

data = {
    name:"Greg",
    profile2:{
        email:"greg@greg.com"
    }
}

const user_mail = data && data.profile && data.profile.email;

console.log("user_mail = ",user_mail)

const user_mail2 = data?.profile?.email

console.log("user_mail2 = ",user_mail2)

point = {
    x:1,
    y:2
}


// const x = point.x;
// const y = point.y;

// const {x,y} = point

// let d = new Date()

// print(d)

// let currentDateTimestamp = new Date()

// print(currentDateTimestamp)

