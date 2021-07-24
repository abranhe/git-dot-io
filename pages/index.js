import 'tailwindcss/tailwind.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

export default function Homoe() {
  return (
    <>
      <Header transparent />
      <main>
        <section className="absolute w-full h-full">
          <div
            className="absolute top-0 w-full h-full bg-blue-900 bg-no-repeat"
            style={{ backgroundSize: '100%' }}></div>
          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="relative">
                <h1 className="text-white text-8xl font-extrabold">GitDotIo</h1>
              </div>
            </div>
          </div>
          <Footer absolute />
        </section>
      </main>
    </>
  );
}
