function sendEmail(){
    Email.send({
        SecureToken: "77272961-1943-4c39-866a-9a7b26b57e7c",
        To: "michael.empresahermano@gmail.com",
        From: document.getElementById("mail").value,
        Subject: "Recruiter inquiry",
        Body: "Name: " + document.getElementById("name").value
              + "<br> Email: " + document.getElementById("mail").value
              + "<br> Message: " + document.getElementById("msg").value
    }).then(
        message => alert("Message sent success!") 
    );
}