import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ExperienceLevel, JobType, Remote } from './enums';

@Schema({ versionKey: false })
export class JobDocument extends AbstractDocument {
  @Prop()
  created: Date;

  @Prop()
  from: Date;

  @Prop()
  companyName: string;

  @Prop({
    type: String,
    enum: ExperienceLevel,
    required: true,
  })
  experienceLevel: ExperienceLevel;

  @Prop({
    type: String,
    enum: JobType,
    required: true,
  })
  jobType: JobType;

  @Prop({
    type: String,
    enum: Remote,
    required: true,
  })
  remote: Remote;

  @Prop()
  location: string;

  @Prop()
  industry: string;

  @Prop()
  jobFunction: string;

  @Prop()
  title: string;

  @Prop()
  benefits: string[];
}

export const JobSchema = SchemaFactory.createForClass(JobDocument);
