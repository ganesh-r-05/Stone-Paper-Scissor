let userScore = 0
let compScore = 0

let userWin = true

let blocks = document.querySelectorAll(".select")

let yScore = document.querySelector("#your-score")
let cScore = document.querySelector("#comp-score")

let showMsg = document.querySelector(".text")

const updateScore = () =>{
    if(userWin){
        userScore++
        yScore.innerText = userScore
    }
    else{
        compScore++
        cScore.innerText = compScore
    }
}

const getCompChoice = () =>{
    let num = Math.floor(Math.random() * 3)
    let compChoice = blocks[num]
    // console.log(compChoice)
    return compChoice.getAttribute("id")
}

const matchDraw = () =>{
    console.log("match draw")
    showMsg.innerText = `Match Draw`
    showMsg.style.background = "#56384E"
}

const showWinner = (userChoice, compChoice) =>{
    if(userWin === true){
        console.log("You Win")
        showMsg.innerText = `You Win ${userChoice} beats ${compChoice}`
        showMsg.style.background = "#286736"
    }
    else{
        console.log("Comp Win")
        showMsg.innerText = `Comp Win ${compChoice} beats ${userChoice}`
        showMsg.style.background = "#9C1C28"
    }
    updateScore(userWin)
}

blocks.forEach((block) =>{
    block.addEventListener("click", ()=>{
        let userChoice = block.getAttribute("id")
        console.log("Block was clicked", userChoice)
        let compChoice = getCompChoice()
        console.log(compChoice)

        if(userChoice===compChoice){
            matchDraw()
            return
        }
        else{
            if(userChoice === "rock"){
                userWin = compChoice==="paper" ? false : true
            }
            else if(userChoice === "paper"){
                userWin = compChoice==="scissors" ? false : true
            }
            else{
                userWin = compChoice==="rock" ? false : true
            }
        }

        showWinner(userChoice, compChoice)
    })
})