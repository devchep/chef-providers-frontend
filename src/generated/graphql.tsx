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
};

export type Query = {
  __typename?: 'Query';
  products: Array<Product>;
  product?: Maybe<Product>;
  me?: Maybe<Supplier>;
};


export type QueryProductArgs = {
  id: Scalars['Float'];
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['Float'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
  measure: Scalars['String'];
  isActive: Scalars['Boolean'];
};

export type Supplier = {
  __typename?: 'Supplier';
  id: Scalars['Float'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  userEmail: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createProduct: Product;
  updateProduct: Product;
  deleteProduct: Scalars['Boolean'];
  register: SupplierResponse;
  login: SupplierResponse;
};


export type MutationCreateProductArgs = {
  isActive: Scalars['Boolean'];
  measure: Scalars['String'];
  price: Scalars['Float'];
  name: Scalars['String'];
};


export type MutationUpdateProductArgs = {
  isActive?: Maybe<Scalars['Boolean']>;
  measure?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
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
      & Pick<Supplier, 'id' | 'userEmail' | 'createdAt' | 'updatedAt'>
    )> }
  ) }
);


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
      createdAt
      updatedAt
    }
  }
}
    `;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};