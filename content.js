// 모든 요소에 이벤트 리스너 추가
document.querySelectorAll("*").forEach((element) => {
  element.addEventListener("mouseover", function () {
    this.style.outline = "2px solid blue"; // 마우스 오버 시 강조
  });

  element.addEventListener("mouseout", function () {
    this.style.outline = ""; // 마우스 아웃 시 강조 제거
  });

  element.addEventListener("click", function (event) {
    event.stopPropagation(); // 이벤트 버블링 방지
    var text = this.innerText; // 클릭한 요소의 텍스트 추출
    localStorage.setItem("savedText", text); // localStorage에 저장
    console.log("Saved text:", text);
  });
});
