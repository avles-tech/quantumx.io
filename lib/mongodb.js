// Import MongoDB client
import { MongoClient } from 'mongodb';

// Define your URI
const uri = "mongodb+srv://sa:RWJUa2TwrBKQgVKw@cluster0.unlim.mongodb.net/?retryWrites=true&w=majority";

// Create a new MongoClient
const client = new MongoClient(uri);

// Connect to your client
await client.connect();

// Export the client to use it elsewhere
export default client;