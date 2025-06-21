routes.js
router.get('/api/users/me', (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ error: 'Not logged in' });
  }

  res.json({
    user_id: req.session.user.id,
    username: req.session.user.username,
    role: req.session.user.role
  });
});