        const form = document.querySelector(".actions");
        const gridItems = document.querySelectorAll(".grid-item");
        console.log(gridItems)
		const changeButton = document.getElementById("change_button");
		const reset = document.getElementById("reset_button");


form.addEventListener("submit", changeColor);

function changeColor(e){
    e.preventDefault(); 
    const selectedBox = e.target[0].value;
    const color = e.target[1].value;
	console.log(selectedBox, color, "event dta")


    const targetBox = document.getElementById(selectedBox);
    targetBox.style.backgroundColor = color;
}

    reset.addEventListener("click", ()=>{
        for(let i of gridItems){
            // console.log(i);
            i.style.backgroundColor = "transparent";
        }
    })