const services = [
  {
    title: "التصوير الفوتوغرافي",
    description: "تصوير أفراح، خطوبة، مناسبات وجلسات خاصة",
    icon: "📸",
  },
  {
    title: "قاعات الأفراح",
    description: "اختار القاعة المناسبة لمناسبتك وقارن الأسعار",
    icon: "🏛️",
  },
  {
    title: "الميكب والكوافير",
    description: "خبراء تجميل وكوافيرات لمظهرك في يومك الكبير",
    icon: "💄",
  },
  {
    title: "فساتين الزفاف",
    description: "فساتين زفاف وسهرة بتصميمات مختلفة",
    icon: "👗",
  },
  {
    title: "زينة السيارات",
    description: "تجهيز وتزيين السيارات للأفراح والمناسبات",
    icon: "🚘",
  },
  {
    title: "الهاند ميد",
    description: "ورود، إكسسوارات وهدايا ومنتجات هاند ميد",
    icon: "🎁",
  },
];

const steps = [
  {
    number: "01",
    title: "اختار الخدمة",
    text: "تصفح الخدمات ومقدميها واختار الأنسب ليك.",
  },
  {
    number: "02",
    title: "قارن الأسعار",
    text: "شوف التفاصيل والأسعار والتقييمات قبل الحجز.",
  },
  {
    number: "03",
    title: "احجز",
    text: "ابعت طلب الحجز وحدد الموعد والتفاصيل.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0b0d] text-[#f5f1ea]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0b0d]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#c9a36a] text-lg font-bold text-[#c9a36a]">
              TM
            </div>

            <div>
              <div className="text-lg font-bold">تايسون ميديا</div>
              <div className="text-xs text-white/50">TYSON MEDIA</div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-white/70 md:flex">
            <a href="#services" className="transition hover:text-[#c9a36a]">
              الخدمات
            </a>
            <a href="#how" className="transition hover:text-[#c9a36a]">
              إزاي بنشتغل؟
            </a>
            <a href="#providers" className="transition hover:text-[#c9a36a]">
              مقدمي الخدمات
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="/login"
              className="hidden rounded-xl px-4 py-2 text-sm text-white/80 transition hover:bg-white/5 md:block"
            >
              تسجيل الدخول
            </a>

            <a
              href="/register"
              className="rounded-xl bg-[#c9a36a] px-4 py-2 text-sm font-bold text-black transition hover:bg-[#e2c28c]"
            >
              إنشاء حساب
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,163,106,0.18),transparent_35%)]" />

        <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-4 py-20 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-[#c9a36a]/30 bg-[#c9a36a]/10 px-4 py-2 text-sm text-[#e2c28c]">
              ✦ كل خدمات مناسبتك في مكان واحد
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[1.15] sm:text-6xl lg:text-7xl">
              مناسبتك تبدأ
              <span className="block text-[#c9a36a]">من هنا.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/60">
              تايسون ميديا منصة تجمعلك خدمات الأفراح والمناسبات في مكان واحد.
              اختار، قارن، واحجز بسهولة.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#services"
                className="rounded-2xl bg-[#c9a36a] px-7 py-4 text-center font-bold text-black transition hover:bg-[#e2c28c]"
              >
                اكتشف الخدمات
              </a>

              <a
                href="/register"
                className="rounded-2xl border border-white/15 px-7 py-4 text-center font-bold transition hover:border-[#c9a36a] hover:text-[#c9a36a]"
              >
                سجل كمقدم خدمة
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-8 text-sm">
              <div>
                <div className="text-2xl font-black text-[#c9a36a]">100+</div>
                <div className="mt-1 text-white/40">خدمة</div>
              </div>

              <div>
                <div className="text-2xl font-black text-[#c9a36a]">50+</div>
                <div className="mt-1 text-white/40">مقدم خدمة</div>
              </div>

              <div>
                <div className="text-2xl font-black text-[#c9a36a]">24/7</div>
                <div className="mt-1 text-white/40">متاحين ليك</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative mx-auto max-w-lg">
              <div className="absolute -inset-10 rounded-full bg-[#c9a36a]/10 blur-3xl" />

              <div className="relative rounded-[40px] border border-white/10 bg-[#151518] p-5 shadow-2xl">
                <div className="rounded-[30px] border border-white/10 bg-[#0f0f12] p-8">
                  <div className="mb-8 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-white/40">TYSON MEDIA</p>
                      <h2 className="mt-2 text-2xl font-bold">
                        خطط لمناسبتك
                      </h2>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c9a36a]/10 text-2xl">
                      ✦
                    </div>
                  </div>

                  <div className="space-y-3">
                    {services.slice(0, 4).map((service) => (
                      <div
                        key={service.title}
                        className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                      >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#c9a36a]/10 text-xl">
                          {service.icon}
                        </div>

                        <div>
                          <div className="font-bold">{service.title}</div>
                          <div className="mt-1 text-xs text-white/40">
                            متاح للحجز الآن
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-t border-white/5 bg-[#0f0f12] py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-2xl">
            <div className="text-sm font-bold text-[#c9a36a]">
              خدماتنا
            </div>

            <h2 className="mt-3 text-4xl font-black sm:text-5xl">
              كل اللي محتاجه لمناسبتك
            </h2>

            <p className="mt-5 leading-8 text-white/50">
              من أول التصوير لحد آخر تفصيلة، هتلاقي مقدمي الخدمات اللي
              محتاجهم في مكان واحد.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <a
                href="/services"
                key={service.title}
                className="group rounded-3xl border border-white/10 bg-[#151518] p-6 transition duration-300 hover:-translate-y-1
