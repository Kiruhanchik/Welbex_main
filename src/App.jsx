import './App.scss';
import purple_ball from './img/purple ball.svg';
import purple_light from './img/purple light.svg';
import red_ball from './img/red ball.svg';
import logo_welbex from './img/logo_welbex.svg'
import telegram from './img/telegram.svg';
import viber from './img/viber.svg';
import whatsup from './img/whatsup.svg';
import red_light from './img/red light.svg';
import small_ball from './img/small ball.svg';

function App() {
  if (window.innerWidth > 800) {
    return (
      <div className="App">
        <img src={purple_ball} alt="" id='purple_ball'/>
        <img src={purple_light} alt="" id='purple_light'/>
        <img src={red_ball} alt="" id='red_ball'/>
        <img src={red_light} alt="" id='red_light'/>
        <img src={small_ball} alt="" id='small_ball'/>
        <header>
          <figure className='logo-info'>
            <img src={logo_welbex} alt="" id='logo_welbex'/>
            <figcaption>крупный интегратор CRM в Росcии и ещё 8 странах</figcaption>
          </figure>
          <ul>
            <li><a href="">Услуги</a></li>
            <li><a href="">Виджеты</a></li>
            <li><a href="">Интеграции</a></li>
            <li><a href="">Кейсы</a></li>
            <li><a href="">Сертификаты</a></li>
          </ul>
          <ul className='nets'>
            <li><a href="">+7 555 555-55-55</a></li>
            <li><img src={telegram} alt="" /></li>
            <li><img src={viber} alt="" /></li>
            <li><img src={whatsup} alt="" /></li>
          </ul>
        </header>
        <main>
          <section className='left'>
            <h1>Зарабатывайте<br/>больше<br/><nav>с WELBEX</nav></h1>
            <p>Развиваем и контролируем<br/>продажи за вас</p>
          </section>
          <section className='right'>
            <h3>Вместе с <div>бесплатной<br/><div className='dradient'>консультацией</div></div> мы дарим:</h3>
            <div className='grid-wrapper'>
              <div className='vigets'>
                <p>Виджеты</p>
                <p>30 готовых<br/>решений</p>
              </div>
              <div className='dashboard'>
                <p>Dashboard</p>
                <p>с показателями<br/>вашего бизнеса</p>
              </div>
              <div className='skype'>
                <p>Skype Аудит</p>
                <p>отдела продажи<br/>и CRM системы</p>
              </div>
              <div className='days'>
                <p>35 дней</p>
                <p>использования<br/>CRM</p>
              </div>
            </div>
            <button>Получить консультацию</button>
          </section>
        </main>
        <footer>
          <div className='main-footer'>
            <div className='company'>
              <label>О компании</label>
              <ul>
                <li>Партнёрская программа</li>
                <li>Вакансии</li>
              </ul>
            </div>
            <div className='menu'>
              <label>Меню</label>
              <ul>
                <li>Расчёт стоимости</li>
                <li>Услуги</li>
                <li>Виджеты</li>
                <li>Интеграции</li>
                <li>Наши клиенты</li>
              </ul>
            </div>
            <ul className='case'>
              <li>Кейсы</li>
              <li>Благодарственные письма</li>
              <li>Сертификаты</li>
              <li>Блог на Youtube</li>
              <li>Вопрос / Ответ</li>
            </ul>
            <div className='contacts'> 
              <label>Контакты</label>
              <ul>
                <li>+7 555 555-55-55</li>
                <li>
                  <img src={telegram} alt="" />
                  <img src={viber} alt="" />
                  <img src={whatsup} alt="" />
                </li>
                <li>Москва, Путевой проезд 3с1, к 902</li>
              </ul>
            </div>
          </div>
          <div className='politics'>
            <p>©WELBEX 2022. Все права защищены.<br/><div>Политика конфиденциальности</div></p>
          </div>
        </footer>
      </div>
    )
  } else {
    return (
      <div className="App">
        <header>
          <ul>
            <li><a href="">Услуги</a></li>
            <li><a href="">Виджеты</a></li>
            <li><a href="">Интеграции</a></li>
            <li><a href="">Кейсы</a></li>
          </ul>
        </header>
        <main>
          <h1>Зарабатывайте<br/>больше<br/><nav>с WELBEX</nav></h1>
          <p>Развиваем и контролируем<br/>продажи за вас</p>
          <div>
            <p>Вместе с <nav>бесплатной<br/>консультацией</nav> мы дарим:</p>
            <ul>
              <li>Skype аудит</li>
              <li>30 виджетов</li>
              <li>Dashboard</li>
              <li>Месяц аmoCRM</li>
            </ul>
          </div>
        </main>
        <footer>
          <label>О компании</label>
          <ul>
            <li>Партнёрская программа</li>
            <li>Вакансии</li>
          </ul>
          <label>Меню</label>
          <ul className='footer-grid'>
            <li>Расчёт<br/>стоимости</li>
            <li>Благодарность<br/>клиентов</li>
            <li>Услуги</li>
            <li>Кейсы</li>
            <li>Виджеты</li>
            <li>Сертификаты</li>
            <li>Интеграции</li>
            <li>Блог на Youtube</li>
            <li>Блог на Youtube</li>
            <li>Вопрос / Ответ</li>
          </ul>
          <label>Контакты</label>
          <ul className='nets'>
            <li>+7 555 555-55-55</li>
            <li className='li-nets'>
              <img src={telegram} alt="" />
              <img src={viber} alt="" />
              <img src={whatsup} alt="" />
            </li>
            <li>Москва, Путевой проезд 3с1, к 902</li>
          </ul>
          <p>©WELBEX 2022. Все права защищены.<br/><nav>Политика конфиденциальности</nav></p>
        </footer>
      </div>
    )
  }
}

export default App;
