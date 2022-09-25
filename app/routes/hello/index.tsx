import type { MetaFunction, LoaderFunction } from "@remix-run/node";

import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { Key, ReactChild, ReactFragment, ReactPortal } from "react";
export const meta:MetaFunction=()=> {
 
  return {title: "POWERFUL Remix App"};
}
export const loader: LoaderFunction = async () => {
  return json([
    { id: "1", name: "Pants" },
    { id: "2", name: "Jacket" },
  ])
};


export default function Index() {
  
const rodi = useLoaderData()
console.log(rodi)
  return (
    <>
 
      <div>Hi</div>
    
      <h1>Products</h1>
      {rodi.map((product: { id: Key | null | undefined; name: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) => (
        <div key={product.id}>{product.name}</div>
      ))}
      </>
  );
}
