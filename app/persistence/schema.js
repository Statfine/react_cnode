/**
 * Created by eastiming on 16/7/12.
 */
import { Schema, arrayOf } from 'normalizr';

const List = new Schema('list');
const ListSchema = arrayOf(List);

export const Schemas = {
  ListSchema,
};
