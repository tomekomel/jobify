import {
  IsArray,
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { ExperienceLevel, JobType, Remote } from '../models/enums';
import { Type } from 'class-transformer';
import { Benefit } from '../models/enums/benefit.enum';

export class CreateJobDto {
  @IsNotEmpty()
  @IsString()
  companyName: string;

  @IsDate()
  @Type(() => Date)
  @IsOptional()
  from: Date;

  @IsEnum(ExperienceLevel)
  experienceLevel: ExperienceLevel;

  @IsEnum(JobType)
  jobType: JobType;

  @IsEnum(Remote)
  remote: Remote;

  @IsString()
  location: string;

  @IsString()
  industry: string;

  @IsString()
  jobFunction: string;

  @IsString()
  title: string;

  @IsArray()
  @IsEnum(Benefit, { each: true })
  benefits: Benefit[];
}
