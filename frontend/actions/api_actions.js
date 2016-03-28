var AppDispatcher = require('../dispatcher/dispatcher');
var BenchConstants = require('../constants/bench_constants');

ApiActions = {
	receiveAll: function (benches) {
		AppDispatcher.dispatch({
			actionType: BenchConstants.BENCHES_RECEIVED,
			benches: benches
		});
	},
	newBench: function (bench) {
		AppDispatcher.dispatch({
			actionType: BenchConstants.NEW_BENCH,
			bench: bench
		});
	}
};

module.exports = ApiActions;
