const input = document.getElementById('pass');
const bar = document.getElementsByClassName('bar__item');
const bars = document.getElementsByClassName('bar');
const wrap = document.getElementsByClassName('main__wrap')[0];

wrap.addEventListener('click', (event) => {
  if (event.target === input) {
    bars[0].classList.add('bar--active');
  } else {
    bars[0].classList.remove('bar--active');
  }
  input.addEventListener('input', (event) => {
    const valueArr = event.target.value.split('');
    if (valueArr.length === 0) {
      bars[0].classList.remove('bar--active');
    } else if (valueArr.length === 1) {
      for (let i = 0; i < bar.length; i += 1) {
        bars[0].classList.add('bar--active');
        bar[i].classList.remove('bar__item--low');
        bar[i].classList.remove('bar__item--normal');
        bar[i].classList.remove('bar__item--good');
      }
    } else if (valueArr.length <= 3) {
      for (let i = 0; i < bar.length; i += 1) {
        bar[i].classList.remove('bar__item--normal');
        bar[i].classList.remove('bar__item--good');
      }
      bar[0].classList.add('bar__item--low');
    } else if (valueArr.length <= 5) {
      for (let i = 0; i < bar.length; i += 1) {
        bar[i].classList.remove('bar__item--low');
        bar[i].classList.remove('bar__item--good');
      }
      bar[0].classList.add('bar__item--normal');
      bar[1].classList.add('bar__item--normal');
    } else {
      for (let i = 0; i < bar.length; i += 1) {
        bar[i].classList.remove('bar__item--low');
        bar[i].classList.remove('bar__item--normal');
      }
      bar[0].classList.add('bar__item--good');
      bar[1].classList.add('bar__item--good');
      bar[2].classList.add('bar__item--good');
    }
  });
});
