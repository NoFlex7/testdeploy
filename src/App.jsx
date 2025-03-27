import React from "react";
import logo from '../src/assets/vector.svg'

function App() {
  return (
    <>

      <header className="">
        <nav className="bg-white border-gray-200 dark:bg-gray-900 ">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
           
            <a href="#" className="flex items-center space-x-3">
              <p>
              </p>
              <span className="self-center text-2xl font-semibold dark:text-white">
                RMC DE LUXE
              </span>    
            </a>
            <ul className="flex  justify-between gap-7">
            <li>Услуги</li>
            <li>О нас</li>
            <li>Блог</li>
            <li>Контакты</li> 
            <img src={logo} alt="" />
            <li>❤️</li>
             <li>📞</li>
             <li>ru</li>
          </ul>
          </div>
      
        </nav>
      </header>

   
      <div >
        <h1 className="text-4xl font-bold mb-8 text-center text-white">
          Отзывы покупателей
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
            <p className="text-gray-500 text-sm mb-2">01.03.2024</p>
            <p className="font-semibold text-xl text-gray-900 mb-2">Иван Иванов</p>
            <p className="text-gray-700 leading-relaxed">
            Купил квартиру в ЖК Infinitu и остался очень доволен. Инфраструктура на высшем уровне – рядом находятся все основные удобства: торговые центры, школы и медицинские учреждения. Также приятно удивило качество строительства и отделки – все сделано на совесть. Большое спасибо за внимательное отношение и профессионализм сотрудников. Теперь у нас есть уютное и современное жилье, в котором мы чувствуем себя как дома. Приятно также удивило наличие зелёных зон и уютных мест для отдыха на территории. Проживание здесь действительно приятно и комфортно
            </p>
   
            <p className="text-[#E1AF93] mt-2 cursor-pointer">читать дальше ➡️</p>
          </div>

         
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
            <p className="text-gray-500 text-sm mb-2">02.03.2024</p>
            <p className="font-semibold text-xl text-gray-900 mb-2">Петр Петров</p>
            <p className="text-gray-700 leading-relaxed">
            Живу в ЖК Infinity уже несколько месяцев и абсолютно доволен своим выбором. Комплекс расположен в тихом районе, но при этом в шаговой доступности от всех необходимых магазинов и кафе. Квартира просторная, с современным ремонтом, а территория комплекса ухоженная и безопасная. Особенно нравится, что есть детская площадка и зона для отдыха, где мы проводим время с семьей. Рекомендую всем, кто ищет комфортное жилье!
            </p>
        
            <p className="text-[#E1AF93] mt-2 cursor-pointer">читать дальше ➡️</p>
          </div>

    
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
            <p className="text-gray-500 text-sm mb-2">03.03.2024</p>
            <p className="font-semibold text-xl text-gray-900 mb-2">Алексей Алексеев</p>
            <p className="text-gray-700 leading-relaxed">
            Очень рад, что выбрал ЖК Infinitu. Комплекс расположен в удобном месте с хорошей транспортной доступностью. Внутреннее оформление и планировка квартир продуманы до мелочей, что делает жизнь здесь комфортной. Мне особенно нравится, что у нас есть доступ к различным удобствам прямо на территории комплекса – спортзал, бассейн, зоны для отдыха. Отличное место для жизни и отдыха! Квартира просторная, с современным ремонтом, а территория комплекса ухоженная и безопасная
            </p>
            <p className="text-[#E1AF93] mt-2 cursor-pointer">читать дальше ➡️</p>
          </div>

          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
            <p className="text-gray-500 text-sm mb-2">04.03.2024</p>
            <p className="font-semibold text-xl text-gray-900 mb-2">Мария Смирнова</p>
            <p className="text-gray-700 leading-relaxed">
            Очень рад, что выбрал ЖК Infinitu. Комплекс расположен в удобном месте с хорошей транспортной доступностью. Внутреннее оформление и планировка квартир продуманы до мелочей, что делает жизнь здесь комфортной. Мне особенно нравится, что у нас есть доступ к различным удобствам прямо на территории комплекса – спортзал, бассейн, зоны для отдыха. Отличное место для жизни и отдыха! Квартира просторная, с современным ремонтом, а территория комплекса ухоженная и безопасная
            </p>
            <p className="text-[#E1AF93] mt-2 cursor-pointer">читать дальше ➡️</p>
          </div>
    
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
            <p className="text-gray-500 text-sm mb-2">05.03.2024</p>
            <p className="font-semibold text-xl text-gray-900 mb-2">Дмитрий Кузнецов</p>
            <p className="text-gray-700 leading-relaxed">
            Очень рад, что выбрал ЖК Infinitu. Комплекс расположен в удобном месте с хорошей транспортной доступностью. Внутреннее оформление и планировка квартир продуманы до мелочей, что делает жизнь здесь комфортной. Мне особенно нравится, что у нас есть доступ к различным удобствам прямо на территории комплекса – спортзал, бассейн, зоны для отдыха. Отличное место для жизни и отдыха! Квартира просторная, с современным ремонтом, а территория комплекса ухоженная и безопасная
            </p>
            <p className="text-[#E1AF93] mt-2 cursor-pointer">читать дальше ➡️</p>
          </div>

          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
            <p className="text-gray-500 text-sm mb-2">05.03.2024</p>
            <p className="font-semibold text-xl text-gray-900 mb-2">Дмитрий Кузнецов</p>
            <p className="text-gray-700 leading-relaxed">
            Очень рад, что выбрал ЖК Infinitu. Комплекс расположен в удобном месте с хорошей транспортной доступностью. Внутреннее оформление и планировка квартир продуманы до мелочей, что делает жизнь здесь комфортной. Мне особенно нравится, что у нас есть доступ к различным удобствам прямо на территории комплекса – спортзал, бассейн, зоны для отдыха. Отличное место для жизни и отдыха! Квартира просторная, с современным ремонтом, а территория комплекса ухоженная и безопасная
            </p>
            <p className="text-[#E1AF93] mt-2 cursor-pointer">читать дальше ➡️</p>
          </div>
          
        </div>
      </div>
      <footer className="bg-gray-100 text-gray-700 py-6 mt-10">
  <div className="max-w-screen-xl mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h2 className="font-semibold text-lg">Услуги</h2>
        <ul>
          <li>Купить</li>
          <li>Арендовать</li>
          <li>Продать</li>
          <li>Оценить</li>
        </ul>
      </div>
      <div>
        <h2 className="font-semibold text-lg">Недвижимость</h2>
        <ul>
          <li>Квартиры</li>
          <li>Новостройки</li>
          <li>Дома и участки</li>
          <li>Коммерческая</li>
        </ul>
      </div>
      <div>
        <h2 className="font-semibold text-lg">Компания</h2>
        <ul>
          <li>О нас</li>
          <li>Блог</li>
          <li>Контакты</li>
          <li>Связаться</li>
        </ul>
      </div>
      <div>
        <h2 className="font-semibold text-lg">Другое</h2>
        <ul>
          <li>Ипотечный калькулятор</li>
          <li>Инвестиции в недвижимость в Дубае</li>
        </ul>
      </div>
    </div>
    <div className="flex justify-between items-center mt-6 border-t pt-4 text-sm">
      <p>2024 © RMC De Luxe real estate LLC. Все права защищены</p>
      <div className="flex space-x-4">
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-telegram"></i></a>
        <a href="#"><i className="fab fa-whatsapp"></i></a>
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-youtube"></i></a>
      </div>
    </div>
  </div>
</footer>

    </>
  );
}

export default App;
