const loginBtn = $("#login");
const signUpBtn = $("#sign-up");
const form = $("#form");
const submitBtn = $('#loginBtn');

let times = 1;
let nameTime = 1;

signUpBtn.click(function () {
  document.title = "Sign Up";

  times = 1;
  signUpBtn.removeClass(
    "bg-primary bg-opacity-10 text-white font-medium"
  );
  signUpBtn.addClass(
    "text-yellow-300 w-1/2 py-4 text-xl text-center shadow-none focus:outline-none focus:z-10 overflow-hidden"
  );

  loginBtn.removeClass(
    "text-yellow-300"
  );
  loginBtn.addClass(
    "bg-primary bg-opacity-10 text-white font-medium w-1/2 py-4 text-xl text-center shadow-none focus:outline-none focus:z-10 overflow-hidden"
  );

  if (nameTime === 1) {
    $('#remember-forgot').hide();
    form.prepend(
      `
        <div id="name-div" class="flex justify-evenly">
          <div id="first-name-holder" class="w-1/2 px-1">
            <div class="flex flex-row justify-between mx-1">
              <label for="first_name" class="block text-sm font-medium text-gray-100">
                First Name
              </label>
            </div>
            <div class="mt-1 relative rounded-md shadow-sm">
              <input 
                type="text"
                 id="first_name" 
                 name="first_name"
                 class="tw-twixmw tw-1xjwv5r bg-primary bg-opacity-10" 
                 placeholder="" 
                 required 
                 value="" 
                 spellcheck="false" 
                 data-ms-editor="true"
              >
            </div>
          </div>
          <div id="second-name-holder" class="w-1/2 px-1">
            <div class="flex justify-between mx-1">
              <label for="last_name" class="block text-sm font-medium text-gray-100">
                Last Name
              </label>
            </div>
            <div class="mt-1 relative rounded-md shadow-sm">
              <input 
                type="text"
                 id="last_name" 
                 name="last_name"
                 class="tw-twixmw tw-1xjwv5r bg-primary bg-opacity-10" 
                 placeholder="" 
                 value="" 
                 spellcheck="false" 
                 data-ms-editor="true"
              >
            </div>
          </div>
        </div>
      `
    );
  }
  times++;

  $("#remember-forgot").hide();
  nameTime--;

  submitBtn.html('Sign Up').attr('value', 'sign-up');
});

loginBtn.click(function () {
  document.title = "Login";

  nameTime = 1;
  loginBtn.removeClass(
    "bg-primary bg-opacity-10 text-white font-medium"
  );
  loginBtn.addClass(
    "text-yellow-300 w-1/2 py-4 text-xl text-center shadow-none focus:outline-none focus:z-10 overflow-hidden"
  );

  signUpBtn.removeClass(
    "text-yellow-300 w-1/2 py-4 text-xl text-center shadow-none focus:outline-none focus:z-10 overflow-hidden"
  );
  signUpBtn.addClass(
    "bg-primary bg-opacity-10 text-white font-medium w-1/2 py-4 text-xl text-center shadow-none focus:outline-none focus:z-10 overflow-hidden"
  );

  $("#name-div").hide();
  times--;

  // language=HTML
  if (times === 1) {
    $("#remember-forgot").show();
  }

  submitBtn.html('Log In');
  submitBtn.attr('value', 'sign-in');
});

const pass = $('#password');
$('#check').click(function () {
  $(this).is(':checked') ? pass.attr('type', 'text') : pass.attr('type', 'password');
});

const successDiv = $('#success');
const warningDiv = $('#warning');
setTimeout(
  function () {
    successDiv.hide();
    warningDiv.hide();
  }, 3500
);