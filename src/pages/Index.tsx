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
      drift: number; rotSpeed: number; type: "rect" | "circle" | "ribbon" | "plane";
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
        type: (["rect", "circle", "ribbon", "plane"] as const)[Math.floor(Math.random() * 4)],
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
        } else if (p.type === "plane") {
          const s = p.w * 1.2;
          ctx.fillStyle = "#FFD700";
          ctx.globalAlpha = 0.9;
          ctx.beginPath();
          ctx.moveTo(s * 0.6, 0);
          ctx.lineTo(-s * 0.4, -s * 0.25);
          ctx.lineTo(-s * 0.2, 0);
          ctx.lineTo(-s * 0.4, s * 0.25);
          ctx.closePath();
          ctx.fill();
          ctx.beginPath();
          ctx.moveTo(s * 0.05, -s * 0.05);
          ctx.lineTo(-s * 0.15, -s * 0.35);
          ctx.lineTo(-s * 0.3, -s * 0.1);
          ctx.closePath();
          ctx.fill();
          ctx.beginPath();
          ctx.moveTo(-s * 0.25, s * 0.05);
          ctx.lineTo(-s * 0.4, s * 0.22);
          ctx.lineTo(-s * 0.5, s * 0.08);
          ctx.closePath();
          ctx.fill();
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
    <div className="min-h-screen font-body" style={{ background: "#0a0a0f" }}>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url(https://cdn.poehali.dev/projects/b44ed0ec-4d50-444b-a8c2-66fbbb4186a6/files/4786aa80-236c-4359-b04a-d9991548bf98.jpg)",
            filter: "brightness(0.4) saturate(0.7)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-[#0a0a0f]" />

        <Confetti />

        <div className="relative z-10 w-full max-w-3xl mx-auto px-6 pt-20 pb-10 animate-fade-in text-center">
          <div className="inline-flex items-center gap-2 bg-amber-400/15 border border-amber-400/30 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <p className="text-amber-400 text-xs tracking-[0.2em] uppercase font-semibold">
              AlAero Group · 20 лет на высоте
            </p>
          </div>

          <h1 className="font-heading text-5xl md:text-7xl font-black text-white leading-[1.05] mb-6 tracking-tight">
            Розыгрыш<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">призов 26 февраля!</span>
          </h1>

          <p className="text-white/60 text-lg font-light max-w-sm mx-auto mb-10">
            Каждый участник сможет лично наблюдать за розыгрышем
          </p>

          <Link
            to="/invitation"
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors border border-amber-400/30 hover:border-amber-400/60 px-5 py-2.5 rounded-full"
          >
            <Icon name="Mail" size={15} />
            Электронная версия приглашения
          </Link>
        </div>
      </section>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 pb-20 -mt-4">

        {/* Prizes */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-10">
          {prizes.map((p) => (
            <div
              key={p.name}
              className="rounded-2xl py-5 px-2 text-center border border-white/8 hover:border-amber-400/30 transition-colors"
              style={{ background: "rgba(255,255,255,0.05)" }}
            >
              <span className="text-2xl block mb-2">{p.icon}</span>
              <p className="text-white/80 text-[11px] leading-tight font-medium">{p.name}</p>
            </div>
          ))}
        </div>

        {/* Event details */}
        <div className="rounded-3xl overflow-hidden border border-amber-400/20 mb-8" style={{ background: "rgba(255,255,255,0.04)" }}>
          <div className="px-6 py-4 border-b border-amber-400/20 flex items-center justify-center gap-2" style={{ background: "rgba(251,191,36,0.08)" }}>
            <span className="text-lg">🎉</span>
            <p className="text-amber-400 text-xs tracking-[0.2em] uppercase font-bold">Не пропусти розыгрыш!</p>
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

        {/* Registration */}
        <div className="mb-8">
          <p className="text-white/70 text-sm font-medium text-center mb-4">
            Подтвердите участие
          </p>
          <SmsAeroWidget />
        </div>

        {/* Features */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          <div className="rounded-2xl p-4 text-center border border-white/8" style={{ background: "rgba(255,255,255,0.04)" }}>
            <div className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center" style={{ background: "rgba(251,191,36,0.1)" }}>
              <Icon name="ShieldCheck" size={18} className="text-amber-400" />
            </div>
            <p className="text-white text-xs font-semibold mb-1">Честный розыгрыш</p>
            <p className="text-white/40 text-[11px] leading-snug">Лототрон определит победителей при вас</p>
          </div>
          <div className="rounded-2xl p-4 text-center border border-white/8" style={{ background: "rgba(255,255,255,0.04)" }}>
            <div className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center" style={{ background: "rgba(251,191,36,0.1)" }}>
              <Icon name="Gift" size={18} className="text-amber-400" />
            </div>
            <p className="text-white text-xs font-semibold mb-1">Много подарков</p>
            <p className="text-white/40 text-[11px] leading-snug">Отдельный розыгрыш среди присутствующих</p>
          </div>
          <div className="rounded-2xl p-4 text-center border border-white/8" style={{ background: "rgba(255,255,255,0.04)" }}>
            <div className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center" style={{ background: "rgba(251,191,36,0.1)" }}>
              <Icon name="Camera" size={18} className="text-amber-400" />
            </div>
            <p className="text-white text-xs font-semibold mb-1">Атмосфера</p>
            <p className="text-white/40 text-[11px] leading-snug">Фуршет, фотозона и фотограф</p>
          </div>
        </div>

        {/* Photo/video after event */}
        <div className="rounded-3xl p-6 mb-10 border border-white/8 flex items-start gap-5" style={{ background: "rgba(255,255,255,0.04)" }}>
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" style={{ background: "rgba(251,191,36,0.1)" }}>
            <Icon name="ImagePlay" size={22} className="text-amber-400" />
          </div>
          <div>
            <p className="text-white font-semibold text-sm mb-1">Фото и видео с мероприятия</p>
            <p className="text-white/50 text-sm leading-relaxed">
              После мероприятия все фотографии и видеозаписи с розыгрыша будут опубликованы на этом сайте — следи за обновлениями!
            </p>
          </div>
        </div>

        {/* Legal */}
        <div className="text-center">
          <p className="text-white/25 text-[10px] leading-relaxed">
            Генеральный спонсор и агент акции (розыгрыша): ООО «ТРАНСАЭРО СЕРВИС» (ИНН: 6685158438, ОГРН: 1196658004707), организатор ООО «ПРИМЭЙР-СЕРВИС» (ИНН: 6658214500, ОГРН: 1056602819426) — все юридические лица входят в группу компаний AlAero Group
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;