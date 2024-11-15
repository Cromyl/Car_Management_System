import { connect } from 'mongoose';
const mongoURI = "mongodb+srv://dbUser:dbUserP@cluster0.wzul6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectToMongo =async ()=>{
    try{
        await connect(mongoURI);
        console.log("Connected to db");
    }catch(error){
        console.log(error);
    }
}

export default connectToMongo;