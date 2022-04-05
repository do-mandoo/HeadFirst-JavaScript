console.log(1);
// AjaxRequest 객체 생성자
function AjaxRequest() {
  console.log('hi');
  // 먼저 XMLHttpRequest를 시도.
  if (window.XMLHttpRequest) {
    try {
      this.request = new XMLHttpRequest();
    } catch (e) {
      this.request = null;
    }
    // ActiveX(IE) 버전에서 시도 -> 크로스브라우저 오..
  } else if (window.ActiveXObject) {
    try {
      this.request = new ActiveXObject('Msxml2.XMLHTTP');
      // 예전 버전의 IE를 위해 예전 버전의 ActiveX에서 시도. -> 오..
    } catch (e) {
      try {
        this.request = new ActiveXObject('Microsoft.XMLHTTP');
      } catch (e) {
        this.request = null;
      }
    }
  }

  // 요청 작성에 실패했을 경우 사용자에게 통지한다.
  if (this.request == null) {
    alert('Ajax error creating the request.\n' + 'Details: ' + e);
  }
}
console.log(2);
// 서버에 Ajax요청 보내기
AjaxRequest.prototype.send = function (type, url, handler, postDataType, postData) {
  console.log('hey');
  console.log(type, url);
  console.log(postDataType, postData);
  if (this.request != null) {
    // 이전 요청을 없앰
    this.request.abort();

    // 브라우저 캐시(캐쉬)를 오버라이드하기 위해 더미 파라미터로 고정.
    // url += '?dummy=' + new Date().getTime();
    console.log('ㄱ');
    try {
      console.log('ㄴ');
      // 요청에 대해 서버가 응답할 때 호출되는 사용자 정의 함수이다.
      this.request.onreadystatechange = handler;

      console.log('ㄷ');
      // 요청을 오픈하는것은 전송할 준비가 되어있다는 것. 또한 요청의 종류(GET,POST)가 무엇인지도 결정함.
      this.request.open(type, url, true); // 항상 비동기적임(true)
      // 12
      console.log('ㄹ');
      if (type.toLowerCase() == 'get') {
        console.log('asdf');
        // GET요청을 전송: 포함된 데이터는 null로 없음을 뜻함.
        this.request.send(null); // GET요청 부분
      } else {
        console.log('qweqwe');
        // POST요청을 전송: 마지막 인수가 데이터이다.
        this.request.setRequestHeader('Content-Type', postDataType);
        this.request.send(postData); // POST요청 부분
      }
      console.log('ㅁ');
    } catch (e) {
      alert('Ajax error communicating with the server.\n' + 'Details: ' + e);
    }
  }
};

AjaxRequest.prototype.getReadyState = function () {
  console.log(12);
  return this.request.readyState;
};

AjaxRequest.prototype.getStatus = function () {
  console.log(34);
  return this.request.status;
};

AjaxRequest.prototype.getResponseText = function () {
  console.log(56);
  return this.request.responseText;
};

AjaxRequest.prototype.getResponseXML = function () {
  console.log(78);
  return this.request.responseXML;
};
