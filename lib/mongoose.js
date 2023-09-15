import mongoose from 'mongoose';

export const connectToDB = async () => {
  
  mongoose.set('strictQuery', true);

  try {
    const { connection } = await mongoose.connect("mongodb+srv://mongodb:OqcTbJxsWkVMwig9@cluster0.brvc5fq.mongodb.net/", {
      dbName: 'test',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    if (connection.readyState === 1) {
      console.log('MongoDB connected');
    }
  } catch (error) {
    return Promise.reject(error);
  }

  // try {
  //   const { connection } = await mongoose.connect(process.env.MONGODB_URI);

  //   if (connection.readyState === 1) {
  //     console.log('Database Connected');
  //   }
  // } catch (error) {
  //   return Promise.reject(error);
  // }
};
