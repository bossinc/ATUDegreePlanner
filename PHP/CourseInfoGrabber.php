<?php

$str = '?term=201630&subject=MATH&number=1003';
echo $str;
$curl = curl_init();
curl_setopt($curl,CURLOPT_URL,'http://www.atu.edu/catalog/app/descriptions/catalog-data.php'.$str);
$resp = curl_exec($curl);
curl_close($curl);

?>