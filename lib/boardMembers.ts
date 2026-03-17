export interface BoardMember {
  name: string;
  role: string;
  photo: string | null;
  bio: string;
}

export const boardMembers: BoardMember[] = [
  {
    name: "Winny Chan",
    role: "Founder & Board President",
    photo: "/assets/board/winny-chan.png",
    bio: "Winny, the founder of Ray of Light Fertility Foundation, was born and raised in Thailand and moved to the U.S. to complete her bachelor\u2019s degree at the University of Wisconsin\u2013Whitewater and her MBA at UW\u2013La Crosse. After learning that starting a family would not come easily, she experienced first-hand the emotional, physical, and financial toll that infertility takes. That journey inspired her to create Ray of Light Fertility Foundation \u2014 Wisconsin\u2019s first nonprofit dedicated exclusively to supporting couples navigating infertility. Through grants, resources, and community support, Winny is committed to ensuring that no one has to face this journey alone.",
  },
  {
    name: "Jenna Wakefield",
    role: "Vice President",
    photo: "/assets/board/jenna-wakefield.jpeg",
    bio: "Jenna is a fertility nurse and brings her clinical expertise and first-hand experience supporting couples through fertility treatments. She has a deep passion for helping couples navigate the complexities of fertility care and understands the emotional and financial challenges they face. With Jenna\u2019s medical background and commitment to patient advocacy, she provides critical insight into the needs of those the Foundation serves.",
  },
  {
    name: "Andrew Povolo",
    role: "Treasurer",
    photo: "/assets/board/andrew-povolo.png",
    bio: "Andrew is a business attorney in southeastern Wisconsin with his own law firm. He earned his undergraduate degree from University of Wisconsin\u2013Madison and his J.D. from Marquette University Law School. His professional background brings important legal, governance, and financial oversight to the Foundation.",
  },
  {
    name: "Raychel Pociluyko",
    role: "Secretary",
    photo: null,
    bio: "Raychel is a native of Wisconsin and has worked in the Milwaukee area as a Certified Lead Auditor and Quality Assurance Specialist for ten years. Raychel developed a deep appreciation for nonprofits that seek to improve the quality of life for our region; she believes every woman should have the support, resources, and financial assistance necessary to help expand their families.",
  },
  {
    name: "Angela Wilcox",
    role: "Board Member",
    photo: "/assets/board/angela-wilcox.jpg",
    bio: "Angela holds a bachelor\u2019s degree in Business Administration and Finance from UW\u2013La Crosse and an MBA with a concentration in Finance from Minnesota State University \u2013 Mankato. With experience in the financial industry, she has expertise in investment research, portfolio management, and relationship management. She believes in the Foundation\u2019s mission to provide hope and financial support to families seeking fertility assistance.",
  },
  {
    name: "Joe Gustafson",
    role: "Board Member",
    photo: null,
    bio: "Joe is an IT professional with over a decade of experience in network engineering, cybersecurity, and technology strategy. He\u2019s dedicated to using his skills to strengthen the Foundation\u2019s digital infrastructure and expand its reach to families across Wisconsin.",
  },
  {
    name: "Melissa Stone",
    role: "Board Member",
    photo: "/assets/board/melissa-stone.jpeg",
    bio: "Melissa is a licensed real estate agent in southeastern Wisconsin. She was born and raised in Burlington and now resides in Union Grove. Melissa has a deep passion for giving back and helping people in her community. She believes in the mission and is committed to supporting couples on their fertility journey.",
  },
];
