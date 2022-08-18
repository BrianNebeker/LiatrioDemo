const express = require('express');
const app = express();
app.use(express.json());
const version = '0.1';
const build = '%BUILD%';
  
// READ Request Handlers
app.get('/', (req, response) => {
  response.send('Demo API Version ' + verison + ' Build '+ build);
});
 
app.get('/api/status', (req,response)=> {
	const timestamp = Date.now();
	
	const statusMessage = GetSystemStatus()
	
	reponseObj =
	{
		"message" : statusMessage,
		"timestamp" : timestamp
	}

	response.send(reponseObj);
});

app.get('/api/status/response', (req,response)=> {
	const startDateObject = new Date();	
	
	const statusMessage = GetSystemStatus()
	
	const endDateObject = new Date();		
	const elapsedTime = endDateObject.getTime() - startDateObject.getTime();

	reponseObj =
	{
		"message" : statusMessage,
		"elapsedtime" : elapsedTime
	}

	response.send(reponseObj);
});

app.get('/api/status/response/gmt', (req,response)=> {
	const startDateObject = new Date();	
	const startTimestring = startDateObject.toGMTString();
	
	const statusMessage = GetSystemStatus()
	
	const endDateObject = new Date();	
	const endTimestring = endDateObject.toGMTString();
	const elapsedTime = endDateObject.getTime() - startDateObject.getTime();

	reponseObj =
	{
		"message" : statusMessage,
		"starttimestamp" : startTimestring,
		"endtimestamp" : endTimestring,
		"elapsedtime" : elapsedTime
	}

	response.send(reponseObj);
});

function GetSystemStatus()
{
	return "Automate all the things!"
} 
 
//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));