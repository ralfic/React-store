import jsonServer from 'json-server';
import auth from 'json-server-auth';
import cors from 'cors';

const app = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

app.use(cors());
app.use(middlewares);
app.db = router.db;

app.use(auth);
app.use(router);

app.listen(8000, () => {
  console.log('JSON Server is running on port 8000');
});
