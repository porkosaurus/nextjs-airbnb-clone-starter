import { StringFilter } from "../../util/StringFilter";
import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WishlistWhereInput = {
  id?: StringFilter;
  listing?: ListingWhereUniqueInput;
  tripInfo?: JsonFilter;
  user?: UserWhereUniqueInput;
};
