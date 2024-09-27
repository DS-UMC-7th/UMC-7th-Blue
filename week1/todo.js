const input = document.querySelector("input");

// 1. input창에서 할 일 넣고 enter 치면 해야 할 일에 추가

input.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {

    // html 태그 만들기
    const newDiv = document.createElement("div");
    const newTodo = document.createElement("li");
    const doneBtn = document.createElement("button");
    doneBtn.innerHTML = "완료";
    doneBtn.className = "doneBtn";
    newDiv.className = "newDiv";

    newTodo.innerHTML = input.value;

    // 버튼 추가
    newTodo.appendChild(doneBtn);

    newDiv.appendChild(newTodo);

    // ul에 li>button 묶음 추가
    document.querySelector(".todoUl").append(newDiv);

    // input 창 초기화
    input.value = null;

    // 2. 완료 버튼 누르면 해낸 일로 이동
    doneBtn.addEventListener("click", () => {
      const doneUl = document.querySelector(".doneUl");
      doneUl.appendChild(newDiv);

      doneBtn.innerHTML = "삭제";

      // 3. 삭제 버튼 누르면 삭제
      doneBtn.addEventListener("click", () => {
        newDiv.remove();
      })
    })
  }
})