var height = 193;

var weight =8366 ;

 const BMI = weight / (height/100*height/100);

if (BMI <= 18.5) {
    console.log("Your UnderWeight.");
}
else if (BMI >= 18.5 && BMI <= 24.9) {
    console.log("You Normal");
}

else if (BMI >= 25 && BMI <=29.9) {
    console.log("Overweight");
}

else {console.log("Obese");}