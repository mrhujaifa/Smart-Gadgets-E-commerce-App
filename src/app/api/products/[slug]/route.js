import { dbConnect } from "@/lib/dbConnect";

export async function GET(req, { params }) {
  const db = await dbConnect(); // Connect to MongoDB
  const collection = db.collection("Products"); // products collection

  const { slug } = params; // use slug instead of id

  // Fetch single product by slug
  const product = await collection.findOne({ slug: slug });

  if (!product) {
    return new Response(JSON.stringify({ message: "Product not found" }), { status: 404 });
  }

  return new Response(JSON.stringify(product), { status: 200 }); // Return product JSON
}
