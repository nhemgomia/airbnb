import ClientOnly from "@/components/client-only";
import EmptyState from "@/components/empty-state";

import getCurrentUser from "@/actions/get-current-user";
import getReservations from "@/actions/get-reservations";
import TripsClient from "./trips-client";

const TripsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser)
    return (
      <ClientOnly>
        <EmptyState 
          title="Unauthorized"
          subtitle="Please login"
        />
      </ClientOnly>
    );

  const reservations = await getReservations({
    userId: currentUser.id
  });

  if (reservations.length === 0)
    return (
      <ClientOnly>
        <EmptyState
          title="No trips found"
          subtitle="Lokos like you haven't reserved any trips."
        />
      </ClientOnly>
    )

  return (
    <ClientOnly>
      <TripsClient
        reservations={reservations}
        currentUser={currentUser}
      />
    </ClientOnly>
  )
}

export default TripsPage;