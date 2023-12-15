const User = require("../Model/userModel");
const Appointments = require("../Model/appointmentData");

module.exports.register = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    const newUser = new User(req.body);
    try {
      newUser.save();
      res.send(req.body.name);
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  } else {
    return res.status(400).json({ message: "User already Registered" });
  }
};

module.exports.login = async function (req, res) {
  const { email, password } = req.body;

  try {
    const user = await User.find({ email, password });
    if (user) {
      const currentUser = {
        name: user[0].name,
        email: user[0].email,
        isAdmin: user[0].isAdmin,
        _id: user[0]._id,
      };
      res.send(currentUser);
    } else {
      return res.status(400).json({ message: "User login failed" });
    }
  } catch (error) {
    return res.status(400).json({ message: "User login failed" });
  }
};

module.exports.appointmentData = (req, res) => {
  console.log("reached in appointmentData");
  console.log(req.body, "from server side");
  const newData = new Appointments(req.body);
  try {
    newData.save();
    res.send(req.body);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};
