import {useState,useEffect} from 'react';

function QuestionPage(){
    const [popupOpend, setPopupOpend] = useState(false);
    async function handleQuestionSubmit(){
        const 연결전문가 = await 연결전문가_받아오기();
        if(연결전문가 !== null){
            setPopupOpend(true);
        }else{
            const 약관동의 = await 약관동의_받아오기();
            if(!약관동의){
                await 약관동의_팝업열기();
            }
            await 질문전송(questionValue);
            alert("질문이 들어왔어요");
        }
    }
    async function handleExpertQuestionSubmit(){
        await 연결전문가_질문전송(questionValue, 연결전문가.id);
        alert(`${연결전문가.name}에게 질문이 등록되었어요.`)
    }
    
    return (
        <main>
            <form>
                <textarea palceholder="어떤 내용이 궁금한가요"/>
                <button onClick={handleQuestionSubmit}>질문하기</button>
            </form>
            {popupOpend &&(
                <연결전문가팝업 onSubmit={handleMyExpertQuestionSubmi}/>
            )}
        </main>
    )
}

/*
문제점
1. 응집도 : 하나의 목적의 코드는 흩뿌려져서는 안된다 . popupOpened를 관리하는 함수 실제 열리는곳이 3군데로 흩뿌려져잇다
2. 단일책임 : 함수는 하나의 일을 해야한다.
3. 추상화 : 함수의 구현 레벨이 같아야한다.
*/