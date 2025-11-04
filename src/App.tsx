import { useState, useEffect, useRef } from "react";
import logo from './logo.png';
import bg from './bg.webp';
import human from './Human.jpg';
import bgAboutMe from './bgAboutMe.jpg';
import myProjects from './bgMyProjects.webp';
import bgContacts from './bgContacts.png';
import language from './language.webp';
import html from './Stek/html.svg';
import css from './Stek/css.svg';
import js from './Stek/js.svg';
import ts from './Stek/ts.svg'
import react from './Stek/react.png'
import tailwind from './Stek/tailwind.svg'
import bootstrap from './Stek/bootsrap.svg'
import csharp from './Stek/charp.png'
import figma from './Stek/figma.svg'
import git from './Stek/git.svg'
import gitHub from './Stek/github.svg'
import npm from './Stek/npm.svg'
import vite from './Stek/vite.png'
import photoshop from './Stek/photoshop.svg'
import saas from './Stek/sass.svg'
import vs from './Stek/vs.png'
import zeplin from './Stek/Zeplin.svg'
import devtools from './Stek/devTools.svg'
import done from './Stek/done.gif'


export default function App() {
  const [visible, setVisible] = useState(false);
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const myStek = useRef<HTMLDivElement>(null);
  const myProject = useRef<HTMLDivElement>(null);
  const contacts = useRef<HTMLDivElement>(null);

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

  const scrollToMyStek = () => {
    if (myStek.current) {
      const headerHeight = 20;
      const elementPosition = myStek.current.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToMyProject = () => {
    if (myProject.current) {
      const headerHeight = 20;
      const elementPosition = myProject.current.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToContacts = () => {
    if (contacts.current) {
      const headerHeight = 20;
      const elementPosition = contacts.current.getBoundingClientRect().top + window.scrollY - headerHeight;

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
      <header className="h-15 bg-neutral-700 flex justify-around items-center fixed top-0 left-0 w-full z-10" style={{ backgroundColor: 'rgb(0, 0, 0)' }}>
        <button onClick={scrollToHome} className="flex items-center gap-3 cursor-pointer">
          <img src={logo} alt="logo" className="h-13 brightness-80" />
          <h1 className="text-2xl font-mono">IT developer</h1>
        </button>
        <nav className="flex gap-10 items-center">
          <button onClick={scrollToHome} className="hidden cursor-pointer lg:flex font-mono text-2xl hover:border-b hover:text-gray-400">Домой</button>
          <button onClick={scrollToAboutMe} className="hidden cursor-pointer lg:flex font-mono text-2xl hover:border-b hover:text-gray-400">Обо мне</button>
          <button onClick={scrollToMyStek} className="hidden cursor-pointer lg:flex font-mono text-2xl hover:border-b hover:text-gray-400">Мой стек</button>
          <button onClick={scrollToMyProject} className="hidden cursor-pointer lg:flex font-mono text-2xl hover:border-b hover:text-gray-400">Мои проекты</button>
          <button onClick={scrollToContacts} className="hidden cursor-pointer lg:flex font-mono text-2xl hover:border-b hover:text-gray-400">Контакты</button>
          <button onClick={() => setVisible(!visible)} className="block lg:hidden">
            <div className="w-7 h-1 rounded-4xl bg-white mb-1"></div>
            <div className="w-7 h-1 rounded-4xl bg-white mb-1"></div>
            <div className="w-7 h-1 rounded-4xl bg-white"></div>
          </button>
        </nav>
      </header>

      {/* блок для мобильников */}
      <main className="pt-15">
        {visible && (
          <nav className="fixed top-15 left-0 w-full z-10" style={{ backgroundColor: 'rgb(0, 0, 0)' }}>
            <button onClick={() => {
              scrollToHome();
              setVisible(false);
            }} className="font-mono block text-center border-b py-4 text-2xl hover:text-gray-400 w-screen">Домой</button>
            <button onClick={() => {
              scrollToAboutMe();
              setVisible(false);
            }
            } className="font-mono block text-center border-b py-4 text-2xl hover:text-gray-400 w-screen">Обо мне</button>
            <button onClick={() => {
              scrollToMyStek();
              setVisible(false);
            }
            } className="font-mono block text-center border-b py-4 text-2xl hover:text-gray-400 w-screen">Мой стек</button>
            <button onClick={() => {
              scrollToMyProject();
              setVisible(false);
            }
            } className="font-mono block text-center border-b py-4 text-2xl hover:text-gray-400 w-screen">Мои проекты</button>
            <button onClick={() => {
              scrollToContacts();
              setVisible(false);
            }
            } className="font-mono block text-center border-b py-4 text-2xl hover:text-gray-400 w-screen">Контакты</button>
          </nav>
        )}

        {/* Main info */}
        <div ref={homeRef} className="relative w-full h-[94vh]">
          <img src={bg} alt="bg" className="w-full h-full sticky object-cover brightness-40" />
          <div className="block absolute inset-0 text-center text-white justify-around items-center max-w-400 m-auto lg:flex">
            <div className="m-auto">
              <h1 className="text-3xl animation mt-20 font-bold mb-4 lg:text-6xl lg:mt-0">Здравствуй!</h1>
              <p className="text-xl animation mb-4 lg:text-3xl">Добро пожаловать на моё портфолио</p>
              <p className="text-xl animation lg:text-2xl ml-5 mr-5 mb-5">Меня зовут Максим, и я являюсь Frontend разработчиком</p>
              <button className="border animation p-2 rounded-es-xl cursor-pointer hover:bg-gray-600 mb-5">Связаться со мной</button>
            </div>
            <img className="h-70 imgRounded rounded-r-4xl shadow-2xl brightness-80 m-auto lg:h-110 border-2 border-black" src={human} alt="" />
          </div>
        </div>

        {/* About me info */}
        <div ref={aboutMeRef} className="relative w-full h-screen">
          <img src={bgAboutMe} alt="bg" className="w-full h-full  sticky object-cover brightness-40 blur-[3px]" />
          <div className="absolute inset-0 text-center text-white flex justify-around items-center max-w-400 m-auto">
            <div>
              <h1 className="text-3xl font-bold mb-4 lg:text-6xl border-b-2 w-40 m-auto lg:w-80">Обо мне</h1>
              <p className=" mr-4 ml-4 mb-4 lg:text-2xl max-w-200">Frontend-разработчик с фокусом на React и TypeScript.
                Пишу декларативный, типизированный и поддерживаемый код с использованием современных практик: компонентный подход, хуки (useState, useEffect, useRef), управление состоянием, так же работа с DOM.
                Уверенно применяю методы массивов (map, filter, reduce) для трансформации и визуализации данных.
                Собираю и оптимизирую проекты с помощью Vite, стилизую интерфейсы через Tailwind CSS с учётом адаптивности и доступности.
                Активно углубляюсь в архитектуру приложений и рассматриваю путь к full-stack разработке через интеграцию с REST API и серверными технологиями.
              </p>
            </div>
          </div>
        </div>

        {/* Stack info */}
        <div ref={myStek} className="relative w-full h-screen">
          <img src={language} alt="bg" className="w-full h-full  sticky object-cover brightness-40 blur-[2px]" />
          
          <div className="block absolute inset-0 text-center text-white justify-around items-center max-w-400 m-auto lg:flex mt-[5%]">
            <div className="grid grid-cols-3 gap-5 p-3 max-w-[85%] m-auto mb-5 mt-5 rounded-2xl bg-black/50 rounded-2x xl:max-w-200">
              <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" rel="noopener noreferrer" target="_blank">
                <img className="h-10 sm:h-15 hover:scale-125 lg:h-20 m-auto" src={html} alt="html" loading="lazy" />
              </a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" rel="noopener noreferrer" target="_blank">
                <img className="h-10 sm:h-12 hover:scale-125 lg:h-20 m-auto hover:rotate-6" src={css} alt="css" loading="lazy" />
              </a>
              <a href="https://ru.wikipedia.org/wiki/JavaScript" rel="noopener noreferrer" target="_blank">
                <img className="h-10 sm:h-12 hover:scale-125 lg:h-20 m-auto hover:rotate-6" src={js} alt="js" loading="lazy" />
              </a>
              <a href="https://www.typescriptlang.org/" rel="noopener noreferrer" target="_blank">
                <img className="h-10 sm:h-12 hover:scale-125 lg:h-20 m-auto hover:rotate-6" src={ts} alt="ts" loading="lazy" />
              </a>
              <a href="https://react.dev/" rel="noopener noreferrer" target="_blank">
                <img className="h-10 sm:h-12 hover:scale-125 lg:h-20 m-auto hover:rotate-6" src={react} alt="react" loading="lazy" />
              </a>
              <a href="https://tailwindcss.com/" rel="noopener noreferrer" target="_blank">
                <img className="h-10 sm:h-12 hover:scale-125 lg:h-20 m-auto hover:rotate-6" src={tailwind} alt="tailwind" loading="lazy" />
              </a>
              <a href="https://getbootstrap.com/" rel="noopener noreferrer" target="_blank">
                <img className="h-10 sm:h-12 hover:scale-125 lg:h-20 m-auto hover:rotate-6" src={bootstrap} alt="bootstrap" loading="lazy" />
              </a>
              <a href="https://learn.microsoft.com/en-us/dotnet/csharp/" rel="noopener noreferrer" target="_blank">
                <img className="h-10 sm:h-12 hover:scale-125 lg:h-20 m-auto hover:rotate-6" src={csharp} alt="csharp" loading="lazy" />
              </a>
              <a href="https://www.figma.com" rel="noopener noreferrer" target="_blank">
                <img className="h-10 sm:h-12 hover:scale-125 lg:h-20 m-auto hover:rotate-6" src={figma} alt="figma" loading="lazy" />
              </a>
              <a href="https://en.wikipedia.org/wiki/Adobe_Photoshop" rel="noopener noreferrer" target="_blank">
                <img className="h-10 sm:h-12 hover:scale-125 lg:h-20 m-auto hover:rotate-6" src={photoshop} alt="photoshop" loading="lazy" />
              </a>
              <a href="https://github.com/Fe1exxx" rel="noopener noreferrer" target="_blank" >
                <img className="h-10 sm:h-12 hover:scale-125 lg:h-20 m-auto hover:rotate-6" src={gitHub} alt="gitHub" loading="lazy" />
              </a>
              <a href="https://git-scm.com/" rel="noopener noreferrer" target="_blank">
                <img className="h-10 sm:h-12 hover:scale-125 lg:h-20 m-auto hover:rotate-6" src={git} alt="git" loading="lazy" />
              </a>
              <a href="https://www.npmjs.com/" rel="noopener noreferrer" target="_blank">
                <img className="h-10 sm:h-12 hover:scale-125 lg:h-20 m-auto hover:rotate-6" src={npm} alt="npm" loading="lazy" />
              </a>
              <a href="https://vite.dev/" rel="noopener noreferrer" target="_blank">
                <img className="h-10 sm:h-12 hover:scale-125 lg:h-20 m-auto hover:rotate-6" src={vite} alt="vite" loading="lazy" />
              </a>
              <a href="https://sass-lang.com/guide/" rel="noopener noreferrer" target="_blank">
                <img className="h-10 sm:h-12 hover:scale-125 lg:h-20 m-auto hover:rotate-6" src={saas} alt="saas" loading="lazy" />
              </a>
              <a href="https://code.visualstudio.com/" rel="noopener noreferrer" target="_blank">
                <img className="h-10 sm:h-12 hover:scale-125 lg:h-20 m-auto hover:rotate-6" src={vs} alt="vs" loading="lazy" />
              </a>
              <a href="https://zeplin.io/" rel="noopener noreferrer" target="_blank">
                <img className="h-10 sm:h-12 hover:scale-125 lg:h-20 m-auto hover:rotate-6" src={zeplin} alt="zeplin" loading="lazy" />
              </a>
              <a href="https://developer.chrome.com/docs/devtools?hl=ru" rel="noopener noreferrer" target="_blank">
                <img className="h-10 sm:h-12 hover:scale-125 lg:h-20 m-auto hover:rotate-6" src={devtools} alt="devtools" loading="lazy" />
              </a>
            </div>
            <div className=" bg-black/60 p-6 rounded-lg text-white max-w-[85%] max-h-114 m-auto lg:max-w-150 lg:max-h-180">
              <h3 className="text-xl font-bold mb-2">Мои достижения:</h3>
              <ul className="text-sm space-y-1 mb-[5%]">
                <li className="flex items-center gap-2 mb-4 text-[14px] justify-center mt-5"><img src={done} className="h-5"></img> 10+ проектов на React</li>
                <li className="flex items-center gap-2 mb-4 text-[14px] justify-center"><img src={done} className="h-5"></img> 500+ часов практики</li>
                <li className="flex items-center gap-2 mb-4 text-[14px] justify-center"><img src={done} className="h-5"></img> 100% типизированный код</li>
                <li className="flex items-center gap-2 mb-5 text-[14px] justify-center "><img src={done} className="h-5"></img> Умею работать с API</li>
                <li className="text-[18px]">С нуля до полноценного frontend-разработчика — прошёл путь от базового синтаксиса JavaScript до создания сложных, типизированных React-приложений с использованием современных практик.</li>
                <li className="text-[18px] hidden lg:block">Полностью типизированные приложения на TypeScript — пишу не просто рабочий, а надёжный и самодокументируемый код с интерфейсами, union-типами и строгой типизацией состояний.</li>
                <li className="text-[18px] hidden lg:block">Освоил ключевые методы массивов — уверенно использую <code>map</code>, <code>filter</code>, <code>find</code>, <code>reduce</code> для трансформации данных и рендеринга списков.</li>
                <li className="text-[18px] hidden lg:block">Научился управлять состоянием — через useState, синхронизирую UI с пользовательским вводом и поведением.</li>
                <li className="text-[18px] hidden lg:block">Собрал и настроил проект с Vite + React + TypeScript + Tailwind CSS — без шаблонов, с пониманием конфигурации и сборки.</li>
                <li className="text-[18px] hidden lg:block">Создаю адаптивные интерфейсы — макеты корректно отображаются на мобильных, планшетах и десктопах.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* About me info */}
        <div ref={myProject} className="relative w-full h-screen">
          <img src={bgAboutMe} alt="bg" className="w-full h-full  sticky object-cover brightness-40 blur-[3px]" />
          <div className="absolute inset-0 text-center text-white flex justify-around items-center max-w-400 m-auto">
            <div>
              <h1 className="text-3xl font-bold mb-4 lg:text-6xl border-b-2 w-40 m-auto lg:w-80">Обо мне</h1>
              <p className=" mr-4 ml-4 mb-4 lg:text-2xl max-w-200">Frontend-разработчик с фокусом на React и TypeScript.
                Пишу декларативный, типизированный и поддерживаемый код с использованием современных практик: компонентный подход, хуки (useState, useEffect, useRef), управление состоянием, так же работа с DOM.
                Уверенно применяю методы массивов (map, filter, reduce) для трансформации и визуализации данных.
                Собираю и оптимизирую проекты с помощью Vite, стилизую интерфейсы через Tailwind CSS с учётом адаптивности и доступности.
                Активно углубляюсь в архитектуру приложений и рассматриваю путь к full-stack разработке через интеграцию с REST API и серверными технологиями.
              </p>
            </div>
          </div>
        </div>

        {/* About me info */}
        <div ref={contacts} className="relative w-full h-screen">
          <img src={bgContacts} alt="bg" className="w-full h-full  sticky object-cover brightness-40 blur-[3px]" />
          <div className="absolute inset-0 text-center text-white flex justify-around items-center max-w-400 m-auto">
            <div>
              <h1 className="text-3xl font-bold mb-4 lg:text-6xl border-b-2 w-40 m-auto lg:w-80">Обо мне</h1>
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