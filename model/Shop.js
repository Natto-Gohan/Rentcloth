import mongoose , { Schema } from "mongoose";

const shopSchema = new Schema(
    {
        name:{
            type: String,
            required: true
        },
        email: {
            type: String,
            required:true
        },
        password: {
            type:String,
            required:true,
        },
        facebook:{
            type:String,
        },
        instagram:{
            type:String,
        },
        line:{
            type:String
        }
    },
    {
        timestamps:true
    }
)

const Shop = mongoose.models.Shop || mongoose.model("Shop",shopSchema);
export default Shop;


