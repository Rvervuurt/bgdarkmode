var chart = new CanvasJS.Chart("chartContainer", {
    backgroundColor: "#333",
    title:{
        text: "Prijshistorie",
        fontColor: "#efefef"
    },
    axisY:{
        valueFormatString:"\u20AC ########",
    },
    axisY2:{
        valueFormatString:"########",
        labelFontColor: "#efefef"
    },
    legend: {
        fontColor: "#cdcdcd"
    },
    data: [{
        name: "Minimum",
        type: "line",
        color: "rgba(49, 157, 63, 0.6)",
        showInLegend: true,
        dataPoints: []
    }, {
        name: "Gemiddelde",
        type: "line",
        color: "rgba(41, 171, 226, 0.7)",
        showInLegend: true,
        dataPoints: []
    }, {
        name: "views",
        axisYType: "secondary",
        type: "area",
        color: "lightgrey",
        showInLegend: true,
        dataPoints: []
    }]
});

chart.render();