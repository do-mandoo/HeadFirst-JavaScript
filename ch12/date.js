// Custom Date function to display a date in MM/DD/YYYY format
Date.prototype.shortFormat = function () {
  console.log(1111);
  return this.getMonth() + 1 + '/' + this.getDate() + '/' + this.getFullYear();
};
