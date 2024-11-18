const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
    },
    id: {
      type: Number,
      required: true,
      default: 0,
    },
    mileage: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: false,
      default: 0,
    },

    discription: {
      type: String,
      required: true,
      default: 0,
    },
    image: {
      type: String,
      required: false,
    },
    enginecapacity:{
      type: Number,
      required: false,
    }
  },
  {
    timestamps: true,
  }
);
const Project = mongoose.model("Project", productSchema);

module.exports = Project;
