// não aceita repetição/não indexada
const times = new Set()
times.add('Kabum')
times.add('Pain').add('INTZ').add('Keyd')
times.add('Flamengo')
times.add('Kabum')

console.log(times)
console.log(times.size)
console.log(times.has('kabum'))
console.log(times.has('Kabum'))
times.delete(('Flamengo'))
console.log(times.has('Flamengo'))

const nicks = ['BrTT', 'Shrimp', 'Robo', 'Patrick', 'Brtt']
const nicksSet = new Set(nicks)
console.log(nicksSet)
