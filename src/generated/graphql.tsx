import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Query = {
  __typename?: 'Query';
  products: Array<Product>;
  product?: Maybe<Product>;
  me?: Maybe<Supplier>;
  getActiveCategories?: Maybe<Array<ActiveCategory>>;
  getShownCategories?: Maybe<Array<ActiveCategory>>;
  getActiveCategory?: Maybe<ActiveCategory>;
  categories: Array<Category>;
  subcategories: Array<Subcategory>;
  getActiveSubcategories?: Maybe<Array<ActiveSubcategory>>;
  getActiveSubcategory?: Maybe<ActiveSubcategory>;
  orders?: Maybe<Array<Order>>;
};


export type QueryProductArgs = {
  id: Scalars['Float'];
};


export type QueryGetActiveCategoryArgs = {
  categoryId: Scalars['Int'];
};


export type QuerySubcategoriesArgs = {
  categoryId: Scalars['Int'];
};


export type QueryGetActiveSubcategoriesArgs = {
  activeCategoryId: Scalars['Int'];
};


export type QueryGetActiveSubcategoryArgs = {
  subcategoryId: Scalars['Int'];
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['Int'];
  creatorId: Scalars['Int'];
  subcategoryId: Scalars['Int'];
  name: Scalars['String'];
  description: Scalars['String'];
  price: Scalars['Float'];
  measure: Scalars['String'];
  amount: Scalars['Int'];
  isShown: Scalars['Boolean'];
};

export type Supplier = {
  __typename?: 'Supplier';
  id: Scalars['Int'];
  activeCategories?: Maybe<Array<Category>>;
  activeSubcategories?: Maybe<Array<ActiveSubcategory>>;
  orders?: Maybe<Array<Order>>;
  userEmail: Scalars['String'];
  INN?: Maybe<Scalars['String']>;
  OGRN?: Maybe<Scalars['String']>;
  docimine?: Maybe<Scalars['String']>;
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['Int'];
  subcategories?: Maybe<Array<Subcategory>>;
  name: Scalars['String'];
};

export type Subcategory = {
  __typename?: 'Subcategory';
  id: Scalars['Int'];
  categoryId: Scalars['Int'];
  products?: Maybe<Array<Product>>;
  name: Scalars['String'];
};

export type ActiveSubcategory = {
  __typename?: 'ActiveSubcategory';
  id: Scalars['Int'];
  subcategory: Subcategory;
  isShown: Scalars['Boolean'];
  products?: Maybe<Array<Product>>;
};

export type Order = {
  __typename?: 'Order';
  id: Scalars['Int'];
  supplierId: Scalars['Int'];
  restaurantName: Scalars['String'];
  shippingAdress: Scalars['String'];
  phoneNumber: Scalars['String'];
  summary: Scalars['Float'];
  status: Scalars['Int'];
  orderProducts?: Maybe<Array<OrderProduct>>;
  deliveryDate?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
};

export type OrderProduct = {
  __typename?: 'OrderProduct';
  product: Product;
};


export type ActiveCategory = {
  __typename?: 'ActiveCategory';
  id: Scalars['Int'];
  category: Category;
  activeSubcategories?: Maybe<Array<ActiveSubcategory>>;
  isShown: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createProduct: Product;
  updateProduct?: Maybe<Product>;
  deleteProduct: Scalars['Boolean'];
  register: SupplierResponse;
  login: SupplierResponse;
  logout: Scalars['Boolean'];
  addActiveCategory: Scalars['Boolean'];
  deleteActiveCategory: Scalars['Boolean'];
  updateActiveCategory: ActiveCategory;
  createCategory: Category;
  deleteCategory: Scalars['Boolean'];
  createSubcategory: Subcategory;
  deleteSubcategory: Scalars['Boolean'];
  addActiveSubcategory: Scalars['Boolean'];
  deleteActiveSubcategory: Scalars['Boolean'];
  updateActiveSubcategory: ActiveSubcategory;
  makeOrder: OrderResponse;
  updateOrder?: Maybe<Order>;
};


export type MutationCreateProductArgs = {
  input: CreateProductInput;
};


export type MutationUpdateProductArgs = {
  input: UpdateProductInput;
  id: Scalars['Int'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['Int'];
};


export type MutationRegisterArgs = {
  options: SupplierLoginInfo;
};


export type MutationLoginArgs = {
  options: SupplierLoginInfo;
};


export type MutationAddActiveCategoryArgs = {
  categoryId: Scalars['Int'];
};


export type MutationDeleteActiveCategoryArgs = {
  categoryId: Scalars['Int'];
};


export type MutationUpdateActiveCategoryArgs = {
  isShown: Scalars['Boolean'];
  activeCategoryId: Scalars['Int'];
};


export type MutationCreateCategoryArgs = {
  input: CategoryInput;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['Float'];
};


export type MutationCreateSubcategoryArgs = {
  input: SubcategoryInput;
};


export type MutationDeleteSubcategoryArgs = {
  id: Scalars['Float'];
};


export type MutationAddActiveSubcategoryArgs = {
  activeCategoryId: Scalars['Int'];
  subcategoryId: Scalars['Int'];
};


export type MutationDeleteActiveSubcategoryArgs = {
  subcategoryId: Scalars['Int'];
};


export type MutationUpdateActiveSubcategoryArgs = {
  isShown: Scalars['Boolean'];
  activeSubcategoryId: Scalars['Int'];
};


export type MutationMakeOrderArgs = {
  input: MakeOrderInput;
};


export type MutationUpdateOrderArgs = {
  input: UpdateOrderInput;
  id: Scalars['Int'];
};

export type CreateProductInput = {
  subcategoryId: Scalars['Float'];
  activeSubcategoryId: Scalars['Float'];
  name: Scalars['String'];
  description: Scalars['String'];
  price: Scalars['Float'];
  measure: Scalars['String'];
  amount: Scalars['Int'];
};

export type UpdateProductInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  measure?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  isShown?: Maybe<Scalars['Boolean']>;
};

export type SupplierResponse = {
  __typename?: 'SupplierResponse';
  errors?: Maybe<FieldError>;
  supplier?: Maybe<Supplier>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type SupplierLoginInfo = {
  userEmail: Scalars['String'];
  password: Scalars['String'];
};

export type CategoryInput = {
  name: Scalars['String'];
};

export type SubcategoryInput = {
  name: Scalars['String'];
  categoryId: Scalars['Float'];
};

export type OrderResponse = {
  __typename?: 'OrderResponse';
  errors?: Maybe<OrderFieldError>;
  order?: Maybe<Order>;
};

export type OrderFieldError = {
  __typename?: 'OrderFieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type MakeOrderInput = {
  supplierId: Scalars['Float'];
  products: Array<ProductsInput>;
  restaurant: RestaurantInput;
};

export type ProductsInput = {
  productId: Scalars['Float'];
  productAmount: Scalars['Float'];
};

export type RestaurantInput = {
  name: Scalars['String'];
  shippingAdress: Scalars['String'];
  phoneNumber: Scalars['String'];
};

export type UpdateOrderInput = {
  status?: Maybe<Scalars['Float']>;
  deliveryDate?: Maybe<Scalars['DateTime']>;
};

export type AddActiveCategoryMutationVariables = Exact<{
  categoryId: Scalars['Int'];
}>;


export type AddActiveCategoryMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'addActiveCategory'>
);

export type AddActiveSubcategoryMutationVariables = Exact<{
  activeCategoryId: Scalars['Int'];
  subcategoryId: Scalars['Int'];
}>;


export type AddActiveSubcategoryMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'addActiveSubcategory'>
);

export type CreateProductMutationVariables = Exact<{
  input: CreateProductInput;
}>;


export type CreateProductMutation = (
  { __typename?: 'Mutation' }
  & { createProduct: (
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'name' | 'price' | 'measure' | 'isShown'>
  ) }
);

export type DeleteActiveSubcategoryMutationVariables = Exact<{
  subcategoryId: Scalars['Int'];
}>;


export type DeleteActiveSubcategoryMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteActiveSubcategory'>
);

export type DeleteProductMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteProductMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteProduct'>
);

export type LoginMutationVariables = Exact<{
  userEmail: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'SupplierResponse' }
    & { errors?: Maybe<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>, supplier?: Maybe<(
      { __typename?: 'Supplier' }
      & Pick<Supplier, 'id' | 'userEmail'>
    )> }
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type UpdateActiveCategoryMutationVariables = Exact<{
  activeCategoryId: Scalars['Int'];
  isShown: Scalars['Boolean'];
}>;


export type UpdateActiveCategoryMutation = (
  { __typename?: 'Mutation' }
  & { updateActiveCategory: (
    { __typename?: 'ActiveCategory' }
    & Pick<ActiveCategory, 'id' | 'isShown'>
    & { category: (
      { __typename?: 'Category' }
      & Pick<Category, 'id' | 'name'>
    ) }
  ) }
);

export type UpdateOrderMutationVariables = Exact<{
  id: Scalars['Int'];
  input: UpdateOrderInput;
}>;


export type UpdateOrderMutation = (
  { __typename?: 'Mutation' }
  & { updateOrder?: Maybe<(
    { __typename?: 'Order' }
    & Pick<Order, 'id' | 'status'>
  )> }
);

export type UpdateProductMutationVariables = Exact<{
  id: Scalars['Int'];
  input: UpdateProductInput;
}>;


export type UpdateProductMutation = (
  { __typename?: 'Mutation' }
  & { updateProduct?: Maybe<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'name' | 'isShown'>
  )> }
);

export type ActiveCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type ActiveCategoriesQuery = (
  { __typename?: 'Query' }
  & { getActiveCategories?: Maybe<Array<(
    { __typename?: 'ActiveCategory' }
    & Pick<ActiveCategory, 'id' | 'isShown'>
    & { category: (
      { __typename?: 'Category' }
      & Pick<Category, 'id' | 'name'>
    ) }
  )>> }
);

export type ActiveCategoryQueryVariables = Exact<{
  categoryId: Scalars['Int'];
}>;


export type ActiveCategoryQuery = (
  { __typename?: 'Query' }
  & { getActiveCategory?: Maybe<(
    { __typename?: 'ActiveCategory' }
    & Pick<ActiveCategory, 'id' | 'isShown'>
    & { category: (
      { __typename?: 'Category' }
      & Pick<Category, 'id' | 'name'>
    ), activeSubcategories?: Maybe<Array<(
      { __typename?: 'ActiveSubcategory' }
      & Pick<ActiveSubcategory, 'id' | 'isShown'>
      & { subcategory: (
        { __typename?: 'Subcategory' }
        & Pick<Subcategory, 'id' | 'name'>
      ) }
    )>> }
  )> }
);

export type ActiveSubcategoryQueryVariables = Exact<{
  subcategoryId: Scalars['Int'];
}>;


export type ActiveSubcategoryQuery = (
  { __typename?: 'Query' }
  & { getActiveSubcategory?: Maybe<(
    { __typename?: 'ActiveSubcategory' }
    & Pick<ActiveSubcategory, 'id' | 'isShown'>
    & { subcategory: (
      { __typename?: 'Subcategory' }
      & Pick<Subcategory, 'id' | 'name'>
    ), products?: Maybe<Array<(
      { __typename?: 'Product' }
      & Pick<Product, 'id' | 'subcategoryId' | 'name' | 'description' | 'price' | 'measure' | 'amount' | 'isShown'>
    )>> }
  )> }
);

export type CategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesQuery = (
  { __typename?: 'Query' }
  & { categories: Array<(
    { __typename?: 'Category' }
    & Pick<Category, 'id' | 'name'>
  )> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'Supplier' }
    & Pick<Supplier, 'id' | 'userEmail'>
  )> }
);

export type OrdersQueryVariables = Exact<{ [key: string]: never; }>;


export type OrdersQuery = (
  { __typename?: 'Query' }
  & { orders?: Maybe<Array<(
    { __typename?: 'Order' }
    & Pick<Order, 'id' | 'restaurantName' | 'shippingAdress' | 'phoneNumber' | 'summary' | 'status' | 'deliveryDate' | 'createdAt'>
  )>> }
);

export type ShownCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type ShownCategoriesQuery = (
  { __typename?: 'Query' }
  & { getShownCategories?: Maybe<Array<(
    { __typename?: 'ActiveCategory' }
    & Pick<ActiveCategory, 'id' | 'isShown'>
    & { category: (
      { __typename?: 'Category' }
      & Pick<Category, 'id' | 'name'>
    ) }
  )>> }
);

export type SubcategoriesQueryVariables = Exact<{
  categoryId: Scalars['Int'];
}>;


export type SubcategoriesQuery = (
  { __typename?: 'Query' }
  & { subcategories: Array<(
    { __typename?: 'Subcategory' }
    & Pick<Subcategory, 'id' | 'categoryId' | 'name'>
  )> }
);


export const AddActiveCategoryDocument = gql`
    mutation AddActiveCategory($categoryId: Int!) {
  addActiveCategory(categoryId: $categoryId)
}
    `;

export function useAddActiveCategoryMutation() {
  return Urql.useMutation<AddActiveCategoryMutation, AddActiveCategoryMutationVariables>(AddActiveCategoryDocument);
};
export const AddActiveSubcategoryDocument = gql`
    mutation AddActiveSubcategory($activeCategoryId: Int!, $subcategoryId: Int!) {
  addActiveSubcategory(
    activeCategoryId: $activeCategoryId
    subcategoryId: $subcategoryId
  )
}
    `;

export function useAddActiveSubcategoryMutation() {
  return Urql.useMutation<AddActiveSubcategoryMutation, AddActiveSubcategoryMutationVariables>(AddActiveSubcategoryDocument);
};
export const CreateProductDocument = gql`
    mutation CreateProduct($input: CreateProductInput!) {
  createProduct(input: $input) {
    id
    name
    price
    measure
    isShown
  }
}
    `;

export function useCreateProductMutation() {
  return Urql.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument);
};
export const DeleteActiveSubcategoryDocument = gql`
    mutation DeleteActiveSubcategory($subcategoryId: Int!) {
  deleteActiveSubcategory(subcategoryId: $subcategoryId)
}
    `;

export function useDeleteActiveSubcategoryMutation() {
  return Urql.useMutation<DeleteActiveSubcategoryMutation, DeleteActiveSubcategoryMutationVariables>(DeleteActiveSubcategoryDocument);
};
export const DeleteProductDocument = gql`
    mutation DeleteProduct($id: Int!) {
  deleteProduct(id: $id)
}
    `;

export function useDeleteProductMutation() {
  return Urql.useMutation<DeleteProductMutation, DeleteProductMutationVariables>(DeleteProductDocument);
};
export const LoginDocument = gql`
    mutation Login($userEmail: String!, $password: String!) {
  login(options: {userEmail: $userEmail, password: $password}) {
    errors {
      field
      message
    }
    supplier {
      id
      userEmail
    }
  }
}
    `;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument);
};
export const UpdateActiveCategoryDocument = gql`
    mutation UpdateActiveCategory($activeCategoryId: Int!, $isShown: Boolean!) {
  updateActiveCategory(activeCategoryId: $activeCategoryId, isShown: $isShown) {
    id
    category {
      id
      name
    }
    isShown
  }
}
    `;

export function useUpdateActiveCategoryMutation() {
  return Urql.useMutation<UpdateActiveCategoryMutation, UpdateActiveCategoryMutationVariables>(UpdateActiveCategoryDocument);
};
export const UpdateOrderDocument = gql`
    mutation UpdateOrder($id: Int!, $input: UpdateOrderInput!) {
  updateOrder(id: $id, input: $input) {
    id
    status
  }
}
    `;

export function useUpdateOrderMutation() {
  return Urql.useMutation<UpdateOrderMutation, UpdateOrderMutationVariables>(UpdateOrderDocument);
};
export const UpdateProductDocument = gql`
    mutation UpdateProduct($id: Int!, $input: UpdateProductInput!) {
  updateProduct(id: $id, input: $input) {
    id
    name
    isShown
  }
}
    `;

export function useUpdateProductMutation() {
  return Urql.useMutation<UpdateProductMutation, UpdateProductMutationVariables>(UpdateProductDocument);
};
export const ActiveCategoriesDocument = gql`
    query ActiveCategories {
  getActiveCategories {
    id
    category {
      id
      name
    }
    isShown
  }
}
    `;

export function useActiveCategoriesQuery(options: Omit<Urql.UseQueryArgs<ActiveCategoriesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ActiveCategoriesQuery>({ query: ActiveCategoriesDocument, ...options });
};
export const ActiveCategoryDocument = gql`
    query ActiveCategory($categoryId: Int!) {
  getActiveCategory(categoryId: $categoryId) {
    id
    category {
      id
      name
    }
    activeSubcategories {
      id
      subcategory {
        id
        name
      }
      isShown
    }
    isShown
  }
}
    `;

export function useActiveCategoryQuery(options: Omit<Urql.UseQueryArgs<ActiveCategoryQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ActiveCategoryQuery>({ query: ActiveCategoryDocument, ...options });
};
export const ActiveSubcategoryDocument = gql`
    query ActiveSubcategory($subcategoryId: Int!) {
  getActiveSubcategory(subcategoryId: $subcategoryId) {
    id
    subcategory {
      id
      name
    }
    products {
      id
      subcategoryId
      name
      description
      price
      measure
      amount
      isShown
    }
    isShown
  }
}
    `;

export function useActiveSubcategoryQuery(options: Omit<Urql.UseQueryArgs<ActiveSubcategoryQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ActiveSubcategoryQuery>({ query: ActiveSubcategoryDocument, ...options });
};
export const CategoriesDocument = gql`
    query Categories {
  categories {
    id
    name
  }
}
    `;

export function useCategoriesQuery(options: Omit<Urql.UseQueryArgs<CategoriesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<CategoriesQuery>({ query: CategoriesDocument, ...options });
};
export const MeDocument = gql`
    query Me {
  me {
    id
    userEmail
  }
}
    `;

export function useMeQuery(options: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};
export const OrdersDocument = gql`
    query Orders {
  orders {
    id
    restaurantName
    shippingAdress
    phoneNumber
    summary
    status
    deliveryDate
    createdAt
  }
}
    `;

export function useOrdersQuery(options: Omit<Urql.UseQueryArgs<OrdersQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<OrdersQuery>({ query: OrdersDocument, ...options });
};
export const ShownCategoriesDocument = gql`
    query ShownCategories {
  getShownCategories {
    id
    category {
      id
      name
    }
    isShown
  }
}
    `;

export function useShownCategoriesQuery(options: Omit<Urql.UseQueryArgs<ShownCategoriesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ShownCategoriesQuery>({ query: ShownCategoriesDocument, ...options });
};
export const SubcategoriesDocument = gql`
    query Subcategories($categoryId: Int!) {
  subcategories(categoryId: $categoryId) {
    id
    categoryId
    name
  }
}
    `;

export function useSubcategoriesQuery(options: Omit<Urql.UseQueryArgs<SubcategoriesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<SubcategoriesQuery>({ query: SubcategoriesDocument, ...options });
};