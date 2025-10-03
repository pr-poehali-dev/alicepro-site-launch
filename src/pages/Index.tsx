import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold tracking-wider">
                <span className="text-white">ALICE</span>
                <span className="text-lime-400">PRO</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm hover:text-accent transition-colors">О ПАДЕЛ</a>
              <a href="#product" className="text-sm hover:text-accent transition-colors">ПРОДУКТ</a>
              <a href="#values" className="text-sm hover:text-accent transition-colors">ЦЕННОСТИ</a>
              <a href="#contact" className="text-sm hover:text-accent transition-colors">КОНТАКТЫ</a>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-black to-background" />
        <div className="absolute inset-0 bg-carbon opacity-30" />
        
        <div className="absolute top-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-accent/20 rounded-full border border-accent/30">
                  <span className="text-neon text-sm font-semibold">DESIGN BY RUSSIA</span>
                </div>
                <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                  ПЕРВЫЙ<br />
                  РОССИЙСКИЙ<br />
                  <span className="text-neon">БРЕНД</span>
                </h1>
                <p className="text-xl text-muted-foreground font-light">
                  Премиальные ракетки для падел тенниса.<br />
                  Технологии, созданные для удовольствия от игры.
                </p>
              </div>
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 py-6 text-lg rounded-full"
                >
                  ВЫБРАТЬ РАКЕТКУ
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold px-8 py-6 text-lg rounded-full"
                >
                  УЗНАТЬ БОЛЬШЕ
                </Button>
              </div>
            </div>
            
            <div className={`relative ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
              <div className="relative">
                <img 
                  src="https://cdn.poehali.dev/files/52315748-f32d-414e-9b71-628ef2bdde69.jpg" 
                  alt="ALICEPRO Racket" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-black/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-block px-6 py-3 bg-secondary/20 rounded-full border border-secondary/30">
              <span className="text-secondary text-sm font-semibold">ПАДЕЛ ТЕННИС</span>
            </div>
            <h2 className="text-5xl font-bold">
              САМЫЙ БЫСТРОРАЗВИВАЮЩИЙСЯ<br />
              ВИД СПОРТА В МИРЕ
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Падел теннис захватывает мир. Миллионы игроков на пяти континентах выбирают этот динамичный 
              и увлекательный вид спорта. От Испании до России, от любителей до профессионалов — 
              падел объединяет людей, которые ценят скорость, стратегию и удовольствие от игры.
            </p>
            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <Card className="p-8 bg-card border-border hover:border-accent/50 transition-all">
                <div className="text-4xl font-bold text-neon mb-2">+86%</div>
                <div className="text-muted-foreground">Рост популярности</div>
              </Card>
              <Card className="p-8 bg-card border-border hover:border-accent/50 transition-all">
                <div className="text-4xl font-bold text-neon mb-2">30М+</div>
                <div className="text-muted-foreground">Игроков в мире</div>
              </Card>
              <Card className="p-8 bg-card border-border hover:border-accent/50 transition-all">
                <div className="text-4xl font-bold text-neon mb-2">110+</div>
                <div className="text-muted-foreground">Стран играют</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="product" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block px-6 py-3 bg-accent/20 rounded-full border border-accent/30 mb-6">
              <span className="text-neon text-sm font-semibold">НАШ ПРОДУКТ</span>
            </div>
            <h2 className="text-5xl font-bold mb-4">РАКЕТКИ ALICEPRO</h2>
            <p className="text-xl text-muted-foreground">Выбор профессиональных спортсменов и начинающих игроков</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all" />
              <img 
                src="https://cdn.poehali.dev/files/d2739260-8dd7-425e-8baa-61d9180ec793.jpg" 
                alt="ALICEPRO Cosmo" 
                className="relative z-10 w-full h-auto rounded-2xl"
              />
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-4xl font-bold mb-4">COSMO 3K</h3>
                <p className="text-muted-foreground text-lg">
                  Первая ракетка российского производства, созданная для максимального 
                  удовольствия от игры. Каждая характеристика продумана до мелочей.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <Card className="p-6 bg-black/50 border-border">
                  <Icon name="Diamond" className="text-accent mb-3" size={32} />
                  <div className="text-sm text-muted-foreground mb-1">Форма</div>
                  <div className="text-xl font-bold">Алмаз</div>
                </Card>
                <Card className="p-6 bg-black/50 border-border">
                  <Icon name="Weight" className="text-accent mb-3" size={32} />
                  <div className="text-sm text-muted-foreground mb-1">Вес</div>
                  <div className="text-xl font-bold">365г</div>
                </Card>
                <Card className="p-6 bg-black/50 border-border">
                  <Icon name="Scale" className="text-accent mb-3" size={32} />
                  <div className="text-sm text-muted-foreground mb-1">Баланс</div>
                  <div className="text-xl font-bold">Нейтральный</div>
                </Card>
                <Card className="p-6 bg-black/50 border-border">
                  <Icon name="Shield" className="text-accent mb-3" size={32} />
                  <div className="text-sm text-muted-foreground mb-1">Жесткость</div>
                  <div className="text-xl font-bold">3K Carbon</div>
                </Card>
              </div>

              <Card className="p-6 bg-gradient-to-br from-accent/10 to-transparent border-accent/30">
                <div className="flex items-start gap-4">
                  <Icon name="Sparkles" className="text-neon mt-1" size={24} />
                  <div>
                    <div className="font-semibold mb-2">Уникальное покрытие</div>
                    <div className="text-sm text-muted-foreground">
                      Внешний слой толще, чем у всех мировых брендов. 
                      Обеспечивает непревзойденный контроль и долговечность.
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="values" className="py-24 bg-black/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-block px-6 py-3 bg-secondary/20 rounded-full border border-secondary/30 mb-6">
                <span className="text-secondary text-sm font-semibold">НАШИ ЦЕННОСТИ</span>
              </div>
              <h2 className="text-5xl font-bold mb-6">КАЧЕСТВО, НЕ ПОНТЫ</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-8 bg-gradient-to-br from-card to-transparent border-border hover:border-accent/50 transition-all">
                <Icon name="Target" className="text-accent mb-4" size={40} />
                <h3 className="text-2xl font-bold mb-4">Фокус на характеристиках</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Мы не гонимся за ярким дизайном и маркетинговыми уловками. 
                  Каждый грамм, каждый миллиметр, каждый материал — всё подчинено одной цели: 
                  создать ракетку, с которой вы будете играть лучше и получать больше удовольствия.
                </p>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-card to-transparent border-border hover:border-accent/50 transition-all">
                <Icon name="Heart" className="text-secondary mb-4" size={40} />
                <h3 className="text-2xl font-bold mb-4">Удовольствие от игры</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Наша миссия — сделать так, чтобы каждый удар приносил радость. 
                  Идеальный баланс, оптимальный вес, продуманная жесткость — 
                  всё для того, чтобы ракетка стала продолжением вашей руки.
                </p>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-card to-transparent border-border hover:border-accent/50 transition-all">
                <Icon name="Zap" className="text-accent mb-4" size={40} />
                <h3 className="text-2xl font-bold mb-4">Инновации без компромиссов</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Мы используем передовые технологии и материалы, но только если они действительно 
                  улучшают игровые характеристики. Никакого маркетинга ради маркетинга — 
                  только реальные преимущества на корте.
                </p>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-card to-transparent border-border hover:border-accent/50 transition-all">
                <Icon name="Award" className="text-secondary mb-4" size={40} />
                <h3 className="text-2xl font-bold mb-4">Российское качество</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Мы гордимся тем, что создаём первые российские ракетки для падела мирового уровня. 
                  Наша цель — показать, что российские технологии и инженерная мысль 
                  могут конкурировать с лучшими брендами планеты.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-6 py-3 bg-accent/20 rounded-full border border-accent/30 mb-6">
              <span className="text-neon text-sm font-semibold">КОНТАКТЫ</span>
            </div>
            <h2 className="text-5xl font-bold mb-8">СВЯЖИТЕСЬ С НАМИ</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Готовы к новому уровню игры? Мы всегда рады ответить на ваши вопросы.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="p-8 bg-black/50 border-border hover:border-accent/50 transition-all group">
                <Icon name="Mail" className="text-accent mb-4 mx-auto group-hover:scale-110 transition-transform" size={40} />
                <div className="font-semibold mb-2">Email</div>
                <a href="mailto:info@alicepro.ru" className="text-muted-foreground hover:text-accent transition-colors">alicepro.padel@gmail.com</a>
              </Card>

              <Card className="p-8 bg-black/50 border-border hover:border-accent/50 transition-all group">
                <Icon name="Phone" className="text-accent mb-4 mx-auto group-hover:scale-110 transition-transform" size={40} />
                <div className="font-semibold mb-2">Телефон</div>
                <a href="tel:+74951234567" className="text-muted-foreground hover:text-accent transition-colors">
                  +7 (495) 123-45-67
                </a>
              </Card>

              <Card className="p-8 bg-black/50 border-border hover:border-accent/50 transition-all group">
                <Icon name="MapPin" className="text-accent mb-4 mx-auto group-hover:scale-110 transition-transform" size={40} />
                <div className="font-semibold mb-2">Адрес</div>
                <div className="text-muted-foreground">
                  Москва, Россия
                </div>
              </Card>
            </div>

            <div className="flex justify-center gap-6">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 py-6 text-lg rounded-full"
              >
                НАПИСАТЬ НАМ
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-border bg-black/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-2xl font-bold">
              <span className="text-white">ALICE</span>
              <span className="text-lime-400">PRO</span>
            </div>
            <div className="text-muted-foreground text-sm">
              © 2024 ALICEPRO. Первый российский бренд ракеток для падел тенниса.
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Icon name="Facebook" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Icon name="Youtube" size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;