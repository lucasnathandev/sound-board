const sounds = document.querySelectorAll("audio")

function createBtn() {
  const btn = document.createElement("button")
  btn.classList.add("btn")
  return btn
}

function stopAllSounds() {
  sounds.forEach((sound) => {
    sound.pause()
    sound.currentTime = 0
  })
}

function playSound(element) {
  stopAllSounds()
  element.play()
}

function main() {
  sounds.forEach((sound) => {
    const btn = createBtn()
    btn.textContent = sound.id

    btn.addEventListener("pointerup", () => {
      playSound(sound)
    })

    const buttonsContainer = document.getElementById("buttons")
    buttonsContainer.appendChild(btn)
  })
}

main()
