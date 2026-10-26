import { GRANTS_EMAIL } from "./constants";

export interface FaqItem {
  question: string;
  answer: string;
}

// Copy is verbatim from "RL-GT-GUIDE-00001 Grant FAQ Rev. 1" (10/19/2026).
// In answers, "\n\n" starts a new paragraph and "\n" starts a new line.
export const grantFaqs: FaqItem[] = [
  {
    question: "Who is eligible for a grant?",
    answer:
      "To be considered for a grant, applicants must meet all of the following criteria:\n\n1. Relationship Status: Legally Married or Registered Domestic Partners\na. Applicants must be legally married couple or registered domestic partner at the time of application.\n\n2. Residency\na. Applicants must be legal residents of the State of Wisconsin.\nb. Applicants must be Citizen or Legal permanent Residents of the United States.\n\n3. Medical Diagnosis:\na. Diagnosed with infertility by a physician.\n\n4. United States-Based Clinic or Agency\na. Working with a US-based, operated Clinic or Agency.",
  },
  {
    question: "Why is there a grant application fee and how much is it?",
    answer:
      "Application Fee and Allocation\n\nA $50 non-refundable application fee is required at the time of application submission. Applicants must remit payment as part of the submission process for their application to be considered complete and eligible for review.\n\nOf this amount, 50% ($25) will be allocated to the foundation's grant fund to support future grant awards, while the remaining 50% ($25) will be allocated to Facilities and Administrative (F&A) costs associated with administering and sustaining the grant program.\n\nTax-Deductibility Disclosure: The application fee is a required payment for the administrative services associated with processing, reviewing, and evaluating grant applications. As such, the fee is considered a payment for services rather than a voluntary charitable contribution and is not tax-deductible as a charitable donation, regardless of how the foundation internally allocates the funds.\n\nPayment of the application fee does not constitute a charitable donation, guarantee grant funding, or influence the application review and selection process. The fee remains non-refundable regardless of the outcome of the application.",
  },
  {
    question: "How are grant recipients selected?",
    answer:
      "The Grant Review Committee, composed of Board members and/or designated foundation members, reviews all eligible applications.\n\nCommittee members share perspectives, maintain confidentiality, and submit anonymous scores using the Fertility Grant Application Scoring rubric. Based on polling results and funding availability, the Board of Directors approves the number and amount of grants.",
  },
  {
    question: "What does the grant cover?",
    answer: `The grant will typically be applied to the clinic’s in-house cost of the medical procedures or cost associated with the surrogacy process. Due to the complexity of timing and payments to pharmacies, we currently do not apply the grant towards medications. We also do not cover any third-party fees or expenses such as legal fees, consulting, et cetera.\n\nIf you have any specific questions about grant, please email ${GRANTS_EMAIL}.`,
  },
  {
    question: "How much money is awarded in each grant and how many grants are awarded?",
    answer:
      "The number of grants awarded and the value of each grant is dependent on how many funds are raised during the year and will vary based on the type of treatment required.",
  },
  {
    question: "Where will my grant be sent?",
    answer:
      "To ensure that grant funds are being used appropriately, grant funds will be sent directly to the fertility clinic or surrogacy agency in your name.\n\nFor the security of the funds that have been graciously donated by donors, we cannot issue any checks directly to grant recipients or provide reimbursements.",
  },
  {
    question: "I was not awarded a grant during the last grant cycle, do I need to apply again?",
    answer:
      "Yes. Applicants must re-submit an application and pay any application fees during each cycle. This is to keep the selection process equal and fair.\n\nPlease limit application to one application per cycle.",
  },
  {
    question: "I was not selected to receive a grant, can you tell me why?",
    answer:
      "Our selection process is difficult, and unfortunately we are unable to award grants to every applicant. While we receive many wonderful applicants, we are not able to provide individual feedback or discuss specific reasons for funding decisions. We kindly ask that applicants do not request additional explanation.",
  },
  {
    question: "Can I get reimbursed for payment that I made with my credit card or previous bills?",
    answer:
      "In order for us to ensure that grant funds are being used appropriately, we CANNOT issue reimbursement for payments that you have already made.\n\nPayments will be paid directly to the fertility clinic or surrogacy agency on your behalf.",
  },
  {
    question: "What is considered a legal resident of Wisconsin?",
    answer:
      "A legal resident of the State of Wisconsin is a person who maintains their domicile in Wisconsin, whether or not they are physically present in Wisconsin or living outside of the state.\n\nA legal resident must be domiciled for a minimum of one (1) year prior to submitting an application for a grant. Residency is established by having Wisconsin as a true, fixed home.\n\nProof of residency will be required (1. Filing a Wisconsin income tax return as a full-year resident. 2. Holding a valid Wisconsin driver's license or state ID. 3. Being registered to vote in Wisconsin. 4. Registering vehicles in Wisconsin.)",
  },
  {
    question: "What is considered a Lawful Permanent Resident of the United States?",
    answer:
      "A Lawful Permanent Resident (LPR), or \"Green Card holder,\" is a non-citizen legally authorized to live and work permanently in the United States. They receive an immigrant visa or adjustment of status, allowing them to own property, join the military, and apply for citizenship after a set period.\n\nLPRs are issued a Permanent Resident Card (Form I-551), commonly known as a \"Green Card,\" which must be renewed every 10 years.",
  },
  {
    question: "Can I use my grant to work with a clinic outside of the United States?",
    answer:
      "We are only able to pay grants to clinics or agencies that are US based, owned, and operated.",
  },
  {
    question: "Do you work with LGBTQ couples?",
    answer:
      "Yes, we welcome LGBTQ couple application. The four requirements still apply - you both must be born US citizens, residing in the US, are legally married or registered domestic partner, and diagnosed with infertility by a doctor.",
  },
  {
    question: "I have previously received a grant from Ray of Light Fertility, can I apply again?",
    answer:
      "Unfortunately, we are only able to offer one grant per couple. Our goal is to help as many couples as we can by relieving some of the financial burden. We want to make sure, we can give every couple an opportunity to benefit from our grant opportunities.",
  },
];
