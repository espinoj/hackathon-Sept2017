define(['underscore', 'plotly'], function(_, plotly){
	/*
	 * Render a loading icon of some kind.
	 */
	var renderWait = function(message){
		$('#scatter').html('<span>' + message + '</span><br><span id="loadingSpinner" class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span>');
	}
	
	/*
	 * Render a scatter plot using the Plotly library.
	 */
	var render = function(data, status, jqXHR){
		$('#scatter').html("");
		window.data = data;
		var renderStart = new Date().getTime();
		var trace = {
				x : _.pluck(data.data, "x"),
				y : _.pluck(data.data, "y"),
				mode: 'markers',
				type: 'scatter',
				text: _.pluck(data.data, "count"),
				marker: {
				    size: 5,
				    color: _.pluck(data.data, "count")
				  }
		};
		plotly.newPlot('scatter', [trace]);
		var endTime = new Date().getTime();
		console.log("Render Time : " + (endTime - renderStart));
	};
	return {
		render : render,
		renderWait : renderWait
	}
});