$(document).ready(function(){
    $(".genUserBtn").on("click", function(){
        getData();
    });

    $('body').on('click', '.delete', function(){
        var $el = $(this).parent();
        if (confirm('Are you sure you want to kill this person?')) {
            $.ajax({
                type: "DELETE",
                url: "/users/" + $(this).data("id"),
                success: function(data){
                    console.log("Deletion sent", data);
                },
                error: function(xhr, status){
                    alert("Error: ", status);
                },
                complete: function(){
                    console.log("Delete Complete!");
                }
            });

            $el.fadeOut('slow', function(){
                $el.remove();
            });

        } else {
            return false;
        }
    });


});

// 20 next to the URL is the number of users being retrieved. Make fancy later.
function getData (){
    $.ajax({
        type: "GET",
        url: "/users",
        success: function(data){
            console.log(data);
            appendToContainer(data);
        }
    });
}




//function postToDOM(data){
//    $(".allTheData").empty();
//    for(var i = 0; i < data.length; i++){
//        $(".allTheData").append("<div></div>");
//        var $el = $(".allTheData").children().last();
//        $el.append("<p class='dataUnit'>" + data[i].name + "</p>");
//    }
//}
function appendToContainer(data){
    $('.allTheData').empty();
    for (var i = 0; i < data.length; i++){
        $('.allTheData').append("<div class='post well col-md-3'></div>");
        var $el = $('.allTheData').children().last();
        $el.append("<p>Name: " + data[i].name + ": " + "</p>");
        $el.append("<p>Age: " + data[i].age + "</p");
        $el.append("<p>Gender: " + data[i].sex + "</p");
        $el.append("<p>Hometown: " + data[i].location + "</p");
        $el.append("<p>Twitter Handle: " + data[i].twitter + "</p");
        $el.append("<button class='delete btn btn-danger' data-id='" + data[i]._id +"'>DELETE</button>");
    }
}
