import { dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  const db = await dbConnect(); // Connect to MongoDB
  const collection = db.collection("Products"); //products collection

  const { id } = params;

  // Fetch single product
  const product = await collection.findOne({ _id: new ObjectId(id) });

  return Response.json(product, { status: 200 }); // Return product JSON
}
