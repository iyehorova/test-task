import { ProductExtend } from "@/app/types/Product";

export function isProductData(data: unknown[]): data is ProductExtend[] { 
  return (
    typeof data[0] === "object" && data[0] !== null && "orderInfo" in data[0]
  )
}