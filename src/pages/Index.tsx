import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

declare global {
  interface Window {
    SMSAERO_WIDGET: { init: (id: string) => void };
  }
}

const prizes = [
  { icon: "🏆", name: "Apple iPhone" },
  { icon: "⌚", name: "Apple Watch" },
  { icon: "🎧", name: "AirPods" },
  { icon: "☕", name: "Кофемашина" },
  { icon: "🔊", name: "Умная колонка" },
  { icon: "🎁", name: "Другие призы" },
];

const SmsAeroWidget = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://smsaero.ru/service/widget/js/JWcvOnuzuXmlbQaVNZH1und6EMccI8nR";
    script.type = "text/javascript";
    script.onload = () => {
      if (window.SMSAERO_WIDGET && containerRef.current) {
        window.SMSAERO_WIDGET.init("smsaero_widget");
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="smsaero_widget" ref={containerRef} />;
};

const Index = () => {
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/80" />

        <div className="relative z-10 w-full max-w-3xl mx-auto px-6 py-16 animate-fade-in">
          <div className="text-center mb-14">
            <p className="text-white/60 text-xs tracking-[0.3em] uppercase mb-4 font-medium">
              AlAero Group приглашает
            </p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
              Розыгрыш призов
            </h1>
            <p className="text-white/70 text-base font-light max-w-md mx-auto mb-5">
              Каждый участник сможет лично наблюдать за розыгрышем
            </p>
            <Link
              to="/invitation"
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors"
            >
              <Icon name="Mail" size={16} />
              Электронная версия приглашения
            </Link>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-14">
            {prizes.map((p) => (
              <div
                key={p.name}
                className="bg-white/10 backdrop-blur-sm rounded-xl py-4 px-2 text-center border border-white/10"
              >
                <span className="text-2xl block mb-1.5">{p.icon}</span>
                <p className="text-white/90 text-[11px] leading-tight font-medium">{p.name}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-6 md:p-8 mb-10">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="flex items-center gap-3">
                <Icon name="MapPin" size={18} className="text-amber-400 shrink-0" />
                <div>
                  <p className="text-white/50 text-xs">Место</p>
                  <p className="text-white text-sm">Отель «Азимут», г. Екатеринбург, ул. Бахчиванджи 55а, зал «Янтарь», 2 этаж</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Calendar" size={18} className="text-amber-400 shrink-0" />
                <div>
                  <p className="text-white/50 text-xs">Дата</p>
                  <p className="text-white text-sm">26 февраля 2026, четверг</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Clock" size={18} className="text-amber-400 shrink-0" />
                <div>
                  <p className="text-white/50 text-xs">Время</p>
                  <p className="text-white text-sm">15:00 — 17:00</p>
                </div>
              </div>

            </div>
          </div>

          <div className="mb-10">
            <p className="text-white text-sm font-medium text-center mb-4">
              Подтвердите участие
            </p>
            <SmsAeroWidget />
          </div>

          <div className="grid grid-cols-3 gap-4 mb-14">
            <div className="text-center">
              <Icon name="ShieldCheck" size={20} className="text-amber-400 mx-auto mb-2" />
              <p className="text-white text-xs font-medium mb-1">Честный розыгрыш</p>
              <p className="text-white/50 text-[11px] leading-snug">Лототрон определит победителей при вас</p>
            </div>
            <div className="text-center">
              <Icon name="Gift" size={20} className="text-amber-400 mx-auto mb-2" />
              <p className="text-white text-xs font-medium mb-1">Очень много подарков</p>
              <p className="text-white/50 text-[11px] leading-snug">Отдельный розыгрыш среди присутствующих</p>
            </div>
            <div className="text-center">
              <Icon name="Camera" size={20} className="text-amber-400 mx-auto mb-2" />
              <p className="text-white text-xs font-medium mb-1">Атмосфера</p>
              <p className="text-white/50 text-[11px] leading-snug">Фуршет, фотозона и фотограф</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-white/40 text-[10px] leading-relaxed">
              Генеральный спонсор и агент акции (розыгрыша): ООО «ТРАНСАЭРО СЕРВИС» (ИНН: 6685158438, ОГРН: 1196658004707), организатор ООО «ПРИМЭЙР-СЕРВИС» (ИНН: 6658214500, ОГРН: 1056602819426) — все юридические лица входят в группу компаний AlAero Group

            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;