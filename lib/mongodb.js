// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb
import { MongoClient } from 'mongodb'

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
}

const uri = process.env.MONGODB_URI
const options = {}

console.log(uri)

let client;
let clientPromise;

if (process.env.NODE_ENV === 'development') {
  
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
  console.log("already" )
} else {
 
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
  console.log("connected")

}
export default clientPromise