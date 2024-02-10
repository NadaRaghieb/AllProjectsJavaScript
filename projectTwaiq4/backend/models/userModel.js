const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  fName: { type: String },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  phone: { type: String },
  role:String,
  isDeleted: { type: Boolean, default: false },
  pic: {
    type: String,
    required: true,
    default:
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
  },
});

userSchema.pre("save", async function () {
  this.passwordHash = await bcrypt.hash(this.passwordHash, 10);
});

const User = mongoose.model("user", userSchema);

module.exports = User;
