/* Challenge 2: Create a function to ,
       1) Calculate and display the BMI.  Look up the formula which you should have done in Challenge 1
       2) Display BMI status as per the chart in index.html
       3) Display the corresponding image based on the BMI status.
*/
/* 
Guideline:
1) Create the function
2) Get the information from the UI
3) Perform the necessary calculation.
4) Make the appropriate decisions.  Store the appropriate BMI status.  Store the appropriate filename for the image.
5) Display the output

Use past examples, classwork and practicals to assist you in completing this practical.
*/
function calculateBMI(){

      let height = parseFloat(document.getElementById("height").value);
      let weight = parseFloat(document.getElementById("weight").value);
      let output = document.getElementById("output");
      let filename = "";
      let status = "";

      let bmi = (weight / (height * height)) * 703;

      if (bmi < 18.5){
        status = "Underweight";
        filename = "underweight.png";
      }else if (bmi >= 18.5 && bmi <= 24.9){
        status = "Healthy Weight";
        filename = "healthyweigh.png";
      }
      else if (bmi >= 25 && bmi <= 29.9){
        status = "Overweight";
        filename = "overweight.png";
      }
      else{
        status = "Obesity";
        filename = "obeseweight.png";
      }

      output.innerHTML = `
  Your BMI is ${bmi.toFixed(2)}
  <br>Status: ${status}
  <br><img src="${filename}">
   `} 
