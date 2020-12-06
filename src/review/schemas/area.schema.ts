import * as mongoose from 'mongoose';

export const AreaSchema = new mongoose.Schema({
  name: {type: String, required: true},
  city: {type: String, required: true},
  country: {type: String, required: true},
  overview: {type: String, required: true},
  username: {type: String, required: true},
  coordinates: {
    longitude: {type: Number, required: true},
    latitude: {type: Number, required: true}
  },
  rating: {
    one: {type: Number, default: 0},
    two: {type: Number, default: 0},
    three: {type: Number, default: 0},
    foure: {type: Number, default: 0},
    five: {type: Number, default: 0}
  }
});