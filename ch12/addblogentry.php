<?php
$filename = "blog.xml";

// 블로그 파일이 존재하는지 체크함.
if (file_exists($filename)) {
  // XML 파일로부터 블로그 항목을 로드 

  // $rawBlog 변수에 XML 데이터를 로드한다.
  $rawBlog = file_get_contents($filename);
}
else {
  // 빈 XML문서 생성
  
  // 만약 블로그파일이 존재하지 않는다면, 비어있는 xml블로그 문서를 생성한다.
  $rawBlog = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>";
  $rawBlog .= "<blog><title>YouCube - The Blog for Cube Puzzlers</title>";
  $rawBlog .= "<author>Puzzler Ruby</author><entries></entries></blog>";
}
// 생성자 new로 생성된 블로그 데이터를 구조화된 xml데이터로 변화하는데,
// 이는 자바스크립트에 있는 dom트리와 많은 점에서 비슷하다.
$xml = new SimpleXmlElement($rawBlog);

// 자식 노드로 새로운 블로그 항목 추가
$entry = $xml->entries->addChild("entry");
$entry->addChild("date", $_REQUEST["date"]);
$entry->addChild("body", stripslashes($_REQUEST["body"]));
if ($_REQUEST["image"] != "")
  $entry->addChild("image", $_REQUEST["image"]);

// 전체 블로그를 파일에 작성
$file = fopen($filename, 'w');
fwrite($file, $xml->asXML());
fclose($file);
?> 
