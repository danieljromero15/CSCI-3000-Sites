function drawTriangle(triangleSize) {

   // Your solution goes here
    let output = "";
    for(let i = 1; i <= triangleSize; i++){
        for(let j = 0; j < i; j++){
            output = output.concat("*");
        }
        output = output.concat("\n");
    }
    output = output.slice(0, -1); // Literally only here because zybooks didn't like the newline at the very end, just removes that

    console.log(output);
   
}