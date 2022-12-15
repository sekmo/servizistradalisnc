import Navigation from '../components/Navigation'
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
const navigation_items = [
  { name: 'Home', href: '#', current: true },
  { name: 'Azienda', href: '#azienda', current: false },
  { name: 'Servizi', href: '#servizi', current: false },
  { name: 'Parco Mezzi', href: '#parco-mezzi', current: false },
  { name: 'Realizzazioni', href: '#realizzazioni', current: false },
  { name: 'Contatti', href: '#contatti', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

const parco_mezzi_gallery = [
  { name: "Autocarro 330", src: "autocarro-330.jpg", description: "Autocarro 330" },
  { name: "Cestello PLE PTJ265S", src: "cestello-ple-ptj265s.jpg", description: "Cestello PLE PTJ265S" },
  { name: "Terna Benati", src: "terna-benati.jpg", description: "Terna Benati" },
  { name: "Bob Cat CK30 Komatsu", src: "bobcat-ck30-komatsu.jpg", description: "Bob Cat CK30 Komatsu" },
  { name: "Autocarro con gru DAF 440", src: "autocarro-con-gru-daf-440.jpg", description: "Autocarro con gru DAF 440" },
  { name: "CAT 315F", src: "cat-315f.jpg", description: "CAT 315F" },
  { name: "CAT 323 E", src: "cat-323e.jpg", description: "CAT 323 E" },
  { name: "CAT 308 E", src: "cat-308e.jpg", description: "CAT 308 E" },
  { name: "Cursor Iveco 440", src: "cursor-iveco-440.jpg", description: "Cursor Iveco 440" },
  { name: "Claas Arion 440", src: "claas-arion-440.jpg", description: "Claas Arion 440" },
  { name: "PC 16 R Komatsu", src: "pc-16r-komatsu.jpg", description: "PC 16 R Komatsu" },
  { name: "Komatsu PC 50", src: "komatsu-pc50.jpg", description: "Komatsu PC 50" },
  { name: "Iveco Trakker con gru", src: "iveco-trakker-con-gru.jpg", description: "Iveco Trakker con gru" },
  { name: "Eurocomac 65", src: "2.jpg", description: "Eurocomac 65" },
  { name: "Hitachi 17", src: "3.jpg", description: "Hitachi 17" },
  { name: "Sequani Z 20 E", src: "7.jpg", description: "Sequani Z 20 E" }
]

const servizi = [
  { name: "Manutenzioni stradali", src: "manutenzioni-stradali.jpg", description: "Manutenzioni stradali" },
  { name: "Movimento terra", src: "movimento-terra.jpg", description: "Movimento terra" },
  { name: "Sistemazione verde pubblico", src: "sistemazione-verde-pubblico.jpg", description: "Sistemazione verde pubblico" },
  { name: "Lavori edili e stradali c/o terzi", src: "lavori-edili-e-stradali.jpg", description: "Lavori edili e stradali c/o terzi" },
  { name: "Giardinaggio e recinzioni", src: "giardinaggio-e-recinzioni.jpg", description: "Giardinaggio e recinzioni" }
]

const realizzazioni = [
  { name: "Demolizioni", src: "demolizioni.jpg", description: "Demolizioni" },
  { name: "Manutenzioni stradali", src: "manutenzioni-stradali.jpg", description: "Manutenzioni stradali" },
  { name: "Pulizia alvei fluviali", src: "pulizia-alvei-fluviali.jpg", description: "Pulizia alvei fluviali" },
  { name: "Pulizia attraversamenti", src: "4.jpg", description: "Pulizia attraversamenti" },
  { name: "Pulizia sotto i ponti con cestello in negativo", src: "5.jpg", description: "Pulizia sotto i ponti con cestello in negativo" },
  { name: "Realizzazioni di attraversamenti stradali", src: "realizzazioni-di-attraversamenti-stradali.jpg", description: "Realizzazioni di attraversamenti stradali" },
  { name: "Realizzazione di cordoli e zanelle stradali", src: "7.jpg", description: "Realizzazione di cordoli e zanelle stradali" },
  { name: "Realizzazione di drenaggi", src: "8.jpg", description: "Realizzazione di drenaggi" },
  { name: "Realizzazione di fognature", src: "9.jpg", description: "Realizzazione di fognature" },
  { name: "Realizzazione di gabbionate", src: "10.jpg", description: "Realizzazione di gabbionate" },
]

export default function Example() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation navigation_items={navigation_items}></Navigation>

      <Flickity
        className={'carousel'} // default ''
        elementType={'div'} // default 'div'
        options={flickityOptions}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
      >
        <div className="slide bg-black"><img src="/slider-home/5.jpg" className="object-cover min-w-full min-h-full h-full" /></div>
        <div className="slide bg-black"><img src="/slider-home/4.jpg" className="object-cover min-w-full min-h-full h-full" /></div>
        <div className="slide bg-black"><img src="/slider-home/1.jpg" className="object-cover min-w-full min-h-full h-full" /></div>
        <div className="slide bg-black"><img src="/slider-home/2.jpg" className="object-cover min-w-full min-h-full h-full" /></div>
        <div className="slide bg-black"><img src="/slider-home/3.jpg" className="object-cover min-w-full min-h-full h-full" /></div>
        <div className="slide bg-black"><img src="/slider-home/neve.jpg" className="object-cover min-w-full min-h-full h-full" /></div>
      </Flickity>

      <div className="mt-4">
        <main>
          <section id="azienda" className="px-4 py-8 max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="text-lg max-w-prose mx-auto">
              <h1 className="block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Chi siamo
              </h1>
              <p className="mt-8 text-xl text-gray-500 leading-8">L'Azienda <strong>Servizi Stradali di Marinelli Valentina & C. SNC</strong> (in sigla <strong>Servizi Stradali SNC</strong>) è una Società in nome collettivo rappresentata dal Legale Rappresentante / Socia <strong>Marinelli Valentina</strong> e dal Socio / Direttore Tecnico <strong>Di Luca Alessandro</strong>.<br/>La Società ha sede legale in San Ginesio in Via Torre di Morro snc, è stata costituita il 10/01/2008 ed è iscritta presso la Camera di Commercio di Macerata dal 16/01/2008 al R.I. n. 01646020436 e Rea n. MC-169590.</p>
              <p className="mt-8 text-xl text-gray-500 leading-8">L'attività dell'Impresa è costituita da lavori di movimento terra c/terzi, scavi, sbancamenti, lavori stradali, lavori edili stradali, manutenzione del verde pubblico (taglio erba e potature), attività di sgombro neve e spargimento abrasivi, lavori di manutenzione strade e manutenzioni edili-stradali, attività edilizia privata e pubblica sia di costruzione che di restauro, costruzioni e pavimentazioni stradali, acquedotti, fognature, trivellazione e palificazione, impianti di irrigazione, drenaggi, lavorazioni in alta quota con o senza piattaforma, noleggio a freddo, trasporto e smaltimento rifiuti, bonifica canali, sistemazione ponti, installazione di barriere, demolizione edifici di ogni genere.</p>
              <p className="mt-8 text-xl text-gray-500 leading-8">La Servizi Stradali SNC ad oggi vanta di svolgere con esperienza ormai decennale lavori appartenenti alle <strong>Categorie OG1 e OG3</strong> che hanno permesso di acquisire le <strong>Certificazioni SOA con classifica II</strong> per entrambe le categorie.</p>
              <p className="mt-8 text-xl text-gray-500 leading-8">L'Impresa ha svolto e svolge tutt'ora lavori e servizi appartenenti alla <strong>Categoria OS24</strong>, e LAVORI appartenenti alle <strong>Categorie OS1 e OS23.</strong>. Tutte queste tipologie di lavorazioni sono state e sono tutt'oggi commissionate da Enti Pubblici, privati e aziende private. Dal 2021 l'azienda ha iniziato a svolgere <strong>lavori sisma e lavori con sismabonus 110% ed ecobonus</strong> sia direttamente come ditta Appaltatrice sia come ditta subappaltatrice.</p>
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
                  <div className="aspect-[4/3] bg-gray-200 rounded-md overflow-hidden">
                        <img
                          src={"servizi_small/" + picture.src}
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
                  <div className="aspect-[2/2] bg-gray-200 rounded-md overflow-hidden">
                    <img
                      src={"parco-mezzi_small/" + picture.src}
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
                      src={"realizzazioni_small/" + picture.src}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <p className="mt-2 block text-base font-medium text-gray-900 pointer-events-none">{picture.name}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="bg-gray-800 text-white">
            <div className="max-w-xl sm:max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:pt-24 lg:pb-10 lg:px-8">
              <section className="divide-y-2 divide-gray-200" id="contatti">
                <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                  <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                    Contatti
                  </span>


                  {/* <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Contatti</h2> */}
                  <div className="mx-auto max-w-sm mt-12 grid xs:grid-cols-2 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
                    <div className="text-center sm:text-left">
                      <h3 className="text-lg leading-6 font-medium">Alessandro</h3>
                      <dl className="mt-2 text-base text-gray-400">
                        <div className="mt-1">
                          <dt className="sr-only">Telefono</dt>
                          <dd><img class="w-24 m0 mx-auto sm:ml-0" src="contact/alessandro.jpg"/></dd>
                        </div>
                      </dl>
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-lg leading-6 font-medium">Valentina</h3>
                      <dl className="mt-2 text-base text-gray-400">
                        <div className="mt-1">
                          <dt className="sr-only">Telefono</dt>
                          <dd><img class="w-24 m0 mx-auto sm:ml-0" src="contact/valentina.jpg"/></dd>
                        </div>
                      </dl>
                    </div>

                    <div className="text-center sm:text-left">
                      <h3 className="text-lg leading-6 font-medium">Email e PEC</h3>
                      <dl className="mt-2 text-base text-gray-400">
                        <div>
                          <dt className="sr-only">Email</dt>
                          <dd>servizi.stradali@gmail.com</dd>
                        </div>
                        <div>
                          <dt className="sr-only">PEC</dt>
                          <dd>servizistradali@pec.buffetti.it</dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              </section>
              <p class="text-xs text-gray-600 mt-16 text-center">Copyright Servizi Stradali SNC 2022</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
