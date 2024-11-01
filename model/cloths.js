import mongoose, { Schema } from "mongoose";

const clothSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    shopID: {
      type: Schema.Types.ObjectId,
      ref: "Shop",
      required: true,
    },
    description: {
      type: String,
    },
    length: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Cloth = mongoose.models.Cloth || mongoose.model("Cloth", clothSchema);
export default Cloth;
