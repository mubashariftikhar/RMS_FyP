   // start of _JSON_lineWithTrendLines line chart 1
AmCharts.makeChart("chartdiv1", {

                type: "serial",
                dataProvider: [{
                    "date": "2012-01-01",
                    "value": 8
                }, {
                    "date": "2012-01-01",
                    "value": 8
                }, {
                    "date": "2012-01-02",
                    "value": 10
                }, {
                    "date": "2012-01-03",
                    "value": 12
                }, {
                    "date": "2012-01-04",
                    "value": 14
                }, {
                    "date": "2012-01-05",
                    "value": 11
                }, {
                    "date": "2012-01-06",
                    "value": 6
                }, {
                    "date": "2012-01-07",
                    "value": 7
                }, {
                    "date": "2012-01-08",
                    "value": 9
                }, {
                    "date": "2012-01-09",
                    "value": 13
                }, {
                    "date": "2012-01-10",
                    "value": 15
                }, {
                    "date": "2012-01-11",
                    "value": 19
                }, {
                    "date": "2012-01-12",
                    "value": 21
                }, {
                    "date": "2012-01-13",
                    "value": 22
                }, {
                    "date": "2012-01-14",
                    "value": 20
                }, {
                    "date": "2012-01-15",
                    "value": 18
                }, {
                    "date": "2012-01-16",
                    "value": 14
                }, {
                    "date": "2012-01-17",
                    "value": 16
                }, {
                    "date": "2012-01-18",
                    "value": 18
                }, {
                    "date": "2012-01-19",
                    "value": 17
                }, {
                    "date": "2012-01-20",
                    "value": 15
                }, {
                    "date": "2012-01-21",
                    "value": 12
                }, {
                    "date": "2012-01-22",
                    "value": 10
                }, {
                    "date": "2012-01-23",
                    "value": 8
                }],

                dataDateFormat: "YYYY-MM-DD",
                categoryField: "date",


                categoryAxis: {
                    parseDates: true,
                    minPeriod: "DD",
                    gridAlpha: 0.1,
                    minorGridAlpha: 0.1,
                    axisAlpha: 0,
                    minorGridEnabled: true,
                    inside: true
                },

                valueAxes: [{

                    tickLength: 0,
                    axisAlpha: 0,
                    showFirstLabel: false,
                    showLastLabel: false,

                    guides: [{
                        value: 10,
                        toValue: 20,
                        fillColor: "#00CC00",
                        inside: true,
                        fillAlpha: 0.2,
                        lineAlpha: 0
                    }]

                }],


                graphs: [{
                    id:"g1",
                    lineColor: "#00CC00",
                    valueField: "value",
                    dashLength: 3,
                    bullet: "round",
                    balloonText: "<b><span style='font-size:14px;'>[[value]]</span></b>",
                    balloon:{
                        drop:true
                    }
                }],

                chartCursor: {
                    limitToGraph:"g1",
                    cursorColor:"#00CC00"
                },
                chartScrollbar: {

                },

                mouseWheelZoomEnabled: true,

                trendLines: [{
                    initialDate: new Date(2012, 0, 2, 12),
                    finalDate: new Date(2012, 0, 11, 12),
                    initialValue: 10,
                    finalValue: 19,
                    lineColor: "#CC0000"
                }, {
                    initialDate: new Date(2012, 0, 17, 12),
                    finalDate: new Date(2012, 0, 22, 12),
                    initialValue: 16,
                    finalValue: 10,
                    lineColor: "#CC0000"
                }]
            });
            
            // end of _JSON_lineWithTrendLines line chart 1
            
            //start of barAndLineMix bar chart 2
                        var chart;

            var chartData = [
                {
                    "year": 2005,
                    "income": 23.5
                },
                {
                    "year": 2006,
                    "income": 26.2
                },
                {
                    "year": 2007,
                    "income": 30.1
                },
                {
                    "year": 2008,
                    "income": 29.5
                },
                {
                    "year": 2009,
                    "income": 24.6
                }
            ];


            AmCharts.ready(function () {
                // SERIAL CHART
                chart = new AmCharts.AmSerialChart();
                chart.dataProvider = chartData;
                chart.categoryField = "year";
                // this single line makes the chart a bar chart,
                // try to set it to false - your bars will turn to columns
                chart.rotate = true;
                // the following two lines makes chart 3D
                chart.depth3D = 20;
                chart.angle = 30;

                // AXES
                // Category
                var categoryAxis = chart.categoryAxis;
                categoryAxis.gridPosition = "start";
                categoryAxis.axisColor = "#DADADA";
                categoryAxis.fillAlpha = 1;
                categoryAxis.gridAlpha = 0;
                categoryAxis.fillColor = "#FAFAFA";

                // value
                var valueAxis = new AmCharts.ValueAxis();
                valueAxis.axisColor = "#DADADA";
                valueAxis.title = "Income in millions, USD";
                valueAxis.gridAlpha = 0.1;
                chart.addValueAxis(valueAxis);

                // GRAPH
                var graph = new AmCharts.AmGraph();
                graph.title = "Income";
                graph.valueField = "income";
                graph.type = "column";
                graph.balloonText = "Income in [[category]]:[[value]]";
                graph.lineAlpha = 0;
                graph.fillColors = "#4cd0e1";
                graph.fillAlphas = 1;
                chart.addGraph(graph);

                chart.creditsPosition = "top-right";

                // WRITE
                chart.write("chartdiv");
            });
            //end of barAndLineMix bar chart 2
            
            /////////////////////////////// pie
            /// large chart
            
            