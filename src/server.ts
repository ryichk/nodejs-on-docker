import express from 'express';
const app: express.Express = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router: express.Router = express.Router();

router.get('/', (req:express.Request, res:express.Response) => {
  res.send(`
    <h1>Docker + Node</h1>
    <span>A match made in the cloud</span>
    <p>Hello From Node Running Inside Docker</p>
  `);
});

app.use(router);

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});