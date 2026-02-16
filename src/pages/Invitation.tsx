import Icon from "@/components/ui/icon";

const Invitation = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://cdn.poehali.dev/projects/b44ed0ec-4d50-444b-a8c2-66fbbb4186a6/files/4786aa80-236c-4359-b04a-d9991548bf98.jpg)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/90" />

        <div className="relative z-10 w-full max-w-2xl mx-auto px-6 py-16 animate-fade-in">
          <div className="text-center mb-10">
            <p className="text-amber-400 text-xs tracking-[0.3em] uppercase mb-4 font-medium">
              Электронное приглашение
            </p>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              Пришло время стать главным героем розыгрыша AlAero Group!
            </h1>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-6 md:p-8 mb-8">
            <p className="text-white/90 text-sm leading-relaxed mb-6">
              Благодарим вас за участие в нашем розыгрыше! Пришло время узнать,
              кому улыбнется удача.
            </p>
            <p className="text-white/90 text-sm leading-relaxed mb-6">
              Приглашаем вас на церемонию розыгрыша, которая пройдет в
              атмосферной обстановке. Мы не просто объявим победителя — мы
              определим его прямо при вас. Каждый участник сможет лично наблюдать
              за розыгрышем!
            </p>

            <h2 className="text-white font-heading text-xl font-bold mb-4">
              Какие призы разыгрываем?
            </h2>
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-lg">🏆</span>
                <p className="text-white/90 text-sm">
                  <span className="text-amber-400 font-medium">
                    Главный приз:
                  </span>{" "}
                  Apple iPhone
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-lg">🎁</span>
                <p className="text-white/90 text-sm">
                  <span className="text-amber-400 font-medium">А также:</span>{" "}
                  Apple Watch, AirPods, кофемашина, умная колонка и другие ценные
                  подарки
                </p>
              </div>
            </div>

            <h2 className="text-white font-heading text-xl font-bold mb-4">
              Почему стоит прийти лично?
            </h2>
            <div className="space-y-4 mb-6">
              <div className="flex gap-3">
                <span className="text-amber-400 font-bold text-sm shrink-0">
                  1.
                </span>
                <p className="text-white/90 text-sm leading-relaxed">
                  <span className="text-white font-medium">
                    Честный розыгрыш:
                  </span>{" "}
                  С помощью лототрона выберем имена счастливчиков.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-amber-400 font-bold text-sm shrink-0">
                  2.
                </span>
                <p className="text-white/90 text-sm leading-relaxed">
                  <span className="text-white font-medium">
                    Дополнительные подарки:
                  </span>{" "}
                  Среди тех, кто будет присутствовать лично, мы проведем
                  отдельный розыгрыш призов от нашей компании. Шанс есть у
                  каждого гостя!
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-amber-400 font-bold text-sm shrink-0">
                  3.
                </span>
                <p className="text-white/90 text-sm leading-relaxed">
                  <span className="text-white font-medium">Атмосфера:</span> Для
                  вас организованы фуршет, фотозона и работа фотографа, чтобы
                  запечатлеть этот волнительный момент.
                </p>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl border border-white/10 p-4 mb-6">
              <p className="text-white/70 text-sm leading-relaxed">
                <span className="text-white font-medium">
                  Если не можете прийти лично?
                </span>{" "}
                Мы опубликуем видео с итогами, и обязательно вручим вам ваш приз.
              </p>
            </div>

            <h2 className="text-white font-heading text-xl font-bold mb-4">
              Детали мероприятия
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-3">
                <Icon
                  name="MapPin"
                  size={18}
                  className="text-amber-400 shrink-0"
                />
                <div>
                  <p className="text-white/50 text-xs">Место</p>
                  <p className="text-white text-sm">
                    Отель «Азимут», Бахчиванджи 55а, 2 этаж, зал «Янтарь»
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Icon
                  name="Clock"
                  size={18}
                  className="text-amber-400 shrink-0"
                />
                <div>
                  <p className="text-white/50 text-xs">Время проведения</p>
                  <p className="text-white text-sm">с 15:00 до 17:00</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Icon
                  name="Calendar"
                  size={18}
                  className="text-amber-400 shrink-0"
                />
                <div>
                  <p className="text-white/50 text-xs">Дата</p>
                  <p className="text-white text-sm">26 февраля 2026</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Icon
                  name="AlertCircle"
                  size={18}
                  className="text-amber-400 shrink-0"
                />
                <div>
                  <p className="text-white/50 text-xs">Подтвердите присутствие</p>
                  <p className="text-white text-sm">до 19.02.2026</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://alaero.group"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-black font-medium text-sm px-6 py-3 rounded-xl transition-colors"
              >
                Подтвердить присутствие
                <Icon name="ExternalLink" size={16} />
              </a>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-6 text-center mb-8">
            <p className="text-white/90 text-base leading-relaxed font-medium mb-2">
              Будем рады видеть вас среди гостей и разделить этот момент вместе!
            </p>
            <p className="text-amber-400 text-sm font-medium">
              Пусть удача улыбнется именно вам!
            </p>
          </div>

          <div className="text-center space-y-2">
            <p className="text-white/40 text-[10px] leading-relaxed">
              Организаторы: Группа компаний AlAero Group (ООО
              "Примэйр-Сервис", ООО "Трансаэро Сервис")
            </p>
            <a
              href="https://alaero.group/law"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white/60 text-[10px] underline transition-colors"
            >
              Информация о проводимой акции
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Invitation;