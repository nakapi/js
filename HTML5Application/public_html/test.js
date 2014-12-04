$(function(){
	saveFile('test.csv','テスト');
});

var saveFile = function(file,data){
	var uri = 'data:application/csv;charaset=utf-8,'+encodeURIComponent(data);
	var link = document.createElement('a');
	link.download="hige.csv";
	link.href = uri;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
};
