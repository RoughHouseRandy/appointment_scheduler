// Import the module
import express from 'express'

const app = express();

//Define the port
const PORT = 3005;

const appointments = [];

app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));

//Start a server in the designated port
app.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`)
})

//Send over the file when requested
app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

//Send route to confirm page
app.get('/confirm', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/confirm.html`);
})

app.get(`/admin`, (req,res) => {
    res.send(appointments);
})

app.post('/submit-order', (req,res) => {

    const appointment = req.body;
    appointment['timestamp'] = new Date();
    console.log(appointment);
    appointments.push(appointment);
    console.log(appointments);
    //display confirmation
    res.sendFile(`${import.meta.dirname}/views/confirm.html`);
})

