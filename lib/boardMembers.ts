export interface BoardMember {
  name: string;
  role: string;
  photo: string | null;
  photoPosition?: string;
  bio: string;
}

export const boardMembers: BoardMember[] = [
  {
    name: "Winny Chan",
    role: "Founder & Board President",
    photo: "/assets/board/winny-chan.png",
    photoPosition: "center 20%",
    bio: "Winny Chan\u2019s experience with infertility began through more than five years of fertility treatment, including IUI, IVF, pregnancy loss, and multiple failed IVF cycles. Through this experience, she identified gaps in fertility care, particularly limited access to supportive services that address mental, emotional, and overall well-being during treatment.\n\nRay of Light Fertility Foundation was established to address these unmet needs and is named in honor of the three sons Winny lost, each of whom she would have named Ray. The Foundation\u2019s purpose is to provide financial assistance, resources, and education to individuals and couples undergoing fertility treatment, with an emphasis on reducing financial barriers and expanding access to supportive services. Through grant program, education, and advocacy, Ray of Light Fertility Foundation seeks to improve access, choice, and support for those navigating fertility treatment.",
  },
  {
    name: "Jenna Wakefield",
    role: "Vice President",
    photo: "/assets/board/jenna-wakefield.jpeg",
    photoPosition: "center 15%",
    bio: "Jenna Wakefield is an accomplished marketing & sales leader with more than 20 years of experience helping organizations grow through strategic brand development, storytelling, event execution and partnerships. After leading high-performing teams at companies like Harley-Davidson, and working with clients like Visa, Nissan, and Polaris at multiple national agencies, she now runs her own consulting firm, 8 Angles LLC.\n\nJenna brings her leadership, clarity, and passion for helping others to the Ray of Light Fertility Foundation. Her commitment to the Foundation\u2019s mission is rooted in empathy and a profound belief in the transformative power of family. She is committed to supporting couples on their fertility journey\u2014providing hope, guidance, and access to the resources they need to build the families they dream of.\n\nFor Jenna, serving the Ray of Light Fertility Foundation is more than a professional role; it is a personal calling to help others experience the extraordinary gift that changed her life: becoming a parent.",
  },
  {
    name: "Raychel Pociluyko",
    role: "Secretary",
    photo: null,
    bio: "Raychel is a native of Wisconsin and has worked in the Milwaukee area as a Certified Lead Auditor and Quality Assurance Specialist for ten years. Raychel developed a deep appreciation for nonprofits that seek to improve the quality of life for our region; she believes every woman should have the support, resources, and financial assistance necessary to help expand their families.",
  },
  {
    name: "Angela Wilcox",
    role: "Grants Program Director & Board Director",
    photo: "/assets/board/angela-wilcox.jpg",
    bio: "Ray of Light Fertility Foundation is deeply important to Angela because she believes every couple who dreams of becoming loving parents deserves support and real opportunity. Her commitment to this mission derives from family and friends who have suffered through fertility challenges and loss. She hopes to help expand access to resources, reduce barriers, and ensure that no one feels alone as they navigate the fertility process.\n\nAngela has worked in the grants industry since 2015, supporting clients across the full spectrum of pre-award and post-award activities. She has held progressively responsible roles within both public and private institutions. Her experience spans grant accounting, proposal preparation and submission, financial management, compliance oversight, and comprehensive award administration. She has prepared proposals for and managed awards made by the NIH, NSF, NASA, DHS, CDC, USDA, Small Business Administration (SBA), state and foundations.",
  },
  {
    name: "Joseph (Joe) Gustafson",
    role: "Marketing / Board Member",
    photo: null,
    bio: "Professionally, Joe builds and scales brands by fusing hard analytics with authenticity. Over his career he\u2019s worked on brands local to global on growth initiatives, with boutique brands, agencies, startups, and global companies.\n\nPersonally, Joe is a father of two young girls and has experienced first hand the peaks and valleys of starting a family. Both of his daughters were born prematurely, his second 3 months early. Not only were her own early months challenging, but he experienced and connected first-hand with families in the NICU coping with and finding support for unexpected challenges\u2014some even after years of struggling with infertility.",
  },
  {
    name: "Melissa Stone",
    role: "Attorney / Board Member",
    photo: "/assets/board/melissa-stone.jpeg",
    bio: "Melissa Stone is a Shareholder and member of the Board of Directors of Lindner & Marsack, S.C. Ms. Stone\u2019s practice is solely dedicated to defending workers\u2019 compensation claims for the insurance industry and self-insured employers, including \u00a7 102.29 Wis. Stats. subrogation cases. Ms. Stone is a frequent lecturer and presenter on worker\u2019s compensation law topics in Wisconsin.\n\nMs. Stone received her law degree from Marquette University Law School and her undergraduate Bachelor of Science degree, magna cum laude, from Carroll University, where she double majored in Criminal Justice and Sociology, with minors in Social Work, Human Services and Accounting.",
  },
];
