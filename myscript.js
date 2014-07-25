function hash() {
	var array = $('#email').val().trim().toLowerCase().split("\n");
	for (var i = 0; i < array.length; i++) {
		var gravatar = $('<img>').attr({src: 'http://www.gravatar.com/avatar/' + CryptoJS.MD5(array[i])});
		$("#my_whatever").append(gravatar).append('<br />' + array[i] + '<br />' + i + '<br />' + gravatar.attr("src") + '<br><br />');
	}
	return false;
}
