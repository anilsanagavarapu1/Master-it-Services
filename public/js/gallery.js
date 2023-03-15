var GalleryId;

function LoadInitialGallery(){
    var $Container = $('.gallery-cards');
    if ($Container.length > 0) {
        if($('.gallery-filter button').first().length > 0){
            var year = $('.gallery-filter button').first().data('year');
            $(".gallery-filter").children("button").removeClass('active');
            $('.gallery-filter button').first().addClass('active');
            $('.gallery-card').hide();
            $(".g-"+year).fadeIn();
        }else{
            setTimeout(function(){
                LoadInitialGallery();
            },10);
        }
    }else{
        setTimeout(function(){
            LoadInitialGallery();
        },10);
    }
};


$(document).ready(function () {
    
    $('.gallery-trigger').click(function (e) {
        GalleryId = $(this).attr("id");
        $.ajax({
            url: '/Culture/GetGalleryImagesOfYear',
            contentType: 'application/html; charset=utf-8',
            data: { Id: GalleryId },
            type: 'GET',
            async: false,
            dataType: 'html',
            success: (function (result) {
                $('#slider-images').html(result);
                $('#gallery').modal('show');
            }),
            error: (function (xhr, status) {
                alert(status);
            })
        })
    });

    LoadInitialGallery();
});