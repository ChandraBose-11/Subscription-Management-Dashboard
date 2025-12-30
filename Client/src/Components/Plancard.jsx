import { useRef, useState } from "react";

export default function PlanCard({ plan }) {
  const buttonRef = useRef(null);
  const [toast, setToast] = useState(null);
  const [particles, setParticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  /* 🔊 Sound */
  const playSound = () => {
    const audio = new Audio("/success.mp3");
    audio.volume = 0.6;
    audio.play();
  };

  /* 📳 Vibration (mobile) */
  const vibrate = () => {
    if (navigator.vibrate) {
      navigator.vibrate([100, 50, 100]);
    }
  };

  /* 🎆 Firework + Confetti */
  const celebrationBurst = () => {
    const rect = buttonRef.current.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    const sparks = Array.from({ length: 70 }).map((_, i) => ({
      id: i + Math.random(),
      x,
      y,
      angle: Math.random() * 360,
      distance: 120 + Math.random() * 140,
      size: 4 + Math.random() * 4,
      color: `hsl(${Math.random() * 360}, 90%, 60%)`,
    }));

    setParticles(sparks);
    setTimeout(() => setParticles([]), 1600);
  };

  /* 🚀 Subscribe */
  const handleSubscribe = async () => {
    setLoading(true);
    setToast(null);

    try {
      const res = await fetch(
        `http://localhost:5000/api/subscribe/${plan._id}`,
        { method: "POST", credentials: "include" }
      );

      const data = await res.json();

      if (!res.ok) {
        setToast({ type: "error", message: data.message || "Subscription failed" });
      } else {
        setSuccess(true);
        setToast({ type: "success", message: "Subscription Activated 🎉" });
        playSound();
        vibrate();
        celebrationBurst();
      }
    } catch (err) {
      setToast({ type: "error", message: err.message || "Something went wrong" });
    } finally {
      setLoading(false);
      setTimeout(() => setToast(null), 3000);
    }
  };

  return (
    <>
      {/* 🎆 PARTICLES */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="fixed z-50 rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: p.x,
            top: p.y,
            backgroundColor: p.color,
            animation: "firework 1.4s ease-out forwards",
            "--angle": `${p.angle}deg`,
            "--distance": `${p.distance}px`,
          }}
        />
      ))}

      {/* 🔔 TOAST */}
      {toast && (
        <div className="fixed top-6 right-6 z-50">
          <div
            className={`rounded-xl px-6 py-4 shadow-2xl text-sm font-semibold text-white
              ${
                toast.type === "success"
                  ? "bg-gradient-to-r from-green-500 to-emerald-500 animate-pop"
                  : "bg-gradient-to-r from-red-500 to-rose-500 animate-shake"
              }`}
          >
            {toast.message}
          </div>
        </div>
      )}

      {/* 📦 PLAN CARD */}
      <div className="relative flex flex-col rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
        <div className="flex flex-col flex-1 p-6 pl-8">

          <h2 className="text-xl font-semibold">{plan.name}</h2>

          <div className="mt-4">
            <span className="text-4xl font-extrabold">₹{plan.price}</span>
            <span className="ml-1 text-sm text-gray-500">
              / {plan.duration} days
            </span>
          </div>

          <ul className="mt-6 space-y-3 flex-1">
            {plan.features.map((f, i) => (
              <li key={i} className="flex items-center gap-3 text-sm">
                <span className="h-5 w-5 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 font-bold">
                  ✓
                </span>
                {f}
              </li>
            ))}
          </ul>

          {/* 🔘 MORPHING BUTTON */}
          <button
            ref={buttonRef}
            onClick={handleSubscribe}
            disabled={loading || success}
            className={`mt-6 w-full rounded-xl py-3 text-sm font-semibold text-white transition-all duration-300
              ${
                success
                  ? "bg-green-500 scale-95"
                  : "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-90"
              }`}
          >
            {loading
              ? "Processing..."
              : success
              ? "✔ Subscribed"
              : "Subscribe"}
          </button>
        </div>
      </div>
    </>
  );
}
