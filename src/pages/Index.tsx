import { useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

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

    for (let i = 0; i < 80; i++) {
      pieces.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        w: Math.random() * 8 + 4,
        h: Math.random() * 14 + 6,
        color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
        rotation: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.6 + 0.2,
        drift: (Math.random() - 0.5) * 0.6,
        rotSpeed: (Math.random() - 0.5) * 0.04,
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
        ctx.globalAlpha = 0.7;
        if (p.type === "circle") {
          ctx.beginPath();
          ctx.arc(0, 0, p.w / 2, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.type === "ribbon") {
          ctx.fillRect(-p.w / 2, -p.h / 2, p.w * 0.4, p.h);
        } else if (p.type === "plane") {
          const s = p.w * 1.2;
          ctx.fillStyle = "#FFD700";
          ctx.globalAlpha = 0.8;
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
      className="fixed inset-0 pointer-events-none z-10"
      style={{ opacity: 0.5 }}
    />
  );
};

const Index = () => {
  return (
    <div className="min-h-screen font-body" style={{ background: "#0a0a0f" }}>
      <Confetti />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url(https://cdn.poehali.dev/projects/b44ed0ec-4d50-444b-a8c2-66fbbb4186a6/files/4786aa80-236c-4359-b04a-d9991548bf98.jpg)",
            filter: "brightness(0.25) saturate(0.5)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-[#0a0a0f]" />

        <div className="relative z-20 w-full max-w-3xl mx-auto px-6 pt-20 pb-10 text-center animate-fade-in">
          {/* Completed badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/40 rounded-full px-5 py-2 mb-8">
            <Icon name="CheckCircle2" size={14} className="text-emerald-400" />
            <p className="text-emerald-400 text-xs tracking-[0.18em] uppercase font-bold">
              Розыгрыш завершён · 26 февраля 2026
            </p>
          </div>

          <h1 className="font-heading text-5xl md:text-7xl font-black text-white leading-[1.05] mb-4 tracking-tight">
            Победители<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">определены!</span>
          </h1>

          <p className="text-white/50 text-base font-light max-w-xs mx-auto mt-4">
            Спасибо всем участникам. Розыгрыш прошёл честно — при всех гостях мероприятия.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="relative z-20 w-full max-w-2xl mx-auto px-6 pb-24 -mt-16">

        {/* Contact notice */}
        <div className="rounded-2xl p-5 border border-white/8 flex items-start gap-4 mb-8" style={{ background: "rgba(255,255,255,0.03)" }}>
          <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(251,191,36,0.1)" }}>
            <Icon name="Phone" size={18} className="text-amber-400" />
          </div>
          <div>
            <p className="text-white font-semibold text-sm mb-1">Как получить приз?</p>
            <p className="text-white/50 text-sm leading-relaxed">
              Свяжитесь с менеджером AlAero Group. Призы вручаются лично при предъявлении выигрышного билета.
            </p>
          </div>
        </div>

        {/* Video */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Icon name="PlayCircle" size={18} className="text-amber-400" />
            <p className="text-white font-semibold text-sm">Видео с мероприятия</p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/8" style={{ background: "rgba(255,255,255,0.03)" }}>
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://disk.yandex.ru/i/Hw5Z6R9Hi-t_tg/preview"
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; fullscreen"
                title="Видео с мероприятия AlAero"
              />
            </div>
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Icon name="Images" size={18} className="text-amber-400" />
            <p className="text-white font-semibold text-sm">Фото с мероприятия</p>
          </div>
          <div className="rounded-2xl p-6 border border-white/8 text-center" style={{ background: "rgba(255,255,255,0.03)" }}>
            <div className="w-12 h-12 rounded-2xl mx-auto mb-3 flex items-center justify-center" style={{ background: "rgba(251,191,36,0.1)" }}>
              <Icon name="ImagePlus" size={22} className="text-amber-400" />
            </div>
            <p className="text-white/50 text-sm">Фотографии с розыгрыша скоро появятся здесь</p>
            <p className="text-white/25 text-xs mt-1">Следи за обновлениями!</p>
          </div>
        </div>

        {/* AlAero badge */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="h-px flex-1 bg-white/8" />
          <p className="text-white/25 text-[11px] tracking-[0.15em] uppercase px-3">AlAero Group · 20 лет на высоте</p>
          <div className="h-px flex-1 bg-white/8" />
        </div>

        {/* Legal */}
        <div className="text-center">
          <p className="text-white/20 text-[10px] leading-relaxed">
            Генеральный спонсор и агент акции (розыгрыша): ООО «ТРАНСАЭРО СЕРВИС» (ИНН: 6685158438, ОГРН: 1196658004707), организатор ООО «ПРИМЭЙР-СЕРВИС» (ИНН: 6658214500, ОГРН: 1056602819426) — все юридические лица входят в группу компаний AlAero Group
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;