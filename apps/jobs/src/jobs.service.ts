import { Injectable } from '@nestjs/common';
import { JobsRepository } from './jobs.repository';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';

@Injectable()
export class JobsService {
  constructor(private readonly jobsRepository: JobsRepository) {}

  async create(createJobDto: CreateJobDto) {
    return this.jobsRepository.create({ ...createJobDto, created: new Date() });
  }

  async findAll() {
    return this.jobsRepository.find({});
  }

  async findOne(id: string) {
    return this.jobsRepository.findOne({ _id: id });
  }

  async update(id: string, updateJobDto: UpdateJobDto) {
    return this.jobsRepository.update({ _id: id }, { $set: updateJobDto });
  }

  async remove(id: string) {
    return this.jobsRepository.findOneAndDelete({ _id: id });
  }
}
