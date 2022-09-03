var footnote_offsets = [];

setInterval(check_footnote_offsets, 1000);

function check_footnote_offsets() {
    footnote_offsets = [];
    //console.log("clearing offsets");
    
     $('.footnote').each(function () {
         footnote_offsets.push($(this).offset().top);
        });
    
    //    console.log("populating offsets");
    //    console.log(footnote_offsets);
    
    $('.footnote_text').each(function () {

        var index = $(this).attr("data-index");

        $(this).css('top', footnote_offsets[index]);

    //    console.log(index + "footnote_offset is" + footnote_offsets[index]);


    });
};

//EXTRA STUFF / SCRAPS CODING

var extra_source_offsets = [];

setInterval(check_extra_offsets, 1000);

function check_extra_offsets() {
    extra_source_offsets = [];
//     console.log("clearing offsets");
    
     $('.extra_source').each(function () {
         extra_source_offsets.push($(this).offset().top);
        });
    
    //    console.log("populating offsets");
    //    console.log(footnote_offsets);

    $('.extra:not(.intro)').each(function () {

        var index = $(this).attr("data-index");

        $(this).css('top', extra_source_offsets[index]);

    //    console.log(index + "footnote_offset is" + footnote_offsets[index]);
        

    });
    
    var extra_intro_height = $(".extra.intro").height();
    
//    console.log("extra intro height is" + extra_intro_height);
    
    var extra_intro_y = extra_source_offsets[0] - extra_intro_height;
    
        $(".extra.intro").css({
            "top": extra_intro_y
        });
        
//        console.log("extra intro top is" + $(".extra.intro").css("top"));
};


// FIND AND MATCH BACKGROUND IMAGES FOR TEXT
const myTimeout = setTimeout(find_bg, 100);

function find_bg() {
    
    $('p.extra').hover(function () {

        var index = $(this).attr("data-index");
        
        var bg = $(this).css('background-image');
        
        var extra_source = $('.extra_source[data-index="' + index + '"]');
       
        extra_source.css({
            "-webkit-background-clip":"text",
            "background-repeat":"no-repeat",
            "-webkit-background-size":"cover",
            "background-position":"50% 50%",
            "-webkit-text-fill-color":"rgba(0,0,0,0)",
            
            "background-image": bg
        }); 
        
//        console.log("background image is" + bg);

    });    
    
    $('div.extra p').hover(function () {

        var index = $(this).parent().attr("data-index");
        
        var bg = $(this).css('background-image');
        
        var extra_source = $('.extra_source[data-index="' + index + '"]');
        
        console.log("extra source is" + index);
       
        extra_source.css({
            "-webkit-background-clip":"text",
            "background-repeat":"no-repeat",
            "-webkit-background-size":"cover",
            "background-position":"50% 50%",
            "-webkit-text-fill-color":"rgba(0,0,0,0)",
            
            "background-image": bg
        }); 
        
//        console.log("background image is" + bg);

    });
    
};

// need this setTimeout delay for whatever reason to get the reversion to black to time correctly
const timeout_reset_extra_source = setTimeout(reset_extra_source, 1000);

//this sets the extra_source text to black once mouse is no longer hovering above extra stuff
function reset_extra_source() {

    $('.extra, div.extra p').mouseleave(function () {

//        console.log("resetting");

        $(".extra_source").css({
                "-webkit-text-fill-color":"rgba(1,1,1,1)"
            }); 

    });
}