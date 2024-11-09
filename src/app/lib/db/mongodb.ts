import mongoose from "mongoose"; 
const MONGODB_URI = process.env.MONGODB_URI || ""; 

let isConnected = false; 
const connect = async () => {

  if (isConnected) {
    console.log("Already connected to MongoDB"); 
    return; 
  }

  try {
    const db = await mongoose.connect(MONGODB_URI); 
    isConnected = db.connection.readyState === 1; // עדכון המשתנה אם החיבור הצליח
    console.log("MongoDB connection successful!");
  } catch (error) {
    throw new Error("Error in connecting to MongoDB: " + error); 
  }
};

export default connect; 
