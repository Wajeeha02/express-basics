import express from 'express';

import logger from './middlewear/logger';
import posts from './routes/posts';
const PORT=process.env.PORT || 8000;
const app = express();

/*app.get('/', (req, res) => {
  res.send("Hello wajeeha");
});

app.get('/about', (req, res) => {
    res.send("Hi guyz");
  });
  

  //the code written below can be write like this in short form
  //also known as static server
//app.use(express.static(path.join(__dirname,'public')))


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});
*/
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(logger);


app.use('/api/posts',posts)
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
