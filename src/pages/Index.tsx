import Icon from "@/components/ui/icon";

const prizes = [
  { icon: "🏆", title: "Apple iPhone", subtitle: "Главный приз" },
  { icon: "⌚", title: "Apple Watch", subtitle: "Умные часы" },
  { icon: "🎧", title: "AirPods", subtitle: "Наушники" },
  { icon: "☕", title: "Кофемашина", subtitle: "Для ценителей" },
  { icon: "🔊", title: "Умная колонка", subtitle: "Голосовой помощник" },
  { icon: "🎁", title: "И другие призы", subtitle: "Для каждого гостя" },
];

const reasons = [
  {
    icon: "ShieldCheck",
    title: "Честный розыгрыш",
    text: "Имена счастливчиков определит лототрон прямо при вас",
  },
  {
    icon: "Gift",
    title: "Дополнительные подарки",
    text: "Среди присутствующих — отдельный розыгрыш призов от компании",
  },
  {
    icon: "Camera",
    title: "Атмосфера праздника",
    text: "Фуршет, фотозона и профессиональный фотограф",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://cdn.poehali.dev/projects/b44ed0ec-4d50-444b-a8c2-66fbbb4186a6/files/4786aa80-236c-4359-b04a-d9991548bf98.jpg)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto animate-fade-in">
          <p className="text-white/70 text-sm tracking-[0.3em] uppercase mb-6 font-medium">
            AlAero Group приглашает
          </p>
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Церемония
            <br />
            розыгрыша призов
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-light max-w-xl mx-auto mb-10">
            Пришло время узнать, кому улыбнётся удача.
            Каждый участник сможет лично наблюдать за розыгрышем.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white/90 text-sm tracking-wide">
            <span className="flex items-center gap-2">
              <Icon name="Calendar" size={16} />
              26 февраля 2026
            </span>
            <span className="hidden sm:block w-px h-4 bg-white/30" />
            <span className="flex items-center gap-2">
              <Icon name="Clock" size={16} />
              15:00 — 17:00
            </span>
            <span className="hidden sm:block w-px h-4 bg-white/30" />
            <span className="flex items-center gap-2">
              <Icon name="MapPin" size={16} />
              Отель «Азимут»
            </span>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={24} className="text-white/40" />
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground text-center mb-3">
            Что разыгрываем
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Призы розыгрыша
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {prizes.map((prize) => (
              <div
                key={prize.title}
                className="group bg-card rounded-2xl p-8 text-center border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform duration-300">
                  {prize.icon}
                </span>
                <h3 className="font-semibold text-foreground text-lg mb-1">
                  {prize.title}
                </h3>
                <p className="text-muted-foreground text-sm">{prize.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground text-center mb-3">
            Зачем приходить
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Почему стоит быть лично
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {reasons.map((reason) => (
              <div key={reason.title} className="text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <Icon
                    name={reason.icon}
                    size={24}
                    className="text-primary"
                  />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {reason.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-3">
            Где и когда
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-12 text-foreground">
            Детали мероприятия
          </h2>

          <div className="bg-card rounded-2xl p-10 border border-border/50 space-y-6 text-left">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                <Icon name="MapPin" size={18} className="text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Место</p>
                <p className="text-muted-foreground">
                  Отель «Азимут», Бахчиванджи 55а, 2 этаж, зал «Янтарь»
                </p>
              </div>
            </div>

            <div className="h-px bg-border/50" />

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                <Icon name="Calendar" size={18} className="text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Дата</p>
                <p className="text-muted-foreground">26 февраля 2026</p>
              </div>
            </div>

            <div className="h-px bg-border/50" />

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                <Icon name="Clock" size={18} className="text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Время</p>
                <p className="text-muted-foreground">с 15:00 до 17:00</p>
              </div>
            </div>

            <div className="h-px bg-border/50" />

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                <Icon name="AlertCircle" size={18} className="text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Подтвердите участие</p>
                <p className="text-muted-foreground">
                  до 20 февраля 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-foreground text-background">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Пусть удача улыбнётся именно вам
          </h2>
          <p className="text-background/60 mb-3 text-sm">
            Будем рады видеть вас среди гостей и разделить этот момент вместе!
          </p>
        </div>
      </section>

      <footer className="py-8 px-6 bg-foreground border-t border-background/10">
        <div className="max-w-4xl mx-auto text-center text-background/40 text-xs space-y-2">
          <p>
            Организаторы: Группа компаний AlAero Group (ООО «Примэйр-Сервис»,
            ООО «Трансаэро Сервис»)
          </p>
          <p>
            Информация о проводимой акции:{" "}
            <a
              href="https://alaero.group/law-206"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-background/60 transition-colors"
            >
              alaero.group/law-206
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
