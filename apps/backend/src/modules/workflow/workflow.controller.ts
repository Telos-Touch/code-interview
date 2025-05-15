import { Controller, Get, Param } from '@nestjs/common';
import { WorkflowService } from './workflow.service';
import { Workflow } from './types';

@Controller('workflows')
export class WorkflowController {
	constructor(private readonly workflowService: WorkflowService) {}

	@Get()
	findAll(): Workflow[] {
		return this.workflowService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string): Workflow | undefined {
		//TODO: Implement findOne method
		return undefined;
	}
}
