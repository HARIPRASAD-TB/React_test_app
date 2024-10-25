import React from 'react'
import Style from './Palindrome.module.scss'

function Palindrome() {
  function findIsPalindrome(){
    let content = document.getElementById("palindromeContent").value;
    let result = "Given content is palindrome ."

    // With methods

    let reverse = content.split('').reverse().join('');
    console.log(content,"reverse",reverse)
    if(content !== reverse){
      result = "Given content is not palindrome ."
    }

    // With out methods

    // for(let i=0; i < content.length; i++){
    //   if(content[i] != content[content.length - (i+1)]){
    //       console.log(content[i] , content[content.length - (i-1)])
    //      result = "Given content is not palindrome ."
    //   } 
    // }
    alert(result);
  }
  return (
    <div className={Style.headding}>
      <h1>palindrome</h1>
      <input type='text' id='palindromeContent'/>
      <button type='button' onClick={findIsPalindrome}>Palindrome Or Not</button>
    </div>
  )
}

export default Palindrome