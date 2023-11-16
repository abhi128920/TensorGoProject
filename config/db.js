import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_URL);
    console.log(
      `connected to mongodb database ${(await conn).connection.host}`.bgMagenta
        .white
    );
  } catch (error) {
    console.log(`error in connection ${error}`.bgRed.white);
  }
};

export default connectDB;
