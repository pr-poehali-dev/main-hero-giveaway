import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Invitation = () => {
  return (
    <div className="min-h-screen font-body" style={{ background: "#0a0a0f" }}>
      {/* Hero */}
      <section className="relative flex items-center justify-center overflow-hidden py-24 px-6">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://cdn.poehali.dev/projects/b44ed0ec-4d50-444b-a8c2-66fbbb4186a6/files/4786aa80-236c-4359-b04a-d9991548bf98.jpg)",
            filter: "brightness(0.3) saturate(0.6)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-[#0a0a0f]" />

        <div className="relative z-10 w-full max-w-2xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-amber-400/15 border border-amber-400/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <p className="text-amber-400 text-xs tracking-[0.2em] uppercase font-semibold">
              Электронное приглашение
            </p>
          </div>

          <h1 className="font-heading text-3xl md:text-5xl font-black text-white leading-tight mb-6 tracking-tight">
            Пришло время стать<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
              главным героем розыгрыша
            </span>
          </h1>

          <p className="text-white/50 text-base mb-8">AlAero Group · 20 лет на высоте</p>

          <a
            href="https://alaero.group"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-black font-bold text-sm px-7 py-3.5 rounded-2xl transition-colors"
          >
            Подтвердить присутствие
            <Icon name="ExternalLink" size={15} />
          </a>
        </div>
      </section>

      {/* Content */}
      <div className="relative z-10 w-full max-w-2xl mx-auto px-6 pb-20">

        {/* Intro text */}
        <div className="rounded-3xl p-6 mb-6 border border-white/8" style={{ background: "rgba(255,255,255,0.04)" }}>
          <p className="text-white/70 text-sm leading-relaxed mb-4">
            Благодарим вас за участие в нашем розыгрыше! Пришло время узнать, кому улыбнётся удача.
          </p>
          <p className="text-white/70 text-sm leading-relaxed">
            Приглашаем вас на церемонию розыгрыша в атмосферной обстановке. Мы не просто объявим победителя — мы определим его прямо при вас. Каждый участник сможет лично наблюдать за розыгрышем!
          </p>
        </div>

        {/* Prizes */}
        <div className="rounded-3xl p-6 mb-6 border border-white/8" style={{ background: "rgba(255,255,255,0.04)" }}>
          <h2 className="text-white font-heading text-lg font-bold mb-4 flex items-center gap-2">
            <span className="text-xl">🏆</span> Какие призы разыгрываем?
          </h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 rounded-xl border border-amber-400/20" style={{ background: "rgba(251,191,36,0.06)" }}>
              <span className="text-xl">🏆</span>
              <p className="text-white/90 text-sm">
                <span className="text-amber-400 font-semibold">Главный приз:</span> Apple iPhone
              </p>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl border border-white/8" style={{ background: "rgba(255,255,255,0.03)" }}>
              <span className="text-xl">🎁</span>
              <p className="text-white/70 text-sm">
                <span className="text-white/90 font-medium">А также:</span> Apple Watch, AirPods, кофемашина, умная колонка и другие ценные подарки
              </p>
            </div>
          </div>
        </div>

        {/* Why come */}
        <div className="rounded-3xl p-6 mb-6 border border-white/8" style={{ background: "rgba(255,255,255,0.04)" }}>
          <h2 className="text-white font-heading text-lg font-bold mb-5">Почему стоит прийти лично?</h2>
          <div className="space-y-4">
            {[
              { icon: "ShieldCheck", title: "Честный розыгрыш", text: "С помощью лототрона выберем имена счастливчиков." },
              { icon: "Gift", title: "Дополнительные подарки", text: "Среди присутствующих лично проведём отдельный розыгрыш призов. Шанс есть у каждого гостя!" },
              { icon: "Camera", title: "Атмосфера", text: "Фуршет, фотозона и фотограф, чтобы запечатлеть этот волнительный момент." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5" style={{ background: "rgba(251,191,36,0.1)" }}>
                  <Icon name={item.icon as "ShieldCheck"} size={16} className="text-amber-400" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold mb-0.5">{item.title}</p>
                  <p className="text-white/50 text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* If can't come */}
        <div className="rounded-3xl p-5 mb-6 border border-white/8 flex items-start gap-4" style={{ background: "rgba(255,255,255,0.03)" }}>
          <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5" style={{ background: "rgba(255,255,255,0.06)" }}>
            <Icon name="Info" size={16} className="text-white/50" />
          </div>
          <p className="text-white/50 text-sm leading-relaxed">
            <span className="text-white/80 font-medium">Если не можете прийти лично?</span> Мы опубликуем видео с итогами, и обязательно вручим вам ваш приз.
          </p>
        </div>

        {/* Event details */}
        <div className="rounded-3xl overflow-hidden border border-amber-400/20 mb-6" style={{ background: "rgba(255,255,255,0.04)" }}>
          <div className="px-6 py-3 border-b border-amber-400/20" style={{ background: "rgba(251,191,36,0.08)" }}>
            <p className="text-amber-400 text-xs tracking-[0.2em] uppercase font-bold text-center">Детали мероприятия</p>
          </div>
          <div className="flex items-start gap-4 p-5 border-b border-white/8">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5" style={{ background: "rgba(251,191,36,0.12)" }}>
              <Icon name="MapPin" size={16} className="text-amber-400" />
            </div>
            <div>
              <p className="text-white/40 text-xs mb-1">Место</p>
              <p className="text-white text-sm leading-snug">Отель «Азимут», г. Екатеринбург,<br />ул. Бахчиванджи 55а, зал «Янтарь», 2 этаж</p>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="flex items-start gap-4 p-5 border-r border-white/8">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5" style={{ background: "rgba(251,191,36,0.12)" }}>
                <Icon name="Calendar" size={16} className="text-amber-400" />
              </div>
              <div>
                <p className="text-white/40 text-xs mb-1">Дата</p>
                <p className="text-white text-sm font-semibold">26 февраля 2026</p>
                <p className="text-amber-400 text-xs mt-0.5">четверг</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5" style={{ background: "rgba(251,191,36,0.12)" }}>
                <Icon name="Clock" size={16} className="text-amber-400" />
              </div>
              <div>
                <p className="text-white/40 text-xs mb-1">Время</p>
                <p className="text-white text-sm font-semibold">15:00 — 17:00</p>
                <p className="text-white/30 text-xs mt-0.5">вход по регистрации</p>
              </div>
            </div>
          </div>
        </div>

        {/* Photo/video notice */}
        <div className="rounded-3xl p-6 mb-8 border border-white/8 flex items-start gap-4" style={{ background: "rgba(255,255,255,0.04)" }}>
          <div className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0" style={{ background: "rgba(251,191,36,0.1)" }}>
            <Icon name="ImagePlay" size={20} className="text-amber-400" />
          </div>
          <div>
            <p className="text-white font-semibold text-sm mb-1">Фото и видео с мероприятия</p>
            <p className="text-white/50 text-sm leading-relaxed">
              После мероприятия все фотографии и видеозаписи будут опубликованы на этом сайте — следи за обновлениями!
            </p>
          </div>
        </div>

        {/* Closing */}
        <div className="rounded-3xl p-6 mb-8 text-center border border-amber-400/20" style={{ background: "rgba(251,191,36,0.06)" }}>
          <p className="text-white/90 text-base font-medium mb-2">
            Будем рады видеть вас среди гостей и разделить этот момент вместе!
          </p>
          <p className="text-amber-400 text-sm font-semibold">Пусть удача улыбнётся именно вам! 🎉</p>
        </div>

        <div className="text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/30 hover:text-white/60 text-xs transition-colors"
          >
            <Icon name="ArrowLeft" size={13} />
            На главную
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Invitation;
