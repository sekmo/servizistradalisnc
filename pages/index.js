/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Flickity from 'react-flickity-component'
import 'flickity/dist/flickity.min.css';

const flickityOptions = {
    initialIndex: 0,
    prevNextButtons: false,
    pageDots: false,
    wrapAround: true,
    autoPlay: 4000
}

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Azienda', href: '#azienda', current: false },
  { name: 'Servizi', href: '#servizi', current: false },
  { name: 'Parco Mezzi', href: '#parco-mezzi', current: false },
  { name: 'Realizzazioni', href: '#realizzazioni', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

const parco_mezzi_gallery = [
  { name: "Fiat Kobelco 165E", src: "parco-mezzi/1.jpg", description: "" },
  { name: "Eurocomac 65", src: "parco-mezzi/2.jpg", description: "" },
  { name: "Hitachi 17", src: "parco-mezzi/3.jpg", description: "" },
  { name: "Fiat Hitachi FD20", src: "parco-mezzi/4.jpg", description: "" },
  { name: "Fiat Allis 14C", src: "parco-mezzi/5.jpg", description: "" },
  { name: "Iveco Euro Trakker 44/440 4 assi", src: "parco-mezzi/6.jpg", description: "" },
  { name: "Sequani Z 20 E", src: "parco-mezzi/7.jpg", description: "" }
]

const servizi = [
  { name: "Manutenzione stradale", src: "parco-mezzi/1.jpg", description: "" },
  { name: "Movimento terra", src: "parco-mezzi/2.jpg", description: "" },
  { name: "Sistemazione verde pubblico", src: "parco-mezzi/3.jpg", description: "" },
  { name: "Lavori edili e stradali c/o terzi", src: "parco-mezzi/4.jpg", description: "" },
  { name: "Giardinaggio e recinzioni", src: "parco-mezzi/5.jpg", description: "" },
  { name: "Agricoltura", src: "parco-mezzi/6.jpg", description: "" }
]

const realizzazioni = [
  { name: "Demolizioni", src: "realizzazioni/1.jpg", description: "" },
  { name: "Manutenzioni stradali", src: "realizzazioni/2.jpg", description: "" },
  { name: "Pulizia alvei fluviali", src: "realizzazioni/3.jpg", description: "" },
  { name: "Pulizia attraversamenti", src: "realizzazioni/4.jpg", description: "" },
  { name: "Pulizia sotto i ponti con cestello in negativo", src: "realizzazioni/5.jpg", description: "" },
  { name: "Realizzazione di attraversamenti stradali", src: "realizzazioni/6.jpg", description: "" },
  { name: "Realizzazione di cordoli e zanelle stradali", src: "realizzazioni/7.jpg", description: "" },
  { name: "Realizzazione di drenaggi", src: "realizzazioni/8.jpg", description: "" },
  { name: "Realizzazione di fognature", src: "realizzazioni/9.jpg", description: "" },
  { name: "Realizzazione di gabbionate", src: "realizzazioni/10.jpg", description: "" },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="min-h-screen bg-white">
      <Disclosure as="nav" className="bg-emerald-800 border-b border-lime-300">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center">
                    {/* <Image src="/logo_con_scritta.svg" alt="Servizi Stradali SNC" width={72} height={16} /> */}
                    <img
                      className="block h-8 sm:h-9 w-auto mb-3"
                      src="/logo_con_scritta.svg"
                      alt="Servizi Stradali SNC"
                    />
                  </div>
                  <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'border-lime-300 text-white'
                            : 'border-transparent text-gray-300 hover:border-gray-300 hover:text-gray-400',
                          'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="-mr-2 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="pt-2 pb-3 space-y-1 bg-white">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                        : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800',
                      'block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Flickity
        className={'carousel'} // default ''
        elementType={'div'} // default 'div'
        options={flickityOptions}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
      >
        <div class="slide bg-black"><img src="/slider-home/1.jpg" class="object-cover min-w-full min-h-full h-full" /></div>
        <div class="slide bg-black"><img src="/slider-home/2.jpg" class="object-cover min-w-full min-h-full h-full" /></div>
        <div class="slide bg-black"><img src="/slider-home/3.jpg" class="object-cover min-w-full min-h-full h-full" /></div>
        <div class="slide bg-black"><img src="/slider-home/4.jpg" class="object-cover min-w-full min-h-full h-full" /></div>
        <div class="slide bg-black"><img src="/slider-home/5.jpg" class="object-cover min-w-full min-h-full h-full" /></div>
        <div class="slide bg-black"><img src="/slider-home/neve.jpg" class="object-cover min-w-full min-h-full h-full" /></div>
      </Flickity>

      <div className="my-4">
        <main>
          <section id="azienda" className="px-4 py-8 max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="text-lg max-w-prose mx-auto">
              <h1 className="block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Chi siamo
              </h1>
              <p className="mt-8 text-xl text-gray-500 leading-8">L'azienda Servizi Stradali SNC nasce nel 2005 per venire incontro a qualsiasi esigenza di regolamentazione del traffico tramite i movieri, persone formate ed informate che, a differenza dei semafori, lavorano a vista e di conseguenza ottimizzano la gestione del traffico a seconda delle fasce orarie giornaliere.</p>
              <p className="mt-8 text-xl text-gray-500 leading-8">Operiamo nelle Marche, Abruzzo, Umbria e in Emilia-Romagna in tutte le strade comunali, provinciali, regionali e statali cercando di soddisfare al meglio le esigenze dei nostri clienti tipici, i terzisti per le imprese stradali.</p>
              <p className="mt-8 text-xl text-gray-500 leading-8">Ciò non toglie che possiamo lavorare anche per gli Enti pubblici che organizzano grandi Eventi e hanno la necessità di chiudere un tratto stradale momentaneamente, per renderlo pedonale o a senso unico. </p>
            </div>
          </section>

          <section id="servizi" className="px-4 py-8 max-w-7xl mx-auto sm:px-6 lg:px-8">
            <h1>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Servizi
              </span>
            </h1>
            <ul role="list" className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6">
              {servizi.map((picture) => (
                <li key={picture.source} className="relative">
                  <div className="aspect-[8/5] bg-gray-200 rounded-md overflow-hidden">
                        <img
                          src={picture.src}
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                  <p className="mt-2 block text-base font-medium text-gray-900 pointer-events-none">{picture.name}</p>
                </li>
              ))}
            </ul>
          </section>

          <section id="parco-mezzi" className="px-4 py-8 max-w-7xl mx-auto sm:px-6 lg:px-8 text-lg">
            <h1>
              <span className="block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Parco Mezzi
              </span>
            </h1>
            <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4"> 
              {parco_mezzi_gallery.map((picture) => (
                <div key={picture.id} className="group relative">
                  <div className="aspect-[3/5] bg-gray-200 rounded-md overflow-hidden">
                    <img
                      src={picture.src}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <p className="mt-2 block text-sm font-medium text-gray-900 pointer-events-none">{picture.name}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="px-4 py-8 max-w-7xl mx-auto sm:px-6 lg:px-8 text-lg" id="realizzazioni">
                <h1>
                  <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    Realizzazioni
                  </span>
                </h1>
                <div className="mt-10 grid gap-y-10 gap-x-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"> 
                  {realizzazioni.map((picture) => (
                    <div key={picture.id} className="group relative">
                      <div className="aspect-[4/3] rounded-md overflow-hidden">
                        <img
                          src={picture.src}
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <p className="mt-2 block text-base font-medium text-gray-900 pointer-events-none">{picture.name}</p>
                    </div>
                  ))}
                </div>
              </section>
        </main>
      </div>
    </div>
  )
}
