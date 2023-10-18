import { SortOrder } from "../../util/SortOrder";

export type WishlistOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  listingId?: SortOrder;
  tripInfo?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
