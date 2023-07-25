// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Product, CartProduct, Comment } = initSchema(schema);

export {
  Product,
  CartProduct,
  Comment
};