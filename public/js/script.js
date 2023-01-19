var habitation = true;
var urgence = true;
$('.habitation-item').click(function () {
    $('.habitation-error').remove();
    var selected = $(this).val();
    if (selected == 'Appartement') {
        habitation = false;
        $('.habitation-list').parent().before('<span class="error-msg text-danger font-weight-bold habitation-error">Ce dispositif n\'est pas disponible pour les appartements.</span>');
    } else {
        habitation = true;
    }
    stateField();
});

$('.urgence-item').click(function () {
    $('.urgence-error').remove();
    var selected = $(this).val();
    if (selected == 'Locataire') {
        urgence = false;
        $('.urgence-list').parent().before('<span class="error-msg text-danger font-weight-bold urgence-error">Ce dispositif n\'est pas disponible pour les locataires.</span>');

    } else {
        urgence = true;
    }
    stateField();
});

function stateField() {
    if (!habitation || !urgence) {
        $('.btn-nextstep').prop('disabled', true);
    } else {
        $('.btn-nextstep').prop('disabled', false);
    }
}

$('.step-next').click(function () {
    $('.error-msg').remove();
    var departement = document.getElementById("departement").value;


    if (departement == 'AUCUN') {
        $('#departement').parent().before('<span class="error-msg text-danger font-weight-bold">Veuillez choisir votre département</span>');
        $("html, body ").animate({ scrollTop: 300 }, "slow");
        return;
    }
    if (!$('.habitation-item').is(':checked')) {
        $('.habitation-list').parent().before('<span class="error-msg text-danger font-weight-bold habitation-error">Veuillez choisir une option.</span>');
        $("html, body ").animate({ scrollTop: 360 }, "slow");
        return;
    }

    if (!$('.urgence-item').is(':checked')) {
        $('.urgence-list').parent().before('<span class="error-msg text-danger font-weight-bold urgence-error">Veuillez choisir une option.</span>');
        return;
    }

    if ($(".foyer-item:checked").length <= 0) {
        $('.foyer-list').parent().before('<span class="error-msg text-danger font-weight-bold">Veuillez choisir une option.</span>');
        return;
    }

    if ($(".superficie-item:checked").length <= 0) {
        $('.superficie-list').parent().before('<span class="error-msg text-danger font-weight-bold">Veuillez choisir une option.</span>');
        return;
    }



    $('.form-steps').removeClass('active');
    $(this).parent().parent().next().addClass('active');


    if ($(this).hasClass('btn-step-2')) {
        $('html, body').animate({
            scrollTop: $("#fstep2").offset().top
        }, 500);
        $('.step-1').removeClass('active').addClass('passed');
        $('#stepCheckboxsBtn').prop('disabled', true);
        setTimeout(function () {
            $('.etape_check_1').css('color', '#3a3a3c').addClass('animate-text');
            $('.faCheck1').removeClass($('.faCheck1').attr('data-fa')).css('color', '#2cd032').addClass('fa fa-check-circle animated  bounceIn');

        }, 1000)

        setTimeout(function () {
            $('.etape_check_3').css('color', '#3a3a3c').addClass('animate-text');
            $('.faCheck3').removeClass($('.faCheck3').attr('data-fa')).css('color', '#2cd032').addClass('fa fa-check-circle animated  bounceIn');
            const word = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
            const numbers = '123456789'
            const string1 = [...Array(2)].map(_ => word[~~(Math.random() * word.length)]).join('')
            const string2 = [...Array(1)].map(_ => word[~~(Math.random() * word.length)]).join('')
            const string3 = [...Array(4)].map(_ => numbers[~~(Math.random() * numbers.length)]).join('')
            $('.documentSerial').html(string1.toUpperCase() + string3 + string2.toUpperCase());
            $('#documentId').fadeIn();

        }, 2200)
        /*setTimeout(function () {
            $('.etape_check_4').css('color', '#3a3a3c').addClass('animate-text');
            $('.faCheck4').removeClass($('.faCheck4').attr('data-fa')).css('color', '#2cd032').addClass('fa fa-check-circle animated  bounceIn');

        }, 3200)*/
        setTimeout(function () {
            $('.etape_check_5').css('color', '#3a3a3c').addClass('animate-text');
            $('.faCheck5').removeClass($('.faCheck5').attr('data-fa')).css('color', '#2cd032').addClass('fa fa-check-circle animated  bounceIn');

        }, 3200)


        setTimeout(function () {
            $('.etape_check_6').css('color', '#3a3a3c').addClass('animate-text');
            $('.faCheck6').removeClass($('.faCheck6').attr('data-fa')).css('color', '#2cd032').addClass('fa fa-check-circle animated  bounceIn');
            var date = new Date();
            var val = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
            $('.current_date').html(val);
            $('#MAJ_tarif').fadeIn();
        }, 4200)


        setTimeout(function () {
            $('.etape_check_7').css('color', '#48484b').addClass('animate-text');
            $('.faCheck7').removeClass($('.faCheck7').attr('data-fa')).css('color', '#2cd032').addClass('fa fa-check-circle animated  bounceIn');

            setTimeout(function () {
                $('.step-2').removeClass('active').addClass('passed');
                $('.form-steps').removeClass('active');
                $('.form-step3').addClass('active');
                $('html, body').animate({
                    scrollTop: $("#fstep3").offset().top
                }, 1000);

            }, 1000)
        }, 5200);
    }


});

$(".finish-form").click(function () {
    $('.err').hide();
    $('.error-msg').remove();
    $('#nom').attr("style", "");
    $('#prenom').attr("style", "");
    $('#mobile').attr("style", "");
    var err = 0;


    if ($('#nom').val() === "") {
        $('#nom').css('border-color', 'red');
        $('#nom').before('<div class="error-msg text-danger font-weight-bold">Veuillez saisir votre nom.</div>');
        err = 1;
    }
    if ($('#prenom').val() === "") {
        $('#prenom').css('border-color', 'red');
        $('#prenom').before('<div class="error-msg text-danger font-weight-bold">Veuillez saisir votre prénom.</div>');

        err = 1;
    }

    if ($('#mobile').val() === "") {
        $('#mobile').css('border-color', 'red');
        err = 1;
    }

    if (($('#mobile').val() === "" || $('#mobile').val() == "0000000000" || $('#mobile').val() == "0606060606" || $('#mobile').val() == "1234567890" || $('#mobile').val() == "0600000000" || $('#mobile').val() == "0000000000") || $('#mobile').val().length != 10) {
        $('#mobile').css('border-color', 'red');
        $('#mobile').before('<div class="error-msg text-danger font-weight-bold">Veuillez saisir 10 chiffres.</div>');

        err = 1;
    }


    if (err === 0) {
        $('.finish-form').html('Envoi en cours...');
        $('.finish-form').prop('disabled', true);
        var dep = $("#departement option:selected").text();


        var habitation = $('input[name=habitation]:checked').val();

        var urgence = $('input[name=urgence]:checked').val();

        var foyer = $('input[name=foyer]:checked').val();

        var superficie = $('input[name=superficie]:checked').val();

        var nom = $('#nom').val();
        var prenom = $('#prenom').val();
        var tel = $('#phone').val();
        var mobile = $('#mobile').val();

        var token = $('meta[name="csrf-token"]').attr('content');

        var currentUrl = window.location.href;

        $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            type: 'POST',
            url: '/lead',
            data: "a=submit&dpt=" + dep + "&nom=" + nom + "&prenom=" + prenom + "&tel=" + tel + "&mobile=" + mobile + "&habitation=" + habitation + "&urgence=" + urgence + "&foyer=" + foyer + "&superficie=" + superficie + "&_token=" + token,
            success: function (response) {
                console.log(response);
                console.log(currentUrl);
                if (response == 1) {
                    window.location.href = currentUrl + 'remerciement';
                } else {
                    alert('There is a problem processing the request. Please try again');
                    $('.nextStep2').html('Vérifier mon éligibilité');
                    $('.nextStep2').prop('disabled', false);
                }
            }
        });

    }
});


$(".contactForm").click(function () {
    $('.err').hide();
    $('.error-msg').remove();
    $('#nom').attr("style", "");
    $('#prenom').attr("style", "");
    $('#mobile').attr("style", "");
    $('#email').attr("style", "");
    $('#subject').attr("style", "");
    var err = 0;


    if ($('#nom').val() === "") {
        $('#nom').css('border-color', 'red');
        $('#nom').before('<div class="error-msg text-danger font-weight-bold">Veuillez saisir votre nom.</div>');
        err = 1;
    }
    if ($('#prenom').val() === "") {
        $('#prenom').css('border-color', 'red');
        $('#prenom').before('<div class="error-msg text-danger font-weight-bold">Veuillez saisir votre prénom.</div>');

        err = 1;
    }

    if ($('#mobile').val() === "") {
        $('#mobile').css('border-color', 'red');
        err = 1;
    }

    if (($('#mobile').val() === "" || $('#mobile').val() == "0000000000" || $('#mobile').val() == "0606060606" || $('#mobile').val() == "1234567890" || $('#mobile').val() == "0600000000" || $('#mobile').val() == "0000000000") || $('#mobile').val().length != 10) {
        $('#mobile').css('border-color', 'red');
        $('#mobile').before('<div class="error-msg text-danger font-weight-bold">Veuillez saisir 10 chiffres.</div>');

        err = 1;
    }
    if ($('#email').val() === "") {
        $('#email').css('border-color', 'red');
        $('#email').before('<div class="error-msg text-danger font-weight-bold">Veuillez saisir votre Email.</div>');
        err = 1;
    }
    if ($('#subject').val() === "") {
        $('#subject').css('border-color', 'red');
        $('#subject').before('<div class="error-msg text-danger font-weight-bold">Veuillez saisir votre Sujet.</div>');
        err = 1;
    }


    if (err === 0) {
        $('.contactForm').html('Envoi en cours...');
        $('.contactForm').prop('disabled', true);

        var nom = $('#nom').val();
        var prenom = $('#prenom').val();
        var email = $('#email').val();
        var tel = $('#mobile').val();
        var mobile = $('#mobile').val();
        var subject = $('#subject').val();

        var currentUrl = window.location.href;

        $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            type: 'POST',
            url: '/contact',
            data: "a=submit& &nom=" + nom + "&prenom=" + prenom + "&tel =" + tel + "&mobile=" + mobile + "&subject=" + subject + "&email=" + email,
            success: function (response) {
                console.log(response);
                // if (response == 1) {
                //     $('.form-step3').removeClass('active');
                //     $('.finish-step').addClass('active');
                // } else {
                //     alert('There is a problem processing the request. Please try again');
                //     $('.nextStep2').html('Vérifier mon éligibilité');
                //     $('.nextStep2').prop('disabled', false);
                // }
            }
        });

    }
});




$('.form-steps .prev').click(function () {
    $('.form-steps').removeClass('active');
    $(this).parent().parent().prev().addClass('active');
});