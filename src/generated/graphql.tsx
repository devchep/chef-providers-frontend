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
  categories: Array<Category>;
  subcategories: Array<Subcategory>;
  getActiveSubcategories?: Maybe<Array<ActiveSubcategory>>;
  orders: Array<Order>;
};


export type QueryProductArgs = {
  id: Scalars['Float'];
};


export type QuerySubcategoriesArgs = {
  categoryId: Scalars['Float'];
};


export type QueryGetActiveSubcategoriesArgs = {
  activeCategoryId: Scalars['Int'];
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
  updateProduct?: Maybe<Order>;
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
};


export type MutationCreateProductArgs = {
  input: CreateProductInput;
};


export type MutationUpdateProductArgs = {
  input: UpdateOrderInput;
  id: Scalars['Float'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['Float'];
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

export type CreateProductInput = {
  subcategoryId: Scalars['Float'];
  activeSubcategoryId: Scalars['Float'];
  name: Scalars['String'];
  description: Scalars['String'];
  price: Scalars['Float'];
  measure: Scalars['String'];
  amount: Scalars['Int'];
};

export type UpdateOrderInput = {
  status?: Maybe<Scalars['Float']>;
  deliveryDate?: Maybe<Scalars['DateTime']>;
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

export type AddActiveCategoryMutationVariables = Exact<{
  categoryId: Scalars['Int'];
}>;


export type AddActiveCategoryMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'addActiveCategory'>
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


export const AddActiveCategoryDocument = gql`
    mutation AddActiveCategory($categoryId: Int!) {
  addActiveCategory(categoryId: $categoryId)
}
    `;

export function useAddActiveCategoryMutation() {
  return Urql.useMutation<AddActiveCategoryMutation, AddActiveCategoryMutationVariables>(AddActiveCategoryDocument);
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