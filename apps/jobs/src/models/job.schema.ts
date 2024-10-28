import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class JobDocument extends AbstractDocument {
  @Prop()
  created: Date;

  @Prop()
  companyName: string;
}

export const JobSchema = SchemaFactory.createForClass(JobDocument);
