import mongoose, { Document, Model, Schema } from 'mongoose';

// הגדרת ממשק למודל
export interface IUser extends Document {
    username: string;
    email: string;
    password: string;
}

// הגדרת הסכימה
const UserSchema: Schema<IUser> = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;
