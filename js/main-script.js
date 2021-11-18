$ = jQuery;
$(document).ready(function () {

    $('.main-slide__carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 4000, 

    });


    $('.partner-box__list').owlCarousel({
        loop: true,
        margin: 10,
        items: 4,
        dots: false,
        responsive:{
            0: {
                items:1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
    $('#form-validate').validate({
        rules: {
            // simple rule, converted to {required:true}
            name: "required",
            // compound rule
            email: {
            required: true,
            email: true
            },
            phone:{
                required: true,
                tel:true
            }
           
        },
        messages: {
            name: "Hãy kiểm tra tên",
            email: {
            required: "",
            email: "Địa chỉ email không hợp lệ"
            },
            phone:{
                required:"Vui lòng nhập số điện thoại" ,
                tel:"Số điện thoại không hợp lệ"
            }
        },
        submitHandler: function(form) {
            // some other code
            // maybe disabling submit button
            // then:
          
            alert('Validate thành công');
         
        }
        
    });

    $('.icon-search').on('click', function(){
        if(!$(this).hasClass('toggle')){
            $(this).addClass('toggle')
            $('.form-search').show();
           
        }
        else{
            $('.form-search').hide();
            $(this).removeClass('toggle');
          
        }
       // $(this).addClass('toggle');
       //$('.form-search').hide();
    });
});