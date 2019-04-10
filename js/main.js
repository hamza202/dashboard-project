$(document).ready(function () {
    $(function () {
        $('nav#menu').mmenu({
            // extensions	: [ 'theme-dark' ],
            setSelected: true,
            counters: true,
            iconbar: {
                add: true,
                size: 40,
                type		: 'tabs',
                top: [
                    '<a href="#"><img src="./image/logo.png" class="logo" alt=""></a>',
                    '<a href="#panel-menu"><span class="fal fa-address-book"></span></a>',
                    '<a href="#panel-menu2"><span class="far fa-search"></span></a>',
                    '<a href="#panel-menu3"><span class="fal fa-cog"></span></a>',
                    '<a href="#panel-menu4"><span class="fal fa-user"></span></a>'
                ],
            },
            sidebar: {
                collapsed: {
                    use: '(min-width: 450px)',
                    size: 40,
                    hideNavbar: false
                },
                expanded: {
                    use: '(min-width: 1900px)',
                    size: 35
                }
            },
            navbars: [
                {
                    content: ['prev', 'breadcrumbs', 'close']
                }
            ]
        }, {
            searchfield: {
                clear: true
            },
            navbars: {
                breadcrumbs: {
                    removeFirst: true
                }
            }
        });


    });

    function newMenuItem() {
        var newElem = $('tr.pricing-list-item.pattern').first().clone();
        newElem.find('input').val('');
        newElem.appendTo('table#pricing-list-container');
    }
    if ($("table#pricing-list-container").is('*')) {
        $('.add-pricing-list-item').on('click', function (e) {
            e.preventDefault();
            newMenuItem();
        });
        $(document).on("click", "#pricing-list-container .delete", function (e) {
            e.preventDefault();
            $(this).parent().parent().remove();
        });
        $('.add-pricing-submenu').on('click', function (e) {
            e.preventDefault();
            var newElem = $('' +
                '<tr class="pricing-list-item pricing-submenu">' +
                '<td>' +
                '<div class="fm-move"><i class="sl sl-icon-cursor-move"></i></div>' +
                '<div class="fm-input"><input type="text" placeholder="Category Title" /></div>' +
                '<div class="fm-close"><a class="delete" href="#"><i class="far fa-times"></i></a></div>' +
                '</td>' +
                '</tr>');
            newElem.appendTo('table#pricing-list-container');
        });
        $('table#pricing-list-container tbody').sortable({
            forcePlaceholderSize: true,
            forceHelperSize: false,
            placeholder: 'sortableHelper',
            zIndex: 999990,
            opacity: 0.6,
            tolerance: "pointer",
            start: function (e, ui) {
                ui.placeholder.height(ui.helper.outerHeight());
            }
        });
    }
    var fieldUnit = $('.pricing-price').children('input').attr('data-unit');
    $('.pricing-price').children('input').before('<i class="data-unit">' + fieldUnit + '</i>');
    $("a.close").removeAttr("href").on('click', function () {
        function slideFade(elem) {
            var fadeOut = {opacity: 0, transition: 'opacity 0.5s'};
            elem.css(fadeOut).slideUp();
        }

        slideFade($(this).parent());
    });

    //Change file img


});
$(document).ready(function() {


    var readURL = function(input=['file']) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.pic1').attr('src', e.target.result);
            };

            reader.readAsDataURL(input.files[0]);
        }
    };


    $(".up1").on('change', function(){
        readURL(this);
    });




});
