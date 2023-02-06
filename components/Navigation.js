import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navigation({navigation_items}) {
  return(
    <Disclosure as="nav" className="bg-gradient-to-r from-neutral-700 bg-neutral-600 border-b border-lime-300 md:pt-2 w-full z-10">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto mt-0 px-4 sm:px-6 lg:px-8 flow-root">
            {/* Logo visible only on desktop */}
            <img
              className="hidden sm:block h-12 sm:h-14 md:h-14 w-auto mb-3 mx-auto sm:mt-3"
              src="/logo_con_scritta.svg"
              alt="Servizi Stradali SNC"
            />

            <div className="flex justify-between h-16 lg:mt-5">
              <div className="flex mx-auto">
                <div className="flex-shrink-0 flex items-center sm:hidden">
                  <img
                    className="block h-8 sm:h-9 w-auto mb-3"
                    src="/logo_con_scritta.svg"
                    alt="Servizi Stradali SNC"
                  />
                </div>
                <div className="hidden sm:-my-px sm:flex sm:space-x-8">
                  {navigation_items.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'border-lime-300 text-white'
                          : 'border-transparent text-gray-300 hover:border-gray-300 hover:text-gray-400',
                        'inline-flex items-center px-1 pt-1 border-b-2 text-sm md:text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="-mr-2 flex items-center sm:hidden ">
                {/* Mobile menu button */}
                <Disclosure.Button className="bg-neutral-500/40 inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:bg-neutral-500/60 focus:outline-none">
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
            <div className="bg-gradient-to-r from-slate-800 bg-slate-700">
              {navigation_items.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-yellow-400 text-yellow-800 border-transparent'
                      : 'my-0 border-slate-700 text-slate-400 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800',
                    'block pl-3 pr-4 py-3 border-b text-base font-medium'
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
  );
}