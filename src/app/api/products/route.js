import { dbConnect } from "@/lib/dbConnect";

export async function GET() {
  try {
    // connect to db
    const db = await dbConnect();

    // fetch products
    const products = await db.collection("Products").find({}).toArray();

    return Response.json(products, { status: 200 });
  } catch (error) {
    console.error("❌ Error fetching products:", error);
    return Response.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
