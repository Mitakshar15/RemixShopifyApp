import { json } from "@remix-run/node";

export async function loader({ request }) {
  return json({message:"Wishlist API", ok:true});
}


export async function action({request}){
    const method = request.method;
    switch(method){
        case "POST":
            return json({message:"SUCCESS",method:"POST"});

        case "PATCH":
            return json({message:"SUCCES",method:"PATCH"});
            
        default:
            return json({message:"Method not allowed", ok:false}, {status:405});
    }
}
