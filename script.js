const homepage = document.querySelector('.homepage')
const scoreboard = document.querySelector('.scoreboard')
const gameboard = document.querySelector('.gameboard')

const addPlayerBtn = document.querySelector('#addPlayerBtn')
const addPlayerInput = document.querySelector('#addPlayerInput')
const playersList = document.querySelector('#playersList')

const startGameBtn = document.querySelector('#startGameBtn')

let players = []

//add players
addPlayerBtn.addEventListener('click', ()=>{

  if (players.length > 3) {
    alert('Max 4 players') 
} else if(!addPlayerInput.value){
    alert('Must enter name')
} else if(addPlayerInput.value.length > 8){
  alert('Max 8 characters name')
} else {
  players.push(addPlayerInput.value)
  let newPlayerDiv = document.createElement('h4')
  newPlayerDiv.innerHTML = `${addPlayerInput.value}`
  newPlayerDiv.id = `${addPlayerInput.value}`
  let removePlayer = document.createElement('span')
  removePlayer.classList.add('remove-player')
  removePlayer.innerHTML = '&nbsp❌'
  removePlayer.addEventListener('click', (e)=>{
    players.splice(players.indexOf(newPlayerDiv.id), 1)
    e.target.parentElement.remove()
    console.log(players)
  })
  newPlayerDiv.append(removePlayer)
  playersList.append(newPlayerDiv)
  addPlayerInput.value = ''
  console.log(players);
  addPlayerInput.focus()
}
})

//start game
startGameBtn.addEventListener('click', ()=>{
  if(players.length < 2) {
    alert('Must add 2 players')
  } else {
    console.log('START!!!!!!!!!!!');
    homepage.style.display = 'none'
    document.body.style.backgroundImage = 'none'
    scoreboard.style.display = 'block'
    gameboard.style.display = 'flex'
  }
})




//game
const allfields = document.querySelectorAll('.dartsfield')

for (let i = 0; i < allfields.length; i++) {
    allfields[i].addEventListener('click', (e) => {
      console.log(e.target.id);
    })
  
}