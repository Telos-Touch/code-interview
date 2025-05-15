import { Module } from '@nestjs/common';
import { WorkflowModule } from './modules/workflow/workflow.module';

@Module({
	imports: [WorkflowModule],
	controllers: [],
	providers: []
})
export class AppModule {}
