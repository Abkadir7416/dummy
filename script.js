

function numberFunction(data){
    let textOutput = document.getElementById("output");
    let oldValue = textOutput.value;
    textOutput.value = oldValue + data;
}

function operatorFunction(data){
    let textOutput = document.getElementById("output");
    let oldValue = textOutput.value;
    if(oldValue==''){
        if( data=='+' || data=='-'){
            textOutput.value = data
        } 
        
        return;
    }

    let len = oldValue.length;
    let lastChar = oldValue[len-1];
   
    if(lastChar =='+' || lastChar =='-' || lastChar =='*' || lastChar =='/' || lastChar =='%'){
        let newValue = oldValue.slice(0, len-1);
        textOutput.value = newValue + data;
    }
    else textOutput.value = oldValue + data;
       
}

function decimalFunction(data){
    let textOutput = document.getElementById("output");
    let oldValue = textOutput.value;
    let len = oldValue.length;
    let lastChar = oldValue[len-1];
    // if(lastChar =='.'){
    //     let newValue = oldValue.slice(0, len-1);
    //     textOutput.value = newValue + data;
    // }
    if((lastChar=='.')){

    }
    else{

        textOutput.value = oldValue + data;
    }

}

function getAnswer(){
    let textOutput = document.getElementById("output");
    let oldValue = textOutput.value;
    let len = oldValue.length;
    let lastChar = oldValue[len-1];
    if(lastChar =='+' || lastChar =='-' || lastChar =='*' || lastChar =='/' || lastChar =='%'){
        textOutput.value = 'error';
        return;
    }
    if(textOutput.value){
        let preValue = textOutput.value; 
        let answer = eval(textOutput.value);
        console.log("preValue ", preValue);
        console.log("answer ", answer);
        if(answer == preValue){
            textOutput.value = 'error'
        }
        else{
             textOutput.value = answer;
         }
    } 

}

function ClearOuput(){
    let textOutput = document.getElementById("output");
    textOutput.value = '';
}

function backOuput(){
    console.log("back");
    let textOutput = document.getElementById("output");
    let oldValue = textOutput.value;
    let len = oldValue.length;
    let currValue = oldValue.slice(0, len-1);
    textOutput.value = currValue;

}