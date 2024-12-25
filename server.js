import jsonServer from 'json-server';
import auth from 'json-server-auth';
import cors from 'cors';
import bcrypt from 'bcryptjs';

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(middlewares);
server.db = router.db;
server.use(auth);

// Custom endpoint for changing password
server.post('/change-password', async (req, res) => {
  const { email, oldPassword, newPassword } = req.body;

  if (!email || !oldPassword || !newPassword) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  const db = router.db; // Access to the database
  const user = db.get('users').find({ email }).value();

  if (!user) {
    return res.status(404).json({ message: 'User not found.' });
  }

  // Compare the old password
  const isPasswordValid = await bcrypt.compare(oldPassword, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Password is incorrect.' });
  }

  // Hash the new password
  const hashedPassword = await bcrypt.hash(newPassword, 10);

  // Update the user's password in the database
  db.get('users').find({ email }).assign({ password: hashedPassword }).write();

  res.status(200).json({ message: 'Password updated successfully.' });
});

server.use(router);

server.listen(8000, () => {
  console.log('JSON Server is running on port 8000');
});
