$(document).ready(function() {
    var lables = document.getElementsByClassName('photo-label');
    var aim_divs = document.getElementsByClassName('visible_in_list');

    var leng = aim_divs.length;

    for (var i = 0; i < leng; i++) {

        var link = lables[i].getAttribute('href');

        var oncl = 'location.href=';
        var oncl = oncl + "'" + link + "'";
        var oncl = oncl + "; style='cursor:pointer'";

        aim_divs[i].setAttribute('onclick', oncl);
    };
});