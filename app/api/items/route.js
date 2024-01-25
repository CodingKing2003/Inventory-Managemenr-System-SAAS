import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      title,
      categoryId,
      sku,
      barcode,
      qty,
      unitId,
      brandId,
      buyingPrice,
      sellingPrice,
      supplierId,
      reOrderPoint,
      warehouseId,
      weight,
      dimensions,
      taxRate,
      notes,
      description,
    } = await request.json();
    const items = {
      title,
      categoryId,
      sku,
      barcode,
      qty,
      unitId,
      brandId,
      buyingPrice,
      sellingPrice,
      supplierId,
      reOrderPoint,
      warehouseId,
      weight,
      dimensions,
      taxRate,
      notes,
      description,
    };
    console.log(items);

    return NextResponse.json(items);
  } catch (error) {
    return NextResponse.json(
      {
        error,
        message: "Failed to create a unit",
      },
      {
        status: 500,
      }
    );
  }
}
