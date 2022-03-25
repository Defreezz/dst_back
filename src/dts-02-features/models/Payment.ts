import {Document, Schema} from "mongoose";
import * as mongoose from "mongoose";

export interface Payment extends Document {
    _id: mongoose.Types.ObjectId;
    cardNumber: number
    expDate: number
    cvv: number
    amount: number
}

const PaymentSchema: Schema = new Schema(
    {
        CardNumber: {
            type: Number,
            required: true
        },
        expDate:{
            type:Number,
            required:true
        },
        cvv:{
            type:Number,
            required:true
        },
        amount:{
          type:Number,
          required:true
        },
    },
    {
        timestamps: {
            createdAt: "created",
            updatedAt: "updated",
        },
    }
);

export default mongoose.model<Payment>("Test", PaymentSchema);