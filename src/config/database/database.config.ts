import mongoose from 'mongoose';

const connectDatabase = async () => {
  const connectWithRetry = async () => {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@database.rylr1.mongodb.net/?retryWrites=true&w=majority&appName=database`,
    );
  };
  connectWithRetry();
};
export default connectDatabase;
