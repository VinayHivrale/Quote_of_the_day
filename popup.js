// document.addEventListener('DOMContentLoaded', async function() {
//   try {
//     const response = await fetch('https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/today');
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     const data = await response.json();
//     if (data.length > 0) {
//       document.getElementById('quote').textContent = `"${data[0].q}"`;
//       document.getElementById('author').textContent = `- ${data[0].a}`;
//     } else {
//       document.getElementById('quote').textContent = 'No quote available today.';
//       document.getElementById('author').textContent = '';
//     }
//   } catch (error) {
//     console.error('Error fetching the quote:', error);
//     document.getElementById('quote').textContent = 'Failed to load quote. Please try again later.';
//     document.getElementById('author').textContent = '';
//   }
// });






// document.addEventListener('DOMContentLoaded', function() {
//   fetch('https://quote-proxy-p5ehcxigb-vinay-govindrao-hivrales-projects.vercel.app/api/quote', {
//     mode: 'cors' // Ensure the mode is set to 'cors' for cross-origin requests
//   })
//     .then(response => {
//       // Log the entire response object
//       console.log('Response:', response);

//       // Check if the response is OK (status code 200-299)
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       return response.json();
//     })
//     .then(data => {
//       // Log the data from the response
//       console.log('Data:', data);

//       // Ensure data structure matches expected format
//       if (data && data.quote && data.author) {
//         const quote = data.q;
//         const author = data.a;
//         document.getElementById('quote').textContent = `"${quote}"`;
//         document.getElementById('author').textContent = `— ${author}`;
//       } else {
//         document.getElementById('quote').textContent = 'No quote available today.';
//       }
//     })
//     .catch(error => {
//       console.error('Error fetching the quote:', error);
//       const quoteElement = document.getElementById('quote');
//       quoteElement.textContent = 'Failed to load quote. Please try again later.';
//     });
// });




document.addEventListener('DOMContentLoaded', async function() {
 try {
    // Attempt to fetch the quote from the API
    const response = await fetch('https://quote-proxy.vercel.app/api/quote');

    // Log the entire response object for detailed inspection
    console.log('Fetch Response:', response);

    // Check if the response status indicates success (status code 200-299)
    if (!response.ok) {
        throw new Error(`Network response was not ok: Status Code - ${response.status}, Status Text - ${response.statusText}`);
    }

    // Parse the response as JSON
    const data = await response.json();

    // Log the parsed data to verify the structure and contents
    console.log('Parsed Data:', data);

    // Check if the data array is empty or has expected content
    if (data.length === 0) {
        throw new Error('No quote data returned from the API.');
    }

    // Update the DOM with the fetched quote and author
    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');
    const quote = data[0].q;
    const author = data[0].a;

    quoteElement.textContent = quote;
    authorElement.textContent = `- ${author}`;
} catch (error) {
    // Log detailed error information to the console
    console.error('Error occurred during fetch operation:', error);
    console.error('Error Name:', error.name);
    console.error('Error Message:', error.message);
    console.error('Stack Trace:', error.stack);

    // Display an error message in the UI
    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');
    quoteElement.textContent = 'Failed to load quote.';
    authorElement.textContent = `Error: ${error.message}`;
}

});
