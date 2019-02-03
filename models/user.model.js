import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    userid: String,
    name: String,
    image: String,
    email: String
});
const UserModel = mongoose.model("users", userSchema);

UserModel.findByEmail = email => {
    return UserModel.findOne({ email: email });
};

UserModel.add = user => {
    return UserModel.create(user);
  };

export default UserModel;