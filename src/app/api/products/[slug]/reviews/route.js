import { dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  const db = await dbConnect();
  const collection = db.collection("Products");

  const { slug } = params;

  // Fetch product by slug
  const product = await collection.findOne({ slug });

  // Return reviews or empty array
  return new Response(JSON.stringify(product?.reviews || []), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req, { params }) {
  const db = await dbConnect();
  const collection = db.collection("Products");
  const { slug } = params;

  const { name, email, rating, comment } = await req.json();

  //   Create new review object
  const newReview = {
    _id: new ObjectId(),
    name,
    email,
    rating,
    comment,
    date: new Date(),
  };

  await collection.updateOne({ slug }, { $push: { reviews: newReview } });

  return new Response(JSON.stringify(newReview), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
