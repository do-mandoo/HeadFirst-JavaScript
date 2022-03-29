function placeOrder() {
  if (document.getElementById('name').value === '') {
    alert("I'm sorry but you name before submitting an order.");
  } else if (document.getElementById('pickupminutes').value === '') {
    isNaN(document.getElementsById('pickupminutes').value);
    alert(
      "i'm sorry but you must provide the number of minutees until pick-up" +
        'before submitting an oreder.'
    );
  } else {
    // 서버로 주문을 전송
    form.submit();
  }
}
