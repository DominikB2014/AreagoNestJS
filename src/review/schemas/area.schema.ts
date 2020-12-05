import { Document } from 'mongoose';
import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';

export type AreaDocument = Area & Document;

@Schema()
export class Area {
  @Prop()
  name: string;

  @Prop()
  city: string;

  @Prop()
  country: string;

  @Prop()
  overview: string;

  @Prop()
  username: string;

  @Prop(
    raw({
      longitude: { type: Number },
      latitude: { type: Number },
    }),
  )
  coordinates: Record<string, number>;

  @Prop(
    raw({
      two: { type: Number, default: 0 },
      one: { type: Number, default: 0 },
      three: { type: Number, default: 0 },
      four: { type: Number, default: 0 },
      five: { type: Number, default: 0 },
    }),
  )
  rating: Record<string, number>;
}

export const AreaSchema = SchemaFactory.createForClass(Area);
