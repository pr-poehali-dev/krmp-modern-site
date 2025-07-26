import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="py-6 px-8">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="font-bold text-xl">RELAX</span>
            <span className="text-gray-500 text-sm">RP</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-900 hover:text-orange-500 transition-colors">Главная</a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Форум</a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Новости</a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Магазин</a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">СТАТИСТИКА</a>
          </div>
          
          <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
            Личный кабинет
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-7xl md:text-8xl font-bold text-orange-500 leading-none">
                RELAX
              </h1>
              
              <p className="text-xl text-gray-600 max-w-md">
                Будь на высоте вместе с нами, присоединяйся 🚀
              </p>
              
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Начать играть 
                <Icon name="Play" size={20} className="ml-2" />
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src="/img/2f38ca14-fa80-45d9-a27e-dc894579bfb3.jpg" 
                alt="RELAX Character" 
                className="w-full max-w-md ml-auto object-contain"
              />
              
              {/* Decorative elements */}
              <div className="absolute top-10 right-10 w-16 h-16 bg-orange-500 rounded-full opacity-80"></div>
              <div className="absolute bottom-20 right-32 w-24 h-24 bg-orange-400 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center space-x-2 mb-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="text-4xl font-bold text-gray-900">1 280</span>
                <span className="text-gray-600">игроков</span>
              </div>
              <p className="text-gray-500">онлайн сейчас</p>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">21 000</div>
              <p className="text-gray-500">зарегистрированных</p>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">24/7</div>
              <p className="text-gray-500">стабильная работа</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-gray-900">Особенности сервера</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              RELAX предлагает уникальный игровой опыт с глубокой ролевой системой
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Icon name="Users" size={32} className="text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Ролевая игра</h3>
                <p className="text-gray-600 leading-relaxed">
                  Создай уникального персонажа и проживи его жизнь. Выбирай профессию, строй карьеру и взаимодействуй с другими игроками
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Icon name="Zap" size={32} className="text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Уникальные моды</h3>
                <p className="text-gray-600 leading-relaxed">
                  Эксклюзивные модификации, новый транспорт, оружие и локации. Постоянные обновления контента
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Icon name="Shield" size={32} className="text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Честная игра</h3>
                <p className="text-gray-600 leading-relaxed">
                  Строгая модерация, защита от читеров и справедливые правила для всех участников проекта
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Start Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 text-gray-900">Как начать играть</h2>
              <p className="text-xl text-gray-600">
                Простые шаги для входа в мир RELAX
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Скачай GTA San Andreas</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Установи оригинальную версию игры без модификаций
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Установи SAMP</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Скачай San Andreas Multiplayer для игры онлайн
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Подключись к серверу</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Добавь наш IP в избранное и подключайся
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    4
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Создай персонажа</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Пройди регистрацию и создай уникального героя
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Networks Section */}
      <section className="py-20">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-5xl font-bold mb-8 text-gray-900">Наше сообщество</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Присоединяйся к нашим социальным сетям и будь в курсе всех новостей
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-gray-200 hover:border-orange-500 hover:text-orange-500 transition-colors px-8 py-4"
            >
              <Icon name="MessageSquare" size={20} className="mr-2" />
              Discord
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-gray-200 hover:border-orange-500 hover:text-orange-500 transition-colors px-8 py-4"
            >
              <Icon name="Send" size={20} className="mr-2" />
              Telegram
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-gray-200 hover:border-orange-500 hover:text-orange-500 transition-colors px-8 py-4"
            >
              <Icon name="Users" size={20} className="mr-2" />
              ВКонтакте
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-gray-200 hover:border-orange-500 hover:text-orange-500 transition-colors px-8 py-4"
            >
              <Icon name="Play" size={20} className="mr-2" />
              YouTube
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="font-bold text-xl">RELAX</span>
          </div>
          <p className="text-gray-400 mb-4">© 2024 RELAX Project. Все права защищены.</p>
          <p className="text-sm text-gray-500">
            Игра предназначена для лиц старше 18 лет. Игра не поощряет насилие в реальной жизни.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;