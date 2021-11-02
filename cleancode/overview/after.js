import {useState,useEffect} from 'react';

const useFetch = async () =>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const 연결전문가 = await 연결전문가_받아오기();
    return 연결전문가
    
}

function QuestionPage(){
    const 연결전문가 = useFetch(); // 처음 켰을때 실행

    async function handleNewExpertQuestionSubmit(){
        await 질문전송(questionValue);
        alert("질문이 들어왔어요");
    }

    async function handleMyExpertQuestionSubmit(){
        await 연결전문가_질문전송(questionValue, 연결전문가.id);
        alert(`${연결전문가.name}에게 질문이 등록되었어요.`)
    }
    
    return (
        <main>
            <form>
                <textarea palceholder="어떤 내용이 궁금한가요"/>
                {연결전문가.connected ? (
                    <PopupTriggerButton popup={(<연결전문가팝업 onSubmit={handleMyExpertQuestionSubmit}></연결전문가팝업>)}>
                        질문하기
                    </PopupTriggerButton> // 팝업이 열릴지 handleQuestion을 봤어야했는데 이제는 이 줄에서 모든것을 확인가능하다
                ):
                <button onClick={async()=>{
                    await openPopupToNotAgreedUser();
                    await handleNewExpertQuestionSubmit();
                }}>

                </button>
                }
            </form>
        </main>
    )
}

async function openPopupToNotAgreedUser(){
    const 약관동의 = await 약관동의_받아오기();
    if(!약관동의){
        await 약관동의_팝업열기();
    }
}