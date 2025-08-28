import project from '../project.json'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-900 to-black text-white">
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <p className="text-sm opacity-70 mb-4">SaaS • إطلاق مبكّر</p>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-snug">
          {project.title}
        </h1>
        <p className="mt-6 text-lg opacity-90">{project.one_liner}</p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a 
            href="#try" 
            className="px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-500 transition-colors"
          >
            {project.cta_label}
          </a>
          <a 
            href="#how" 
            className="px-6 py-3 rounded-lg border border-white/20 hover:bg-white/10 transition-colors"
          >
            كيف يعمل؟
          </a>
        </div>
      </section>

      <section id="features" className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-4 pb-12">
        {project.features.map((feature: string, index: number) => (
          <div 
            key={index} 
            className="rounded-xl bg-white/5 p-5 border border-white/10 hover:bg-white/10 transition-colors"
          >
            <h3 className="font-semibold mb-2">{feature}</h3>
            <p className="text-sm opacity-70">ميزة احترافية تحسّن تجربة المستخدم</p>
          </div>
        ))}
      </section>

      <section id="try" className="max-w-2xl mx-auto px-6 pb-16">
        <div className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center">
          <h3 className="text-2xl font-bold mb-3">ابدأ خلال أقل من دقيقة</h3>
          <form className="flex gap-2 justify-center max-w-md mx-auto">
            <input 
              className="flex-1 px-4 py-3 rounded-lg bg-black/40 border border-white/10 placeholder-white/50"
              placeholder={project.email_placeholder}
              type="email"
            />
            <button 
              type="submit"
              className="px-5 py-3 rounded-lg bg-purple-600 hover:bg-purple-500 transition-colors whitespace-nowrap"
            >
              أعطني الوصول
            </button>
          </form>
          <p className="mt-2 text-xs opacity-60">
            لن نرسل رسائل إزعاج. يمكنك الإلغاء في أي وقت.
          </p>
        </div>
      </section>

      <footer className="py-8 text-center opacity-60 border-t border-white/10">
        <p>© {new Date().getFullYear()} {project.title} — جميع الحقوق محفوظة.</p>
      </footer>
    </main>
  )
}