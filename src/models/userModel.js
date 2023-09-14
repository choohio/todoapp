import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: String,
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
}
)

const User = mongoose.models.users || mongoose.model(
    "User", userSchema
);

export default User;