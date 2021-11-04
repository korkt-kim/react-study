import {useState,useEffect,useRef} from 'react';

function Test(){
    return (
        <IntersecionArea onImpression={()=>fetchCats(nextPage)}>
            <div >더 보기</div>
        </IntersecionArea>
    )
}

//Impression 옵저버 세부 구현은 감싼 컴포넌트에 숨겨두고, 사용하는 입장에서는 Impression시 api콜만 신경쓴다.