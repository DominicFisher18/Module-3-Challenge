const numbers = '0123456789';
const special = '!@#$%+[]|~?';
const alpha = 'abcdefghijklmnopqrstuvwxyz';

document.querySelector('button').addEventListener('click', handleClick);

function handleClick() {
  let temp = '';
  let password = '';
  let length = prompt('How long do you want the password to be (8-128)?');
  if (length<8 || length>128) return handleClick();

  let num = confirm('Will the password have any numbers?');
  let upper = confirm('Will the password have uppercase letters?');
  let lower = confirm('Will the password have lowercase letters?');
  let spec = confirm('Will the password have special characters?');

  if(num) temp += numbers;
  if(lower) temp += alpha;
  if(spec) temp += special;
  if(upper) temp += alpha.toUpperCase();

  for (let i = 0; i < length; i++) {
    password += temp[Math.floor(temp.length * Math.random())]
  };

  document.getElementById('password').innerHTML = password;
};

