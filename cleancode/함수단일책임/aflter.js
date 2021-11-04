async function handle약관동의(){
    const 약관동의 = await 약관동의_받아오기();
    if(!약관동의){
        await 약관동의_팝업열기();
    }
}

async function handle질문제출(){
    await 질문전송(questionValue);
    alert("질문이 등록되었어요")
}

//두개만 가지고 나중에 필요한 상황에 따로따로 호출하면된다.