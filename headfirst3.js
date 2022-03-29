function writeCookie(name, value, days) {
  // 쿠키는 일시적이므로 디폴트로 소멸일자는 없는 것으로 설정
  let expires = '';

  // 쿠키가 지속되는 날짜 수를 지정
  if (days) {
    const date = new Date();
    date.setTime(date.getDate() + (days + 24 * 60 * 60 * 1000));
    expires = '; expires =' + date.toGMTString();
  }

  // 쿠키에 이름, 값, 소멸 일자를 설정
  document.cookie = name + '=' + value + expires + '; path=/';
}

function readCookie(name) {
  // 특정 쿠키를 찾아 그 값을 반환
  const searchName = name + '=';
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const c = cookies[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1, c.length);
      if (c.indexOf(searchName) == 0) {
        return c.substring(searchName.length, c.length);
      }
    }
  }
  return null;
}

function eraseCookie(name) {
  // 특정 쿠키를 삭제
  writeCookie(name, '', -1);
}
