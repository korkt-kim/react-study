import {useState} from 'react';

const useTabs = (initialTab,allTabs)=>{
  const [currentIndex,setCurrentIndex] = useState(initialTab);
  if(!allTabs || !Array.isArray(allTabs)){ return; }
  const changeItem=(index)=>{
    setCurrentIndex(index);
  }
  return {currentItem: allTabs[currentIndex].content,changeItem}
}

const contents = [
  {
    tab:'section1',
    content:'asdf'
  },
  {
    tab:`section2`,
    content:'zxcv'
  }
]

function App() {
  const {currentItem,changeItem} = useTabs(0,contents)
  return (
    <div>
      {contents.map((content,index)=><button key={index} onClick={()=>changeItem(index)} >{content.tab}</button>)}
      <p>{currentItem}</p>
   </div>
  )
}
export default App;
