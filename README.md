# Play a sound

[Ultrahook](https://www.ultrahook.com/faq) acts as a relay for POST requests so I can send a webhook to their public URL and it will forward to my localhost running this projct -- AND IT PLAYS A SOUND! In my case, I'm using this to play a celebratory sound every time I finish a task on KanbanFlow.

`npm install` 

`node server.js` to start this server which runs on port 5001.

Test the local server with: `curl --request POST http://localhost:5001`

Ultrahook is a Ruby gem. When you sign up on their website (URL above) then you get an API key and choose your personalized subdomain. Generically, it looks like this:

`ultrahook [-k API key] <subdomain> <local>` where the API key is optional if it is stored on your local machine as per their instructions on the website above.

For example, if the subdomain is "abc" and you're running this server locally, then it would look like this:

`ultrahook abc localhost:5001`

However, for some reason, when testing this setup your curl will have extra characters in the Ultrahook URL:
`curl --request POST https://abc-abc.ultrahook.com`  
This is the URL you'll use in your service sending the POST request webhook.
