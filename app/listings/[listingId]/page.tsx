import getCurrentUser from "@/actions/get-current-user";
import getListing from "@/actions/get-listing";

import ClientOnly from "@/components/client-only";
import EmptyState from "@/components/empty-state";

import ListingClient from "./components/listing-client";

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams}) => {
  const listing = await getListing(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    );
  }
  
  return ( 
    <ClientOnly>
      <ListingClient 
        listing={listing}
        currentUser={currentUser}
      />
    </ClientOnly>
   );
}
 
export default ListingPage;

interface IParams {
  listingId?: string;
}
