var regions=[
    {
        "region_name": "BASE",
        "region_code": "base",
        "all2015": 13
    },
    {
        "region_name": "Lombardia",
        "region_code": "lom",
        "population": 24,
        "all2015": 10
    },
    {
        "region_name": "Campania",
        "region_code": "cam",
        "population": 3,
        "all2015": 2
    },
    {
        "region_name": "Lazio",
        "region_code": "laz",
        "population": 4,
        "all2015": 1
    },
    {
        "region_name": "Sicilia",
        "region_code": "sic",
        "population": 23,
        "all2015": 7
    },
    {
        "region_name": "Veneto",
        "region_code": "ven",
        "population": 12,
        "all2015": 3
    },
    {
        "region_name": "Emilia-Romagna",
        "region_code": "emi",
        "population": 20,
        "all2015": 1
    },
    {
        "region_name": "Piemonte",
        "region_code": "pie",
        "population": 4,
        "all2015": 2
    },
    {
        "region_name": "Puglia",
        "region_code": "pug",
        "population": 21,
        "all2015": 5
    },
    {
        "region_name": "Toscana",
        "region_code": "tos",
        "population": 6,
        "all2015": 4
    },
    {
        "region_name": "Calabria",
        "region_code": "cal",
        "population": 3,
        "all2015": 1
    },
    {
        "region_name": "Sardegna",
        "region_code": "sar",
        "population": 3,
        "all2015": 2
    },
    {
        "region_name": "Liguria",
        "region_code": "lig",
        "population": 3,
        "all2015": 2
    },
    {
        "region_name": "Marche",
        "region_code": "mar",
        "population": 25,
        "all2015": 3
    },
    {
        "region_name": "Abruzzo",
        "region_code": "abr",
        "population": 50,
        "all2015": 9
    },
    {
        "region_name": "Friuli-Venezia Giulia",
        "region_code": "fri",
        "population": 1,
        "all2015": 1
    },
    {
        "region_name": "Trentino-Alto Adige",
        "region_code": "tre",
        "population": 4,
        "all2015": 1
    },
    {
        "region_name": "Umbria",
        "region_code": "umb",
        "population": 1,
        "all2015": 1
    },
    {
        "region_name": "Basilicata",
        "region_code": "bas",
        "population": 4,
        "all2015": 1
    },
    {
        "region_name": "Molise",
        "region_code": "mol",
        "population": 2,
        "all2015": 0
    },
    {
        "region_name": "Valle d'Aosta",
        "region_code": "val",
        "population": 4,
        "all2015": 1
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