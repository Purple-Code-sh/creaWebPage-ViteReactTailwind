// General components
import { useEffect } from 'react'
import snowMan from '../../assets/snowMan.png'
import creaLogo from '../../assets/creaLogo.jpeg'
import { Link } from 'react-router-dom'

function Xmas () {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <div className=' p-0 m-0 pt-14'>
      <div>
        <section className='w-screen'>
          <main className=' w-full lg:flex'>
            <section className=' flex flex-col lg:flex-col lg:pr-14 w-full lg:w-1/2'>
              <div className=' flex-1 cursor-default content-center'>
                <p className=' max-w-prose font-bold text-base lg:text-lg mx-auto px-12 pt-6 '>
                  Xmas es el evento anual donde se une la{' '}
                  <strong>robótica de competencia</strong> y el{' '}
                  <strong>networking</strong> entre entusiastas de la tecnologia,
                  estudiantes y empresas.
                </p>
                <p className=' max-w-prose text-base lg:text-lg mx-auto px-12 pt-9 '>
                  Es organizado por el Club de Robótica de ESIME Azcapotzalco, por
                  lo que se lleva acabo en las instalaciones de la universidad.
                </p>
                <h3 className=' text-lg lg:text-xl text-center mt-10 text-primary font-bold'>
                  4 y 5 de Diciembre ¡No faltes!
                </h3>
                <div className='mx-auto mt-8 w-fit flex-none'>
                  <Link to='https://docs.google.com/forms/d/e/1FAIpQLSeibZ72C2mAxaysksWpbAc2JV6nWeZOvuzDmYRPu1lkU7ZGPQ/viewform' className=' text-base lg:text-lg font-medium rounded-xl py-3 px-6 text-black  bg-primary hover:bg-gradient-to-b from-primary/60 to-accent_dark/70 active:bg-secondary transition-all duration-300 '>
                    Inscribete
                  </Link>
                </div>
              </div>
            </section>
            <section className='w-full lg:w-1/2'>
              <div className=' mt-6 pl-6 pr-2 flex items-center mx-auto w-full'>
                <img src={snowMan} alt='' className=' w-1/2 p-3' />
                <img src={creaLogo} alt='' className=' w-1/2' />
              </div>
            </section>
          </main>

          <div className=' lg:mt-12 bg-bg_purple_light py-14 cursor-default'>
            <p className=' font-bold max-w-prose text-base lg:text-lg mx-auto px-8'>
              Las categorías en las que se realizarán las competencias son las
              siguientes:
              <ul className=' font-normal pt-6 text-txt_white_purple'>
                <li>Minisumo autónomo profesional</li>
                <li>Minisumo autónomo amateur</li>
                <li>Minisumo RC profesional</li>
                <li>Minisumo RC amateur</li>
                <li>Microsumo</li>
                <li>Seguidor de línea profesional</li>
                <li>Seguidor de línea amateur</li>
                <li>Guerra 1 lb</li>
                <li>Guerra 3 lb</li>
                <li>Guerra 12 lb</li>
                <li>Robosoccer</li>
              </ul>
            </p>
            <p className=' max-w-prose text-sm mx-auto px-8 pt-7'>
              Puedes consultar los premios para cada categoría dando click {' '}
              <a
                href='https://www.facebook.com/cc.roboticaazc'
                className='text-primary font-bold underline underline-offset-2 hover:text-secondary active:text-accent '
              >
                aquí
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Xmas
