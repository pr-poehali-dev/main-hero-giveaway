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

const CONFETTI_COLORS = [
  "#FFD700", "#FF6B6B", "#4ECDC4", "#A8E6CF",
  "#FFB347", "#C9B1FF", "#FF8ED4", "#87CEEB",
];

const Confetti = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pieces: {
      x: number; y: number; w: number; h: number;
      color: string; rotation: number; speed: number;
      drift: number; rotSpeed: number; type: "rect" | "circle" | "ribbon";
    }[] = [];

    for (let i = 0; i < 120; i++) {
      pieces.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        w: Math.random() * 8 + 4,
        h: Math.random() * 14 + 6,
        color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
        rotation: Math.random() * Math.PI * 2,
        speed: Math.random() * 1.5 + 0.8,
        drift: (Math.random() - 0.5) * 1.2,
        rotSpeed: (Math.random() - 0.5) * 0.08,
        type: (["rect", "circle", "ribbon"] as const)[Math.floor(Math.random() * 3)],
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pieces.forEach((p) => {
        ctx.save();
        ctx.translate(p.x + p.w / 2, p.y + p.h / 2);
        ctx.rotate(p.rotation);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.85;
        if (p.type === "circle") {
          ctx.beginPath();
          ctx.arc(0, 0, p.w / 2, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.type === "ribbon") {
          ctx.fillRect(-p.w / 2, -p.h / 2, p.w * 0.4, p.h);
        } else {
          ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        }
        ctx.restore();
        p.y += p.speed;
        p.x += p.drift;
        p.rotation += p.rotSpeed;
        if (p.y > canvas.height) {
          p.y = -p.h;
          p.x = Math.random() * canvas.width;
        }
      });
      animId = requestAnimationFrame(animate);
    };

    animate();

    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-20"
      style={{ opacity: 0.6 }}
    />
  );
};

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
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/85" />

        <Confetti />

        <div className="relative z-10 w-full max-w-3xl mx-auto px-6 py-16 animate-fade-in">

          {/* Логотип */}
          <div className="flex justify-center mb-8">
            <img
              src="https://cdn.poehali.dev/files/59fe9fcd-e584-4989-b5e1-3f470f0d872b.png"
              alt="AlAero Group"
              className="h-20 md:h-24 w-auto object-contain mix-blend-lighten opacity-90"
            />
          </div>

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

          <div className="rounded-2xl border border-amber-400/30 overflow-hidden mb-10">
            <div className="bg-amber-400/10 backdrop-blur-sm px-5 py-3 border-b border-amber-400/20">
              <p className="text-amber-400 text-xs tracking-[0.25em] uppercase font-semibold text-center">
                🎉 Не пропусти розыгрыш!
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-4 p-5 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-amber-400/15 flex items-center justify-center shrink-0">
                  <Icon name="MapPin" size={18} className="text-amber-400" />
                </div>
                <div>
                  <p className="text-white/50 text-xs mb-0.5">Место</p>
                  <p className="text-white text-sm leading-snug">Отель «Азимут», г. Екатеринбург, ул. Бахчиванджи 55а,<br className="hidden md:block" /> зал «Янтарь», 2 этаж</p>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="flex items-center gap-4 p-5 border-r border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/15 flex items-center justify-center shrink-0">
                    <Icon name="Calendar" size={18} className="text-amber-400" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs mb-0.5">Дата</p>
                    <p className="text-white text-sm font-semibold">26 февраля 2026</p>
                    <p className="text-amber-400 text-xs">четверг</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-5">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/15 flex items-center justify-center shrink-0">
                    <Icon name="Clock" size={18} className="text-amber-400" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs mb-0.5">Время</p>
                    <p className="text-white text-sm font-semibold">15:00 — 17:00</p>
                    <p className="text-white/40 text-xs">вход по регистрации</p>
                  </div>
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