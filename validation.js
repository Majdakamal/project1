$.validator.addMethod( "alpha", function( value, element ) {

return this.optional( element ) || /^[a-zA-Z\s]+$/.test( value );
}, "nom invalid !" );


var $registrationForm = $('#registration');
if($registrationForm.length){
  $registrationForm.validate({
      rules:{
          //username is the name of the textbox
          username: {
              required: true,
              //alphanumeric is the custom method, we defined in the above
              alpha: true
          },
         
      },
      messages:{
          username: {
              //error message for the required field
              required: 'veuillez entrer votre nom!'
          },
         
      },
    
  });
}