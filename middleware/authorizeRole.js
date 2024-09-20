const authorizeRole = (role) => (req, res, next) => {
    if (req.user && req.user.iam_role === role) {
      next();
    } else {
      res.status(403).json({ error: `Forbidden! Requires ${role} role to access.` });
    }
  };
  
  module.exports = {
    isAdmin: authorizeRole('admin'),
    isModerator: authorizeRole('moderator'),
    isMember: authorizeRole('member')
  };
  