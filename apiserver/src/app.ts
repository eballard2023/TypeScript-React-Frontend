import express from 'express';
import path from 'path';

const app = express();
const PORT = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, '../public')));

// Set EJS as the templating engine
app.set('view engine', 'ejs');


//importing json with information about me
import story from '../me.json';




app.get('/', (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  return console.log(`Express is listening at http://localhost:${PORT}`);
});

app.get('/awesome/applicant', (req, res) => {
    res.render("awesome", story );

})