// Import the module
import express from 'express'

const app = express();

//Define the port
const PORT = 3005;

app.use(express.static('public'));

//Start a server in the designated port
app.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`)
})

//Send over the file when requested
app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});