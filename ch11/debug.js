function DebugConsole() {
  // 디버그 콘솔 영역 생성
  const consoleElem = document.createElement('div');
  consoleElem.id = 'debug';
  consoleElem.style.fontFamily = 'monospace';
  consoleElem.style.color = '#333333';
  document.body.appendChild(consoleElem);
  consoleElem.appendChild(document.createElement('hr'));

  // 대체용 배경색 프로퍼티 생성
  this.shaded = false;
}

DebugConsole.prototype.displayMsg = function (msg) {
  // 메시지 생성
  const msgElement = document.createElement('div');
  msgElement.appendChild(document.createTextNode(msg));
  msgElement.style.backgroundColor = this.shaded ? '#EEEEEE' : '#FFFFFF';
  const consoleElem = document.getElementById('debug');
  consoleElem.appendChild(msgElement);

  // 대체용 배경색 프로퍼티 적용
  this.shaded = !this.shaded;
};
