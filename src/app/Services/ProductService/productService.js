export async function getAllProducts() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/products`,
      {
        cache: "no-store",
      }
    );
    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
}
