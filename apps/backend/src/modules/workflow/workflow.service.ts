import { Injectable } from '@nestjs/common';
import { Workflow } from './types';
import { workflows } from './static';

@Injectable()
export class WorkflowService {
	findAll(): Workflow[] {
		return workflows;
	}

	findOne(id: string): Workflow | undefined {
		// TODO: Implement findOne method
		return undefined;
	}
}
