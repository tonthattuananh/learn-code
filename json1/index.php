<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
Name: <span id="name"></span> <br>
Phone: <span id="phone"></span> <br>

<script type="text/javascript">
	var obj = {
		'name' : 'tuan anh',
		'phone' : '82304802934'
	}

	document.getElementById('name').innerHTML = obj.name;
	document.getElementById('phone').innerHTML = obj.phone;
</script>

<?php 
	$arr = array('mon1' => 'PHP', 'mon2'=>'CSS','mon3'=>'JQuery');
	echo json_encode($arr,JSON_UNESCAPED_UNICODE);
?>
</body>
</html>