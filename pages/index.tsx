import Head from 'next/head'
import Image from 'next/image'
import { AddOnsContextProvider } from '../components/context/AddOnsContext'
import { StepContextProvider } from '../components/context/StepContext'
import { SubContextProvider } from '../components/context/SubContext'
import { Form } from '../components/Form'
import { SideNav } from '../components/SideNav'

export default function Home() {
  return (
    <StepContextProvider>
      <SubContextProvider>
        <AddOnsContextProvider>
          <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/assets/favicon-32x32.png" />
          </Head>
          <main className="bg-marineBlue flex justify-center text-gray-800 font-ubuntu w-full h-screen">
            <div className="bg-alabaster rounded-lg shadow-xl p-4 w-[65%] min-h-[600px] m-auto grid grid-cols-4">
              <div className="bg-sidenav col-span-1 p-9 h-full">
                <SideNav />
              </div>
              <div className="mx-[6.25rem] mt-12 col-span-3 h-full">
                <Form />
              </div>
            </div>
          </main>
        </AddOnsContextProvider>
      </SubContextProvider>
    </StepContextProvider>
  )
}
