import { json } from "@remix-run/node";
import  prisma  from "../db.server";
import type { ActionFunctionArgs } from "@remix-run/node";

export async function action({ request }: ActionFunctionArgs) {
  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    const data = await request.json();
    
    const savedProduct = await prisma.savedProduct.upsert({

      where: {
        productId_shopId: {
          productId: data.productId,
          shopId: data.shopId,
        },
      },
      update: {
        id:1,
        title: data.title,
        price: parseFloat(data.price),
        imageUrl: data.imageUrl,
        productUrl: data.productUrl,
        vendor: data.vendor,
      },
      create: {
        id:1,
        productId: data.productId,
        shopId: data.shopId,
        title: data.title,
        price: parseFloat(data.price),
        imageUrl: data.imageUrl,
        productUrl: data.productUrl,
        vendor: data.vendor,
      },
    });

    return json({ success: true, product: savedProduct });
  } catch (error) {
    console.error("Error saving product:", error);
    return json(
      { error: "Failed to save product" },
      { status: 500 }
    );
  }
} 