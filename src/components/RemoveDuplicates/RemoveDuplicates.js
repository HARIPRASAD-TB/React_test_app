import React from 'react'

function RemoveDuplicates() {
    function removeDuplicates(){
        let textContent = document.getElementById("arrayData").value;
        let arrayData = textContent.split(",").map(item => item.trim());

        // // Using array methods 
        // let processedArray = new Set(arrayData);
        // // document.getElementById("root").innerText = processedArray.toString();
        // console.log(processedArray.toString(),"ss")
    }  
    return (
        <div>
            <h1>Remove duplicates from an array</h1>
            <label for="arrayData">Enter data with comma sepration :</label>
            <textarea id="arrayData"></textarea>
            <button type='button' onClick={removeDuplicates}>Remove duplicates</button>
            <div id="root"></div>
        </div>
    )
}

export default RemoveDuplicates