import type { Metadata } from 'next'
import Image from 'next/image'
import type { ReactNode } from 'react'
import { FadeUp } from '@/components/animations/FadeUp'
import { NewsletterSignup } from '@/components/ui/NewsletterSignup'

export const metadata: Metadata = {
  title: 'Resources | Ray of Light Fertility Foundation',
  description:
    'Trustworthy guidance, recommended reading, community events, and peer support for people navigating fertility challenges in Wisconsin.',
}

/** Sections users can jump to from the banner. Order matches the page. */
const JUMP_LINKS = [
  { href: '#events', label: 'Events & Support' },
  { href: '#reading', label: 'Recommended Reading' },
  { href: '#podcasts', label: 'Podcasts' },
  { href: '#newsletters', label: 'Newsletters' },
]

function ArrowIcon() {
  return (
    <svg
      className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  )
}

/** External link styled as a card footer action. */
function ResourceLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group mt-5 inline-flex items-center text-sm font-semibold text-brand-primary transition-colors hover:text-brand-secondary"
    >
      {children}
      <ArrowIcon />
    </a>
  )
}

function Section({
  id,
  title,
  intro,
  tone = 'white',
  children,
}: {
  id: string
  title: string
  intro: string
  tone?: 'white' | 'cream'
  children: ReactNode
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-28 px-6 py-20 lg:scroll-mt-32 ${
        tone === 'cream' ? 'bg-brand-cream/30' : 'bg-white'
      }`}
    >
      <div className="mx-auto max-w-4xl">
        <FadeUp>
          <h2 className="text-2xl font-bold text-brand-dark sm:text-3xl">{title}</h2>
          <p className="mt-4 text-base leading-relaxed text-brand-text/70">{intro}</p>
        </FadeUp>
        <div className="mt-10 space-y-8">{children}</div>
      </div>
    </section>
  )
}

/**
 * A person paired with the resource directly above them: their photo, role,
 * and bio. Sits outside the resource card's link so the bio is not clickable
 * through to an unrelated page.
 */
function PersonNote({
  label,
  name,
  role,
  photo,
  photoPosition,
  children,
}: {
  label: string
  name: string
  role: string
  photo: string
  photoPosition?: string
  children: ReactNode
}) {
  return (
    <div className="-mt-4 rounded-2xl border border-gray-100 bg-brand-cream/30 p-8 shadow-sm">
      <div className="flex flex-col gap-6 sm:flex-row">
        <div className="relative mx-auto h-36 w-36 shrink-0 overflow-hidden rounded-full sm:mx-0">
          <Image
            src={photo}
            alt={name}
            fill
            className="object-cover"
            style={photoPosition ? { objectPosition: photoPosition } : undefined}
            sizes="144px"
          />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-muted">
            {label}
          </p>
          <h3 className="mt-2 text-lg font-bold text-brand-dark sm:text-xl">{name}</h3>
          <p className="mt-1 text-sm text-brand-muted">{role}</p>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-brand-text/70">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ResourcesPage() {
  return (
    <>
      {/* Banner */}
      <section className="relative overflow-hidden bg-brand-cream px-6 py-20 text-center sm:py-24">
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
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/80">
            Community events, peer support, and trustworthy guidance for people
            navigating fertility challenges.
          </p>
        </FadeUp>

        {/* Jump links so visitors can reach the section they came for */}
        <FadeUp delay={0.15} className="relative">
          <nav
            aria-label="Resource sections"
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            {JUMP_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full border border-white/40 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-brand-primary hover:bg-brand-primary hover:text-brand-dark"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </FadeUp>
      </section>

      <Section
        id="events"
        title="Events & Support in Wisconsin"
        intro="Ways to connect with others who understand, close to home."
      >
        <FadeUp delay={0.15}>
          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
            <div className="relative aspect-[3/2] w-full sm:aspect-[2/1]">
              <Image
                src="/assets/stock/wausau-walk-of-hope.jpg"
                alt="Walkers on a tree-lined path at the Wausau Walk of Hope"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 56rem, 100vw"
              />
            </div>
            <div className="p-8">
              <h3 className="text-lg font-bold text-brand-dark sm:text-xl">
                2026 Wausau Walk of Hope
              </h3>
              <p className="mt-2 text-sm font-medium text-brand-secondary">
                Saturday, September 26, 2026 at 12:00 PM
              </p>
              <p className="mt-1 text-sm text-brand-muted">
                East Gate Hall at Marathon Park, Wausau, Wisconsin
              </p>
              <p className="mt-4 text-base leading-relaxed text-brand-text/70">
                The Wausau Walk of Hope is a RESOLVE community event bringing together
                individuals and families impacted by infertility and family-building
                challenges for a day of connection, support, awareness, and hope. The
                event also connects attendees with fertility clinics, nonprofit
                organizations, support services, advocates, and other family-building
                resources.
              </p>
              <ResourceLink href="https://charity.pledgeit.org/2026WausauWOH">
                Register or Support the Walk
              </ResourceLink>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.25}>
          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
            <h3 className="text-lg font-bold text-brand-dark sm:text-xl">
              Wisconsin General Infertility Peer-Led Support Group
            </h3>
            <p className="mt-2 text-sm text-brand-muted">
              Free · Virtual on Zoom · Open to anyone in Wisconsin
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-text/70">
              A free RESOLVE support group for people navigating infertility and
              family-building challenges in Wisconsin. Virtual meetings provide a
              welcoming and confidential space to connect with others who understand the
              emotional and practical challenges that can come with infertility.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-text/70">
              Meetings are held virtually via Zoom, allowing individuals from throughout
              Wisconsin to participate. The group is peer-led and centered around
              connection, conversation, shared experiences, and support.
            </p>
            <ResourceLink href="https://resolve.org/support-groups/milwaukee-general-infertility-peer-led-support-group/">
              Find Upcoming Meetings
            </ResourceLink>
          </div>
        </FadeUp>

        {/* Paired with the walk and support group above: the person behind both */}
        <FadeUp delay={0.35}>
          <PersonNote
            label="About the Organizer"
            name="Katelyn Lang"
            role="RESOLVE Peer Support Group Leader · Organizer, Wausau Walk of Hope"
            photo="/assets/stock/katelyn-lang-night-of-hope.jpg"
            photoPosition="center top"
          >
            <p>
              Katelyn Lang is a longtime infertility advocate in Wisconsin, a RESOLVE
              Peer Support Group Leader, and the organizer of the Wausau Walk of Hope.
              After experiencing years of infertility and ultimately building her family
              through IVF, Katelyn became passionate about helping others feel less alone
              while navigating infertility and family building.
            </p>
            <p>
              She also serves on the steering committee of the Building Families Alliance
              of Wisconsin, advocating for greater access to fertility care and insurance
              coverage across the state. In 2025, Katelyn received RESOLVE&apos;s Barbara
              Collura Service Award in recognition of her service to the family-building
              community.
            </p>
          </PersonNote>
        </FadeUp>
      </Section>

      <Section
        id="reading"
        title="Recommended Reading"
        intro="Books and resources recommended by our community."
        tone="cream"
      >
        <FadeUp delay={0.15}>
          <a
            href="https://lanamanikowski.com/book"
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
          >
            <h3 className="text-lg font-bold text-brand-dark transition-colors group-hover:text-brand-secondary sm:text-xl">
              &ldquo;So Now What?&rdquo; Create a Life You Love Without the
              Children You Always Dreamed Of
            </h3>
            <p className="mt-2 text-sm text-brand-muted">
              By Lana Manikowski
            </p>
            <span className="mt-4 inline-flex items-center text-sm font-semibold text-brand-primary transition-colors group-hover:text-brand-secondary">
              Learn More
              <ArrowIcon />
            </span>
          </a>
        </FadeUp>

        <FadeUp delay={0.25}>
          <a
            href="https://wsupress.wayne.edu/9780814350652/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
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
                <h3 className="text-lg font-bold text-brand-dark transition-colors group-hover:text-brand-secondary sm:text-xl">
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
                <span className="mt-5 inline-flex items-center text-sm font-semibold text-brand-primary transition-colors group-hover:text-brand-secondary">
                  Learn More
                  <ArrowIcon />
                </span>
              </div>
            </div>
          </a>
        </FadeUp>

        {/* Paired with the book above: one of its co-editors */}
        <FadeUp delay={0.35}>
          <PersonNote
            label="About the Co-Editor"
            name="Maria Novotny, PhD"
            role="Co-Director, The ART of Infertility"
            photo="/assets/stock/maria-novotny.jpg"
          >
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
          </PersonNote>
        </FadeUp>
      </Section>

      <Section
        id="podcasts"
        title="Podcasts"
        intro="Honest conversations and expert guidance on fertility and women's health."
      >
        <FadeUp delay={0.15}>
          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
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
                <div className="flex flex-wrap gap-6">
                  <ResourceLink href="https://podcasts.apple.com/us/podcast/call-your-doctor/id1880915808">
                    Apple Podcasts
                  </ResourceLink>
                  <ResourceLink href="https://open.spotify.com/episode/0ND8re4jAuQHyVRK35dmJm">
                    Spotify
                  </ResourceLink>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </Section>

      <Section
        id="newsletters"
        title="Newsletters"
        intro="Perspectives and stories from the fertility community."
        tone="cream"
      >
        <FadeUp delay={0.15}>
          <a
            href="https://fertilityunfiltered.substack.com/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&utm_id=97760_v0_s00_e0_tv3_a1dennhaw4po1r"
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
          >
            <h3 className="text-lg font-bold text-brand-dark transition-colors group-hover:text-brand-secondary sm:text-xl">
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
            <span className="mt-4 inline-flex items-center text-sm font-semibold text-brand-primary transition-colors group-hover:text-brand-secondary">
              Subscribe on Substack
              <ArrowIcon />
            </span>
          </a>
        </FadeUp>
      </Section>

      {/* More Coming Soon */}
      <section className="bg-white px-6 py-16">
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
