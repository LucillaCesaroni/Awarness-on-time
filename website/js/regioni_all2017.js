var regions=[
    {
        "region_name": "BASE",
        "region_code": "base",
        "all2017": 1500000
    },
    {
        "region_name": "Lombardia",
        "region_code": "lom",
        "population": 10020000,
        "all2017": 1082160
    },
    {
        "region_name": "Campania",
        "region_code": "cam",
        "population": 5839000,
        "all2017": 630612
    },
    {
        "region_name": "Lazio",
        "region_code": "laz",
        "population": 5898000,
        "all2017": 666474
    },
    {
        "region_name": "Sicilia",
        "region_code": "sic",
        "population": 5057000,
        "all2017": 475358
    },
    {
        "region_name": "Veneto",
        "region_code": "ven",
        "population": 4908000,
        "all2017": 495708
    },
    {
        "region_name": "Emilia-Romagna",
        "region_code": "emi",
        "population": 4449000,
        "all2017": 480492
    },
    {
        "region_name": "Piemonte",
        "region_code": "pie",
        "population": 4393000,
        "all2017": 421728
    },
    {
        "region_name": "Puglia",
        "region_code": "pug",
        "population": 4064000,
        "all2017": 447040
    },
    {
        "region_name": "Toscana",
        "region_code": "tos",
        "population": 3742000,
        "all2017": 415363
    },
    {
        "region_name": "Calabria",
        "region_code": "cal",
        "population": 1965000,
        "all2017": 216150
    },
    {
        "region_name": "Sardegna",
        "region_code": "sar",
        "population": 1653000,
        "all2017": 201666
    },
    {
        "region_name": "Liguria",
        "region_code": "lig",
        "population": 1565000,
        "all2017": 173715
    },
    {
        "region_name": "Marche",
        "region_code": "mar",
        "population": 1538000,
        "all2017": 152262
    },
    {
        "region_name": "Abruzzo",
        "region_code": "abr",
        "population": 1322000,
        "all2017": 174504
    },
    {
        "region_name": "Friuli-Venezia Giulia",
        "region_code": "fri",
        "population": 1218000,
        "all2017": 112056
    },
    {
        "region_name": "Trentino-Alto Adige",
        "region_code": "tre",
        "population": 1067648,
        "all2017": 100359
    },
    {
        "region_name": "Umbria",
        "region_code": "umb",
        "population": 888908,
        "all2017": 98669
    },
    {
        "region_name": "Basilicata",
        "region_code": "bas",
        "population": 570365,
        "all2017": 67303
    },
    {
        "region_name": "Molise",
        "region_code": "mol",
        "population": 310449,
        "all2017": 34149
    },
    {
        "region_name": "Valle d'Aosta",
        "region_code": "val",
        "population": 126883,
        "all2017": 14718
    }
];


var temp_array= regions.map(function(item){
    return item.all2017;
});

var highest_value = Math.max.apply(Math, temp_array);

$(function() {

    for(i = 0; i < regions.length; i++) {

        $('#'+ regions[i].region_code)
        .css({'fill': 'rgba(34,196,188,' + regions[i].all2017/highest_value +')'})
        .data('region', regions[i]);
    }

    $('.map g').mouseover(function (e) {
        var region_data=$(this).data('region');
        $('<div class="info_panel">'+
            region_data.region_name + '<br>' +
            'allergici: ' + region_data.all2017.toLocaleString("ita-IT") + ' <br> ' +
            'popolazione: ' + region_data.population.toLocaleString("ita-IT") +
            '</div>'
         )
        .appendTo('body');
    })
    .mouseleave(function () {
        $('.info_panel').remove();
    })
    .mousemove(function(e) {
        var mouseX = e.pageX, //X coordinates of mouse
            mouseY = e.pageY; //Y coordinates of mouse

        $('.info_panel').css({
            top: mouseY - ($('.info_panel').height()/2),
            left: mouseX+20
        });
    });

});
