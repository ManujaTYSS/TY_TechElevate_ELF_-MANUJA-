function validateForm(){
    let formData = document.forms[0];
    
    let userName = formData.uname.value;
    let password = formData.password.value;
    // let valid = formData.upass.value;
    // let valids = formData.pass.value; 
    if(userName.length>4 && password.length>7 &&valid===true && valids===true){
        // console.log('success');
        formData.uname.style.border = '4px solid green';
        formData.password.style.border = '4px solid green';
        formData.loginSubmit.disabled = false;
        // formData.valid.disabled = true;
        // formData.valids.disabled= true;
    }
    else{
        formData.uname.style.border = '4px solid red';
        formData.password.style.border = '4px solid red';
        formData.loginSubmit.disabled = true;
        // formData.valid.disabled = false;
        // formData.valids.disabled = false;
    }
}