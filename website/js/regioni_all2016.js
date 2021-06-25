var regions=[
    {
        "region_name": "BASE",
        "region_code": "base",
        "all2016": 1500000
    },
    {
        "region_name": "Lombardia",
        "region_code": "lom",
        "population": 10010000,
        "all2016": 1271270
    },
    {
        "region_name": "Campania",
        "region_code": "cam",
        "population": 5851000,
        "all2016": 473931
    },
    {
        "region_name": "Lazio",
        "region_code": "laz",
        "population": 5888000,
        "all2016": 659456
    },
    {
        "region_name": "Sicilia",
        "region_code": "sic",
        "population": 5074000,
        "all2016": 476956
    },
    {
        "region_name": "Veneto",
        "region_code": "ven",
        "population": 4915000,
        "all2016": 520990
    },
    {
        "region_name": "Emilia-Romagna",
        "region_code": "emi",
        "population": 4448000,
        "all2016": 502624
    },
    {
        "region_name": "Piemonte",
        "region_code": "pie",
        "population": 4404000,
        "all2016": 449208
    },
    {
        "region_name": "Puglia",
        "region_code": "pug",
        "population": 4077000,
        "all2016": 456624
    },
    {
        "region_name": "Toscana",
        "region_code": "tos",
        "population": 3744000,
        "all2016": 400608
    },
    {
        "region_name": "Calabria",
        "region_code": "cal",
        "population": 1971000,
        "all2016": 187245
    },
    {
        "region_name": "Sardegna",
        "region_code": "sar",
        "population": 1658000,
        "all2016": 184038
    },
    {
        "region_name": "Liguria",
        "region_code": "lig",
        "population": 1571000,
        "all2016": 155529
    },
    {
        "region_name": "Marche",
        "region_code": "mar",
        "population": 1544000,
        "all2016": 155944
    },
    {
        "region_name": "Abruzzo",
        "region_code": "abr",
        "population": 1327000,
        "all2016": 168529
    },
    {
        "region_name": "Friuli-Venezia Giulia",
        "region_code": "fri",
        "population": 1221000,
        "all2016": 130647
    },
    {
        "region_name": "Trentino-Alto Adige",
        "region_code": "tre",
        "population": 1062000,
        "all2016": 107262
    },
    {
        "region_name": "Umbria",
        "region_code": "umb",
        "population": 891181,
        "all2016": 101594
    },
    {
        "region_name": "Basilicata",
        "region_code": "bas",
        "population": 573698,
        "all2016": 61958
    },
    {
        "region_name": "Molise",
        "region_code": "mol",
        "population": 312027,
        "all2016": 25586
    },
    {
        "region_name": "Valle d'Aosta",
        "region_code": "val",
        "population": 127329,
        "all2016": 15788
    }
];


var temp_array= regions.map(function(item){
    return item.all2016;
});

var highest_value = Math.max.apply(Math, temp_array);

$(function() {

    for(i = 0; i < regions.length; i++) {

        $('#'+ regions[i].region_code)
        .css({'fill': 'rgba(34,196,188,' + regions[i].all2016/highest_value +')'})
        .data('region', regions[i]);
    }

    $('.map g').mouseover(function (e) {
        var region_data=$(this).data('region');
        $('<div class="info_panel">'+
            region_data.region_name + '<br>' +
            'allergici: ' + region_data.all2016.toLocaleString("ita-IT") + ' <br> ' +
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
