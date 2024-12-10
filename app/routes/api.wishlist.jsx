import { json } from "@remix-run/node";
import  prisma  from "../db.server";
import { cors } from "remix-utils/cors";



export async function loader({ request }) {

  const url = new URL(request.url);
  const customerId = url.searchParams.get("customerId");
  const shop = url.searchParams.get("shop");
  const productId = url.searchParams.get("productId");


  if(!customerId||!shop||!productId){
    return json(
      { message: "Missing DATA:: REQUIRED customerId, shop, productId", ok: false, method: method },
      { status: 400 },
    );
  }

  const wishlist = await prisma.wishlist.findMany({
    where: { 
      customerId: customerId,
      shop: shop,
      productId: productId,
     },
  });

  if(!wishlist){
    const response =  json({
      message: "Product not found in wishlist",
      ok: false,
      method: method,
    })
    return cors(request, response);
  }

  const response = json({
    ok:true,
    message:"successfully added",
    data:wishlist
  });
  return cors(request, response);

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
      await prisma.wishlist.deleteMany({
      where :{
        customerId: customerId,
        productId: productId,
        shop: shop,
      }
     })
     

      return json({ message: "Wishlist deleted", method: "DELETE", ok: true });
    
    default:
      return json(
        { message: "Method not allowed", method: method, ok: false },
        { status: 405 },
      );
  }
}
