import { useState, useEffect, useRef } from "react";
import logo from './logo.png';
import bg from './bg.webp';
import human from './Human.jpg';
import bgAboutMe from './bgAboutMe.jpg';

export default function App() {
  const [visible, setVisible] = useState(false);
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);

  const scrollToHome = () => {
    if (homeRef.current) {
      const headerHeight = 80;
      const elementPosition = homeRef.current.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToAboutMe = () => {
    if (aboutMeRef.current) {
      const headerHeight = 20;
      const elementPosition = aboutMeRef.current.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisible(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <header className="h-15 bg-neutral-700 flex justify-around items-center fixed top-0 left-0 w-full z-10" style={{ backgroundColor: 'rgba(51, 51, 51, 0.4)' }}>
        <button onClick={scrollToHome} className="flex items-center gap-3 cursor-pointer">
          <img src={logo} alt="logo" className="h-13 brightness-80" />
          <h1 className="text-2xl font-mono">IT developer</h1>
        </button>
        <nav className="flex gap-10 items-center">
          <button onClick={scrollToHome} className="hidden cursor-pointer lg:flex font-mono text-2xl hover:border-b hover:text-gray-400">Домой</button>
          <button onClick={scrollToAboutMe} className="hidden cursor-pointer lg:flex font-mono text-2xl hover:border-b hover:text-gray-400">Обо мне</button>
          <button className="hidden cursor-pointer lg:flex font-mono text-2xl hover:border-b hover:text-gray-400">Мой стек</button>
          <button className="hidden cursor-pointer lg:flex font-mono text-2xl hover:border-b hover:text-gray-400">Мои проекты</button>
          <button className="hidden cursor-pointer lg:flex font-mono text-2xl hover:border-b hover:text-gray-400">Контакты</button>
          <button onClick={() => setVisible(!visible)} className="block lg:hidden">
            <div className="w-7 h-1 bg-white mb-1"></div>
            <div className="w-7 h-1 bg-white mb-1"></div>
            <div className="w-7 h-1 bg-white"></div>
          </button>
        </nav>
      </header>

    {/* блок для мобильников */}
      <main className="pt-15">
        {visible && (
          <nav className="fixed top-15 left-0 w-full z-10" style={{ backgroundColor: 'rgba(0, 89, 255, 0.2)' }}>
            <button onClick={() => {
              scrollToHome();
              setVisible(false);
            }} className="font-mono block text-center border-b py-4 text-2xl hover:text-gray-400 w-screen">Home</button>
            <button onClick={() => {
              scrollToAboutMe();
              setVisible(false);
            }
            } className="font-mono block text-center border-b py-4 text-2xl hover:text-gray-400 w-screen">About me</button>
            <button className="font-mono block text-center border-b py-4 text-2xl hover:text-gray-400 w-screen">My stack</button>
            <button className="font-mono block text-center border-b py-4 text-2xl hover:text-gray-400 w-screen">My projects</button>
            <button className="font-mono block text-center border-b py-4 text-2xl hover:text-gray-400 w-screen">Contact</button>
          </nav>
        )}

        {/* Main info */}
        <div ref={homeRef} className="relative w-full h-[94vh]">
          <img src={bg} alt="bg" className="w-full h-full sticky object-cover brightness-40" />
          <div className="block absolute inset-0 text-center text-white justify-around items-center max-w-400 m-auto lg:flex">
            <div className="m-auto">
              <h1 className="text-3xl mt-20 font-bold mb-4 lg:text-6xl lg:mt-0">Здравствуй!</h1>
              <p className="text-xl mb-4 lg:text-3xl">Добро пожаловать на моё портфолио</p>
              <p className="text-xl lg:text-2xl ml-5 mr-5 mb-10">Меня зовут Максим, и я являюсь Frontend разработчиком</p>
            </div>
            <img className="h-70 rounded-3xl shadow-2xl brightness-80 m-auto lg:h-110 " src={human} alt="" />
          </div>
        </div>

        {/* About me info */}
        <div ref={aboutMeRef} className="relative w-full h-screen">
          <img src={bgAboutMe} alt="bg" className="w-full h-full sticky object-cover brightness-40 blur-[3px]" />
          <div className="absolute inset-0 text-center text-white flex justify-around items-center max-w-400 m-auto">
            <div>
              <h1 className="text-xl font-bold mb-4 lg:text-6xl border-b-2 w-80 m-auto">Обо мне</h1>
              <p className=" mr-4 ml-4 mb-4 lg:text-2xl max-w-200">Frontend-разработчик с фокусом на React и TypeScript.
                Пишу декларативный, типизированный и поддерживаемый код с использованием современных практик: компонентный подход, хуки (useState, useEffect, useRef), управление состоянием, так же работа с DOM.
                Уверенно применяю методы массивов (map, filter, reduce) для трансформации и визуализации данных.
                Собираю и оптимизирую проекты с помощью Vite, стилизую интерфейсы через Tailwind CSS с учётом адаптивности и доступности.
                Активно углубляюсь в архитектуру приложений и рассматриваю путь к full-stack разработке через интеграцию с REST API и серверными технологиями.
              </p>
            </div>
          </div>
        </div>


      </main>
    </div>
  );
}