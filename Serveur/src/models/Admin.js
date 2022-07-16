import mongoose from 'mongoose';


const adminSchema = new mongoose.Schema(
  {
    email: {type: String},
    password: {type: String},
    type: { type: String },
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  },
);


const adminModel = mongoose.model('admin', adminSchema);

export default adminModel;
