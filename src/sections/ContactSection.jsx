"use client"
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";

const ParticlesCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const particles = [];
    const particleCount = 50;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const createParticle = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.1,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3
    });

    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle());
      }
    };

    const updateParticles = () => {
      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
      });
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 165, 0, 0.5)';
        ctx.fill();
      });
    };

    const animate = () => {
      updateParticles();
      drawParticles();
      requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      initParticles();
    });

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
    />
  );
};

const GlowBadge = ({ children }) => (
  <div 
    className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-6 animate-float"
  >
    {children}
  </div>
);

const ContactSection = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:4nshumankrsingh@gmail.com";
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-linear-to-br from-gray-900 to-black" id="contact">
      <div className="w-full max-w-4xl relative">
        <div 
          className="relative overflow-hidden rounded-3xl border border-white/10"
          style={{
            background: "linear-gradient(to right, rgba(249, 115, 22, 0.1), rgba(234, 88, 12, 0.1))",
            backdropFilter: "blur(24px)",
          }}
        >
          <ParticlesCanvas />
          
          <div className="relative z-10 p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left max-w-xl">
                <GlowBadge>
                  <span className="text-white/80 text-sm font-medium">
                    Available for work
                  </span>
                </GlowBadge>
                
                <h2 
                  className="text-4xl md:text-5xl font-bold bg-gradient-move"
                >
                  Let's Build Something Amazing Together
                </h2>
                
                <p className="mt-4 text-white/80 text-lg leading-relaxed">
                  I'm looking for opportunities as a Full-Stack Engineer—let's
                  connect and discuss how I can contribute to your team.
                </p>
              </div>

              <div className="relative group">
                <div 
                  className="absolute inset-0 rounded-2xl opacity-50 transition-all duration-300 bg-linear-to-r from-orange-500 to-orange-600 blur-lg"
                />
                <button
                  onClick={handleEmailClick}
                  className="relative flex items-center gap-2 px-8 py-4 rounded-2xl bg-black text-white transition-all duration-300 hover:scale-105"
                >
                  <span className="font-medium">Contact Me</span>
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;