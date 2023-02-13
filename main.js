let count = document.querySelector(".count");
let input = document.querySelector("input");
let prog = document.querySelector(".progress");

count.innerHTML = input.getAttribute("maxlength");
input.style.fontSize='18px'
input.oninput = () => {
  count.innerHTML = input.getAttribute("maxlength") - input.value.length;

  prog.style.width = `${
    (input.value.length * 100) / input.getAttribute("maxlength")
  }%`;
  if(count.innerHTML ==0)
  {
    input.blur()
  }
};
