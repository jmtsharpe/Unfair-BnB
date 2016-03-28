var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var BenchConstants = require('../constants/bench_constants');

var _benches = [];
var BenchStore = new Store(AppDispatcher);


var resetBenches = function(benches){
    _benches = benches;
  };

BenchStore.all = function () {
  return _benches.slice(0);
};

BenchStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case BenchConstants.BENCHES_RECEIVED:
      resetBenches(payload.benches);
      BenchStore.__emitChange();
      break;
		case BenchConstants.NEW_BENCH:
			resetBenches(payload.bench);
			BenchStore.__emitChange();
    }

  };

window.BenchStore = BenchStore;

module.exports = BenchStore;
