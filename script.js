function getFormvalue() {
    //Write your code here
	 function getFormValue(event) {
            event.preventDefault(); // Prevent form from submitting normally
            
            let firstName = document.querySelector("#fname").value.trim();
            let lastName = document.querySelector("#lname").value.trim();
            
            if (firstName === "" || lastName === "") {
                alert("Please enter both First Name and Last Name.");
            } else {
                alert(firstName + " " + lastName);
            }
        }

}
