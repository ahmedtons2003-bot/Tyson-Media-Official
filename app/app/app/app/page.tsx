const categories = [
  {
    icon: "📸",
    title: "التصوير والفيديو",
    description:
      "تصوير أفراح ومناسبات وسيشنات وفيديو ودرون بأكثر من باكدج.",
    href: "/photography",
  },
  {
    icon: "🖨️",
    title: "الطباعة",
    description:
      "مجات وتيشيرتات وأقلام وتابلوهات وصور وألبومات ودعوات وهدايا مخصصة.",
    href: "/printing",
  },
  {
    icon: "🏛️",
    title: "القاعات",
    description:
      "اختار قاعة مناسبتك وقارن التفاصيل والأسعار والباكدجات.",
    href: "/halls",
  },
  {
    icon: "🚗",
    title: "العربيات",
    description:
      "عربيات للأفراح والمناسبات مع باكدجات وخيارات مختلفة.",
    href: "/cars",
  },
];

const packages = [
  {
    name: "Silver",
    icon: "🥈",
    description: "اختيار اقتصادي ومناسب للميزانية.",
  },
  {
    name: "Gold",
    icon: "🥇",
    description: "اختيار متوازن بمميزات أكثر.",
  },
  {
    name: "Platinum",
    icon: "💎",
    description: "الباكدج الكامل لأعلى مستوى من الخدمة.",
  },
];

const bookingRules = [
  {
    icon: "📸",
    title: "التصوير والفيديو",
    days: "15 يوم",
    text: "يمكن الحجز قبل موعد الخدمة بـ15 يوم على الأقل.",
  },
  {
    icon: "🖨️",
    title: "الطباعة",
    days: "30 يوم",
    text: "يمكن الحجز قبل موعد الاستلام بـ30 يوم على الأقل.",
  },
  {
    icon: "🏛️",
    title: "القاعات",
    days: "30 يوم",
    text: "يمكن الحجز قبل موعد المناسبة بـ30 يوم على الأقل.",
  },
  {
    icon: "🚗",
    title: "العربيات",
    days: "30 يوم",
    text: "يمكن الحجز قبل موعد المناسبة بـ30 يوم على الأقل.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0b0d] text-[#f5f1ea]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0b0d]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#c9a36a] text-sm font-black text-[#c9a36a]">
              TM
            </div>

            <div>
              <div className="text-lg font-black">تايسون ميديا</div>
              <div className="text-[10px] tracking-[3px] text-white/40">
                TYSON MEDIA
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-white/70 md:flex">
            <a
              href="#categories"
              className="transition hover:text-[#c9a36a]"
            >
              الأقسام
            </a>

            <a
              href="#packages"
              className="transition hover:text-[#c9a36a]"
            >
              الباكدجات
            </a>

            <a
              href="#booking"
              className="transition hover:text-[#c9a36a]"
            >
              نظام الحجز
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="/login"
              className="hidden rounded-xl px-4 py-2 text-sm text-white/70 transition hover:bg-white/5 hover:text-white md:block"
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
        <div className="absolute -left-40 top-40 h-80 w-80 rounded-full bg-[#c9a36a]/5 blur-3xl" />

        <div className="relative mx-auto grid min-h-[700px] max-w-7xl items-center gap-12 px-4 py-20 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-[#c9a36a]/30 bg-[#c9a36a]/10 px-4 py-2 text-sm text-[#e2c28c]">
              ✦ منصة واحدة لكل احتياجات مناسبتك
            </div>

            <h1 className="text-5xl font-black leading-[1.12] sm:text-6xl lg:text-7xl">
              مناسبتك تبدأ
              <span className="block text-[#c9a36a]">
                من هنا.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-9 text-white/55">
              تايسون ميديا تجمعلك التصوير والفيديو، الطباعة، القاعات
              والعربيات في منصة واحدة. اختار الباكدج المناسب وقارن واحجز
              بسهولة.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#categories"
                className="rounded-2xl bg-[#c9a36a] px-7 py-4 text-center font-bold text-black transition hover:bg-[#e2c28c]"
              >
                اكتشف الأقسام
              </a>

              <a
                href="/register"
                className="rounded-2xl border border-white/15 px-7 py-4 text-center font-bold transition hover:border-[#c9a36a] hover:text-[#c9a36a]"
              >
                سجل كمقدم خدمة
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-8">
              <div>
                <div className="text-2xl font-black text-[#c9a36a]">
                  4
                </div>
                <div className="mt-1 text-sm text-white/40">
                  أقسام رئيسية
                </div>
              </div>

              <div>
                <div className="text-2xl font-black text-[#c9a36a]">
                  3
                </div>
                <div className="mt-1 text-sm text-white/40">
                  مستويات باكدج
                </div>
              </div>

              <div>
                <div className="text-2xl font-black text-[#c9a36a]">
                  24/7
                </div>
                <div className="mt-1 text-sm text-white/40">
                  منصة متاحة
                </div>
              </div>
            </div>
          </div>

          {/* Hero Card */}
          <div className="hidden lg:block">
            <div className="relative mx-auto max-w-lg">
              <div className="absolute -inset-10 rounded-full bg-[#c9a36a]/10 blur-3xl" />

              <div className="relative rounded-[40px] border border-white/10 bg-[#151518] p-5 shadow-2xl">
                <div className="rounded-[30px] border border-white/10 bg-[#0f0f12] p-7">
                  <div className="mb-7 flex items-center justify-between">
                    <div>
                      <p className="text-xs tracking-[3px] text-white/30">
                        TYSON MEDIA
                      </p>

                      <h2 className="mt-2 text-2xl font-black">
                        اختار خدمتك
                      </h2>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c9a36a]/10 text-xl">
                      ✦
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {categories.map((category) => (
                      <a
                        key={category.title}
                        href={category.href}
                        className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-[#c9a36a]/50"
                      >
                        <div className="text-2xl">
                          {category.icon}
                        </div>

                        <div className="mt-3 text-sm font-bold">
                          {category.title}
                        </div>
                      </a>
                    ))}
                  </div>

                  <div className="mt-5 rounded-2xl border border-[#c9a36a]/20 bg-[#c9a36a]/5 p-4">
                    <div className="text-xs text-white/40">
                      الباكدجات المتاحة
                    </div>

                    <div className="mt-3 flex gap-2">
                      {packages.map((pkg) => (
                        <div
                          key={pkg.name}
                          className="flex-1 rounded-xl bg-white/5 px-2 py-3 text-center"
                        >
                          <div>{pkg.icon}</div>
                          <div className="mt-1 text-[10px] font-bold">
                            {pkg.name}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section
        id="categories"
        className="border-t border-white/5 bg-[#0f0f12] py-24"
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-2xl">
            <div className="text-sm font-bold text-[#c9a36a]">
              الأقسام
            </div>

            <h2 className="mt-3 text-4xl font-black sm:text-5xl">
              كل اللي محتاجه
              <span className="text-[#c9a36a]"> في مكان واحد</span>
            </h2>

            <p className="mt-5 leading-8 text-white/45">
              اختار القسم، شوف مقدمي الخدمات، قارن الباكدجات والأسعار،
              وبعدها احجز الموعد المناسب.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {categories.map((category, index) => (
              <a
                key={category.title}
                href={category.href}
                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-[#151518] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#c9a36a]/50"
              >
                <div className="absolute left-0 top-0 h-32 w-32 rounded-full bg-[#c9a36a]/5 blur-3xl" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#c9a36a]/10 text-3xl">
                      {category.icon}
                    </div>

                    <span className="text-xs text-white/20">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-7 text-2xl font-black transition group-hover:text-[#c9a36a]">
                    {category.title}
                  </h3>

                  <p className="mt-3 max-w-md leading-7 text-white/45">
                    {category.description}
                  </p>

                  <div className="mt-7 text-sm font-bold text-[#c9a36a]">
                    استكشف القسم ←
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <div className="text-sm font-bold text-[#c9a36a]">
              الباكدجات
            </div>

            <h2 className="mt-3 text-4xl font-black sm:text-5xl">
              اختار المستوى المناسب ليك
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/45">
              كل مقدم خدمة يقدر يقدم باكدجاته الخاصة، والأسعار والتفاصيل
              بتختلف حسب الخدمة.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {packages.map((pkg, index) => (
              <div
                key={pkg.name}
                className={`rounded-3xl border p-8 ${
                  index === 1
                    ? "border-[#c9a36a]/50 bg-[#c9a36a]/5"
                    : "border-white/10 bg-[#151518]"
                }`}
              >
                <div className="text-4xl">{pkg.icon}</div>

                <h3 className="mt-5 text-2xl font-black">
                  {pkg.name}
                </h3>

                <p className="mt-3 leading-7 text-white/45">
                  {pkg.description}
                </p>

                <div className="mt-7 border-t border-white/10 pt-5 text-sm text-white/40">
                  التفاصيل والسعر يحددهم مقدم الخدمة
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Rules */}
      <section
        id="booking"
        className="border-y border-white/5 bg-[#0f0f12] py-24"
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-2xl">
            <div className="text-sm font-bold text-[#c9a36a]">
              نظام الحجز
            </div>

            <h2 className="mt-3 text-4xl font-black sm:text-5xl">
              احجز في الوقت المناسب
            </h2>

            <p className="mt-5 leading-8 text-white/45">
              النظام بيتحقق تلقائيًا من الفترة المطلوبة قبل الموعد حسب نوع
              الخدمة.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {bookingRules.map((rule) => (
              <div
                key={rule.title}
                className="rounded-3xl border border-white/10 bg-[#151518] p-6"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#c9a36a]/10 text-2xl">
                  {rule.icon}
                </div>

                <h3 className="mt-5 font-bold">{rule.title}</h3>

                <div className="mt-3 text-2xl font-black text-[#c9a36a]">
                  {rule.days}
                </div>

                <p className="mt-3 text-sm leading-6 text-white/40">
                  {rule.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Provider CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="relative overflow-hidden rounded-[35px] border border-[#c9a36a]/20 bg-[#151518] p-8 sm:p-12">
            <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-[#c9a36a]/10 blur-3xl" />

            <div className="relative max-w-2xl">
              <div className="text-sm font-bold text-[#c9a36a]">
                لمقدمي الخدمات
              </div>

              <h2 className="mt-3 text-4xl font-black sm:text-5xl">
                عندك خدمة؟
                <span className="block text-[#c9a36a]">
                  خلي العملاء يلاقوك.
                </span>
              </h2>

              <p className="mt-5 leading-8 text-white/45">
                سجل كمقدم خدمة، أضف خدماتك وباكدجاتك وأسعارك، واستقبل طلبات
                الحجز من العملاء.
              </p>

              <a
                href="/register"
                className="mt-8 inline-block rounded-2xl bg-[#c9a36a] px-7 py-4 font-bold text-black transition hover:bg-[#e2c28c]"
              >
                ابدأ كمقدم خدمة
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="font-bold">تايسون ميديا</div>

            <div className="mt-1 text-xs text-white/30">
              TYSON MEDIA OFFICIAL
            </div>
          </div>

          <div className="text-sm text-white/30">
            © {new Date().getFullYear()} Tyson Media. جميع الحقوق محفوظة.
          </div>
        </div>
      </footer>
    </main>
  );
}
