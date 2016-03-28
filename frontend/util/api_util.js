ApiActions = require('../actions/api_actions');

ApiUtil = {
  fetchBenches: function (bounds) {
    $.ajax({
			url: "api/benches",
			type: "GET",
			data: bounds,
			dataType: "json",
			success: function (benches) {
				ApiActions.receiveAll(benches);
			}
		});
  },

	createBench: function (bench) {
		$.ajax({
			url: "api/benches",
			type: "POST",
			data: {bench: bench},
			dataType: "json",
			success: function (bench) {
				ApiActions.newBench(bench);
			}
		});
	}
};

window.ApiUtil = ApiUtil;

module.exports = ApiUtil;
