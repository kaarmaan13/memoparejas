import { useEffect, useState } from 'react'

const IMAGES = [
  'https://icongr.am/devicon/angularjs-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/babel-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/bower-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/chrome-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/typescript-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/ie10-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/python-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/docker-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/c-original.svg?size=128&color=currentColor'
]
  .flatMap(image => [`a$${image}`, `b$${image}`])
  .sort(() => Math.random() - 0.5)

export default function App () {
  const [guessed, setGuessed] = useState<string[]>([])
  const [selected, setSelected] = useState<string[]>([])

  useEffect(() => {
    if (selected.length === 2) {
      if (selected[0].split('$')[1] === selected[1].split('$')[1]) {
        setGuessed(guessed => guessed.concat(selected))
      }

      setTimeout(() => {
        setSelected([])
      }, 1000)
    }
  }, [selected])

  useEffect(() => {
    if (guessed.length === IMAGES.length) {
      alert('You win!')
      location.reload()
    }
  }, [guessed])

  return (
    <main>
      <ul className='grid'>
        {IMAGES.map((image) => {
          const [, url] = image.split('$')
          return (
            <li
              onClick={() => selected.length < 2 && setSelected(selected => selected.concat(image))}
              key={image}
              className='card'
            >
              {selected.includes(image) || guessed.includes(image)
                ? (
                  <img alt='icon' src={url} />
                  )
                : (
                  <img
                    alt='icon'
                    src='https://icongr.am/entypo/cw.svg?size=128&color=currentColor'
                  />
                  )}

            </li>
          )
        })}
      </ul>
    </main>
  )
}
