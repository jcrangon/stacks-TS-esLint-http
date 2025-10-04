import { sum } from '@/lib/utils/math.js' // toujours mettre l'extention .js car nous n'utilisons pas de bundler.

const app: HTMLElement = document.getElementById('app')!
const btn: HTMLButtonElement = document.createElement('button')
btn.textContent = 'Clique-moi'
btn.addEventListener('click', () => {
  const p: HTMLParagraphElement = document.createElement('p')
  p.textContent = `2 + 3 = ${sum(2, 3)}`
  app.appendChild(p)
})
app.appendChild(btn)
console.log('App started...')