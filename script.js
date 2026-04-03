function validEmail(str) {
  //your JS code here.
	let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if(regex.test(str)) return true;
	return false;
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
