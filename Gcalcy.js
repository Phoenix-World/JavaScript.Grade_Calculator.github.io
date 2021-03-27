
const calcy = ()=>{
	let wd = document.getElementById('wd').value;
	let maths = document.getElementById('maths').value;
	let comp = document.getElementById('comp').value;
	let phy = document.getElementById('phy').value;

	let grades = "";

	let totalGrades = parseFloat(wd)+parseFloat(maths)+parseFloat(comp)+parseFloat(phy); //find total
	alert(totalGrades); 

	let perc = (totalGrades/400)*100; //find percentage
	alert(perc);

if (perc<=100 && perc>=80) {grades="A";}
else if (perc<=79 && perc>=60) {grades="B";}         //find grades
else if (perc<=59 && perc>=40) {grades="C";}
else{grades="F";}

if (perc>=39.5) {
	document.getElementById('showData').innerHTML=
	`out of 400 Your Total is ${totalGrades} and Percentage              
	is ${perc}% .<br> Your Grade is ${grades} . You are PASS .`      //check pass or fail, combined all & show output
}
else{
	document.getElementById('showData').innerHTML=
	`out of 400 Your Total is ${totalGrades} and Percentage
	is ${perc}% .<br> Your Grade is ${grades} . You are FAIL .`

}

}