const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

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

export async function getSingleProduct(slug) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${slug}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) return null;
  const data = await res.json();
  return data;
}

export async function addProductReview(slug, review) {
  try {
    const res = await fetch(`${BASE_URL}/api/products/${slug}/reviews`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(review),
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Failed to add review");
      return null;
    }

    const newReview = await res.json();
    return newReview;
  } catch (error) {
    console.error("Error adding review:", error);
    return null;
  }
}
