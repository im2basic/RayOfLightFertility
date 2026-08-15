import type { Metadata } from 'next'
import Image from 'next/image'
import { FadeUp } from '@/components/animations/FadeUp'
import { NewsletterSignup } from '@/components/ui/NewsletterSignup'

export const metadata: Metadata = {
  title: 'Resources | Ray of Light Fertility Foundation',
  description:
    'Trustworthy guidance, recommended reading, and support resources for people navigating fertility challenges.',
}

export default function ResourcesPage() {
  return (
    <>
      {/* Banner */}
      <section className="relative px-6 py-20 text-center sm:py-24 bg-brand-cream overflow-hidden">
        <Image
          src="/assets/stock/sunlit-path.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(45,41,38,0.85) 0%, rgba(45,41,38,0.65) 50%, rgba(45,41,38,0.45) 100%)',
          }}
        />
        <FadeUp className="relative">
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Resources
          </h1>
        </FadeUp>
      </section>

      {/* Recommended Reading */}
      <section className="px-6 py-20 bg-white">
        <div className="mx-auto max-w-4xl">
          <FadeUp>
            <h2 className="text-2xl font-bold text-brand-dark sm:text-3xl">
              Recommended Reading
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-text/70">
              Books and resources recommended by our community.
            </p>
          </FadeUp>

          <FadeUp delay={0.15}>
            <a
              href="https://lanamanikowski.com/book"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 block rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              <h3 className="text-lg font-bold text-brand-dark group-hover:text-brand-secondary transition-colors sm:text-xl">
                &ldquo;So Now What?&rdquo; Create a Life You Love Without the
                Children You Always Dreamed Of
              </h3>
              <p className="mt-2 text-sm text-brand-muted">
                By Lana Manikowski
              </p>
              <span className="mt-4 inline-flex items-center text-sm font-semibold text-brand-primary group-hover:text-brand-secondary transition-colors">
                Learn More
                <svg
                  className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </a>
          </FadeUp>

          <FadeUp delay={0.25}>
            <a
              href="https://wsupress.wayne.edu/9780814350652/"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 block rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="flex flex-col gap-6 sm:flex-row">
                <div className="mx-auto w-40 shrink-0 sm:mx-0 sm:w-48">
                  <Image
                    src="/assets/stock/infertilities-a-curation.jpg"
                    alt="Cover of Infertilities, a Curation"
                    width={800}
                    height={1143}
                    className="w-full rounded-xl shadow-sm ring-1 ring-black/5"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-dark group-hover:text-brand-secondary transition-colors sm:text-xl">
                    &ldquo;Infertilities, a Curation&rdquo;
                  </h3>
                  <p className="mt-2 text-sm text-brand-muted">
                    Edited by Elizabeth Horn, Maria Novotny, and Robin Silbergleid
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-brand-text/70">
                    An anthology of personal narratives, poetry, and visual art that
                    gives language to what infertility actually feels like from the
                    inside. The collection gathers voices from women, men, nonbinary,
                    and transgender contributors across many kinds of families,
                    following the emotional, physical, and psychological weight of
                    diagnosis, treatment, adoption, pregnancy loss, and building a
                    meaningful life without children.
                  </p>
                  <p className="mt-3 text-sm text-brand-muted">
                    Wayne State University Press, 2023. 272 pages with 55 color
                    illustrations.
                  </p>
                  <span className="mt-5 inline-flex items-center text-sm font-semibold text-brand-primary group-hover:text-brand-secondary transition-colors">
                    Learn More
                    <svg
                      className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          </FadeUp>

          {/* Paired with the book above: one of its co-editors */}
          <FadeUp delay={0.3}>
            <div className="mt-4 rounded-2xl border border-gray-100 bg-brand-cream/30 p-8 shadow-sm">
              <div className="flex flex-col gap-6 sm:flex-row">
                <div className="relative mx-auto h-32 w-32 shrink-0 overflow-hidden rounded-full sm:mx-0">
                  <Image
                    src="/assets/stock/maria-novotny.jpg"
                    alt="Maria Novotny, PhD"
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-muted">
                    About the Co-Editor
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-brand-dark sm:text-xl">
                    Maria Novotny, PhD
                  </h3>
                  <p className="mt-1 text-sm text-brand-muted">
                    Co-Director, The ART of Infertility
                  </p>
                  <div className="mt-4 space-y-4 text-base leading-relaxed text-brand-text/70">
                    <p>
                      Maria Novotny (she/her) is an Associate Professor of English at
                      the University of Wisconsin-Milwaukee in the Rhetoric,
                      Professional Writing, and Community Engagement program. Drawing
                      on a reproductive justice framework, she writes about
                      reproductive advocacy, in particular infertility and recurrent
                      reproductive loss. Her co-edited collection Infertilities, A
                      Curation (Wayne State University Press, 2023) portrays the
                      ranging experiences of infertility in art and writing.
                    </p>
                    <p>
                      This collection is directly tied to her work as the Co-Director
                      for The ART of Infertility, which is an arts-based infertility
                      storytelling project. In 2018, the organization was recognized by
                      RESOLVE: The National Infertility Association for its innovative
                      approach to infertility advocacy via the arts and storytelling.
                    </p>
                    <p>
                      As a volunteer, Maria works closely with the Building Families
                      Alliance of WI, which is a coalition of Wisconsinites advocating
                      for fertility-friendly state legislation and reducing inequities
                      to family building.
                    </p>
                    <p>
                      Be sure to check out her new exhibit, In a State of IF, at MIAD
                      in the Layton Gallery from August 17 to November 21, 2026. Maria
                      is also a proud adoptive mom of a 7-year-old girl whom she
                      adopted with her husband in Stevens Point, WI.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Podcasts */}
      <section className="px-6 py-20 bg-brand-cream/30">
        <div className="mx-auto max-w-4xl">
          <FadeUp>
            <h2 className="text-2xl font-bold text-brand-dark sm:text-3xl">
              Podcasts
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-text/70">
              Honest conversations and expert guidance on fertility and women&apos;s health.
            </p>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="group mt-10 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
              <div className="flex flex-col gap-6 sm:flex-row">
                <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-xl sm:h-auto sm:w-48">
                  <Image
                    src="/assets/stock/call-your-doctor-podcast.png"
                    alt="Call Your Doctor podcast cover art"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-dark sm:text-xl">
                    Call Your Doctor
                  </h3>
                  <p className="mt-2 text-sm text-brand-muted">
                    Hosted by Dr. Lucky Sekhon &amp; Dr. Alicia Robbins
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-brand-text/70">
                    A women&apos;s health podcast hosted by Dr. Lucky Sekhon, fertility
                    specialist and OB/GYN, and Dr. Alicia Robbins, perimenopause and
                    hormone expert. Together, they deliver relatable, evidence-based
                    advice on topics such as hormones, egg freezing, perimenopause,
                    sexual health, aging, and navigating today&apos;s confusing world of
                    women&apos;s health.
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-brand-text/70">
                    Every Monday they dive into honest conversations, real-life stories,
                    and actionable medical guidance in smart, digestible episodes designed
                    for busy women who want real science without the overwhelm.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-4">
                    <a
                      href="https://podcasts.apple.com/us/podcast/call-your-doctor/id1880915808"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-semibold text-brand-primary hover:text-brand-secondary transition-colors"
                    >
                      Apple Podcasts
                      <svg
                        className="ml-1.5 h-4 w-4 transition-transform hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </a>
                    <a
                      href="https://open.spotify.com/episode/0ND8re4jAuQHyVRK35dmJm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-semibold text-brand-primary hover:text-brand-secondary transition-colors"
                    >
                      Spotify
                      <svg
                        className="ml-1.5 h-4 w-4 transition-transform hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Newsletters */}
      <section className="px-6 py-20 bg-white">
        <div className="mx-auto max-w-4xl">
          <FadeUp>
            <h2 className="text-2xl font-bold text-brand-dark sm:text-3xl">
              Newsletters
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-text/70">
              Perspectives and stories from the fertility community.
            </p>
          </FadeUp>

          <FadeUp delay={0.15}>
            <a
              href="https://fertilityunfiltered.substack.com/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&utm_id=97760_v0_s00_e0_tv3_a1dennhaw4po1r"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 block rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              <h3 className="text-lg font-bold text-brand-dark group-hover:text-brand-secondary transition-colors sm:text-xl">
                Project Prologue: Field Dispatches
              </h3>
              <p className="mt-2 text-sm text-brand-muted">
                By Elizabeth Carr
              </p>
              <p className="mt-4 text-base leading-relaxed text-brand-text/70">
                This space is about what happens after the science works: where family
                building, policy, identity, and ethics collide. Written from the lived
                perspective of the first U.S. IVF baby and the endurance it takes to
                keep going.
              </p>
              <span className="mt-4 inline-flex items-center text-sm font-semibold text-brand-primary group-hover:text-brand-secondary transition-colors">
                Subscribe on Substack
                <svg
                  className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </a>
          </FadeUp>
        </div>
      </section>

      {/* More Coming Soon */}
      <section className="px-6 py-16 bg-brand-cream/30">
        <div className="mx-auto max-w-lg text-center">
          <FadeUp>
            <p className="text-base leading-relaxed text-brand-muted">
              More resources coming soon - trustworthy guidance, financial
              support information, and genuine community for people navigating
              fertility challenges. Check back soon.
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="mt-8">
              <p className="mb-3 text-sm font-medium text-brand-dark">
                Stay in the loop
              </p>
              <NewsletterSignup className="mx-auto" />
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
