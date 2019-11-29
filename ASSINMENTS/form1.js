function validate(){
 let employeeData = document.forms['employeeForm'];
  let empPassword = employeeData.pass.value; //to access password
  let empCPassword = employeeData.cpass.value;
  if(empPassword==='' && empCPassword===''){
      return false;
  }
if(empPassword===empCPassword){
    alert('success');
    return true; // to cancle re direct 
}
else{
    alert('Password not matching');
    return false;
}
}