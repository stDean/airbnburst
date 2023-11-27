"use client";

import { FC } from "react";

import { SafeListing, SafeUser } from "../types";
import { Container, Heading } from "./ui";
import ListingCard from "./ListingCard.component";

interface FavoritesClientProps {
  listings: SafeListing[];
  currentUser?: SafeUser;
}

const FavoritesClient: FC<FavoritesClientProps> = ({
  listings,
  currentUser,
}) => {
  return (
    <Container>
      <Heading title="Favorites" subtitle="List of places you liked!" />

      <div className=" mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {listings.map((listing: any) => (
          <ListingCard
            currentUser={currentUser}
            key={listing.id}
            data={listing}
          />
        ))}
      </div>
    </Container>
  );
};

export default FavoritesClient;
