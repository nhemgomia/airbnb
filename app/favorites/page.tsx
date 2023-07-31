import ClientOnly from "@/components/client-only";
import EmptyState from "@/components/empty-state";

import getCurrentUser from "@/actions/get-current-user";
import getFavoriteListings from "@/actions/get-favorite-listings";
import FavoritesClient from "./favorites-client";

const ListingPage = async () => {
  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0)
    return (
      <ClientOnly>
        <EmptyState 
          title="No favorites found"
          subtitle="Looks like you have no favorite listings."
        />
      </ClientOnly>
    );

  return (
    <ClientOnly>
      <FavoritesClient
        listings={listings}
        currentUser={currentUser}
      />
    </ClientOnly>
  )
};

export default ListingPage;