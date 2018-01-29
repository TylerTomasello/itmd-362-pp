$('#contact-form').on('submit', function(e) {
  console.log('Checking email');
  var email = $('#email').val();
  var valid = /.+@.+/;
  var validEmail = valid.test(email);
  e.preventDefault();
  if(!validEmail){
    console.log('Invalid email');
    $('#formList').append('<li>Email entered was invalid.</li>');
    return false;
  }
  else {
    console.log('Valid email');
    $('#formList').append('<li>Email valid.</li>');
  }
});
