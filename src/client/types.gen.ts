// This file is auto-generated by @hey-api/openapi-ts

export type Address = {
  street?: string;
  city?: string;
  state?: string;
  zip?: string;
};

export type ApiResponse = {
  code?: number;
  type?: string;
  message?: string;
};

export type Category = {
  id?: number;
  name?: string;
};

export type Customer = {
  id?: number;
  username?: string;
  address?: Array<Address>;
};

export type Order = {
  id?: number;
  petId?: number;
  quantity?: number;
  shipDate?: Date;
  /**
   * Order Status
   */
  status?: 'placed' | 'approved' | 'delivered';
  complete?: boolean;
};

/**
 * Order Status
 */
export type status = 'placed' | 'approved' | 'delivered';

/**
 * Order Status
 */
export const status = {
  PLACED: 'placed',
  APPROVED: 'approved',
  DELIVERED: 'delivered',
} as const;

export type Pet = {
  id?: number;
  name: string;
  category?: Category;
  photoUrls: Array<string>;
  tags?: Array<Tag>;
  /**
   * pet status in the store
   */
  status?: 'available' | 'pending' | 'sold';
};

/**
 * pet status in the store
 */
export type status2 = 'available' | 'pending' | 'sold';

/**
 * pet status in the store
 */
export const status2 = {
  AVAILABLE: 'available',
  PENDING: 'pending',
  SOLD: 'sold',
} as const;

export type Tag = {
  id?: number;
  name?: string;
};

export type User = {
  id?: number;
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  phone?: string;
  /**
   * User Status
   */
  userStatus?: number;
};

export type AddPetData = {
  /**
   * Create a new pet in the store
   */
  body: Pet;
};

export type AddPetResponse = Pet;

export type AddPetError = unknown;

export type UpdatePetData = {
  /**
   * Update an existent pet in the store
   */
  body: Pet;
};

export type UpdatePetResponse = Pet;

export type UpdatePetError = unknown;

export type FindPetsByStatusData = {
  query?: {
    /**
     * Status values that need to be considered for filter
     */
    status?: 'available' | 'pending' | 'sold';
  };
};

export type FindPetsByStatusResponse = Array<Pet>;

export type FindPetsByStatusError = unknown;

export type FindPetsByTagsData = {
  query?: {
    /**
     * Tags to filter by
     */
    tags?: Array<string>;
  };
};

export type FindPetsByTagsResponse = Array<Pet>;

export type FindPetsByTagsError = unknown;

export type GetPetByIdData = {
  path: {
    /**
     * ID of pet to return
     */
    petId: number;
  };
};

export type GetPetByIdResponse = Pet;

export type GetPetByIdError = unknown;

export type UpdatePetWithFormData = {
  path: {
    /**
     * ID of pet that needs to be updated
     */
    petId: number;
  };
  query?: {
    /**
     * Name of pet that needs to be updated
     */
    name?: string;
    /**
     * Status of pet that needs to be updated
     */
    status?: string;
  };
};

export type DeletePetData = {
  headers?: {
    api_key?: string;
  };
  path: {
    /**
     * Pet id to delete
     */
    petId: number;
  };
};

export type UploadFileData = {
  body?: Blob | File;
  path: {
    /**
     * ID of pet to update
     */
    petId: number;
  };
  query?: {
    /**
     * Additional Metadata
     */
    additionalMetadata?: string;
  };
};

export type UploadFileResponse = ApiResponse;

export type UploadFileError = unknown;

export type GetInventoryResponse = {
  [key: string]: number;
};

export type GetInventoryError = unknown;

export type PlaceOrderData = {
  body?: Order;
};

export type PlaceOrderResponse = Order;

export type PlaceOrderError = unknown;

export type GetOrderByIdData = {
  path: {
    /**
     * ID of order that needs to be fetched
     */
    orderId: number;
  };
};

export type GetOrderByIdResponse = Order;

export type GetOrderByIdError = unknown;

export type DeleteOrderData = {
  path: {
    /**
     * ID of the order that needs to be deleted
     */
    orderId: number;
  };
};

export type CreateUserData = {
  /**
   * Created user object
   */
  body?: User;
};

export type CreateUserResponse = User;

export type CreateUserError = unknown;

export type CreateUsersWithListInputData = {
  body?: Array<User>;
};

export type CreateUsersWithListInputResponse = User | unknown;

export type CreateUsersWithListInputError = unknown;

export type LoginUserData = {
  query?: {
    /**
     * The password for login in clear text
     */
    password?: string;
    /**
     * The user name for login
     */
    username?: string;
  };
};

export type LoginUserResponse = string;

export type LoginUserError = unknown;

export type LogoutUserResponse = unknown;

export type LogoutUserError = unknown;

export type GetUserByNameData = {
  path: {
    /**
     * The name that needs to be fetched. Use user1 for testing.
     */
    username: string;
  };
};

export type GetUserByNameResponse = User;

export type GetUserByNameError = unknown;

export type UpdateUserData = {
  /**
   * Update an existent user in the store
   */
  body?: User;
  path: {
    /**
     * name that needs to be updated
     */
    username: string;
  };
};

export type UpdateUserResponse = unknown;

export type UpdateUserError = unknown;

export type DeleteUserData = {
  path: {
    /**
     * The name that needs to be deleted
     */
    username: string;
  };
};

export type PlaceOrderResponseTransformer = (
  data: any,
) => Promise<PlaceOrderResponse>;

export type OrderModelResponseTransformer = (data: any) => Order;

export const OrderModelResponseTransformer: OrderModelResponseTransformer = (
  data,
) => {
  if (data?.shipDate) {
    data.shipDate = new Date(data.shipDate);
  }
  return data;
};

export const PlaceOrderResponseTransformer: PlaceOrderResponseTransformer =
  async (data) => {
    OrderModelResponseTransformer(data);
    return data;
  };

export type GetOrderByIdResponseTransformer = (
  data: any,
) => Promise<GetOrderByIdResponse>;

export const GetOrderByIdResponseTransformer: GetOrderByIdResponseTransformer =
  async (data) => {
    OrderModelResponseTransformer(data);
    return data;
  };