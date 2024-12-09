import { json } from "@remix-run/node";
import  prisma  from "../db.server";
import { cors } from "remix-utils/cors";



export async function loader({ request }) {
  return json({ message: "Wishlist API", ok: true });
}

export async function action({ request }) {
  const method = request.method;
  let data = await request.formData();
  console.log(data);
  data = Object.fromEntries(data);
  const customerId = data.customerId;
  const productId = data.productId;
  const shop = data.shop;

  if (!customerId || !productId || !shop) {
    return json(
      { message: "MISSING DATA:: REQUIRED customerId, productId, shop", ok: false, method: method },
      { status: 400 },
    );
  }

  switch (method) {
    case "POST":
      const wishlist = await prisma.wishlist.create({
        data: {

          customerId,
          productId,
          shop,
        },
      });

      const response = json(
        { message: "Wishlist added", method: "POST", wishlist: wishlist },
        { status: 200 },
      );
      return cors(request, response);

    case "PATCH":
      return json({ message: "Wishlist updated", method: "PATCH", ok: true });

    case "DELETE":
      return json({ message: "Wishlist deleted", method: "DELETE", ok: true });

    default:
      return json(
        { message: "Method not allowed", method: method, ok: false },
        { status: 405 },
      );
  }
}
