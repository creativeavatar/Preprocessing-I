var skills = {
    ht: 80,
    jq: 25,
    sk: 25,
    ph: 70,
    il: 95,
    in: 50,
    fl: 100
};

$.each(skills, function (key, value) {
    var skillbar = $("." + key);

    skillbar.animate(
        {
            width: value + "%"
        },
        3000,
        function () {
            $(".speech-bubble").fadeIn();
        }
    );
}); 