function validateForm(){
    let formData = document.forms[0];
    // console.log(formData.uname.value); // it display enterd data in console
    // console.log(formData); //it gives form data methods
    // console.log(formData.uname); // it will display formvalidation full data
   
    let userName = formData.uname.value;
    let password = formData.password.value;
    if(userName.length>4 && password.length>7){
        // console.log('success');
        formData.uname.style.border = '4px solid green';
        formData.password.style.border = '4px solid green';
        formData.loginSubmit.disabled = false;
    }
    else{
        formData.uname.style.border = '4px solid red';
        formData.password.style.border = '4px solid red';
        formData.loginSubmit.disabled = true;
    }
}
// function validateForm2(){
// let formData = document.forms[0];
// let password = formData.password.value;
// if(password.length>7){
//     console.log('successfull');
//     formData.password.style.border = '4px solid green';
// }
// else{
//     formData.password.style.border = '4px solid red';
// }
// }
