var footnote_offsets = [];

setInterval(check_offsets, 1000);

function check_offsets() {
    footnote_offsets = [];
//     console.log("clearing offsets");
    
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

//function updateDistance() {
//
//  var lFirst = $x.offset().left;
//  var lSecond = $y.offset().left;
//  var ldist = parseInt(lFirst - lSecond);
//
//  var tFirst = $x.offset().top;
//  var tSecond = $y.offset().top;
//  var tdist = parseInt(tFirst - tSecond);
//
// $result.text(parseInt(tdist + ldist));
//
//}
//
//setInterval(updateDistance, 100);