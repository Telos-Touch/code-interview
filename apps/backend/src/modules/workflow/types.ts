export interface WorkflowStep {
	id: string;
	title: string;
	description: string;
	color: string;
	position: {
		x: number;
		y: number;
	};
}

export interface WorkflowRule {
	id: string;
	sourceId: string;
	targetId: string;
}

export interface Workflow {
	id: string;
	title: string;
	startStepId: string;
	steps: WorkflowStep[];
	rules: WorkflowRule[];
}
