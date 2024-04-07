const infos = []
const jobInfoIds = [
  'exp-info',
  'edu-info',
  'activity-info',
  'hobby-info',
  'lang-info',
  'skill-info',
]

// DOM
const btnOpens = document.querySelectorAll('.btn-info')
const jobInfoItems = document.querySelectorAll('.job-item')
for (let i = 0; i < jobInfoItems.length; i++) {
  const item = jobInfoItems[i]
  item.addEventListener('mouseover', () => {
    btnOpens[i].classList.remove('d-none')
  })
  item.addEventListener('mouseout', () => {
    btnOpens[i].classList.add('d-none')
  })
}
for (let i of jobInfoIds) {
  infos.push(document.getElementById(i))
}

// add event
for (let i = 0; i < btnOpens.length; i++) {
  btnOpens[i].addEventListener('click', () => {
    if (btnOpens[i].innerText === 'View More') {
      btnOpens[i].innerText = 'View Less'
      infos[i].classList.remove('d-none')
    } else {
      btnOpens[i].innerText = 'View More'
      infos[i].classList.add('d-none')
    }
  })
}
