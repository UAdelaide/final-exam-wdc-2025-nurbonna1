Owner.js
router.get('/owner/dashboard', async (req, res) => {
  if (!req.session.user || req.session.user.role !== 'owner') {
    return res.redirect('/');
  }

  try {
    const [dogs] = await db.query(
      'SELECT dog_id, name FROM Dogs WHERE owner_id = ?',
      [req.session.user.id]
    );

    res.render('ownerDashboard', { username: req.session.user.username, dogs });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching dogs');
  }
});