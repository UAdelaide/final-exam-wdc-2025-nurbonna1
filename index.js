const express = require('express');
const router = express.Router();
const db = require('../db'); // adjust if needed

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const [rows] = await db.query(
      'SELECT * FROM Users WHERE username = ? AND password_hash = ?',
      [username, password]
    );

    if (rows.length === 0) {
      return res.status(401).send('Invalid login');
    }

    const user = rows[0];
    req.session.user = {
      id: user.user_id,
      username: user.username,
      role: user.role,
    };

    if (user.role === 'owner') {
      return res.redirect('/owner/dashboard');
    } else if (user.role === 'walker') {
      return res.redirect('/walker/dashboard');
    } else {
      return res.status(403).send('Invalid role');
    }

  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

router.get('/logout', (req, res) => {
    req.session.destroy(err => {
      if (err) {
        return res.status(500).send('Logout error');
      }
      res.clearCookie('connect.sid'); // Clear session cookie
      res.redirect('/'); // Redirect back to login page
    });
  });

module.exports = router;