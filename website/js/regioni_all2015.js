var regions=[
    {
        "region_name": "BASE",
        "region_code": "base",
        "all2015": 1500000
    },
    {
        "region_name": "Lombardia",
        "region_code": "lom",
        "population": 10000000,
        "all2015": 1040000
    },
    {
        "region_name": "Campania",
        "region_code": "cam",
        "population": 5862000,
        "all2015": 509994
    },
    {
        "region_name": "Lazio",
        "region_code": "laz",
        "population": 5892000,
        "all2015": 636336
    },
    {
        "region_name": "Sicilia",
        "region_code": "sic",
        "population": 5092000,
        "all2015": 437912
    },
    {
        "region_name": "Veneto",
        "region_code": "ven",
        "population": 4928000,
        "all2015": 478016
    },
    {
        "region_name": "Emilia-Romagna",
        "region_code": "emi",
        "population": 4451000,
        "all2015": 445100
    },
    {
        "region_name": "Piemonte",
        "region_code": "pie",
        "population": 4424000,
        "all2015": 508760
    },
    {
        "region_name": "Puglia",
        "region_code": "pug",
        "population": 4090000,
        "all2015": 449900
    },
    {
        "region_name": "Toscana",
        "region_code": "tos",
        "population": 3753000,
        "all2015": 349029
    },
    {
        "region_name": "Calabria",
        "region_code": "cal",
        "population": 1977000,
        "all2015": 193746
    },
    {
        "region_name": "Sardegna",
        "region_code": "sar",
        "population": 1663000,
        "all2015": 219516
    },
    {
        "region_name": "Liguria",
        "region_code": "lig",
        "population": 1583000,
        "all2015": 177296
    },
    {
        "region_name": "Marche",
        "region_code": "mar",
        "population": 1551000,
        "all2015": 134937
    },
    {
        "region_name": "Abruzzo",
        "region_code": "abr",
        "population": 1332000,
        "all2015": 147852
    },
    {
        "region_name": "Friuli-Venezia Giulia",
        "region_code": "fri",
        "population": 1227000,
        "all2015": 114111
    },
    {
        "region_name": "Trentino-Alto Adige",
        "region_code": "tre",
        "population": 1059000,
        "all2015": 108018
    },
    {
        "region_name": "Umbria",
        "region_code": "umb",
        "population": 894762,
        "all2015": 110950
    },
    {
        "region_name": "Basilicata",
        "region_code": "bas",
        "population": 576619,
        "all2015": 42670
    },
    {
        "region_name": "Molise",
        "region_code": "mol",
        "population": 313348,
        "all2015": 31334
    },
    {
        "region_name": "Valle d'Aosta",
        "region_code": "val",
        "population": 128298,
        "all2015": 11803
    }
];


var temp_array= regions.map(function(item){
    return item.all2015;
});

var highest_value = Math.max.apply(Math, temp_array);

$(function() {

    for(i = 0; i < regions.length; i++) {

        $('#'+ regions[i].region_code)
        .css({'fill': 'rgba(34,196,188,' + regions[i].all2015/highest_value +')'})
        .data('region', regions[i]);
    }

    $('.map g').mouseover(function (e) {
        var region_data=$(this).data('region');
        $('<div class="info_panel">'+
            region_data.region_name + '<br>' +
            'allergici: ' + region_data.all2015.toLocaleString("ita-IT") + ' <br> ' +
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