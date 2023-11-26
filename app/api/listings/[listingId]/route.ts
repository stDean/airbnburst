import { NextRequest, NextResponse } from "next/server";

import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";

interface IParams {
  listingId?: string;
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: IParams }
) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.error();
  }

  const { listingId } = params;
  if (!listingId || typeof listingId !== "string") {
    throw new Error("Invalid ID");
  }

  try {
    const listing = await prisma.listing.delete({
      where: {
        id: listingId,
      },
    });

    return NextResponse.json(listing, { status: 200 });
  } catch (error) {
    return NextResponse.error();
  }
}
