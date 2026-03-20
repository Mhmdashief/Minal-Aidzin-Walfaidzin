"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import confetti from "canvas-confetti";

type Petal = { id: number; x: number; size: number; duration: number; delay: number; emoji: string; swing: number };
type Star = { id: number; top: number; left: number; size: number; duration: number; delay: number };
type Firefly = { id: number; top: number; left: number; duration: number; delay: number };

const LebCouple = () => {
  const sparkles = [
    { top: "8%", left: "0%", d: 2.0, delay: 0.0, cls: "text-lg" },
    { top: "2%", left: "78%", d: 2.6, delay: 0.7, cls: "text-base" },
    { top: "35%", left: "92%", d: 1.9, delay: 1.3, cls: "text-sm" },
    { top: "65%", left: "3%", d: 2.3, delay: 0.5, cls: "text-sm" },
    { top: "50%", left: "88%", d: 2.8, delay: 1.0, cls: "text-xs" },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 1, type: "spring" }}
      className="relative flex flex-col items-center justify-center select-none"
      style={{ width: 300, minHeight: 300 }}
    >
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-56 h-10 rounded-full blur-2xl"
        style={{ background: "radial-gradient(ellipse, rgba(255,200,60,0.45) 0%, transparent 75%)" }}
      />

      {sparkles.map((sp, i) => (
        <motion.span
          key={i}
          className={`absolute pointer-events-none text-yellow-300 ${sp.cls}`}
          style={{ top: sp.top, left: sp.left }}
          animate={{ scale: [0.6, 1.4, 0.6], opacity: [0.2, 1, 0.2], rotate: [0, 15, 0] }}
          transition={{ duration: sp.d, repeat: Infinity, delay: sp.delay, ease: "easeInOut" }}
        >✨</motion.span>
      ))}

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10"
      >
        <div
          className="absolute inset-x-8 bottom-0 top-16 rounded-full blur-3xl opacity-25"
          style={{ background: "radial-gradient(ellipse, #ffd700 0%, #ff9500 60%, transparent 100%)" }}
        />
        <img
          src="/lebaran-couple.png"
          alt="Anak-anak lebaran mohon maaf lahir dan batin"
          width={300}
          height={300}
          className="relative z-10"
          style={{ filter: "drop-shadow(0 10px 28px rgba(255,170,0,0.35))" }}
        />
      </motion.div>
    </motion.div>
  );
};

const NightSky = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [fireflies, setFireflies] = useState<Firefly[]>([]);

  useEffect(() => {
    setStars(
      Array.from({ length: 90 }, (_, i) => ({
        id: i,
        top: Math.random() * 80,
        left: Math.random() * 100,
        size: Math.random() * 2.2 + 0.6,
        duration: 2.5 + Math.random() * 4,
        delay: Math.random() * 6,
      }))
    );
    setFireflies(
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        top: 40 + Math.random() * 55,
        left: Math.random() * 100,
        duration: 5 + Math.random() * 7,
        delay: Math.random() * 8,
      }))
    );
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-[#060412] via-[#0c0a2e] to-[#0a0714]" />

      <div className="absolute inset-0 opacity-10"
        style={{
          background: "radial-gradient(ellipse 160% 60% at 60% 40%, rgba(120,80,200,0.25) 0%, transparent 70%)",
        }}
      />

      {stars.map(s => (
        <motion.div
          key={s.id}
          className="absolute rounded-full bg-white"
          style={{ top: `${s.top}%`, left: `${s.left}%`, width: s.size, height: s.size, boxShadow: `0 0 ${s.size * 3}px rgba(255,255,255,0.6)` }}
          animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.3, 1] }}
          transition={{ duration: s.duration, repeat: Infinity, delay: s.delay, ease: "easeInOut" }}
        />
      ))}

      <motion.div
        className="absolute h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-80"
        style={{ top: "15%", left: "10%", width: 120, rotate: 20 }}
        animate={{ x: [0, 300], opacity: [0, 1, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 9, delay: 3, ease: "easeIn" }}
      />
      <motion.div
        className="absolute h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-70"
        style={{ top: "25%", left: "60%", width: 90, rotate: 30 }}
        animate={{ x: [0, 200], opacity: [0, 1, 0] }}
        transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 13, delay: 7, ease: "easeIn" }}
      />

      <motion.div
        className="absolute top-[6%] right-[10%]"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <div className="absolute -inset-8 rounded-full bg-yellow-200/10 blur-3xl" />
          <div className="absolute -inset-4 rounded-full bg-yellow-100/15 blur-2xl" />
          <svg width="90" height="90" viewBox="0 0 100 100">
            <defs>
              <radialGradient id="moonGrad" cx="40%" cy="35%" r="60%">
                <stop offset="0%" stopColor="#fff8dc" />
                <stop offset="60%" stopColor="#ffd96a" />
                <stop offset="100%" stopColor="#d4a017" />
              </radialGradient>
            </defs>
            <circle cx="50" cy="50" r="38" fill="url(#moonGrad)" />
            <circle cx="67" cy="38" r="32" fill="#0c0a2e" />
            {/* Moon craters */}
            <circle cx="28" cy="62" r="4" fill="rgba(0,0,0,0.12)" />
            <circle cx="22" cy="45" r="2.5" fill="rgba(0,0,0,0.1)" />
            <circle cx="35" cy="72" r="3" fill="rgba(0,0,0,0.09)" />
          </svg>
          {/* Little stars next to moon */}
          <motion.div animate={{ opacity: [0.5, 1, 0.5], scale: [0.8, 1.2, 0.8] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="absolute -top-3 -left-6 text-yellow-200 text-xl">✦</motion.div>
          <motion.div animate={{ opacity: [0.3, 0.9, 0.3], scale: [0.9, 1.1, 0.9] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            className="absolute -bottom-2 -left-4 text-yellow-100 text-sm">✦</motion.div>
        </motion.div>
      </motion.div>

      {fireflies.map(f => (
        <motion.div
          key={f.id}
          className="absolute w-1 h-1 rounded-full bg-yellow-300"
          style={{ top: `${f.top}%`, left: `${f.left}%`, boxShadow: "0 0 6px 2px rgba(250,220,50,0.4)" }}
          animate={{ y: [-10, -30, -10], x: [-8, 8, -8], opacity: [0, 0.8, 0] }}
          transition={{ duration: f.duration, repeat: Infinity, delay: f.delay, ease: "easeInOut" }}
        />
      ))}

      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#1a0832]/40 to-transparent" />
    </div>
  );
};
const FloatingPetals = ({ active }: { active: boolean }) => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    if (active) {
      setPetals(
        Array.from({ length: 22 }, (_, i) => ({
          id: i,
          x: Math.random() * 100,
          size: 12 + Math.random() * 18,
          duration: 6 + Math.random() * 8,
          delay: i * 0.6,
          emoji: ["🌸", "🌺", "🌹", "✿", "❀"][Math.floor(Math.random() * 5)],
          swing: (Math.random() - 0.5) * 120,
        }))
      );
    }
  }, [active]);

  if (!active) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {petals.map(p => (
        <motion.div
          key={p.id}
          className="absolute top-0 select-none"
          style={{ left: `${p.x}%`, fontSize: p.size }}
          initial={{ y: -40, opacity: 0, rotate: 0 }}
          animate={{ y: "110vh", opacity: [0, 0.9, 0.9, 0], x: [0, p.swing / 2, p.swing, p.swing / 2, 0], rotate: [0, 180, 360] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "linear" }}
        >
          {p.emoji}
        </motion.div>
      ))}
    </div>
  );
};

const useTypewriter = (text: string, speed = 40, startDelay = 0) => {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  useEffect(() => {
    setDisplayed("");
    setDone(false);
    const start = setTimeout(() => {
      let i = 0;
      const timer = setInterval(() => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(timer);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(timer);
    }, startDelay);
    return () => clearTimeout(start);
  }, [text, speed, startDelay]);
  return { displayed, done };
};

// ─── ENVELOPE SCENE ─────────────────────────────────────────────────────────
const EnvelopeScene = ({ onOpen }: { onOpen: () => void }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [0, 800], [12, -12]), { stiffness: 60, damping: 18 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1400], [-18, 18]), { stiffness: 60, damping: 18 });

  useEffect(() => {
    const handle = (e: MouseEvent) => { mouseX.set(e.clientX); mouseY.set(e.clientY); };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, [mouseX, mouseY]);

  const [flap, setFlap] = useState(false);

  const handleClick = () => {
    setFlap(true);
    setTimeout(onOpen, 900);
  };

  return (
    <motion.div
      key="envelope-scene"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.7, y: -80, transition: { duration: 0.7 } }}
      className="relative z-10 flex flex-col items-center gap-10 w-full select-none"
    >
      <div className="text-center space-y-3 px-4">
        <motion.p
          animate={{ opacity: [0.15, 0.5, 0.15] }}
          transition={{ duration: 3.5, repeat: Infinity }}
          className="text-amber-300/70 tracking-[0.5em] text-[9px] uppercase font-semibold"
        >
          Ada Pesan Untukmu 💌
        </motion.p>
        <motion.h1
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="text-3xl md:text-5xl font-light text-white font-serif italic tracking-wide"
          style={{ textShadow: "0 0 40px rgba(255,215,0,0.3)" }}
        >
          Ketuk Untuk Membuka
        </motion.h1>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-amber-300/60 text-lg"
        >↓</motion.div>
      </div>

      <div style={{ perspective: 2000 }} className="w-full flex justify-center">
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          whileHover={{ scale: 1.04 }}
          onClick={handleClick}
          className="relative w-[300px] h-[190px] md:w-[420px] md:h-[270px] cursor-pointer"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1], opacity: [0.6, 0.8, 0.6] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[85%] h-8 bg-purple-900/50 blur-3xl rounded-full -z-10"
          />

          <div className="relative w-full h-full rounded-2xl overflow-visible shadow-[0_30px_80px_rgba(0,0,0,0.8)] border border-white/10"
            style={{ background: "linear-gradient(135deg, #fdf8f0 0%, #fbeaca 50%, #f5dfa0 100%)" }}>
            <div className="absolute inset-0 opacity-[0.07] rounded-2xl"
              style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/natural-paper.png')" }} />

            <div className="absolute bottom-0 w-full h-[55%] z-10"
              style={{ clipPath: "polygon(0 100%, 100% 100%, 50% 0%)", background: "linear-gradient(180deg, #e8d5a0 0%, #d4b870 100%)" }} />
            <div className="absolute left-0 w-[50%] h-full"
              style={{ clipPath: "polygon(0 0, 0 100%, 100% 50%)", background: "linear-gradient(135deg, #f0e0a0 0%, #e0c870 100%)" }} />
            <div className="absolute right-0 w-[50%] h-full"
              style={{ clipPath: "polygon(100% 0, 100% 100%, 0 50%)", background: "linear-gradient(225deg, #f0e0a0 0%, #e0c870 100%)" }} />

            <motion.div
              className="absolute top-0 w-full h-[55%] z-30 origin-top"
              animate={flap ? { rotateX: -175 } : { rotateX: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)", background: "linear-gradient(180deg, #fdf0c0 0%, #e8cc70 100%)", transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
            />

            <motion.div
              className="absolute inset-0 flex items-center justify-center z-20"
              animate={flap ? { opacity: 0, scale: 0.5 } : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                animate={{ rotate: [0, 6, -6, 0], boxShadow: ["0 10px 30px rgba(0,0,0,0.4)", "0 15px 40px rgba(184,134,11,0.6)", "0 10px 30px rgba(0,0,0,0.4)"] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center border-[3px] border-white/30 relative"
                style={{ background: "radial-gradient(circle at 35% 35%, #ffd700, #b8860b)" }}
              >
                <span className="text-2xl md:text-3xl filter drop-shadow-lg">🌙</span>
                <div className="absolute inset-0 rounded-full bg-white/10 blur-sm" />
              </motion.div>
            </motion.div>

            <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500"
              style={{ background: "radial-gradient(ellipse at center, rgba(255,215,0,0.08) 0%, transparent 70%)" }} />

            <p className="absolute bottom-4 w-full text-center text-amber-800/40 text-[8px] md:text-[9px] tracking-[0.4em] uppercase italic z-40">
              for my beloved 💛
            </p>
          </div>
        </motion.div>
      </div>

      <motion.p
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="text-white/20 text-[8px] md:text-[9px] tracking-[0.35em] uppercase"
      >
        coba gerakin mouse ke amplopnya ✨
      </motion.p>
    </motion.div>
  );
};

const LetterScene = ({ onBack }: { onBack: () => void }) => {
  const greeting = "Minal Aidzin Wal Faidzin";
  const title = "Selamat Hari Raya\nIdul Fitri yaa";
  const body0 = "Akhirnya ada yang bisa aku ucapin dengan cara kayak gini 😁";
  const body1 = "Semoga kamu ga bosen dan ilfeel yaa ama tingkah laku dan kelakuanku yang memang sangat aneh terkadang xixixi";
  const body2 = "Thanks for being people that always made my day better and better. Dipertemukan dengan sosok anak yang suka telat sedari maba ini adalah best gift i ever received.";
  const body3 = "Semoga Allah mempertemukan kita di setiap Ramadan dan setiap Idul Fitri yang akan datang, dalam keadaan yang lebih baik dan lebih bersyukur. 🤍";

  const { displayed: t0, done: d0 } = useTypewriter(body0, 28, 1800);
  const { displayed: t1, done: d1 } = useTypewriter(body1, 28, d0 ? 400 : 9999);
  const { displayed: t2, done: d2 } = useTypewriter(body2, 28, d1 ? 400 : 9999);
  const { displayed: t3 } = useTypewriter(body3, 28, d2 ? 400 : 9999);
  const [showSign, setShowSign] = useState(false);
  const [showGift, setShowGift] = useState(false);

  useEffect(() => { if (d2) setTimeout(() => setShowSign(true), body3.length * 28 + 800); }, [d2, body3.length]);
  useEffect(() => { if (showSign) setTimeout(() => setShowGift(true), 800); }, [showSign]);

  return (
    <motion.div
      key="letter-scene"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative z-10 w-full max-w-xl px-3 md:px-6 pb-12 flex flex-col items-center"
    >
      <div className="relative w-full rounded-2xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.85)]"
        style={{ background: "linear-gradient(160deg, #fffdf7 0%, #fdf5e0 60%, #f9ead0 100%)" }}
      >
        <div className="h-3 md:h-4 w-full" style={{ background: "linear-gradient(90deg, #9c6b00, #ffd700, #b8860b, #ffd700, #9c6b00)" }} />
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-1/3 h-3 md:h-4 bg-gradient-to-r from-transparent via-white/60 to-transparent z-20"
        />

        <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')" }} />

        <div className="absolute inset-4 border border-[#b8860b]/20 pointer-events-none rounded-sm z-10">
          {["top-0 left-0 border-t-2 border-l-2", "top-0 right-0 border-t-2 border-r-2", "bottom-0 left-0 border-b-2 border-l-2", "bottom-0 right-0 border-b-2 border-r-2"]
            .map((c, i) => <div key={i} className={`absolute w-4 h-4 md:w-5 md:h-5 border-[#b8860b]/50 ${c}`} />)}
        </div>

        <div className="px-6 py-8 md:px-12 md:py-12 space-y-6 md:space-y-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 1 }}
            className="text-center">
            <p className="text-[#b8860b]/60 text-xs tracking-[0.5em] uppercase font-semibold mb-1">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</p>
            <div className="flex items-center gap-3 justify-center mt-2">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#b8860b]/30" />
              <span className="text-[#b8860b] text-lg">✦</span>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#b8860b]/30" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 1 }}
            className="text-center space-y-2">
            <p className="text-[#b8860b] font-serif tracking-[0.3em] text-[9px] md:text-[11px] uppercase font-black">
              {greeting}
            </p>
            <h2 className="text-3xl md:text-5xl font-serif text-stone-800 italic leading-tight drop-shadow-sm whitespace-pre-line">
              {title}
            </h2>
            <div className="flex items-center justify-center gap-2 pt-1">
              <span className="text-2xl">🌙</span>
              <span className="text-2xl">⭐</span>
              <span className="text-2xl">🌙</span>
            </div>
          </motion.div>

          <motion.div initial={{ width: 0 }} animate={{ width: "60%" }} transition={{ delay: 1.2, duration: 1 }}
            className="h-[1px] bg-gradient-to-r from-transparent via-[#b8860b]/40 to-transparent mx-auto" />

          <div className="flex justify-center py-2">
            <LebCouple />
          </div>

          <div className="space-y-4 text-stone-700 font-serif text-base md:text-lg leading-relaxed px-1 md:px-2 text-center">
            <p className="italic">{t0}{d0 ? "" : <span className="animate-pulse">|</span>}</p>
            {d0 && <p className="italic">{t1}{d1 ? "" : <span className="animate-pulse">|</span>}</p>}
            {d1 && <p className="italic">{t2}{d2 ? "" : <span className="animate-pulse">|</span>}</p>}
            {d2 && <p className="italic">{t3}</p>}
          </div>

          <AnimatePresence>
            {showSign && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", damping: 14 }}
                className="text-center space-y-1 pt-2"
              >
                <div className="flex items-center gap-3 justify-center mb-4">
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#b8860b]/30" />
                  <span className="text-[#b8860b] text-sm">❦</span>
                  <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#b8860b]/30" />
                </div>
                <p className="text-[#b8860b] text-sm md:text-base italic font-serif">With all my love,</p>
                <p className="text-stone-400 font-serif text-[9px] md:text-[11px] uppercase tracking-[0.3em]">
                  — Your 911 Person —
                </p>
                <p className="text-stone-500 font-serif text-xs italic mt-1">1447 H / 2026 M</p>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showGift && (
              <motion.div
                initial={{ opacity: 0, scale: 0.7, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", damping: 12, stiffness: 120 }}
                className="flex justify-center pt-2"
              >
                <a
                  href="https://link.dana.id/danakaget?c=s3tazjhwz&r=dwMn80&orderId=20260320101214192715010300166969469988011"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-block"
                >
                  <motion.div
                    animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -inset-3 rounded-2xl bg-gradient-to-r from-yellow-400/30 via-amber-500/20 to-yellow-400/30 blur-xl z-0"
                  />

                  <div className="relative z-10 bg-gradient-to-br from-[#0a0608] to-[#1a0f05] px-8 md:px-14 py-5 md:py-7 rounded-2xl border border-[#b8860b]/50 shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden min-w-[270px] md:min-w-[360px] group-hover:border-[#ffd700]/60 transition-colors duration-300">

                    <motion.div
                      animate={{ x: ["-200%", "200%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 z-10"
                    />

                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#ffd700]/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#ffd700]/40 to-transparent" />
                    <div className="absolute top-0 bottom-0 left-0 w-[1px] border-l border-dotted border-[#b8860b]/40" />
                    <div className="absolute top-0 bottom-0 right-0 w-[1px] border-r border-dotted border-[#b8860b]/40" />

                    {["top-2 left-2 border-t border-l", "top-2 right-2 border-t border-r", "bottom-2 left-2 border-b border-l", "bottom-2 right-2 border-b border-r"]
                      .map((c, i) => <div key={i} className={`absolute w-2 h-2 border-[#b8860b]/50 ${c}`} />)}

                    <div className="relative z-20 flex flex-col items-center gap-2 text-center">
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity }}
                        className="text-2xl"
                      >🧧</motion.div>
                      <h3 className="text-white text-xs md:text-sm font-black uppercase tracking-wide leading-snug">
                        Sedikit Uang Jajan<br />Buat Beli Reddog hehehe...
                      </h3>
                      <p className="text-[#ffd700]/60 text-[10px] uppercase tracking-[0.3em] font-bold">
                        Maapin Kalo Dikit 🙏
                      </p>
                      <motion.div
                        animate={{ scale: [1, 1.2, 1], boxShadow: ["0 0 5px #b8860b", "0 0 15px #ffd700", "0 0 5px #b8860b"] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-1.5 rounded-full bg-[#ffd700] mt-1"
                      />
                    </div>
                  </div>
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="h-2 md:h-3 w-full" style={{ background: "linear-gradient(90deg, #9c6b00, #ffd700, #b8860b, #ffd700, #9c6b00)" }} />
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5 }}
        onClick={onBack}
        className="mt-8 text-[8px] md:text-[9px] text-white/20 uppercase tracking-[0.4em] hover:text-amber-300/60 transition-colors duration-300 font-semibold"
      >
        [ KEMBALI ]
      </motion.button>
    </motion.div>
  );
};

const MusicButton = ({ isPlaying, onToggle }: { isPlaying: boolean; onToggle: () => void }) => (
  <motion.button
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    onClick={onToggle}
    className="fixed top-5 right-5 z-50 w-11 h-11 rounded-full backdrop-blur-md flex items-center justify-center border transition-colors duration-300 shadow-lg"
    style={{
      background: "rgba(255,255,255,0.06)",
      borderColor: "rgba(255,255,255,0.12)",
    }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <motion.span
      animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
      transition={isPlaying ? { duration: 4, repeat: Infinity, ease: "linear" } : { duration: 0.3 }}
      className="text-lg"
    >
      {isPlaying ? "🎵" : "🔇"}
    </motion.span>
    {isPlaying && (
      <motion.div
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute inset-0 rounded-full border border-amber-400/30"
      />
    )}
  </motion.button>
);

export default function EidCard() {
  const [phase, setPhase] = useState<"envelope" | "letter">("envelope");
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const fireConfetti = useCallback(() => {
    const end = Date.now() + 5000;
    const colors = ["#ffd700", "#ff6b6b", "#a78bfa", "#34d399", "#fb923c"];
    const tick = () => {
      confetti({ particleCount: 6, angle: 60, spread: 55, origin: { x: 0 }, colors });
      confetti({ particleCount: 6, angle: 120, spread: 55, origin: { x: 1 }, colors });
      if (Date.now() < end) requestAnimationFrame(tick);
    };
    tick();
  }, []);

  const handleOpen = useCallback(() => {
    setPhase("letter");
    fireConfetti();
    if (audioRef.current) {
      audioRef.current.play().catch(() => { });
      setIsPlaying(true);
    }
  }, [fireConfetti]);

  const handleBack = useCallback(() => {
    setPhase("envelope");
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }, []);

  const toggleMusic = useCallback(() => {
    if (!audioRef.current) return;
    if (isPlaying) { audioRef.current.pause(); setIsPlaying(false); }
    else { audioRef.current.play(); setIsPlaying(true); }
  }, [isPlaying]);

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden bg-[#060412]">
      <NightSky />

      <audio ref={audioRef} src="/music/Lagu raya.mp3" loop />

      {phase === "letter" && <MusicButton isPlaying={isPlaying} onToggle={toggleMusic} />}
      <FloatingPetals active={phase === "letter"} />

      <AnimatePresence mode="wait">
        {phase === "envelope" ? (
          <EnvelopeScene key="env" onOpen={handleOpen} />
        ) : (
          <LetterScene key="letter" onBack={handleBack} />
        )}
      </AnimatePresence>
    </main>
  );
}