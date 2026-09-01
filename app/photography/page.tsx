const packages = [
  {
    name: "Silver",
    icon: "🥈",
    price: "يبدأ من",
    description: "اختيار مناسب للتغطيات البسيطة والسيشنات.",
    features: [
      "تصوير فوتوغرافي",
      "تعديل الصور",
      "تسليم الصور رقميًا",
    ],
  },
  {
    name: "Gold",
    icon: "🥇",
    price: "يبدأ من",
    description: "باكدج متكامل للأفراح والمناسبات.",
    features: [
      "تصوير فوتوغرافي",
      "تصوير فيديو",
      "تعديل احترافي",
      "تغطية موسعة",
    ],
  },
  {
    name: "Platinum",
    icon: "💎",
    price: "يبدأ من",
    description: "أعلى مستوى للتغطية والتفاصيل.",
    features: [
      "تصوير فوتوغرافي",
      "تصوير فيديو",
      "Drone",
      "تعديل احترافي",
      "تغطية كاملة",
      "تسليم مميز",
    ],
  },
];

const services = [
  "تصوير الأفراح",
  "تصوير الخطوبة",
  "السيشنات",
  "تصوير الفيديو",
  "التصوير الخارجي",
  "تصوير Drone",
];

export default function PhotographyPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0d] text-[#f5f1ea]">
      {/* Header */}
      <header className="border-b border-white/10 bg-[#0b0b0d]/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#c9a36a] font-black text-[#c9a36a]">
              TM
            </div>

            <div>
              <div className="font-black">تايسون ميديا</div>
              <div className="text-[10px] tracking-[3px] text-white/35">
                TYSON MEDIA
              </div>
            </div>
          </a>

          <a
            href="/"
            className="rounded-xl border border-white/10 px-4 py-2 text-sm text-white/60 hover:border-[#c9a36a] hover:text-[#c9a36a]"
          >
            الرئيسية
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,163,106,0.16),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-4 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full border border-[#c9a36a]/30 bg-[#c9a36a]/10 px-4 py-2 text-sm text-[#e2c28c]">
              📸 التصوير والفيديو والسيشنات
            </div>

            <h1 className="mt-6 text-5xl font-black leading-tight sm:text-6xl">
              خلّي لحظتك
              <span className="block text-[#c9a36a]">
                تستاهل تتوثق.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-9 text-white/50">
              اختار مصور أو فريق تصوير، قارن الباكدجات والأسعار، واحجز
              موعدك بسهولة.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-y border-white/5 bg-[#0f0f12] py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-black">
            الخدمات المتاحة
          </h2>

          <div className="mt-8 flex flex-wrap gap-3">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-white/10 bg-[#151518] px-5 py-3 text-sm text-white/70"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <div className="text-sm font-bold text-[#c9a36a]">
              الباكدجات
            </div>

            <h2 className="mt-3 text-4xl font-black sm:text-5xl">
              اختار الباكدج المناسب
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/40">
              تفاصيل الباكدج والسعر النهائي بيحددهم مقدم الخدمة حسب
              التغطية المطلوبة.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {packages.map((pkg, index) => (
              <div
                key={pkg.name}
                className={`relative rounded-[30px] border p-7 ${
                  index === 1
                    ? "border-[#c9a36a]/50 bg-[#c9a36a]/5"
                    : "border-white/10 bg-[#151518]"
                }`}
              >
                {index === 1 && (
                  <div className="absolute right-6 top-6 rounded-full bg-[#c9a36a] px-3 py-1 text-[10px] font-black text-black">
                    الأكثر اختيارًا
                  </div>
                )}

                <div className="text-4xl">{pkg.icon}</div>

                <h3 className="mt-5 text-2xl font-black">
                  {pkg.name}
                </h3>

                <p className="mt-3 leading-7 text-white/45">
                  {pkg.description}
                </p>

                <div className="mt-6 text-sm text-white/35">
                  {pkg.price}
                </div>

                <ul className="mt-6 space-y-3 border-t border-white/10 pt-6">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-white/65"
                    >
                      <span className="text-[#c9a36a]">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="/register"
                  className="mt-8 block rounded-2xl bg-[#c9a36a] px-5 py-4 text-center font-bold text-black transition hover:bg-[#e2c28c]"
                >
                  احجز الباكدج
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Rule */}
      <section className="border-y border-white/5 bg-[#0f0f12] py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="text-4xl">📅</div>

          <h2 className="mt-5 text-3xl font-black">
            الحجز متاح قبل الموعد بـ15 يوم
          </h2>

          <p className="mt-4 leading-8 text-white/45">
            التصوير والفيديو والسيشنات يمكن حجزها حتى 15 يوم قبل موعد
            الخدمة، حسب توافر مقدم الخدمة.
          </p>
        </div>
      </section>

      {/* Provider CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-[30px] border border-[#c9a36a]/20 bg-[#151518] p-8 sm:p-12">
            <div className="max-w-2xl">
              <div className="text-sm font-bold text-[#c9a36a]">
                لمقدمي خدمات التصوير
              </div>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                أضف خدماتك وباكدجاتك على تايسون ميديا
              </h2>

              <p className="mt-4 leading-8 text-white/45">
                حدد أسعارك، تفاصيل الباكدجات، مواعيدك، والعربون المطلوب
                واستقبل طلبات الحجز من العملاء.
              </p>

              <a
                href="/register"
                className="mt-7 inline-block rounded-2xl bg-[#c9a36a] px-6 py-4 font-bold text-black"
              >
                سجل كمقدم خدمة
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm text-white/30">
          © {new Date().getFullYear()} Tyson Media
        </div>
      </footer>
    </main>
  );
      }
