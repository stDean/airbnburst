import { FC } from "react";

import { ClientOnly, EmptyState } from "@/app/components";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";
import ListingClient from "./ListingClient";

interface ListingParamsProps {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: ListingParamsProps }) => {
  const currentUser = await getCurrentUser();
  const listing = await getListingById(params);

  if (!listing) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <ListingClient listing={listing} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default ListingPage;
