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

export async function getSingleProduct(id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${id}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) return null;
  const data = await res.json();
  return data;
}
