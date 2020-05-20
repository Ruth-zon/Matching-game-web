

$(function () {
    $("#music")[0].play();
    $("#gameover").hide();
    $("#start").hide();
    var folder = 1;
    $("span").click(function () {
        $(this).css('background-color', 'red')
        if ($(this).attr("id") == "images1") {
            folder = 1;
            $(this).css('width', '200px');
        }
        else
            if ($(this).attr("id") == "images2") {
                folder = 2;
                $(this).css('width', '200px');
            }
            else {
                folder = 3;
                $(this).css('width', '200px');
            };
        $(".star").hide(100);
        $("#start").show();

    });

    //$("#images1").click(function () {
    //    folder = 1;
    //    $(this).css('width', '200px'), 1000;

    //});
    //$("#images2").click(function () {
    //    folder = 2;
    //});

    var point = 0;
    var flag = 0;
    var count = 0;
    var flagArr = [];
    for (var i = 0; i < 19; i++) {
        flagArr[i] = false;
    }
    $("#vol").click(function () {
        if (flag) {
            $("#music")[0].play();
            flag = 0;
        }
        else {
            $("#music")[0].pause();
            flag = 1;
        };
    });
    $("#start").click(function () {
        count++;
        $("#start").attr("disabled", true);
        var r = parseInt(Math.random() * 19 + 1, 10)
        while (flagArr[r] == true) {
            r = parseInt(Math.random() * 19 + 1, 10)
        }

        flagArr[r] = true;
        $("#text").attr({
            "src": "../images" + folder + "/2/pic" + r + ".jpg",
            "class": "class",
        })
        var x;
        var y;
        var top;
        var Left;
        for (var i = 1; i < 20; i++) {
            top = parseInt(Math.random() * 600 + 100, 10);
            Left = parseInt(Math.random() * 1680, 10);
            y = parseInt(Math.random() * 600 + 100, 10);
            x = parseInt(Math.random() * 1680, 10);
            var newImage = $("<img/>");
            $(newImage).attr({
                "id": i,
                "src": "../images" + folder + "/1/pic" + i + ".png",
                "class": "cards"
            })
                .appendTo("#pictures")
            $("#" + i)
                .animate({
                    left: x,
                    top: y
                }, 0000)
                .animate({
                    left: Left,
                    top: top
                }, 1000);
        };
        $("img.cards").hover(function () {
            $(this).css('height', '250px');
        },
            function () {
                $(this).css('height', '200px');
            });
        $("img.cards").click(function () {
            if ($(this).attr("id") == r) {
                $("img").remove(".cards");
                $("#start").attr("disabled", false);
                point += 10;
                $("#yes")[0].play();
            }
            else {
                point += -5
                $(this).remove();
                $("#no")[0].play();
            }
            $("#points").text(point);
        });
        if (count >= 19) {
            $("img").remove(".cards");
            $("header").remove();
            $("#gameover").show(3000);

        };
    });
});