const { User } = require('../models');

const checkUserExist = async (req, res, next) => {
  const { username, email } = req.body;

  try {
    // Kiểm tra xem username đã tồn tại chưa
    const existingUserByUsername = await User.findOne({ where: { username } });
    if (existingUserByUsername) {
      return res.status(400).json({ error: 'Cannot sign-up with the username already existed' });
    }

    // Kiểm tra xem email đã tồn tại chưa
    const existingUserByEmail = await User.findOne({ where: { email } });
    if (existingUserByEmail) {
      return res.status(400).json({ error: 'Cannot sign-up with the email already existed' });
    }

    // Nếu không có vấn đề gì, tiếp tục xử lý tiếp theo
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = checkUserExist;
