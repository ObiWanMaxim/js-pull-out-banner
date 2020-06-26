$('.pobanner').addClass('showpop');
$('.pobanner-header span').addClass('btn-o-pobanner');

setTimeout(function() {
	$('.pobanner').removeClass('showpop');
	$('.pobanner-header span').removeClass('btn-o-pobanner');}, 15000); //15 sec

$('.btn-pobanner').on('click', function () {
	$('.pobanner').toggleClass('showpop');
	$('.pobanner-header span').toggleClass('btn-o-pobanner');
});

