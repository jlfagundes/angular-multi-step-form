import { AddressModel } from "./address-model";
import { TopicsModel } from "./topics-model";
import { UserModel } from "./user-model";

export interface UserFormModel {
  userModel: UserModel;
  addressModel: AddressModel;
  topicsModel: TopicsModel;
}
