let student = {

};

function addProperty (object, key, value) {
  object[key] = value;
};

addProperty(student, 'fullName', 'Yago Moreira');
addProperty(student, 'email','yagomoreira@gmail.com');
addProperty(student,'phone','+xx xx xxxxx-xxxx');
addProperty(student,'Github','https://github.com/yagobmoreira');
addProperty(student,'LinkedIn','https://www.linkedin.com/in/yago-borges-moreira-5aa46314b/')
console.log(student);