const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  name:{ type: String, required: true },
  mobilenumber:{type: number, required:true},
  description:{ type: String, required: true },
  enteredBy:{ type: string },
  enteredAt:{type: Date},
  createdDate: { type: Date, default: Date.now },
  createdBy:{type:date,default: Date.now},
  modifiedBy:{type:Date},
  modifiedAt:{type:Date},
  test: {type: Schema.Types.String, ref: Item}
});

schema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

module.exports = mongoose.model("Patient", schema);
