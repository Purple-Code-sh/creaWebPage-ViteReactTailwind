import { useEffect } from 'react'
import snowMan from '../../assets/snowMan.png'
import creaLogo from '../../assets/creaLogo_alt.png'
import { Link } from 'react-router-dom'
import PartnersLogos from '../../components/PartnersLogos'

function Xmas () {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const categoriesArray = [
    { name: 'Minisumo autónomo profesional', link: 'https://docs.google.com/document/d/1k5rlef1_2SyRy3tnRFDPJI_7D0vdKj6_lh6LedBeh5c/edit#heading=h.lrxxfbed5gkl' },
    { name: 'Minisumo RC profesional', link: 'https://docs.google.com/document/d/1k5rlef1_2SyRy3tnRFDPJI_7D0vdKj6_lh6LedBeh5c/edit#heading=h.lrxxfbed5gkl' },
    { name: 'Minisumo autónomo amateur', link: 'https://docs.google.com/document/d/1k5rlef1_2SyRy3tnRFDPJI_7D0vdKj6_lh6LedBeh5c/edit#heading=h.lrxxfbed5gkl' },
    { name: 'Minisumo RC amateur', link: 'https://docs.google.com/document/d/1k5rlef1_2SyRy3tnRFDPJI_7D0vdKj6_lh6LedBeh5c/edit#heading=h.lrxxfbed5gkl' },
    { name: 'Microsumo', link: 'https://docs.google.com/document/d/1Zd5_bKdkOZDldijVbBp4a5fnF_jPxZENVx-3VbZYtbQ/edit#heading=h.lrxxfbed5gkl' },
    { name: 'Midisumo', link: 'https://docs.google.com/document/d/1cIoabS2r8yPsKuxU3GErV-bnoNiSVQJP2PMdBAeiTRM/edit?usp=sharing' },
    { name: 'Seguidor de línea profesional', link: 'https://docs.google.com/document/d/1Rf05I65rkRRZ-yZVycBUTn5rYrbeFq3orRDf3bm4B-w/edit#heading=h.32gsyl5eo0v1' },
    { name: 'Seguidor de línea amateur', link: 'https://docs.google.com/document/d/1Rf05I65rkRRZ-yZVycBUTn5rYrbeFq3orRDf3bm4B-w/edit#heading=h.32gsyl5eo0v1' },
    { name: 'Guerra 1 lb', link: 'https://docs.google.com/document/d/17QN0frI29Gl5NHOOpmWr1Euv9XmDuQrkkwxR0Wv0xMI/edit#heading=h.mh48o2h9ps9f' },
    { name: 'Guerra 3 lb', link: 'https://docs.google.com/document/d/17QN0frI29Gl5NHOOpmWr1Euv9XmDuQrkkwxR0Wv0xMI/edit#heading=h.mh48o2h9ps9f' },
    { name: 'Guerra 12 lb', link: 'https://docs.google.com/document/d/17QN0frI29Gl5NHOOpmWr1Euv9XmDuQrkkwxR0Wv0xMI/edit#heading=h.mh48o2h9ps9f' },
    { name: 'Robosoccer', link: 'https://docs.google.com/document/d/1An3iLLKc9C9CeJBwyR-7pms6LVJqUl4SOI4Y18ReCD8/edit' }
  ]

  return (
    <div className='p-0 m-0 pt-14'>
      <div>
        <section className='w-screen'>
          <main className='w-full lg:flex bg-gradient-to-b from-black to-bg_accent_dark/60'>
            <section className='flex flex-col lg:flex-col lg:pr-14 w-full lg:w-1/2'>
              <div className='flex-1 cursor-default content-center'>
                <p className='max-w-prose font-bold text-base lg:text-lg mx-auto px-12 pt-6'>
                  Xmas es el evento anual donde se une la{' '}
                  <strong>robótica de competencia</strong> y el{' '}
                  <strong>networking</strong> entre entusiastas de la tecnología,
                  estudiantes y empresas.
                </p>
                <p className='max-w-prose text-base lg:text-lg mx-auto px-12 pt-9'>
                  Es organizado por el Club de Robótica de ESIME Azcapotzalco, por lo
                  que se lleva acabo en las instalaciones de la universidad.
                </p>
                <h3 className='text-lg lg:text-xl text-center mt-10 text-primary font-bold'>
                  4 y 5 de Diciembre ¡No faltes!
                </h3>
                <div className='mx-auto mt-8 w-fit flex-none text-base lg:text-lg font-medium rounded-xl py-3 px-6 text-black bg-primary hover:bg-secondary/85 hover:scale-105'>
                  <Link
                    to='https://docs.google.com/forms/d/e/1FAIpQLSdPmPZQSUtVt3pN-Dk3IOiIFgLFZ8DT6pNls18MvjHuOVF6lQ/viewform?usp=sf_link'
                    className='active:text-white hover:font-semibold cursor-pointer'
                  >
                    Inscríbete
                  </Link>
                </div>
              </div>
            </section>
            <section className='w-full lg:w-1/2'>
              <div className='mt-6 pl-6 pr-2 flex items-center mx-auto w-full'>
                <img src={snowMan} alt='' className='w-1/2 p-3' />
                <img src={creaLogo} alt='' className='w-1/3' />
              </div>
            </section>
          </main>

          <div className='lg:pt-12 cursor-default bg-gradient-to-b from-bg_accent_dark/60 to-black'>
            <p className='font-bold max-w-prose text-base lg:text-lg mx-auto px-8'>
              Las categorías en las que se realizarán las competencias son las siguientes:
              <ul className='font-normal pt-6 text-txt_white_purple'>
                {categoriesArray.map((item, key) => {
                  return (
                    <li key={key} className=' hover:text-primary active:text-secondary'>
                      <Link to={`${item.link}`}>
                        {item.name}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </p>
            <p className='max-w-prose text-sm mx-auto px-8 pt-7'>
              Puedes consultar los premios para cada categoría dando click{' '}
              <a
                href='https://www.facebook.com/cc.roboticaazc'
                className='text-primary font-bold underline underline-offset-2 hover:text-secondary active:text-accent'
              >
                aquí
              </a>
            </p>
          </div>
        </section>
      </div>

      <div className='w-screen flex justify-center my-10'>
        {/* Mapa agregado aquí */}
        <div className=' w-3/4'>
          <h2 className='mx-auto text-center font-bold text-sm sm:text-base md:text-xl lg:text-2xl tracking-wide mb-6 text-primary '>Ubicación del evento</h2>
          <div className='flex justify-center items-center'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3124.5674036437363!2d-99.17596312568189!3d19.48853388180289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f865e1f932f1%3A0xfd53f914ccbd67b4!2sAv.%20de%20las%20Granjas%2C%20El%20Jaguey%2C%20Azcapotzalco%2C%2002519%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e1!3m2!1ses-419!2smx!4v1732412787388!5m2!1ses-419!2smx'
              width='100%'
              height='500'
              style={{ border: 0 }}
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            />
          </div>
        </div>
      </div>
      <div className='w-screen mt-0 p-8 sm:px-16 md:px-20 lg:px-24 xl:px-32'>
        <PartnersLogos />
      </div>
    </div>
  )
}

export default Xmas
