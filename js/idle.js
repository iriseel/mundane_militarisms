var idling = null,
    data_index = 0,
    random_scatter_verticals = [],
    random_scatter_horizontals = [],
    random_scatter_vertical,
    random_scatter_horizontal;

nav_icons = $(".nav_icon");

    console.log(nav_icons.length);

// create random scattering values
for (let i = 0; i < nav_icons.length; i++) {

    random_scatter_horizontal =  Math.ceil(Math.random() * 3) * (Math.round(Math.random()) ? 1 : -1);
    random_scatter_horizontals.push(random_scatter_horizontal);
    
    
    random_scatter_vertical =  Math.ceil(Math.random() * 3);
    random_scatter_verticals.push(random_scatter_vertical);
    
    nav_icons[i].setAttribute('data-index', data_index);
    
    data_index++;
};

console.log(random_scatter_verticals);
console.log(random_scatter_horizontals);

function scatter() {
    
    var index = $(this).attr("data-index");
    
    $(this).animate(
        {top:"+=" + random_scatter_verticals[index],
        left:"+=" + random_scatter_horizontals[index]}, 10000);
};

$(document).on('mousemove', function() {
    /*on mousemove, idling loop is cancelled*/
    clearInterval(idling);
    $(".nav_icon").stop();
    console.log('not idling');

    /*setInterval sets loop wherein console logs idle every 1 sec*/
    idling = setInterval(function() {
        
        $(".nav_icon").each(scatter);
        console.log("scattering/idling");

    }, 2000);
});
