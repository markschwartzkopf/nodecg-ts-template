import NodeCG from '@nodecg/types';
import * as nodecgApiContext from './nodecg-api-context';

module.exports = function (nodecg: NodeCG.ServerAPI) {
	nodecgApiContext.set(nodecg);
  //require('./game-data');
  const stringRep = nodecg.Replicant<string>('string');
  if (!stringRep.value) {
    stringRep.value = 'Hello, NodeCG!';
    nodecg.log.info(`String Replicant initialized with value: ${stringRep.value}`);
  }
};