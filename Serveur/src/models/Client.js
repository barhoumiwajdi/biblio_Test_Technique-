import mongoose from 'mongoose';


const clientSchema = new mongoose.Schema(
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


const clientModel = mongoose.model('client', clientSchema);

export default clientModel;
