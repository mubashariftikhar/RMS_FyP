/*
* Trending line chartf
*/
//var randomScalingFactor = function(){ return Math.round(Math.random()*10)};
var trendingLineChart;
var data = {
	labels : ["Abbottabad","Bannu","Battagram","Buner","Charsadda","Charsadda","DI Khan","Hangu","	Haripur","Karak","Kohat","Lower Dir","Malakand","Mansehra","Mardan",],
	datasets : [
		{
			label: "Total Actions",
			fillColor : "rgba(128, 222, 234, 0.6)",
			strokeColor : "#ffffff",
			pointColor : "#00bcd4",
			pointStrokeColor : "#ffffff",
			pointHighlightFill : "#ffffff",
			pointHighlightStroke : "#ffffff",
			data: [100,50,64,57,80,50,99,82,100,76,64,43,50,90,79]
		},
		{
			label: "Resolved Actions",
			fillColor : "rgba(0, 102, 0, 0.3)",
			strokeColor : "#80deea",
			pointColor : "#00bcd4",
			pointStrokeColor : "#80deea",
			pointHighlightFill : "#80deea",
			pointHighlightStroke : "#80deea",
			data: [60,20,34,36,50,12, 40,40,60,63,24,9,17,7,38,9]
		}
	]
};

//setInterval(function(){
  // Get a random index point
  var indexToUpdate = Math.round(Math.random() * (data.labels.length-1));
  if (typeof trendingLineChart != "undefined"){
	  // Update one of the points in the second dataset
	  if(trendingLineChart.datasets[0].points[indexToUpdate].value){
	  		trendingLineChart.datasets[0].points[indexToUpdate].value = Math.round(Math.random() * 100);
	  }
	  if(trendingLineChart.datasets[1].points[indexToUpdate].value){
	  		trendingLineChart.datasets[1].points[indexToUpdate].value = Math.round(Math.random() * 100);	
	  }
	  trendingLineChart.update();
  }
  	
  
//}, 2000);


/*
Polor Chart Widget
*/
 
var doughnutData = [
	{
		value: 100,
		color:"#F7464A",
		highlight: "#FF5A5E",
		label: "Approved"
	},
	{
		value: 50,
		color: "#46BFBD",
		highlight: "#5AD3D1",
		label: "pending"
	},
	{
		value: 6,
		color: "#FDB45C",
		highlight: "#FFC870",
		label: "forwared"
	}
	

];

/*
Trending Bar Chart
*/

var dataBarChart = {
    labels : ["Minister","Secretary","DG","DHOs"],
    datasets: [
        {
            label: "Bar dataset",
            fillColor: "#46BFBD",
            strokeColor: "#46BFBD",
            highlightFill: "rgba(70, 191, 189, 0.4)",
            highlightStroke: "rgba(70, 191, 189, 0.9)",
            data: [25, 40, 55, 72]
        }
    ]
};

var nReloads1 = 0;
var min1 = 1;
var max1 = 10;
var l1 =0;
var trendingBarChart;
function updateBarChart() {	
	if (typeof trendingBarChart != "undefined") {
	  	nReloads1++; 	
		var x = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
		trendingBarChart.addData([x], dataBarChart.labels[l1]);
		trendingBarChart.removeData();
		l1++;
		if( l1 == dataBarChart.labels.length){ l1 = 0;} 
	}
}
//setInterval(updateBarChart, 500000);

/*
Trending Bar Chart
*/
var radarChartData = {
	labels: ["Un-Authorized absent", "Closed Facility", "Medicine UnAvailability", "Utilities", "Vaccine UnAvailability"],
	datasets: [
		{
			label: "First dataset",
			fillColor: "rgba(255,255,255,0.2)",
			strokeColor: "#fff",
			pointColor: "#00796b",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "#fff",
			data: [44,16,25,30,51]
		}
	],
};
	

var nReloads2 = 0;
var min2 = 1;
var max2 = 10;
var l2 =0;
var trendingRadarChart;
function trendingRadarChartupdate() {	
	if (typeof trendingRadarChart != "undefined") {
		nReloads2++;
		var x = Math.floor(Math.random() * (max2 - min2 + 1)) + min2;	
		trendingRadarChart.addData([x], radarChartData.labels[l2]);
		var y = trendingRadarChart.removeData();
		l2++;
		if( l2 == radarChartData.labels.length){ l2 = 0;}
	}
}
//setInterval(trendingRadarChartupdate, 5000);
		
/*
Pie chart 
*/
var pieData = [
				{
					value: 300,
					color:"#F7464A",
					highlight: "#FF5A5E",
					label: "DHOs"
				},
				{
					value: 50,
					color: "#46BFBD",
					highlight: "#5AD3D1",
					label: "Accountant"
				},
				{
					value: 100,
					color: "#FDB45C",
					highlight: "#FFC870",
					label: "doctor"
				},
				{
					value: 40,
					color: "#949FB1",
					highlight: "#A8B3C5",
					label: "officer"
				},
				{
					value: 120,
					color: "#4D5360",
					highlight: "#616774",
					label: "medical specialist"
				}

			];
/*
Line Chart
*/
var lineChartData = {
	labels : ["CD","SHC","BHU","MCH","RHC","CH"],
	datasets : [
		{
			label: "My dataset",
			fillColor : "rgba(255,255,255,0)",
			strokeColor : "#fff",
			pointColor : "#00796b ",
			pointStrokeColor : "#fff",
			pointHighlightFill : "#fff",
			pointHighlightStroke : "rgba(220,220,220,1)",
			data: [65, 45, 50, 30, 63, 45]
		}
	]

}

var polarData = [
		{
			value: 4800,
			color:"#f44336",
			highlight: "#FF5A5E",
			label: "USA"
		},
		{
			value: 6000,
			color: "#9c27b0",
			highlight: "#ce93d8",
			label: "UK"
		},
		{
			value: 1800,
			color: "#3f51b5",
			highlight: "#7986cb",
			label: "Canada"
		},
		{
			value: 4000,
			color: "#2196f3 ",
			highlight: "#90caf9",
			label: "Austrelia"
		},
		{
			value: 5500,
			color: "#ff9800",
			highlight: "#ffb74d",
			label: "India"
		},
		{
			value: 2100,
			color: "#009688",
			highlight: "#80cbc4",
			label: "Brazil"
		},
		{
			value: 5000,
			color: "#00acc1",
			highlight: "#4dd0e1",
			label: "China"
		},
		{
			value: 3500,
			color: "#4caf50",
			highlight: "#81c784",
			label: "Germany"
		}



	];	
		



window.onload = function(){
	var trendingLineChart = document.getElementById("trending-line-chart").getContext("2d");
	window.trendingLineChart = new Chart(trendingLineChart).Line(data, {		
		scaleShowGridLines : true,///Boolean - Whether grid lines are shown across the chart		
		scaleGridLineColor : "rgba(255,255,255,0.4)",//String - Colour of the grid lines		
		scaleGridLineWidth : 1,//Number - Width of the grid lines		
		scaleShowHorizontalLines: true,//Boolean - Whether to show horizontal lines (except X axis)		
		scaleShowVerticalLines: false,//Boolean - Whether to show vertical lines (except Y axis)		
		bezierCurve : true,//Boolean - Whether the line is curved between points		
		bezierCurveTension : 0.4,//Number - Tension of the bezier curve between points		
		pointDot : true,//Boolean - Whether to show a dot for each point		
		pointDotRadius : 5,//Number - Radius of each point dot in pixels		
		pointDotStrokeWidth : 2,//Number - Pixel width of point dot stroke		
		pointHitDetectionRadius : 20,//Number - amount extra to add to the radius to cater for hit detection outside the drawn point		
		datasetStroke : true,//Boolean - Whether to show a stroke for datasets		
		datasetStrokeWidth : 3,//Number - Pixel width of dataset stroke		
		datasetFill : true,//Boolean - Whether to fill the dataset with a colour				
		animationSteps: 15,// Number - Number of animation steps		
		animationEasing: "easeOutQuart",// String - Animation easing effect			
		tooltipTitleFontFamily: "'Roboto','Helvetica Neue', 'Helvetica', 'Arial', sans-serif",// String - Tooltip title font declaration for the scale label		
		scaleFontSize: 12,// Number - Scale label font size in pixels		
		scaleFontStyle: "normal",// String - Scale label font weight style		
		scaleFontColor: "#fff",// String - Scale label font colour
		tooltipEvents: ["mousemove", "touchstart", "touchmove"],// Array - Array of string names to attach tooltip events		
		tooltipFillColor: "rgba(255,255,255,0.8)",// String - Tooltip background colour		
		tooltipTitleFontFamily: "'Roboto','Helvetica Neue', 'Helvetica', 'Arial', sans-serif",// String - Tooltip title font declaration for the scale label		
		tooltipFontSize: 12,// Number - Tooltip label font size in pixels
		tooltipFontColor: "#000",// String - Tooltip label font colour		
		tooltipTitleFontFamily: "'Roboto','Helvetica Neue', 'Helvetica', 'Arial', sans-serif",// String - Tooltip title font declaration for the scale label		
		tooltipTitleFontSize: 14,// Number - Tooltip title font size in pixels		
		tooltipTitleFontStyle: "bold",// String - Tooltip title font weight style		
		tooltipTitleFontColor: "#000",// String - Tooltip title font colour		
		tooltipYPadding: 8,// Number - pixel width of padding around tooltip text		
		tooltipXPadding: 16,// Number - pixel width of padding around tooltip text		
		tooltipCaretSize: 10,// Number - Size of the caret on the tooltip		
		tooltipCornerRadius: 6,// Number - Pixel radius of the tooltip border		
		tooltipXOffset: 10,// Number - Pixel offset from point x to tooltip edge
		responsive: true
		});

		var doughnutChart = document.getElementById("doughnut-chart").getContext("2d");
		window.myDoughnut = new Chart(doughnutChart).Doughnut(doughnutData, {
			segmentStrokeColor : "#fff",
			tooltipTitleFontFamily: "'Roboto','Helvetica Neue', 'Helvetica', 'Arial', sans-serif",// String - Tooltip title font declaration for the scale label		
			percentageInnerCutout : 10,
			animationSteps : 15,
			segmentStrokeWidth : 4,
			animateScale: false,
			percentageInnerCutout : 15,
			responsive : true
		});

		var trendingBarChart = document.getElementById("trending-bar-chart").getContext("2d");
		window.trendingBarChart = new Chart(trendingBarChart).Bar(dataBarChart,{
			scaleShowGridLines : false,///Boolean - Whether grid lines are shown across the chart
			showScale: true,
			animationSteps:15,
			tooltipTitleFontFamily: "'Roboto','Helvetica Neue', 'Helvetica', 'Arial', sans-serif",// String - Tooltip title font declaration for the scale label		
			responsive : true
		});

		window.trendingRadarChart = new Chart(document.getElementById("trending-radar-chart").getContext("2d")).Radar(radarChartData, {
		    
		    angleLineColor : "rgba(255,255,255,0.5)",//String - Colour of the angle line		    
		    pointLabelFontFamily : "'Roboto','Helvetica Neue', 'Helvetica', 'Arial', sans-serif",// String - Tooltip title font declaration for the scale label	
		    pointLabelFontColor : "#fff",//String - Point label font colour
		    pointDotRadius : 4,
		    animationSteps:15,
		    pointDotStrokeWidth : 2,
		    pointLabelFontSize : 12,
			responsive: true
		});

		// var pieChartArea = document.getElementById("pie-chart-area").getContext("2d");
		// window.pieChartArea = new Chart(pieChartArea).Pie(pieData,{
		// 	responsive: true		
		// });

		var lineChart = document.getElementById("line-chart").getContext("2d");
		window.lineChart = new Chart(lineChart).Line(lineChartData, {
			scaleShowGridLines : false,
			bezierCurve : false,
			scaleFontSize: 12,
			scaleFontStyle: "normal",
			scaleFontColor: "#fff",
			responsive: true,			
		});

		
		if (typeof getContext != "undefined") {
			var polarChartCountry = document.getElementById("polar-chart-country").getContext("2d");
			window.polarChartCountry = new Chart(polarChartCountry).PolarArea(polarData, {
				segmentStrokeWidth : 1,			
				responsive:true
			});
		}
};
