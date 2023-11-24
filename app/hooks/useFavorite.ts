import { useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";

import { SafeUser } from "../types";
import useLoginModal from "./useLoginModal";
import { toast } from "react-hot-toast";
import axios from "axios";

interface UseFavoriteInterface {
  listingId: string;
  currentUser?: SafeUser | null;
}

const useFavorite = ({ listingId, currentUser }: UseFavoriteInterface) => {
  const router = useRouter();
  const loginModal = useLoginModal();

  // return true if the listing id is in the user's favorite list
  const hasLiked = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(listingId);
  }, [currentUser, listingId]);

  const toggleLike = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      if (!currentUser) {
        return loginModal.onOpen();
      }

      try {
        let request;

        // if user has liked remove the id else add the listing if to the list
        if (hasLiked) {
          request = () => axios.delete(`/api/favorites/${listingId}`);
        } else {
          request = () => axios.post(`/api/favorites/${listingId}`);
        }

        await request();
        router.refresh();
        toast.success("Success");
      } catch (error) {
        toast.error("Something went wrong.");
      }
    },
    [currentUser, hasLiked, listingId, loginModal, router]
  );

  return {
    hasLiked,
    toggleLike,
  };
};

export default useFavorite;
