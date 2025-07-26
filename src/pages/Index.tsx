import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: "url('/img/510691b8-31a6-42e2-a621-5555920bb2c8.jpg')"
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        
        <div className="container mx-auto px-6 text-center z-10">
          <div className="animate-fade-in">
            <Icon name="Gamepad2" size={80} className="mx-auto mb-8 text-blue-400" />
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              CRMP
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Погрузись в мир ролевой игры на нашем GTA сервере с уникальными модификациями
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4 hover-scale">
                <Icon name="Play" size={20} className="mr-2" />
                Начать играть
              </Button>
              <Button size="lg" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white text-lg px-8 py-4 hover-scale">
                <Icon name="Info" size={20} className="mr-2" />
                О проекте
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 animate-pulse">
          <Icon name="Car" size={40} className="text-blue-400/30" />
        </div>
        <div className="absolute bottom-32 right-16 animate-pulse delay-1000">
          <Icon name="Users" size={35} className="text-purple-400/30" />
        </div>
      </section>

      {/* About Project Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">О проекте</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              CRMP — это уникальный GTA сервер с глубокой ролевой системой, где каждый игрок может создать свою историю
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-700/50 border-slate-600 hover-scale">
              <CardContent className="p-8 text-center">
                <Icon name="Crown" size={50} className="mx-auto mb-4 text-yellow-400" />
                <h3 className="text-2xl font-bold mb-4">Ролевая игра</h3>
                <p className="text-gray-300">
                  Создай своего персонажа и живи его жизнью. Работай, строй карьеру, заводи семью в виртуальном мире
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-700/50 border-slate-600 hover-scale">
              <CardContent className="p-8 text-center">
                <Icon name="Zap" size={50} className="mx-auto mb-4 text-blue-400" />
                <h3 className="text-2xl font-bold mb-4">Модификации</h3>
                <p className="text-gray-300">
                  Эксклюзивные моды, новые машины, оружие и локации. Каждое обновление приносит свежий контент
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-700/50 border-slate-600 hover-scale">
              <CardContent className="p-8 text-center">
                <Icon name="Shield" size={50} className="mx-auto mb-4 text-green-400" />
                <h3 className="text-2xl font-bold mb-4">Честная игра</h3>
                <p className="text-gray-300">
                  Активная модерация, защита от читеров и справедливые правила для всех участников
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Start Playing Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Как начать играть</h2>
            <p className="text-xl text-gray-300">
              Всего несколько простых шагов отделяют тебя от увлекательного мира CRMP
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4 p-6 bg-slate-800/30 rounded-lg hover-scale">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Скачай GTA San Andreas</h3>
                  <p className="text-gray-300">
                    Убедись, что у тебя установлена оригинальная версия игры без модов
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 bg-slate-800/30 rounded-lg hover-scale">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Установи SAMP</h3>
                  <p className="text-gray-300">
                    Скачай и установи San Andreas Multiplayer для игры онлайн
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 bg-slate-800/30 rounded-lg hover-scale">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Подключись к серверу</h3>
                  <p className="text-gray-300">
                    Добавь наш IP-адрес в избранное и подключайся к серверу
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 bg-slate-800/30 rounded-lg hover-scale">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Создай персонажа</h3>
                  <p className="text-gray-300">
                    Пройди регистрацию и создай уникального персонажа для ролевой игры
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4 hover-scale">
                <Icon name="Download" size={20} className="mr-2" />
                Скачать клиент
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Networks Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Наши социальные сети</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Следи за новостями, общайся с комьюнити и не пропускай важные обновления
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white hover-scale"
            >
              <Icon name="MessageSquare" size={20} className="mr-2" />
              Discord
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white hover-scale"
            >
              <Icon name="Send" size={20} className="mr-2" />
              Telegram
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover-scale"
            >
              <Icon name="Users" size={20} className="mr-2" />
              ВКонтакте
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white hover-scale"
            >
              <Icon name="Play" size={20} className="mr-2" />
              YouTube
            </Button>
          </div>
          
          <div className="mt-16 p-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">📊 Статистика сервера</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400">1,250+</div>
                <div className="text-gray-300">Активных игроков</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">24/7</div>
                <div className="text-gray-300">Онлайн без перерывов</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400">5+ лет</div>
                <div className="text-gray-300">Стабильной работы</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900">
        <div className="container mx-auto px-6 text-center">
          <Icon name="Gamepad2" size={40} className="mx-auto mb-4 text-blue-400" />
          <p className="text-gray-400 mb-4">© 2024 CRMP Project. Все права защищены.</p>
          <p className="text-sm text-gray-500">
            Игра предназначена для лиц старше 18 лет. Игра не поощряет насилие в реальной жизни.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;