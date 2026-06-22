import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './Header.css'

function Header() {
  return (
    <header>
			<nav className='haeder-nav-main'>
				<nav>
					<div className='header-nav-div'>
						<h5 className='header-nav-h5'>Валюта</h5>
						<div className='header-nav-div-div'>
							<span className='header-nav-span'>Грн</span>
							<button>▼</button>
						</div>
					</div>
					<div className='header-nav-div'>
						<h5 className='header-nav-h5'>Язык</h5>
						<div className='header-nav-div-div'>
							<span className='header-nav-span'>RU</span>
							<button>▼</button>
						</div>
					</div>
					<div className='header-nav-div'>
						<h5 className='header-nav-h5'>Город</h5>
						<div className='header-nav-div-div'>
							<span className='header-nav-span'>Киев</span>
							<button>▼</button>
						</div>
					</div>
					<div className='header-nav-div'>
						<div className='header-nav-zakladki'>
							<img src="/Love-logo.png" alt="love-logo" />
							<div>2</div>
						</div>
						<h5 className='header-nav-h5'>Закладки</h5>
					</div>
					<div className='header-nav-div'>
						<img src="/Dostavka.png" alt="Dostavka-logo" className='header-nav-dostavka'/>
						<h5 className='header-nav-h5'>Доставка и оплата</h5>
					</div>
					<div className='header-nav-div'>
						<img src="/Call-logo.png" alt="Call-logo" className='header-nav-dostavka'/>
						<h5 className='header-nav-h5'>Контакты</h5>
					</div>
				</nav>
				<nav className='header-nav-main-aside'>
					<img src="/People-logo.png" alt="people-logo" className='header-nav-dostavka'/>
					<h5 className='header-nav-h5'>Вход</h5>
					<div>|</div>
					<h5 className='header-nav-h5'>Регистрация</h5>
				</nav>
			</nav>



			<nav>
				<section>
					<img src="./" alt="" />
				</section>
				<section>

				</section>
				<section>

				</section>
			</nav>
    </header>
  )
}

export default Header
