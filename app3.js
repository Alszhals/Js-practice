function BMI(w,h){
    let bmi =w/(h*h)
    if (bmi>24.9){return "Your BMI is "+bmi+", so you are overweight."
}else if( bmi<18.5){
    return "Your BMI is"+bmi+", so you are underweig"
}else {
    return "Your BMI is "+bmi+", so you have a normal weight."}

}