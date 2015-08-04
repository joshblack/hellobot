import express from 'express';
import bodyParser from 'body-parser';
import hellobot from './hellobot';

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => { res.status(200).send('hello world!') });
app.post('/hello', hellobot);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(400).send(err.message);
});

app.listen(port, () => console.log('Slack bot listening on localhost:' + port));
