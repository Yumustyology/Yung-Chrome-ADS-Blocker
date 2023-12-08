const skipBtinClick = ()=>{
  let skipButton1 = document.getElementsByClassName("ytp-ad-skip-button");
  let skipButton2 = document.getElementsByClassName(
    "ytp-ad-skip-button-modern ytp-button"
  );
  if (skipButton1 !== undefined && skipButton1.length > 0) {
    console.log("Ad detected for 1");
    skipButton1[0].click();
  } else if (skipButton2 !== undefined && skipButton2.length > 0) {
    console.log("Ad detected for 2");
    skipButton2[0].click();
  }
}


let firstInterval = setInterval(() => {
  skipBtinClick()
}, 100);

setTimeout(() => {
  clearInterval(firstInterval);
}, 2000);

setInterval(() => {
  skipBtinClick()
}, 3000);
