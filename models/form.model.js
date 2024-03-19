import { model, Schema  } from "mongoose";

const formSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    subject: {
        type: String,
    },
    message: {
        type: String,
        required: true
    },
}, {timestamps: true});

export const Form = model("Form", formSchema);