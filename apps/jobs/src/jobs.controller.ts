import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { JobsService } from './jobs.service';
import { CreateJobDto } from './dto/create-job.dto';
import { JobDocument } from './models/job.schema';
import { UpdateJobDto } from './dto/update-job.dto';

@Controller()
export class JobsController {
  private readonly logger = new Logger(JobsController.name);
  constructor(private readonly jobsService: JobsService) {}

  @Post()
  async create(@Body() createJobDto: CreateJobDto): Promise<JobDocument> {
    const job = await this.jobsService.create(createJobDto);
    this.logger.log(`New job was created.`);
    return job;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateJobDto: UpdateJobDto,
  ): Promise<JobDocument> {
    const job = await this.jobsService.update(id, updateJobDto);
    this.logger.log(`Job [${id}] was updated.`);
    return job;
  }

  @Get(':id')
  async get(@Param('id') id: string): Promise<JobDocument> {
    return this.jobsService.findOne(id);
  }

  @Get()
  async getAll(): Promise<JobDocument[]> {
    return this.jobsService.findAll();
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<JobDocument> {
    return this.jobsService.remove(id);
  }
}
