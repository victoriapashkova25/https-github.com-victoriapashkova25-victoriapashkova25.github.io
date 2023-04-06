$('body').on('click', '.password-control', function(){
	if ($(this).siblings('#password-input').attr('type') == 'password'){
		$(this).children('.bi-eye-fill').addClass('bi-eye-slash-fill');
		$(this).siblings('#password-input').attr('type', 'text');
	} else {
		$(this).children('.bi-eye-slash-fill').removeClass('bi-eye-slash-fill');
		$(this).siblings('#password-input').attr('type', 'password');
	}
	return false;
});

$('.btn-available').click(function(){
    $('.content-history').addClass('d-none');
    $('.content-available').removeClass('d-none');
    $(this).addClass('active');
    $('.btn-history').removeClass('active');
})

$('.btn-history').click(function(){
    $('.content-available').addClass('d-none');
    $('.content-history').removeClass('d-none');
    $('.btn-available').removeClass('active');
    $(this).addClass('active');
})

$('#btnAnswerLk').click(function(){
    $('#btnAnswerTel').removeClass('active');
    $(this).addClass('active');
    $('#hoursAnswer').text('48');
})

$('#btnAnswerTel').click(function(){
    $('#btnAnswerLk').removeClass('active');
    $(this).addClass('active');
    $('#hoursAnswer').text('24');
})

$('.hint a, .hint button').click(function(){
    $('.dropdownHint, .input-summ').val($(this).text());
	$('.input-summ').siblings('.placeholder-fake').addClass('placeholder-fake--top')
})


$('.btn-reg').click(function(){
    $('.form-reg').removeClass('d-none');
    $('.form-auth').addClass('d-none');
})
$('.btn-auth').click(function(){
    $('.form-auth').removeClass('d-none');
    $('.form-reg').addClass('d-none');
})

$('#password-input').focus(function(){
    $('.password-tooltip').removeClass('d-none');
})
$('#password-input').blur(function(){
    $('.password-tooltip').addClass('d-none');
})


$("#password-input").keyup(function() {
	
	var strength = 0;

	$('.password-tooltip li').removeClass('text-success');

	if(this.value.length >= 8) {
		$('.password-tooltip li:first-child').addClass('text-success');
		strength++;
	}

 	if(this.value.match(/[a-z]+/) && this.value.match(/[A-Z]+/)) {
		$('.password-tooltip li:nth-child(2)').addClass('text-success');
		strength++;
	}

	if(this.value.match(/[0-9]+/)) {
		$('.password-tooltip li:last-child').addClass('text-success');
		strength++;
	}

	$('.password-line > div').removeClass('bg-sucess bg-warning');

	if (strength == 3) {
		$('.password-line > div').addClass('bg-sucess');
		$('.password-tooltip--text').text('Надежный пароль');
	} else if (strength == 2) {
		$('.password-line > div:not(:last-child)').addClass('bg-warning');
		$('.password-tooltip--text').text('Средней сложности пароль');
	} else if (strength == 1) {
		$('.password-line > div:first-child').addClass('bg-danger');
	}

});



$('input').focus(function () {
    $(this).siblings('.placeholder-fake').addClass('placeholder-fake--top')
});
$('input').blur(function () {
	if ( $(this).val().length == 0) {
		$(this).siblings('.placeholder-fake').removeClass('placeholder-fake--top')
	}
});


//


count=0;
$('.btn-next').click(function(e){
    e.preventDefault();
    $(this).parents('.content-appeal').addClass('d-none');
	$(this).parents('.content-appeal').next('.content-appeal').toggleClass('d-none');
	count++;
	$('.progress-steps').addClass('progress-step-'+ count );

	$('.progress-step-4').parentsUntil('nav').addClass('d-none');
})


$('.btn-prev').click(function(e){
    e.preventDefault();
    $(this).parents('.content-appeal').addClass('d-none');
	$(this).parents('.content-appeal').prev('.content-appeal').toggleClass('d-none');
	$('.progress-steps').removeClass('progress-step-'+ count );
	count--;
})

$('.btn-back').on('click', function(e){
    e.preventDefault();
    window.history.back();
});

$(document).on('keyup', '#msg-field', function(){
	var el = this;
	setTimeout(function() { 
		el.style.cssText = 'height:auto;';
		var height = (el.scrollHeight < 200 ? el.scrollHeight : 200);
		console.log(height);
		el.style.cssText = 'height:' + height + 'px';
	}, 1);
});

$('.selectpicker').selectpicker({
	liveSearch: true,
});


$('[data-autocomplete]').each(function(inx, el){
	
	var data = [];
	var data_array = JSON.parse($(el).attr('data-autocomplete'));

	for (let i = 0; i < data_array.length; i++) {
	    let customObject = {
	        label: data_array[i],
	        value: data_array[i],
	    }
	    data.push(customObject);
	}

	new Autocomplete($(el).get(0), {
        data: data,
        treshold: 1,
        dropdownClass: 'w-100',
        dropdownItemClass: ['w-100', 'text-secondary', 'd-flex', 'justify-content-between'],
        highlightClass: 'fw-600',
        iconAfter: 'bi bi-chevron-right',
        maximumItems: 5,
        onSelectItem: ({label, value}) => {
            console.log("user selected:", label, value);
        }
    });
});





