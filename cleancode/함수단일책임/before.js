async function handle질문제출(){
    const 약관동의 = await 약관동의_받아오기();
    if(!약관동의){
        await 약관동의_팝업열기();
    }
    await 질문전송(questionValue);
    alert("질문이 등록되었어요")
}

//handle질문제출 이름이 옳을까?
// 그렇지않다. 최종은 질문제출이 맞지만 약관체크 내용도 들어있다.

//여기서 기능추가가되면 함수가 더 뚱뚱해지고 handle질문제출이라는 이름에 질문제출을 제외한 2가지일을 더하게된다.