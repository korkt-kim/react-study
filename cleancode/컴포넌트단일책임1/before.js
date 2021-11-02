<button onClick={()=>{
    log('제출버튼 클릭');
    await openConfirm();
}}/>

//버튼 클릭 함수에 로그찍는 함수와 API 콜이 섞여있다.