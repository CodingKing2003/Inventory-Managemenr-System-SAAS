import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, abbreviation } = await request.json();
    const units = { title, abbreviation };
    console.log(units);

    return NextResponse.json(units);
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
