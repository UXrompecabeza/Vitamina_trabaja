$(document).ready(function () {
    youtube();
    changeTab();
    changeSelect();
});
$(".btn-search-mobil").click(function () {
    $(".input-hide-mo").toggleClass("show-searchBar-mo");
    $(".header").toggleClass("toTopLayer");
})
$(".btn-search").click(function () {
    $(".box-slide").toggleClass("show-searchBar");
})
$("#burgerBtn").click(function () {
    $(this).toggleClass("openBtn");
    $(".navbar-mo").toggleClass("close-navbarMo");
})
$("#curriculum").on("change", function () {
    let fakeFile = document.getElementById("curriculum").files[0].name;
    $(".fake-input").text(fakeFile);
    $(".fake-input").addClass('activeInput');
    $('.activeLabel').removeClass('transparent');
    $('.inactiveLabel').addClass('hide');
})

//Validacion formulario
function valida(f) {
    let validate = 0;
    // let rut = f.elements[1];
    // let date = f.elements[2];
    let name = f.elements[1];
    let lastname = f.elements[2];
    let phone = f.elements[3];
    let mail = f.elements[4];
    let job = f.elements[5];
    let file = f.elements[6];
    $('input').on('keydown keyup change paste', function () {
        if ($(this).val() != "") {
            $(this).removeClass('empty-field');
            $(this).parents('.input-form').find('.helpMsg').removeClass('hide')
            $(this).parents('.input-form').find('.errorMsg').addClass('hide')
        }
        if ($(this).val() == "") {
            $(this).addClass('empty-field');
        }
    })
    $('#curriculum').change(function () {
        if ($(this).val() != "") {
            $(".fake-input").removeClass('empty-field');
        }
    })

    // if (rut.value.length < 11) {
    //     rut.classList.add("empty-field")
    // } else {
    //     validate++;
    // }
    // if (date.value.length < 10) {
    //     date.classList.add("empty-field")
    // } else {
    //     validate++;
    // }
    if (phone.value.length < 12) {
        phone.classList.add("empty-field");
        phone.parentNode.childNodes[3].classList.add('hide');
        phone.parentNode.childNodes[1].classList.remove('hide');
    } else {
        validate++;
    }
    if (name.value == "") {
        name.classList.add("empty-field")
        name.parentNode.childNodes[3].classList.add('hide');
        name.parentNode.childNodes[1].classList.remove('hide');
    } else {
        validate++;
    }
    if (lastname.value == "") {
        lastname.classList.add("empty-field");
        lastname.parentNode.childNodes[3].classList.add('hide');
        lastname.parentNode.childNodes[1].classList.remove('hide');
    } else {
        validate++;
    }
    if (mail.value == "") {
        mail.classList.add("empty-field")
        mail.parentNode.childNodes[3].classList.add('hide');
        mail.parentNode.childNodes[1].classList.remove('hide');
    } else {
        validate++;
    }
    if (job.value == "") {
        job.classList.add("empty-field");
        job.parentNode.childNodes[3].classList.add('hide');
        job.parentNode.childNodes[1].classList.remove('hide');
    } else {
        validate++;
    }
    if (file.value == "") {
        $(".fake-input").addClass("empty-field");
        console.log(file.parentNode)
        file.parentNode.childNodes[9].classList.add('hide');
        file.parentNode.childNodes[11].classList.remove('hide');
    } else {
        validate++;
    }
    if (validate == 6) {
        // return true;
        $('.sendPost').remove();
        $('.chargingAni').removeClass('hide');
        setTimeout(function(){ 
            $('.chargingAni').remove();
            $('.exitPost').removeClass('hide'); }, 1500);
        return false;
    } else {
        return false;
    }
}

//Select personalizado
$('.selectStyle').each(function () {
    var $this = $(this), numberOfOptions = $(this).children('option').length;
    $this.addClass('select-hidden');
    $this.wrap('<div class="selectDiv"></div>');
    $this.after('<div class="select-styled"></div>');
    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());
    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }
    var $listItems = $list.children('li');
    $styledSelect.click(function (e) {
        e.stopPropagation();
        $('div.select-styled.activeb').not(this).each(function () {
            $(this).removeClass('activeb').next('ul.select-options').hide();
        });
        $(this).toggleClass('activeb').next('ul.select-options').toggle();
    });
    $listItems.click(function (e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('activeb');
        $this.val($(this).attr('rel'));
        $list.hide();
    });
    $(document).click(function () {
        $styledSelect.removeClass('activeb');
        $list.hide();
    });
});

//Validaciones formato

// LARGO CAMPOS
function limitMe(e) {
    if (e.keyCode == 8) { return true; }
    return this.value.length < $(this).attr("maxLength");
}
$('.input-nacimiento').attr('maxLength', '10').keypress(limitMe);
$('.input-telefono').attr('maxLength', '12').keypress(limitMe);
$('.input-rut').attr('maxLength', '12').keypress(limitMe);

//SOLO NUMEROS
$('.input-number').on('input', function () {
    this.value = this.value.replace(/[^0-9]/g, '');
});
//TELEFONO
$('.input-telefono').on('input', function () {
    this.value = this.value.replace(/[^0-9+]/g, '');
});

//SOLO LETRAS
$('.input-text').on('input', function () {
    this.value = this.value.replace(/[^A-Za-z\s]/g, '');
});

// Formato RUT
$('.input-rut').on('input', function () {
    this.value = this.value.replace(/[^k0-9\_]/g, '');
    let value = this.value;
    if (value.length > 1) {
        value = value.substring(0, value.length - 1) + '-' + value.substring(value.length - 1, value.length);
    }
    if (value.length > 5) {
        value = value.substring(0, value.length - 5) + '.' + value.substring(value.length - 5, value.length);
    }
    if (value.length > 9) {
        value = value.substring(0, value.length - 9) + '.' + value.substring(value.length - 9, value.length);
    }
    this.value = value;
});
// Formato Fecha
$('.input-nacimiento').on('input', function () {
    this.value = this.value.replace(/[^0-9\_]/g, '');
    let value = this.value;
    if (value.length > 4) {
        value = value.substring(0, value.length - 4) + '/' + value.substring(value.length - 4, value.length);
    }
    if (value.length > 7) {
        value = value.substring(0, value.length - 7) + '/' + value.substring(value.length - 7, value.length);
    }
    this.value = value;
});

//HackYoutube
function youtube() {
    var v = document.getElementsByClassName("reproductor");
    for (var n = 0; n < v.length; n++) {
        var p = document.createElement("div");
        p.innerHTML = labnolThumb(v[n].dataset.id);
        p.onclick = labnolIframe;
        v[n].appendChild(p);
    }
};
function labnolThumb(id) {
    return '<img class="imagen-previa" src="//i.ytimg.com/vi/' + id + '/hqdefault.jpg"><div class="youtube-play"></div>';
}
function labnolIframe() {
    var iframe = document.createElement("iframe");
    iframe.setAttribute("src", "//www.youtube.com/embed/" + this.parentNode.dataset.id + "?autoplay=1&autohide=2&border=0&wmode=opaque&enablejsapi=1&controls=1&rel=0&showinfo=0");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("id", "youtube-iframe");
    this.parentNode.replaceChild(iframe, this);
}

//Select tabs
$('#pills-select').on('change', function (e) {
    $('#pills-tab li a').eq($(this).val()).tab('show');
});

// Carrusel
$('.staticCarousel').owlCarousel({
    loop: true,
    nav: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 3,
        }
    }
});
$('.navCarousel').owlCarousel({
    loop: true,
    nav: false,
    items: 1,
    URLhashListener:true,
    startPosition: 'URLHash'
});
$('.autoCarousel').owlCarousel({
    loop: true,
    nav: false,
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000,
});
$('.multipleCarousel').owlCarousel({
    loop: true,
    center: true,
    nav: false,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        767: {
            items: 3,
        },
        1024: {
            items: 4,
        }
    }
});

//Geolocalización

$(function () {
    if ($('body').is('.centros')) {
        getLocation();
        $('.filterCenter').selectize({
            create: false,
        });
    }
});
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("Geolocation is not supported by this browser.")
    }
}
function showPosition(position) {
    console.log("Latitude: " + position.coords.latitude +
        " Longitude: " + position.coords.longitude)
}

//Botones relocalizacion
$(".postulaBtn").click(function () {
    window.location.href = "postula.html"
})
$(".centrosBtn").click(function () {
    window.location.href = "centros.html"
})
$(".card-centro").click(function () {
    window.location.href = "centro-page.html"
})
$(".selloBtn").click(function () {
    window.location.href = "nuestro-sello.html";
    let valBtn = $(this).val();
    let bread = $(this).find("span").text().toLowerCase()
    let miniBread = bread.charAt(0).toUpperCase() + bread.slice(1);
    sessionStorage.tab = valBtn;
    sessionStorage.breadJob = miniBread;
})
function changeTab() {
    let valTab = sessionStorage.getItem('tab');
    let valBread = sessionStorage.getItem('breadJob');
    $(".breadcrumbs li:last a").html(valBread);
    $('#pills-tab li a').eq(valTab).tab('show');
    $("#pills-select").val(valTab);
};
$(".postulaBtnJob").click(function () {
    window.location.href = "postula.html";
    let valueBtn = $(this).val()
    sessionStorage.postula = valueBtn;
})
function changeSelect() {
    let valBtn = sessionStorage.getItem('postula');
    if(valBtn == null) {
        $('.select-styled').text("Educadora de Párvulos");
    } else {
        $('.select-styled').text(valBtn);
    }
};

//Scrolling ancla
function nextTest(e) {
    let f = $(e).parents().next().find('#scrollMark')
    scrollingMo(f);
}
function scrollingMo(e) {
    $('html, body').animate({
        scrollTop: $( e ).offset().top - 35
    }, 700);
}

// Nav testimonios
$('.testimony1').click(function() {
    $('.testimony-btns a').removeClass('actualSlide')
    $(this).addClass('actualSlide')
    $('.testimonyBox').addClass('hide')
    $('.testimonyBox1').removeClass('hide')
})
$('.testimony2').click(function() {
    $('.testimony-btns a').removeClass('actualSlide')
    $(this).addClass('actualSlide')
    $('.testimonyBox').addClass('hide')
    $('.testimonyBox2').removeClass('hide')
})
$('.testimony3').click(function() {
    $('.testimony-btns a').removeClass('actualSlide')
    $(this).addClass('actualSlide')
    $('.testimonyBox').addClass('hide')
    $('.testimonyBox3').removeClass('hide')
})
$('.testimony4').click(function() {
    $('.testimony-btns a').removeClass('actualSlide')
    $(this).addClass('actualSlide')
    $('.testimonyBox').addClass('hide')
    $('.testimonyBox4').removeClass('hide')
})
$('.testimony5').click(function() {
    $('.testimony-btns a').removeClass('actualSlide')
    $(this).addClass('actualSlide')
    $('.testimonyBox').addClass('hide')
    $('.testimonyBox5').removeClass('hide')
})