import { Workflow } from './types';

export const workflows: Workflow[] = [
	{
		id: 'b1e7c8a2-1f2a-4e3b-9c1d-2a3b4c5d6e7f',
		title: 'Death Star Protocol',
		startStepId: 'a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d',
		steps: [
			{
				id: 'a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d',
				title: 'Docking Bay 94',
				description: 'Step 1',
				color: '#00FF00',
				position: { x: 0, y: 0 }
			},
			{
				id: 'b2c3d4e5-f6a7-4b8c-9d0e-1f2a3b4c5d6e',
				title: 'Kessel Run',
				description: 'Step 2',
				color: '#FFD700',
				position: { x: 300, y: 0 }
			},
			{
				id: 'c3d4e5f6-a7b8-4c9d-0e1f-2a3b4c5d6e7f',
				title: 'Dagobah Detour',
				description: 'Step 3',
				color: '#1E90FF',
				position: { x: 600, y: -100 }
			},
			{
				id: 'd4e5f6a7-b8c9-4d0e-1f2a-3b4c5d6e7f8g',
				title: 'Sarlacc Pit',
				description: 'Step 4',
				color: '#FF69B4',
				position: { x: 600, y: 100 }
			},
			{
				id: 'e5f6a7b8-c9d0-4e1f-2a3b-4c5d6e7f8g9h',
				title: 'Jedi Council',
				description: 'Step 5',
				color: '#8A2BE2',
				position: { x: 900, y: 0 }
			},
			{
				id: 'f6a7b8c9-d0e1-4f2a-3b4c-5d6e7f8g9h0i',
				title: 'Binary Sunset',
				description: 'Step 6',
				color: '#20B2AA',
				position: { x: 1200, y: -50 }
			},
			{
				id: 'a7b8c9d0-e1f2-4a3b-4c5d-6e7f8g9h0i1j',
				title: 'Carbonite Freeze',
				description: 'Step 7',
				color: '#FF8C00',
				position: { x: 1200, y: 50 }
			},
			{
				id: 'b8c9d0e1-f2a3-4b4c-5d6e-7f8g9h0i1j2k',
				title: 'Endor Shield',
				description: 'Step 8',
				color: '#DC143C',
				position: { x: 1500, y: 0 }
			}
		],
		rules: [
			{
				id: 'r1-1111-aaaa-2222-bbbb-3333cccc4444',
				sourceId: 'a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d',
				targetId: 'b2c3d4e5-f6a7-4b8c-9d0e-1f2a3b4c5d6e'
			},
			{
				id: 'r2-2222-bbbb-3333-cccc-4444dddd5555',
				sourceId: 'b2c3d4e5-f6a7-4b8c-9d0e-1f2a3b4c5d6e',
				targetId: 'c3d4e5f6-a7b8-4c9d-0e1f-2a3b4c5d6e7f'
			},
			{
				id: 'r3-3333-cccc-4444-dddd-5555eeee6666',
				sourceId: 'b2c3d4e5-f6a7-4b8c-9d0e-1f2a3b4c5d6e',
				targetId: 'd4e5f6a7-b8c9-4d0e-1f2a-3b4c5d6e7f8g'
			},
			{
				id: 'r4-4444-dddd-5555-eeee-6666ffff7777',
				sourceId: 'c3d4e5f6-a7b8-4c9d-0e1f-2a3b4c5d6e7f',
				targetId: 'e5f6a7b8-c9d0-4e1f-2a3b-4c5d6e7f8g9h'
			},
			{
				id: 'r5-5555-eeee-6666-ffff-7777aaaa8888',
				sourceId: 'd4e5f6a7-b8c9-4d0e-1f2a-3b4c5d6e7f8g',
				targetId: 'e5f6a7b8-c9d0-4e1f-2a3b-4c5d6e7f8g9h'
			},
			{
				id: 'r6-6666-ffff-7777-aaaa-8888bbbb9999',
				sourceId: 'e5f6a7b8-c9d0-4e1f-2a3b-4c5d6e7f8g9h',
				targetId: 'f6a7b8c9-d0e1-4f2a-3b4c-5d6e7f8g9h0i'
			},
			{
				id: 'r7-7777-aaaa-8888-bbbb-9999cccc0000',
				sourceId: 'e5f6a7b8-c9d0-4e1f-2a3b-4c5d6e7f8g9h',
				targetId: 'a7b8c9d0-e1f2-4a3b-4c5d-6e7f8g9h0i1j'
			},
			{
				id: 'r8-8888-bbbb-9999-cccc-0000dddd1111',
				sourceId: 'f6a7b8c9-d0e1-4f2a-3b4c-5d6e7f8g9h0i',
				targetId: 'b8c9d0e1-f2a3-4b4c-5d6e-7f8g9h0i1j2k'
			},
			{
				id: 'r9-9999-cccc-0000-dddd-1111eeee2222',
				sourceId: 'a7b8c9d0-e1f2-4a3b-4c5d-6e7f8g9h0i1j',
				targetId: 'b8c9d0e1-f2a3-4b4c-5d6e-7f8g9h0i1j2k'
			}
		]
	},
	{
		id: 'c2f8d9b3-2e3b-5f4c-0d2e-3a4b5c6d7e8f',
		title: 'Jedi Trials',
		startStepId: 'd1e2f3a4-b5c6-5d7e-8f9a-0b1c2d3e4f5a',
		steps: [
			{
				id: 'd1e2f3a4-b5c6-5d7e-8f9a-0b1c2d3e4f5a',
				title: 'Padawan Entry',
				description: 'Step 1',
				color: '#A52A2A',
				position: { x: 0, y: 0 }
			},
			{
				id: 'e2f3a4b5-c6d7-5e8f-9a0b-1c2d3e4f5a6b',
				title: 'Crystal Cave',
				description: 'Step 2',
				color: '#5F9EA0',
				position: { x: 300, y: 0 }
			},
			{
				id: 'f3a4b5c6-d7e8-5f9a-0b1c-2d3e4f5a6b7c',
				title: 'Force Vision',
				description: 'Step 3',
				color: '#D2691E',
				position: { x: 600, y: 0 }
			},
			{
				id: 'a4b5c6d7-e8f9-5a0b-1c2d-3e4f5a6b7c8d',
				title: 'Temple Archives',
				description: 'Step 4',
				color: '#6495ED',
				position: { x: 900, y: 0 }
			},
			{
				id: 'b5c6d7e8-f9a0-5b1c-2d3e-4f5a6b7c8d9e',
				title: 'Trial of Flesh',
				description: 'Step 5',
				color: '#FF7F50',
				position: { x: 1200, y: 0 }
			},
			{
				id: 'c6d7e8f9-a0b1-5c2d-3e4f-5a6b7c8d9e0f',
				title: 'Trial of Spirit',
				description: 'Step 6',
				color: '#228B22',
				position: { x: 1500, y: 0 }
			},
			{
				id: 'd7e8f9a0-b1c2-5d3e-4f5a-6b7c8d9e0f1a',
				title: 'Knighting Ceremony',
				description: 'Step 7',
				color: '#8B008B',
				position: { x: 1800, y: 0 }
			}
		],
		rules: [
			{
				id: 's1-aaaa-bbbb-cccc-dddd-eeeeffff1111',
				sourceId: 'd1e2f3a4-b5c6-5d7e-8f9a-0b1c2d3e4f5a',
				targetId: 'e2f3a4b5-c6d7-5e8f-9a0b-1c2d3e4f5a6b'
			},
			{
				id: 's2-bbbb-cccc-dddd-eeee-ffff11112222',
				sourceId: 'f3a4b5c6-d7e8-5f9a-0b1c-2d3e4f5a6b7c',
				targetId: 'a4b5c6d7-e8f9-5a0b-1c2d-3e4f5a6b7c8d'
			},
			{
				id: 's3-cccc-dddd-eeee-ffff-111122223333',
				sourceId: 'b5c6d7e8-f9a0-5b1c-2d3e-4f5a6b7c8d9e',
				targetId: 'c6d7e8f9-a0b1-5c2d-3e4f-5a6b7c8d9e0f'
			}
		]
	},
	{
		id: 'd3e9fab4-3f4c-6a5b-1e2d-4c5b6a7d8e9f',
		title: 'Order 66',
		startStepId: 'e1f2a3b4-c5d6-6e7f-8g9h-0i1j2k3l4m5n',
		steps: [
			{
				id: 'e1f2a3b4-c5d6-6e7f-8g9h-0i1j2k3l4m5n',
				title: 'Clone Protocol',
				description: 'Step 1',
				color: '#4682B4',
				position: { x: 0, y: 0 }
			},
			{
				id: 'f2a3b4c5-d6e7-6f8g-9h0i-1j2k3l4m5n6o',
				title: 'Execute Order',
				description: 'Step 2',
				color: '#B22222',
				position: { x: 300, y: 0 }
			},
			{
				id: 'a3b4c5d6-e7f8-6g9h-0i1j-2k3l4m5n6o7p',
				title: 'Jedi Purge',
				description: 'Step 3',
				color: '#32CD32',
				position: { x: 600, y: 0 }
			},
			{
				id: 'b4c5d6e7-f8g9-6h0i-1j2k-3l4m5n6o7p8q',
				title: 'Imperial March',
				description: 'Step 4',
				color: '#FFD700',
				position: { x: 900, y: 0 }
			},
			{
				id: 'c5d6e7f8-g9h0-6i1j-2k3l-4m5n6o7p8q9r',
				title: 'Vader Ascends',
				description: 'Step 5',
				color: '#8B0000',
				position: { x: 1200, y: 0 }
			},
			{
				id: 'd6e7f8g9-h0i1-6j2k-3l4m-5n6o7p8q9r0s',
				title: 'Galactic Empire',
				description: 'Step 6',
				color: '#00CED1',
				position: { x: 1500, y: 0 }
			}
		],
		rules: [
			{
				id: 'l1-aaaa-bbbb-cccc-dddd-eeeeffff2222',
				sourceId: 'e1f2a3b4-c5d6-6e7f-8g9h-0i1j2k3l4m5n',
				targetId: 'f2a3b4c5-d6e7-6f8g-9h0i-1j2k3l4m5n6o'
			},
			{
				id: 'l2-bbbb-cccc-dddd-eeee-ffff22223333',
				sourceId: 'f2a3b4c5-d6e7-6f8g-9h0i-1j2k3l4m5n6o',
				targetId: 'a3b4c5d6-e7f8-6g9h-0i1j-2k3l4m5n6o7p'
			},
			{
				id: 'l3-cccc-dddd-eeee-ffff-222233334444',
				sourceId: 'a3b4c5d6-e7f8-6g9h-0i1j-2k3l4m5n6o7p',
				targetId: 'b4c5d6e7-f8g9-6h0i-1j2k-3l4m5n6o7p8q'
			},
			{
				id: 'l4-dddd-eeee-ffff-2222-333344445555',
				sourceId: 'b4c5d6e7-f8g9-6h0i-1j2k-3l4m5n6o7p8q',
				targetId: 'c5d6e7f8-g9h0-6i1j-2k3l-4m5n6o7p8q9r'
			},
			{
				id: 'l5-eeee-ffff-2222-3333-444455556666',
				sourceId: 'c5d6e7f8-g9h0-6i1j-2k3l-4m5n6o7p8q9r',
				targetId: 'd6e7f8g9-h0i1-6j2k-3l4m-5n6o7p8q9r0s'
			},
			{
				id: 'l6-ffff-2222-3333-4444-555566667777',
				sourceId: 'd6e7f8g9-h0i1-6j2k-3l4m-5n6o7p8q9r0s',
				targetId: 'e1f2a3b4-c5d6-6e7f-8g9h-0i1j2k3l4m5n'
			} // loop
		]
	}
];
