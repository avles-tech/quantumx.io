// models/user.ts

import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser extends Document {
  name: string;
  password: string;
  comparePassword: (password: string) => Promise<boolean>;
}

const UserSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.methods.comparePassword = async function(password: string) {
  return bcrypt.compare(password, this.password);
};

export default mongoose.model<IUser>('User', UserSchema);
