declare global {
	let NodeCG: typeof NodeCGAPIClient;
	let nodecg: NodeCGAPIClient;
}

import { NodeCGAPIClient } from '@nodecg/types/out/client/api/api.client';

const stringRep = nodecg.Replicant<string>('string');

const stringInput = document.getElementById('string') as HTMLInputElement;
stringInput.onkeyup = (e) => {
	if (e.key === 'Enter') {
		stringRep.value = stringInput.value;
		console.log(`String Replicant updated to: ${stringRep.value}`);
	}
};

stringRep.on('change', (newVal, oldVal) => {
	console.log(`String changed from ${oldVal} to ${newVal}`);
  stringInput.value = newVal || '';
});
