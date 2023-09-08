import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: false, versionKey: false })
export class Item {
  @Prop({ required: true, minlength: 3, maxlength: 10 })
  name: string;

  @Prop({ required: true, minlength: 5, maxlength: 50 })
  description: string;

  @Prop({ required: true, min: 0, max: 5 })
  rate: number;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  image: string;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
