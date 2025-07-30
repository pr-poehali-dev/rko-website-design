import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const banks = [
    {
      id: 1,
      name: "Сбер Бизнес",
      logo: "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/sberbank.png",
      rating: 4.8,
      advantages: [
        "Крупнейший банк России с развитой инфраструктурой",
        "Бесплатное ведение счета при обороте от 300 000₽",
        "Интернет-банк СберБизнес с полным функционалом",
        "Круглосуточная техподдержка и широкая сеть отделений"
      ],
      tariff: "Легкий старт",
      monthlyFee: "0₽",
      features: ["0₽ за РКО", "SMS уведомления", "Интернет-банк", "Эквайринг 0.8%"]
    },
    {
      id: 2,
      name: "Альфа-Банк",
      logo: "https://logos-world.net/wp-content/uploads/2020/05/Alfa-Bank-Logo.png",
      rating: 4.7,
      advantages: [
        "Технологичный банк с удобным мобильным приложением",
        "0₽ за ведение счета первые 3 месяца",
        "100 операций бесплатно в месяц",
        "Быстрое обслуживание и персональный менеджер"
      ],
      tariff: "Старт",
      monthlyFee: "0₽",
      features: ["100 операций бесплатно", "Мобильный банк", "API интеграция", "Быстрые переводы"]
    },
    {
      id: 3,
      name: "Тинькофф Банк",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Tinkoff-Logo.png",
      rating: 4.9,
      advantages: [
        "100% цифровой банк без отделений, лидер по инновациям",
        "Полностью дистанционное обслуживание",
        "Кэшбэк до 15% с бизнес-карты",
        "Интеграция с популярными сервисами и 1С"
      ],
      tariff: "Бизнес-старт",
      monthlyFee: "0₽",
      features: ["Без походов в офис", "Онлайн-касса", "Юридическая поддержка", "Автоматизация"]
    },
    {
      id: 4,
      name: "ВТБ Бизнес",
      logo: "https://logos-world.net/wp-content/uploads/2020/05/VTB-Logo.png",
      rating: 4.5,
      advantages: [
        "Надежный государственный банк с широкой линейкой продуктов",
        "Льготный период обслуживания 6 месяцев",
        "Комплексное обслуживание крупного бизнеса",
        "Специализация на корпоративном банкинге"
      ],
      tariff: "Мой бизнес",
      monthlyFee: "0₽",
      features: ["Корпоративные карты", "Валютные операции", "Торговый эквайринг", "CRM интеграция"]
    },
    {
      id: 5,
      name: "Модульбанк",
      logo: "https://static.tildacdn.com/tild3736-3432-4235-b631-653130656238/logo.svg",
      rating: 4.6,
      advantages: [
        "Специализируется на малом бизнесе, простая отчетность",
        "Максимально удобный документооборот",
        "Кэшбэк до 20% на остаток",
        "Интегрированная бухгалтерия и зарплатный проект"
      ],
      tariff: "Модуль",
      monthlyFee: "0₽",
      features: ["Документооборот", "Зарплатный проект", "Бухгалтерия онлайн", "Умные уведомления"]
    },
    {
      id: 6,
      name: "Райффайзенбанк",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Raiffeisen-Bank-Logo.png",
      rating: 4.4,
      advantages: [
        "Европейские стандарты обслуживания и надежность",
        "Премиум обслуживание с персональным менеджером",
        "Широкие возможности для инвестиций",
        "Индивидуальный подход к каждому клиенту"
      ],
      tariff: "Старт",
      monthlyFee: "490₽",
      features: ["Премиум обслуживание", "Персональный менеджер", "Инвестпродукты", "Trade Finance"]
    },
    {
      id: 7,
      name: "УБРиР",
      logo: "https://www.ubrr.ru/upload/iblock/eaa/logo_ubrir.png",
      rating: 4.3,
      advantages: [
        "Уральский банк с пониманием специфики регионального бизнеса",
        "Льготное кредитование для местных предпринимателей",
        "Специальные программы для работы с госконтрактами",
        "Развитые продукты для агробизнеса"
      ],
      tariff: "Региональный",
      monthlyFee: "0₽",
      features: ["Региональная поддержка", "Льготное кредитование", "Госконтракты", "Агро продукты"]
    },
    {
      id: 8,
      name: "Точка Банк",
      logo: "https://static.tochka.com/images/brand/logo.svg",
      rating: 4.5,
      advantages: [
        "Молодой технологичный банк для современного бизнеса",
        "Умная аналитика и бизнес-помощник",
        "Кэшбэк до 12% на остаток по счету",
        "Интеграции с популярными маркетплейсами"
      ],
      tariff: "Точка роста",
      monthlyFee: "0₽",
      features: ["Бизнес-помощник", "Умная аналитика", "Интеграции с 1С", "Маркетплейсы"]
    }
  ];

  const comparisonData = [
    { feature: "Бесплатное ведение", sber: "✓", alfa: "3 мес", tinkoff: "✓", vtb: "6 мес", mts: "✓", open: "✓" },
    { feature: "Интернет-банк", sber: "✓", alfa: "✓", tinkoff: "✓", vtb: "✓", mts: "✓", open: "✓" },
    { feature: "Мобильное приложение", sber: "✓", alfa: "✓", tinkoff: "✓", vtb: "✓", mts: "✓", open: "✓" },
    { feature: "Бесплатные переводы", sber: "До 20", alfa: "Безлимит", tinkoff: "Безлимит", vtb: "До 50", mts: "До 30", open: "До 25" },
    { feature: "Эквайринг", sber: "От 1.8%", alfa: "От 2%", tinkoff: "От 1.5%", vtb: "От 1.9%", mts: "От 2.2%", open: "От 2%" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Building2" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-primary">РКО.Екатеринбург</h1>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#banks" className="text-muted-foreground hover:text-primary transition-colors">Банки</a>
              <a href="#comparison" className="text-muted-foreground hover:text-primary transition-colors">Сравнение</a>
              <a href="#reviews" className="text-muted-foreground hover:text-primary transition-colors">Отзывы</a>
              <a href="#contacts" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-primary mb-6">
            Расчетно-кассовое обслуживание
            <br />
            <span className="text-secondary">для вашего бизнеса</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Сравните предложения ведущих банков и выберите лучшие условия 
            для открытия расчетного счета в Екатеринбурге
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Icon name="Search" className="mr-2" size={20} />
              Сравнить банки
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              <Icon name="Phone" className="mr-2" size={20} />
              Консультация
            </Button>
          </div>
        </div>
      </section>

      {/* Banks Section */}
      <section id="banks" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Лучшие предложения банков</h2>
            <p className="text-lg text-muted-foreground">Актуальные условия и тарифы для малого и среднего бизнеса</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {banks.map((bank) => (
              <Card key={bank.id} className="hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-lg overflow-hidden bg-background/50 flex items-center justify-center">
                    <img src={bank.logo} alt={`${bank.name} логотип`} className="w-12 h-12 object-contain" />
                  </div>
                  <CardTitle className="text-xl">{bank.name}</CardTitle>
                  <CardDescription className="flex items-center justify-center gap-2">
                    <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{bank.rating}</span>
                    <Badge variant="secondary">{bank.tariff}</Badge>
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Ведение счета</p>
                    <p className="text-2xl font-bold text-primary">{bank.monthlyFee}</p>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="CheckCircle" size={16} className="text-green-600" />
                      Преимущества:
                    </h4>
                    <ul className="text-sm space-y-1">
                      {bank.advantages.map((advantage, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Icon name="ArrowRight" size={14} className="text-muted-foreground mt-0.5 flex-shrink-0" />
                          {advantage}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {bank.features.map((feature, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <Button className="w-full text-base font-medium py-3 h-12" size="lg">
                    <Icon name="ExternalLink" className="mr-2" size={18} />
                    Оформить РКО
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Сравнение условий</h2>
            <p className="text-lg text-muted-foreground">Подробное сравнение основных параметров банковского обслуживания</p>
          </div>

          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-4 font-semibold">Условие</th>
                    <th className="text-center p-4 font-semibold">Сбербанк</th>
                    <th className="text-center p-4 font-semibold">Альфа-Банк</th>
                    <th className="text-center p-4 font-semibold">Тинькофф</th>
                    <th className="text-center p-4 font-semibold">ВТБ</th>
                    <th className="text-center p-4 font-semibold">МТС</th>
                    <th className="text-center p-4 font-semibold">Открытие</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className="border-t">
                      <td className="p-4 font-medium">{row.feature}</td>
                      <td className="text-center p-4">{row.sber}</td>
                      <td className="text-center p-4">{row.alfa}</td>
                      <td className="text-center p-4">{row.tinkoff}</td>
                      <td className="text-center p-4">{row.vtb}</td>
                      <td className="text-center p-4">{row.mts}</td>
                      <td className="text-center p-4">{row.open}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Отзывы клиентов</h2>
            <p className="text-lg text-muted-foreground">Реальные мнения предпринимателей о банковском обслуживании</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Александр Петров",
                business: "ИП, IT-услуги",
                bank: "Тинькофф Банк",
                rating: 5,
                text: "Отличный банк для IT. Все операции онлайн, быстрая поддержка, удобное приложение. Рекомендую!"
              },
              {
                name: "Мария Иванова", 
                business: "ООО 'Строй-Дом'",
                bank: "Сбербанк",
                rating: 4,
                text: "Надежный банк с хорошей репутацией. Много отделений в городе, что удобно для работы с наличностью."
              },
              {
                name: "Дмитрий Козлов",
                business: "ИП, Торговля",
                bank: "Альфа-Банк", 
                rating: 5,
                text: "Быстрое оформление РКО, персональный менеджер всегда на связи. Очень доволен обслуживанием."
              }
            ].map((review, idx) => (
              <Card key={idx} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="User" size={24} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.business}</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Icon 
                          key={i} 
                          name="Star" 
                          size={16} 
                          className={i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
                        />
                      ))}
                    </div>
                    <Badge variant="outline">{review.bank}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-lg opacity-90">Получите персональную консультацию по выбору банка</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-primary-foreground text-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Icon name="Phone" size={24} />
                  Телефон для консультаций
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold mb-2">8 (900) 043-16-37</p>
                <p className="text-muted-foreground">Звоните с 9:00 до 21:00, без выходных</p>
                <p className="text-sm text-muted-foreground mt-2">Бесплатная консультация по выбору банка</p>
                <Button className="mt-4 w-full">
                  <Icon name="Phone" className="mr-2" size={18} />
                  Заказать звонок
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-primary-foreground text-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Icon name="MapPin" size={24} />
                  Наш город
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold mb-2">Екатеринбург</p>
                <p className="text-muted-foreground mb-4">
                  Помогаем предпринимателям выбрать лучшие условия РКО в банках города
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <Icon name="Clock" size={16} />
                  <span>Работаем по всей стране дистанционно</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-6 py-3 rounded-full">
              <Icon name="Shield" size={20} />
              <span>Бесплатная консультация и помощь в выборе банка</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Index;