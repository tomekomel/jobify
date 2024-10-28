import { Module } from '@nestjs/common';
import { JobsController } from './jobs.controller';
import { JobsService } from './jobs.service';
import { DatabaseModule, LoggerModule } from '@app/common';
import { ConfigModule } from '@nestjs/config';
import { JobsRepository } from './jobs.repository';
import { JobDocument, JobSchema } from './models/job.schema';
import * as Joi from 'joi';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([{ name: JobDocument.name, schema: JobSchema }]),
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        PORT: Joi.number().required()
      }),
    }),
    LoggerModule,
    ConfigModule,
  ],
  controllers: [JobsController],
  providers: [JobsService, JobsRepository],
})
export class JobsModule {}
