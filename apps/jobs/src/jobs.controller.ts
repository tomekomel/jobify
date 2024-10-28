import { Body, Controller, Logger, Post } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { CreateJobDto } from './dto/create-job.dto';
import { JobDocument } from './models/job.schema';

@Controller()
export class JobsController {
  private readonly logger = new Logger(JobsController.name);
  constructor(private readonly jobsService: JobsService) {}

  @Post()
  async create(@Body() createJobDto: CreateJobDto): Promise<JobDocument> {
    const job = await this.jobsService.create(createJobDto);
    this.logger.log(`New job was created successfully`);

    return job;
  }
}
