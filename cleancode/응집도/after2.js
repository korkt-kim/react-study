import {useState,useEffect} from 'react';

const usePopup = ($target) =>{
    const openPopup = (title,contents) =>{
        $target.innerHTML += (<Popup title={title}>
            <div>{contents}</div>
            <button onClick={handlePopupSubmit}></button>    
        </Popup>)
    }
    return openPopup
}

function Question(){
    const openPopup = usePopup();
    async function handleClick(){
        const confirmed = await openPopup({
            title: "보험질문하기",
            contents:<div>전문가가 설명드려요</div>
        })
        if(confirmed){
            await submitQuestion();
        }
    }

    async function submitQuestion(){
        await 질문전송(연결전문가.id);
        alert("질문을 전송했습니다")
    }

    return (
        <div>
            <button onClick={handleClick}>질문하기</button>
        </div>
    )
}

// 핵심내용은 popup제목, popup내용, popup액션이다. 
// 세부내용은 popup을 열고 닫을때 사용하는 상태와 컴포넌트의 세부마크업, 팝업 버튼클릭시 특정함수를 호출해야한다는 바인딩 
//