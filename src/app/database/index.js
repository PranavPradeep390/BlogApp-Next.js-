import mongoose from "mongoose";

const connectToDB = async ()=> {
    const connectionUrl = "mongodb+srv://user:user@cluster0.pygbbiw.mongodb.net/";

    mongoose
    .connect(connectionUrl)
    .then(()=>console.log("Connection Successfull"))
    .catch((err)=>console.error(err));
};

export default connectToDB;