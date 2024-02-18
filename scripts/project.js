

async function sendEmail() {
    // Fetch data from an external source
    const response = await fetch('https://formspree.io/f/mvoeavve');
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

        const emailResponse = await fetch('https://formspree.io/f/mvoeavve', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                apiKey: '979E3B936151A75A576742DBC2F314D92929',
                from: document.getElementById("mail").value,
                fromName: document.getElementById("name").value,
                to: 'michael_gtmc@yahoo.com',
                subject: 'New form submission',
                bodyHtml: bodyContent
            })
        });

        const emailData = await emailResponse.json();

        if (emailData.success) {
            alert('The form was submitted successfully!');
        } else {
            alert('Failed to send message.');
        }
    } else {
        alert("No data available from the external source.");
    }
}
