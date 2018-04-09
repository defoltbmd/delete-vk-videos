(function () { 
	'use strict'; 
	var deletePostLink = document.body.querySelectorAll('[onclick^="return Video.onVideoDelete"]'); 
	if (!confirm('Удалить '+ deletePostLink.length +' видео?')) 
		return;
	for (var i = 0; i < deletePostLink.length; i++) {
		deletePostLink[i].click(); 
	} 
	alert(deletePostLink.length + ' видео удалено!'); 
} () );﻿
