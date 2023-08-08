// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Blog, Post, Comment, Order, OrderProduct, Product, CartProduct, PaymentIntent } = initSchema(schema);

export {
  Blog,
  Post,
  Comment,
  Order,
  OrderProduct,
  Product,
  CartProduct,
  PaymentIntent
};