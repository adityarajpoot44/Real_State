import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    address: {
        type: String,
        require: true,
    },
    type: {
        type: String,
        require: true,
    },
    condition: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    beds: {
        type: Number,
        require: true,
    },
    baths: {
        type: Number,
        require: true,
    },
    propImage: [
        {
            data:Buffer,
            contentType: String,
        }
    ]

},
    { timestamps: true }
);
const Property = mongoose.model("Propertylist", propertySchema);

export default Property;
