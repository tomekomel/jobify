import { AbstractRepository } from '@app/common';
import { JobDocument } from './models/job.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Logger } from '@nestjs/common';

export class JobsRepository extends AbstractRepository<JobDocument> {
  protected logger = new Logger(JobsRepository.name);

  constructor(@InjectModel(JobDocument.name) jobModel: Model<JobDocument>) {
    super(jobModel);
  }
}
