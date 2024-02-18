async function sendEmail() {
    // Fetch data from an external source
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();

    // Use an array method (e.g., map)
    const dataArray = data.map(item => item.value);

    // Include conditional branching
    if (dataArray.length > 0) {
        // Use template literals when building strings
        const bodyContent = `
            Name: ${document.getElementById("name").value}
            <br> Email: ${document.getElementById("mail").value}
            <br> Message: ${document.getElementById("msg").value}
            <br> Data: ${dataArray.join(', ')}
        `;

        const emailResponse = await fetch('https://api.elasticemail.com/v2/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                apiKey: 'your-api-key',
                from: document.getElementById("mail").value,
                fromName: document.getElementById("name").value,
                to: 'michael.empresahermano@gmail.com',
                subject: 'Recruiter inquiry',
                bodyHtml: bodyContent
            })
        });

        const emailData = await emailResponse.json();

        if (emailData.success) {
            alert('Message sent success!');
        } else {
            alert('Failed to send message.');
        }
    } else {
        alert("No data available from the external source.");
    }
}
