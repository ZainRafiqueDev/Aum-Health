// Legal page content — structurally modeled on industry-standard telehealth
// agreements, with AUM Health's own (placeholder) contact details. This is
// TEMPLATE content, not final legal copy: AUM Health's attorney must review
// and finalize before it is binding on users, particularly the arbitration,
// HIPAA, and state-specific (CCPA, FL Weight-Loss Bill of Rights) sections.
const ADDRESS = 'Address on file';
const EMAIL = 'support@aumhealth.io';
const PHONE = '(000) 000-0000';
const SITE = 'aumhealth.io';

export const termsContent = {
  id: 'terms-and-conditions',
  title: 'Terms and Conditions',
  lastUpdated: 'August 15, 2026',
  intro: [
    'AUM Health is contemplated for specific non-emergency medical conditions and concerns. If you believe you are experiencing a medical emergency, please dial 911 or your local medical provider.',
    `This User Agreement (collectively with AUM Health's Privacy Policy) applies to your use of all sites (collectively, the "Sites") to which this User Agreement is linked, and the services, features, content or applications (together with the Sites, the "Services") offered by AUM Health and our affiliated brands and products. The terms "we", "us", "our" and "AUM Health" refer to AUM Health, located at ${ADDRESS}.`,
    'Please read this User Agreement carefully as it sets forth the legally binding terms and conditions for your use of our Services.',
    'THIS USER AGREEMENT CONTAINS A MANDATORY ARBITRATION PROVISION IN SECTION XXII WHICH INCLUDES A CLASS ACTION, CLASS ARBITRATION, AND JURY TRIAL WAIVER. THESE PROVISIONS REQUIRE THE USE OF ARBITRATION TO RESOLVE DISPUTES, RATHER THAN JURY TRIALS OR CLASS ACTIONS. BY ACCEPTING THESE TERMS, YOU EXPRESSLY AGREE TO BE BOUND BY AND ABIDE BY THIS AGREEMENT, INCLUDING THE MANDATORY ARBITRATION PROVISION AND THE CLASS ACTION WAIVER PROVISION.',
    'PLEASE READ THESE TERMS OF USE CAREFULLY BEFORE USING OUR SERVICES OR WEBSITE.',
  ],
  sections: [
    {
      heading: 'I. Introduction',
      paragraphs: [
        'These Terms of Use (the "Terms") describe your rights and responsibilities regarding the AUM Health website ("website" or the "Platform") owned and operated by AUM Health.',
        'In these Terms, "we", "our", "us", and "AUM Health" collectively refer to AUM Health and any products, subsidiaries, and affiliations. The terms "you" and "yours" refer to the person using the Platform. Use of the Platform is governed by these Terms and our Privacy Policy. By accessing or using the Platform, you acknowledge that you have read, understood, and agreed to be legally bound by and comply with these Terms and our Privacy Policy.',
        'Even though you may have arrived at the Platform through a website operated or controlled by a third party, including by an affiliate of AUM Health, you understand and agree that these Terms are entered into between you and AUM Health. You also understand and agree that the Platform and any services provided through these Terms, except the Healthcare Services described herein, are provided by AUM Health.',
        'You agree that when you use or enter the Platform, you affirmatively consent to conduct business electronically with AUM Health and engage in health-oriented activities with health professionals and professional entities affiliated with AUM Health, and such processes have the same force and effect as your written signature. You agree and consent to AUM Health and certain affiliated professional entities sending you disclosures, messages, notices, and other communications to your designated mobile phone and email account. If you do not agree with any of these Terms or our Privacy Policy, you may not use the Platform.',
        'This Agreement establishes the important terms which you need to know and understand as well as the Services which you are requesting.',
      ],
    },
    {
      heading: 'II. Modification of Terms',
      paragraphs: [
        'This agreement is subject to changes as explained below.',
        'We reserve the right, in our sole discretion, to amend these Terms, in whole or in part, at any time and for any reason, without penalty or liability to you or any third party. You should check the Terms from time to time when you use the Platform to determine if any changes have been made. You can determine when the Terms were last revised by referring to the "Last updated" notation above. If you use the Platform after the amended Terms have been posted, you will be deemed to have agreed to the amended Terms. If any of the provisions of these Terms are not acceptable to you, your sole and exclusive remedy is to discontinue your use of the Platform.',
      ],
    },
    {
      heading: 'III. Description of AUM Health',
      paragraphs: [
        'You understand and agree that the Platform is intended to facilitate the following services (the "Services"): (a) the development and gathering of healthcare records and information with retention of the same for use in medical provider encounters and communications; (b) administrative support in connection with scheduling and payment for Healthcare Services; (c) administrative support in connection with coordinating optional fulfillment and payment for prescription medications ordered or prescribed by medical providers performing Healthcare Services; and (d) telecommunications and technology support for using the Platform as a means of direct access to medical providers provided by affiliated professional entities for communication, consultations, assessments, and treatment by such medical providers.',
        'You understand that the Platform gathers unique information from you to enable an affiliated medical provider through the Healthcare Services to determine whether a prescription or a diagnostic test is indicated and appropriate for you, including applicable health information (such as your past and present health conditions, medications, and blood pressure), diagnostic tests, as applicable, and personal information (such as your name, location and demographic information) (collectively, "Your Information"). You further understand and agree that after reviewing Your Information, the medical provider, in his or her independent professional judgment, will determine whether to prescribe you medication, other treatment, or, alternatively, recommend that you consult with alternative clinical resources (the "Healthcare Services").',
        'You give us consent to send and disclose to the affiliated professional entities and their medical providers all of Your Information so that you may be assessed and possibly receive Healthcare Services.',
        'Further, you consent to our delivery of Your Information to AUM Health affiliated and unaffiliated pharmacies, laboratories, and other diagnostic testing companies as part of coordinating desired fulfillment and payment for diagnostic testing, prescription medications, and medical devices recommended as part of the Healthcare Services.',
        'All medical providers who deliver Healthcare Services through the Platform are: (i) independent professionals contracted or employed with affiliated professional entities that coordinate with AUM Health and (ii) solely responsible for such Healthcare Services provided to you.',
        'AUM Health does not provide any Healthcare Services through the Platform and is not licensed to practice medicine. AUM Health does not control or interfere with the provision of Healthcare Services by the medical providers and affiliated professional entities, each of whom is independent and solely responsible for the Healthcare Services provided to you. You, therefore, understand and agree that AUM Health is not responsible for Healthcare Services, or your use of any Healthcare Services provided by a medical provider or affiliated professional entity, including any personal injury or property damage.',
        'By accepting this Agreement, you additionally understand and agree that AUM Health is not acting as a pharmacy, nor do we control or interfere with any such services. By accepting this Agreement, you understand and agree that you may be entering into a relationship with a pharmacy, pharmacist, and/or pharmacy group or other such relationship with any one or more such third-party entities.',
      ],
    },
    {
      heading: 'IV. Eligibility',
      paragraphs: [
        'In order to use the Services through the Platform, the following must be true:',
        '- You are at least 18 years of age or older.',
        '- You live in the United States and in a state or territory where the Services are available.',
        '- You agree to be legally bound by and comply with these Terms of Use.',
        '- You must have compatible computing and/or mobile devices, access to the Internet, and certain necessary software to use the Platform. Fees and charges may apply to your use of the mobile services and to the Internet.',
        `You understand and agree that satisfying the above requirements does not guarantee that you will receive the Services through the Platform. In addition to the above requirements, AUM Health and its affiliated professional entities reserve the right to change or include new requirements as deemed appropriate in their sole discretion without providing prior notice to you. Further, medical providers and affiliated professional entities delivering the Healthcare Services may, on a case-by-case basis, determine that certain criteria apply to utilizing the Platform for the Healthcare Services or that Healthcare Services are not appropriate in any instance for a particular user. You can obtain more information on the criteria for the Healthcare Services by contacting ${EMAIL}.`,
      ],
    },
    {
      heading: 'V. Availability',
      paragraphs: [
        `The Services are currently available to individuals located in certain states. To see the list of current states, please contact customer service at ${EMAIL}.`,
      ],
    },
    {
      heading: 'VI. Registration, User Accounts, and User Data',
      paragraphs: [
        'Although certain parts of the Platform are accessible by any individual, you are obligated to register with AUM Health in order to access the Services. The Services are available only to users who have registered with AUM Health and to other persons affiliated with AUM Health who have been granted accounts with usernames and passwords. The Platform may not be accessible at any time, for any period, or for any reason, and AUM Health will not be liable if, for any reason, all or any part of the Platform is unavailable at any time or for any period.',
        'Upon registration of an account, the Platform may contain forms or fields that allow you to enter, submit, or transmit to AUM Health user information or data ("User Data") on or through the Platform. You understand and agree that any User Data provided by you on or through the Platform may be used, copied, or displayed by AUM Health. AUM Health may create derivative works of any such data, and AUM Health may provide such data to our service providers, our successors and assigns, and medical providers and their affiliated professional entities, in performance of the Services.',
        'You grant AUM Health, our service providers, our successors and assigns, and medical providers and their affiliated professional entities, the fully transferable and sublicensable right and license to use, reproduce, modify, analyze, perform, display, distribute, and otherwise disclose to third parties any User Data you submit on or through the Platform for the purposes of providing the Services to you; conducting research or analyses of such data; and designing, developing, implementing, modifying and/or improving new, current or future features, products and services of AUM Health using such data.',
      ],
    },
    {
      heading: 'VII. Your Responsibilities and Acknowledgment',
      paragraphs: [
        'As a condition of your use of the Services through the Platform, you agree to the following:',
        '- All Your Information provided through the Platform is accurate, complete, and correct, and you will accurately maintain and update any of Your Information that you have provided to AUM Health.',
        '- Your permission to use the Platform is personal (the Platform will be used only by you), and your identification information is accurate and truthful. You agree to keep confidential your username and password and that you will exit from your account at the end of each session. You are responsible for all activities that occur under your account and for maintaining the confidentiality of your password. You are responsible for changing your password promptly if you think it has been compromised. You may not transfer or share your password with anyone or create more than one account. You may not use anyone else’s account at any time.',
        `- You agree to immediately notify AUM Health of any unauthorized use of your username, password, or any other breach of security that you become aware of involving or relating to the Services by emailing AUM Health at ${EMAIL}.`,
        '- You may be asked to provide additional information to AUM Health, its affiliated professional entities, or applicable medical provider(s) for the purpose of providing Healthcare Services or fulfilling a prescription. You may elect to withhold requested information; however, if you do so, you may not use the Platform or any other related services.',
        'You understand and agree that provision of Healthcare Services through the Platform depends on the completeness and accuracy of Your Information. AUM Health is unable to verify all of Your Information, therefore, AUM Health is not responsible for any consequences if Your Information is inaccurate or incomplete. If Your Information is inaccurate, incomplete, or not maintained; or AUM Health has reasonable grounds to suspect as much, AUM Health has the right to suspend or terminate your account and your use of the Services. In addition, AUM Health may take any and all actions it deems necessary or reasonable to maintain the security of the Platform, Services, and your Secure User account.',
      ],
    },
    {
      heading: 'VIII. Restrictions on Use',
      paragraphs: [
        'You will not use, or encourage, or permit others to use, our Platform except as expressly permitted in these Terms. You will not:',
        '- Use or attempt to use the Platform or the Services for any other person than yourself.',
        '- Access or use the Platform in any manner or for any purpose that infringes, misappropriates, or otherwise violates any intellectual property right or other right of any third party, or that violates any applicable local, state, or federal law or regulation, or is prohibited by these Terms.',
        '- "Jailbreak" your mobile operating system. The Platform is intended for use only on a mobile phone that runs an unmodified manufacturer-approved operating system. Using the Platform on a mobile phone with a modified operating system may undermine security features that are intended to protect your protected health information (PHI) from unauthorized or unintended disclosure. You may compromise your PHI if you use the Platform on a mobile phone that has been modified. Use of the Platform on a mobile phone with a modified operating system is a material breach of these Terms.',
        '- License, sublicense, sell, resell, transfer, assign, distribute or otherwise commercially exploit or make available to any third party the Platform or related materials in any way.',
        '- Use or access the Platform to create or develop competing products or services or for any other purpose that is detrimental to AUM Health or puts AUM Health at a commercial disadvantage.',
        '- Take any action or use the Platform in any manner which could damage, destroy, disrupt, disable, impair, overburden, interfere with, or otherwise impede or harm in any manner our Platform or any content, in whole or in part.',
        '- Disrupt, interfere with, violate the security of, or attempt to gain unauthorized access to our Platform or any computer network.',
        '- Bypass, breach, avoid, remove, deactivate, impair, descramble, or otherwise circumvent any security device, protection, or technological measure implemented by AUM Health or any of our service providers to protect our Platform.',
        '- Input, upload, transmit, distribute, or otherwise run or propagate any virus, application, Trojan horse, or any other harmful computer code that could damage or alter a computer, portable device, computer network, communication network, data, or our Platform, or any other system, device, or property.',
        '- Remove, delete, alter, or obscure any trademarks, specifications, warranties, or disclaimers, or any copyright, trademark, patent, or other intellectual property or proprietary rights notices from our Platform or any content made available to you on or through our Platform.',
        '- Use any manual process or automated device to monitor or copy any content made available on or through our Platform for any unauthorized purpose except as permitted in Section XIV (Privacy) below.',
        '- Copy, duplicate, download, store in a retrieval system, publish, transmit or otherwise reproduce, transfer, distribute, store, disseminate, aggregate, use as a component of or as the basis for a database or otherwise use in any form or by any means any data, text, reports, or other materials related to AUM Health or third-party content from the Platform.',
        '- Encourage or enable any other individual to do any of the foregoing.',
      ],
    },
    {
      heading: 'IX. Licensing',
      paragraphs: [
        'Subject to your compliance with these Terms, AUM Health grants you a personal, limited, revocable, nonexclusive, and non-transferable license to view, download, access, and use the Platform and its content, solely for your personal and non-commercial use. No other right, title, or interest in or to the Platform is transferred to you, and all rights not expressly granted are reserved by AUM Health and its licensors. You are not permitted to reproduce, publish, transmit, distribute, display, modify, create derivative works from, sell or participate in any sale of, or exploit in any way, in whole or in part, any such content for commercial use.',
      ],
    },
    {
      heading: 'X. Disclaimer of Limited Healthcare Services',
      paragraphs: [
        'The Platform is structured for use specific to certain health care services and is not, and should not, be considered, or used as comprehensive medical advice, care, diagnosis, or treatment.',
        'Always seek the advice of your physician or other qualified healthcare provider with any questions you may have regarding general personal health, medical conditions, or drugs or medications, and before commencing or discontinuing any course of treatment, drug, or medication.',
      ],
    },
    {
      heading: 'XI. Telehealth Consent',
      paragraphs: [
        'Telehealth uses electronic communications, information technology, and other means to connect patients in one location and licensed, certified, or registered healthcare professionals in another location regarding a clinical matter. Though Telehealth carries potential benefits, like any medical procedure, it also carries potential risks. Please review the full Telehealth Informed Consent which informs you about the treatment methods, risks, and limitations of utilizing Telehealth to meet your health and wellness needs. In order to receive Health Care Services, you will be required to agree to the Telehealth Informed Consent regarding the use of Telehealth.',
        'By using the Services, you agree and acknowledge that AUM Health is a beneficiary of the Medical Consent and has the right to enforcement.',
      ],
    },
    {
      heading: 'XII. Mobile Terms of Service',
      paragraphs: [
        'Program. AUM Health Offers is a recurring automated promotional text messaging program from AUM Health. Messages may include offers, program updates, health-related promotions, and announcements.',
        `To cancel, reply STOP to any message. You'll receive one confirmation and no further texts. AUM Health also honors opt-out requests sent by any reasonable method, including email to ${EMAIL} within 10 business days.`,
        `For help, reply HELP or contact us at ${EMAIL}, ${PHONE}, or AUM Health, ${ADDRESS}.`,
        'Carriers are not liable for delayed or undelivered messages.',
        'Message and data rates may apply. Message frequency varies. Contact your wireless provider with questions about your plan.',
        `Privacy Policy: ${SITE}/privacy-policy`,
        'You must be a U.S. resident, 18 or older, with a valid U.S. mobile number to participate.',
        'Consent to receive AUM Health Offers messages is not a condition of purchase.',
        'By opting in, you represent that you are the account holder (or have the holder’s permission) for the number provided, and you give prior express written consent to receive autodialed promotional texts from AUM Health.',
        'AUM Health may modify or discontinue this program at any time with reasonable notice to enrolled participants.',
      ],
    },
    {
      heading: 'XIII. Payment',
      paragraphs: [
        'When you submit Your Information for Health Care Services, you agree to pay all fees due. By entering your payment information and submitting your request, you authorize us, our affiliates, or our third-party payment processors to charge the amount due. If you receive a medical consultation, medical consult fees are not subject to or eligible for a refund. We cannot accept returns of prescription products for reuse or resale, and all sales are final. If you believe we have made an error please message us through your AUM Health portal or email us.',
        'You understand and agree that you are responsible for all fees due to receive the Services, including any fees charged by medical providers and affiliated medical professional entities. The final charge to your payment method may fluctuate depending on the prescribed medication and the pharmacy selected for order fulfillment. Should any variance arise in the charge, a member of our support team will communicate the details to you. We collect essential payment data, including your payment instrument details and associated security code, solely to facilitate payment processing; this information is safeguarded within the secure infrastructure provided by our third-party payment processor, whose privacy practices govern how that data is handled.',
        'You understand that AUM Health-affiliated medical professional entities are not contracted healthcare providers with any health insurance plans (commercial, government, or otherwise, i.e., "out-of-network" providers), and therefore, you understand and agree that you are exclusively and solely responsible for paying all fees due to receive the Healthcare Services provided to you, including any fees charged by the medical providers and affiliated medical professional entities. Amounts collected by AUM Health will include fees charged by medical providers for Healthcare Services. In the event that your payment method expires or AUM Health, our affiliates, or our third-party payment processors are unable to process your payment, you may receive notice to provide an alternative payment method. AUM Health and/or the medical provider(s) have no obligation to provide any Healthcare Services unless and until full payment has been received and/or verified.',
        'You also understand and agree that, because AUM Health medical providers are not contracted with any health insurance plan to provide the Healthcare Services, including federal or state government health care programs, like Medicaid and Medicare, any prescription medication or laboratory service ordered by an AUM Health medical provider may also not be covered.',
      ],
    },
    {
      heading: 'XIV. Privacy',
      paragraphs: [
        "AUM Health understands the importance of confidentiality and privacy regarding Your Information. Please see our Privacy Policy for a description of how we may collect, use, and disclose Your Information in connection with the Platform.",
      ],
    },
    {
      heading: 'XV. Intellectual Property',
      paragraphs: [
        'As between AUM Health and you, AUM Health is the sole and exclusive owner of all right, title, and interest in and to the Platform and its content, features, and functionality (including, without limitation, all information, software, text, displays, images, video, audio, selection, arrangement, and look and feel), and all intellectual property rights therein, and any suggestions, ideas, or other feedback provided by you. Any copy, modification, revision, enhancement, adaptation, translation, or derivative work of the Platform shall be owned solely and exclusively by AUM Health or its licensors, including all intellectual property rights therein. You have permission to use the Platform solely for your personal and non-commercial use on the condition that you comply with these Terms. No other right, title, or interest in or to the Platform is transferred to you, and all rights not expressly granted are reserved by us or our affiliates.',
        'Certain names, logos, and other materials displayed in and throughout the Platform may constitute trademarks, trade names, service marks, or logos ("Trademarks") of AUM Health or its affiliates. You are not authorized to use any such Trademarks without the express written permission of AUM Health or its affiliates. Ownership of all such Trademarks and the goodwill associated therewith remains with us or our affiliates.',
      ],
    },
    {
      heading: 'XVI. Third-Party Links and Websites',
      paragraphs: [
        'The Platform may contain hyperlinks or references to other websites ("Linked Sites") operated by third parties. The Linked Sites may not be under our control; therefore, we are not responsible for the information, products, or services described therein, or for the content of any Linked Site, including any link contained in a Linked Site, or any changes or updates to a Linked Site. We are providing these Linked Sites to you only as a convenience, and the inclusion of any link does not necessarily imply endorsement of the Linked Site or any association with its operators. Your use of these Linked Sites is at your own risk, and we are not liable to you in any way, either directly or indirectly, for any content, errors, damage, or loss caused by or in connection with use of or reliance on information contained in or provided to Linked Sites.',
        'You may have arrived at the Platform through a Linked Site, including a Linked Site controlled by a parent, subsidiary, or affiliate of AUM Health. You understand and agree that we are not responsible for the information, products, or services described on those Linked Sites and only these Terms will apply to your use of or access to the Platform.',
      ],
    },
    {
      heading: 'XVII. Disclaimer of Warranties',
      paragraphs: [
        'YOU ACKNOWLEDGE AND AGREE THAT THE PLATFORM AND THE SERVICES ARE PROVIDED THROUGH THE PLATFORM ON AN "AS IS" AND "AS AVAILABLE" BASIS. YOUR USE OF THE PLATFORM IS AT YOUR SOLE RISK. AUM HEALTH AND ITS AFFILIATES MAKE NO REPRESENTATIONS OR WARRANTIES AND SPECIFICALLY DISCLAIM ANY AND ALL WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, WITH RESPECT TO THE PLATFORM AND THE SERVICES, INCLUDING ANY REPRESENTATIONS OR WARRANTIES WITH RESPECT TO MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, AVAILABILITY, SECURITY, ACCURACY, FREEDOM FROM VIRUSES OR MALWARE, COMPLETENESS, TIMELINESS, FUNCTIONALITY, RELIABILITY, SEQUENCING OR SPEED OF DELIVERY. WE MAKE NO WARRANTIES OR REPRESENTATIONS THAT YOUR USE OF THE PLATFORM OR THE SERVICES WILL NOT INFRINGE THE RIGHTS OF THIRD PARTIES.',
        'TO THE FULLEST EXTENT OF APPLICABLE LAW, NEITHER AUM HEALTH NOR ITS RELATED PERSONS WILL BE LIABLE FOR ANY LOSS OR DAMAGE CAUSED BY YOUR RELIANCE ON INFORMATION OBTAINED THROUGH THE PLATFORM. IT IS YOUR RESPONSIBILITY TO EVALUATE THE ACCURACY, COMPLETENESS, TIMELINESS, RELIABILITY OR USEFULNESS OF THE PLATFORM. FURTHERMORE, AUM HEALTH DOES NOT GUARANTEE THAT THE PLATFORM WILL BE UNINTERRUPTED, OR FREE FROM ERROR, DEFECT, LOSS, DELAY IN OPERATION, CORRUPTION, CYBER ATTACK, VIRUSES, INTERFERENCE, HACKING, MALWARE, OR OTHER SECURITY INTRUSION, AND AUM HEALTH DISCLAIMS ANY LIABILITY RELATING THERETO.',
        'YOU UNDERSTAND AND AGREE THAT ANY CONTENT, MATERIAL AND/OR INFORMATION OBTAINED THROUGH THE USE OF THE PLATFORM ARE USED AT YOUR SOLE RISK AND THAT YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER OR MOBILE PHONE OR LOSS OF DATA THAT RESULTS FROM THE DOWNLOAD OF SUCH CONTENT, MATERIAL, AND/OR INFORMATION.',
      ],
    },
    {
      heading: 'XVIII. Limitation of Liability',
      paragraphs: [
        'TO THE FULLEST EXTENT PERMISSIBLE PURSUANT TO APPLICABLE LAW AND EXCEPT AS SET FORTH IN THIS SECTION, NEITHER AUM HEALTH NOR ITS RELATED PERSONS OR LICENSORS WILL BE LIABLE TO YOU OR TO ANY PARTY FOR ANY CLAIMS, LIABILITIES, LOSSES, COSTS OR DAMAGES UNDER ANY LEGAL OR EQUITABLE THEORY, WHETHER IN TORT (INCLUDING NEGLIGENCE), CONTRACT, STRICT LIABILITY OR OTHERWISE, INCLUDING, BUT NOT LIMITED TO, ANY INDIRECT, PUNITIVE, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, INCLUDING LOST PROFITS, LOSS OF DATA OR LOSS OF GOODWILL, SERVICE INTERRUPTION, COMPUTER OR MOBILE PHONE DAMAGE, OR SYSTEM FAILURE, OR THE COST OF SUBSTITUTE PRODUCTS OR SERVICES, OR FOR ANY DAMAGES FOR PERSONAL OR BODILY INJURY OR EMOTIONAL DISTRESS, INCLUDING DEATH, ARISING OUT OF OR IN CONNECTION WITH ANY ACCESS, USE OF (OR INABILITY TO USE) THE PLATFORM OR ANY SERVICES PROVIDED THROUGH THE PLATFORM. THIS IS TRUE EVEN IF AUM HEALTH OR RELATED PERSONS HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES OR LOSSES.',
        'TO THE EXTENT PERMITTED BY LAW AND SUBJECT TO THIS SECTION, THE TOTAL LIABILITY OF AUM HEALTH FOR ANY CLAIMS UNDER THESE TERMS SHALL NOT EXCEED U.S. ONE HUNDRED DOLLARS ($100.00 USD). SOME JURISDICTIONS DO NOT ALLOW LIMITATIONS OF LIABILITY OR MAY PLACE LIMITATIONS ON OUR ABILITY TO LIMIT OUR LIABILITY TO YOU, THUS THE FOREGOING LIMITATION MAY NOT APPLY TO YOU.',
      ],
    },
    {
      heading: 'XIX. Indemnification',
      paragraphs: [
        'You agree to indemnify, defend, and hold AUM Health and any of its Related Persons, licensors, and suppliers harmless from and against any and all third-party claims, demands, liabilities, costs or expenses, including attorneys’ fees and costs, arising from or related to: (i) any breach by you of these Terms, (ii) your use of material or features available on the Platform in an unauthorized manner, and/or (iii) a violation by you of any and all applicable laws, rules, or regulations.',
      ],
    },
    {
      heading: 'XX. Modifications to the Platform',
      paragraphs: [
        'AUM Health reserves the right at any time and for any reason to modify, temporarily, or permanently discontinue, the Platform, or any portion thereof, with or without notice. You agree that AUM Health shall not be liable to you and to any third party for any modification, suspension, or discontinuance of the Platform.',
      ],
    },
    {
      heading: 'XXI. Suspension and Termination of Rights',
      paragraphs: [
        'The Terms will remain in full force and effect as long as you continue to access or use the Platform. You may terminate the Terms at any time by discontinuing use of the Platform. Your permission to use the Platform automatically terminates if you violate these Terms.',
        'We may terminate or suspend any of the rights granted by these Terms and your access to our Platform with or without prior notice, at any time, and for any reason. The following provisions survive the expiration or termination of these Terms for any reason whatsoever: Disclaimer of Warranties; Limitation of Liability; Indemnification; Governing Law, Dispute Resolution, Arbitration, Class Action Waiver; and Miscellaneous.',
        'Subject to applicable law, AUM Health reserves the right to maintain, delete, or destroy all communications and materials posted or uploaded to the Platform pursuant to its internal record retention and/or content destruction policies. After any termination, AUM Health will have no further obligation to provide the Services, except to the extent we are obligated to provide you access to your health records or required to provide you with continuing care under our applicable legal, ethical, and professional obligations to you.',
      ],
    },
    {
      heading: 'XXII. Governing Law; Dispute Resolution; Arbitration',
      paragraphs: [
        'IN THE EVENT OF A DISPUTE, YOU AND AUM HEALTH AGREE TO TRY TO RESOLVE IT INFORMALLY FIRST. IF WE CAN’T RESOLVE IT IN 60 DAYS, WE AGREE TO WAIVE THE RIGHT TO TRIAL BY JURY AND ARBITRATE THE CLAIM, INSTEAD OF GOING TO COURT. YOU MAY OPT OUT OF ARBITRATION WITHIN 30 DAYS OF FIRST ACCEPTING THIS ARBITRATION CLAUSE, AS DESCRIBED BELOW.',
        'You agree to resolve disputes with AUM Health through binding arbitration, except as described in this Dispute Resolution section (the "Arbitration Clause"). The parties expressly waive the right to bring or participate in any kind of class, collective, or mass action, private attorney general action, or any other representative action. Similar disputes may, however, be grouped as a Mass Filing in arbitration.',
        'In agreeing to this arbitration provision, you and AUM Health agree to waive any constitutional and statutory rights to sue in court and have a trial in front of a judge or a jury. You and AUM Health are instead electing that all disputes will be resolved by arbitration under this Arbitration Clause, except as specified herein. Arbitration awards are subject to very limited judicial review. Discovery may be limited in arbitration, and procedures are more streamlined than in court.',
        'If you use the Services as an individual, you may opt out of arbitration under ‘Opt-Out’ below within thirty (30) days of first accepting these Terms.',
        'Covered Disputes. You and AUM Health agree that any dispute or claim between you and AUM Health arising out of or relating to this Agreement, User Data, the Platform or the Services (a "Dispute") will be resolved by binding arbitration, rather than in court. A Dispute includes any claim or dispute relating to the Services, access and use of the Services, your account, or any aspects of your relationship or transactions with AUM Health. A Dispute also includes any claims or disputes that arose from or involve facts that occurred before the effectiveness of this Agreement and claims that may arise after its termination. For clarity, nothing in this Arbitration Clause prevents either party from settling any Dispute(s) on a class-wide, batch-wide, or other multiparty basis.',
        'Exceptions to Arbitration. This Arbitration Clause does not require arbitration of the following types of claims brought by either you or AUM Health:',
        '- Small claims court actions, if the requirements of the court are met and the claims are only on an individual basis.',
        '- Claims pertaining to intellectual property rights, including trademarks, trade dress, domain names, trade secrets, copyrights, and patents.',
        `Informal Dispute Resolution First. Like you, we want to resolve Disputes without resorting to arbitration. If you have a Dispute with us, before initiating arbitration, you agree to send an individualized request ("Pre-Arbitration Demand") to ${EMAIL} so that we can work together to resolve the Dispute. If the Dispute is not resolved within sixty (60) calendar days of when either you or AUM Health submitted a Pre-Arbitration Demand, an arbitration can be brought. Informal dispute resolution is a condition precedent to commencing arbitration, but does not apply to claims falling under the exceptions to arbitration.`,
        `Opt-Out. You may reject this Arbitration Clause and opt out of arbitration by sending an email to ${EMAIL} within thirty (30) calendar days of first accepting these Terms. If you have an account, your opt-out notice must be sent from the email address associated with your account. No one may opt out another person. Your notice to opt out must include your first and last name, address, the email address associated with your account (if you have an account), and a clear statement that you decline this Arbitration Clause.`,
        `Arbitration Procedure. If, after completing the informal dispute resolution process, you or AUM Health wish to initiate arbitration, the initiating party must serve the other party with a demand for arbitration. Any demand for arbitration by you will be sent to: AUM Health, ${ADDRESS}, ${EMAIL}.`,
        'AUM Health will send any arbitration demand to the email address associated with your account or to your counsel, if any. You and AUM Health agree that the Federal Arbitration Act ("FAA") governs this Arbitration Clause. If the FAA cannot apply, then the state laws governing arbitration procedures where you reside apply.',
        'The arbitration will be administered by a mutually agreed neutral arbitration provider under its operative comprehensive dispute resolution rules and, where applicable, its mass-filing supplemental rules. The arbitration will be conducted before a single arbitrator, and the evidentiary hearing may be conducted remotely at the election of either party. This Arbitration Clause will govern to the extent it conflicts with the arbitration provider’s rules.',
        'If the selected arbitration provider is not available to arbitrate, the parties will select an alternative arbitration provider. If the parties cannot agree on an appropriate alternative arbitration provider, the parties will ask a court of competent jurisdiction to appoint an arbitrator pursuant to 9 U.S.C. § 5.',
        'The arbitrator may award damages, declaratory or injunctive relief, and recoverable costs. Any arbitration award may be enforced (such as through a judgment) in any court with jurisdiction over the dispute. An arbitration award will have no preclusive effect in another arbitration or court proceeding involving AUM Health and a different individual. The arbitrator will have the exclusive authority to resolve all threshold arbitrability issues, including whether this Arbitration Clause is applicable, unconscionable, or enforceable, as well as any defenses to arbitration. However, a court has exclusive authority to rule on the ‘Class Action Waiver’, including any claim that the section is unenforceable, illegal, void or voidable, or that it has been breached.',
        'Arbitration Costs & Scope. Except as provided for in a Mass Filing under ‘Batch Process’ below, your responsibility to pay any filing, administrative, and arbitrator costs will be solely as set forth in the applicable arbitration provider’s rules. If a request to proceed in small claims court is made after an arbitration has been initiated, but before an arbitrator has been appointed, such arbitration will be administratively closed. Any controversy over the small claims court’s jurisdiction will be determined by the small claims court.',
        'Class Action Waiver. You and AUM Health agree that, except as specified under the Batch Process rules set forth below, you and AUM Health may bring claims against the other only on an individual basis and not on a class, collective, representative, or mass action basis. The parties agree to waive all rights to have any Dispute be brought, heard, administered, resolved, or arbitrated on a class, collective, representative, or mass action basis. Subject to this Arbitration Clause, the arbitrator may award declaratory or injunctive relief only in favor of the individual party seeking relief and only to the extent necessary to provide relief to the party’s individual claim.',
        'Notwithstanding anything to the contrary in this Arbitration Clause, if a court decides, in a final nonappealable decision, that the limitations of this Class Action Waiver section are invalid or unenforceable as to a particular claim or request for relief (such as a request for public injunctive relief), you and AUM Health agree that particular claim or request for relief (and only that particular claim or request for relief) will be severed from the arbitration and will be pursued in the courts specified in this section.',
        'Batch Process. 25 or more arbitration demands of a substantially similar nature filed within a 180-day period shall constitute a "Mass Filing." Arbitration demands are of a "substantially similar nature" if they relate to the same event or factual scenario, raise the same or similar legal issues, and seek similar relief. The parties agree to administer any Mass Filing in batches of 25 demands per batch, with only one batch filed, processed, and adjudicated at a time; to designate one arbitrator per batch; and that fees associated with a demand included in a Mass Filing will only be due once that demand is included in a properly designated batch.',
        'Any statutes of limitation will remain tolled while any arbitration demands are held in abeyance under this Batch Process. This provision is not intended to increase the number of claims necessary to trigger the applicability of a Mass Filing, or to authorize class arbitration of any kind. Unless AUM Health otherwise consents in writing, AUM Health does not agree or consent to class arbitration, private attorney general arbitration, or arbitration involving joint or consolidated claims under any circumstances, except as set forth in this Batch Process section.',
        'Severability. Except as provided under ‘Class Action Waiver’ above, if any provision of this Arbitration Clause is found to be illegal or unenforceable, then that provision will be severed. The remaining provisions will still apply and will be interpreted to achieve the closest possible intent to the original intent of this section, inclusive of the severed provision.',
      ],
    },
    {
      heading: 'XXIII. Copyright Infringement',
      paragraphs: [
        `AUM Health reserves the right to remove any content or any other material or information available on or through our Platform, at any time, for any reason. AUM Health complies with the provisions of the Digital Millennium Copyright Act ("DMCA") applicable to Internet service providers (17 U.S.C. § 512, as amended), and responds to clear notices of alleged copyright infringement.`,
        `If you have objections to copyrighted content or material made available on or through our Platform, you may submit a notification to our Designated Agent at ${EMAIL}. Any notification to AUM Health regarding copyright infringement must include:`,
        '- An electronic or physical signature of the person authorized to act on behalf of the owner of the exclusive right being infringed.',
        '- An identification of the copyrighted work or other intellectual property that you claim has been infringed or, if multiple copyrighted works are covered by a single notification, a representative list of such works.',
        '- An identification of the content or material that you claim is infringing and where it is located on our Platform.',
        '- Information sufficient for AUM Health to contact you, such as your address, telephone number, and/or email address.',
        '- A statement by you that you have a good-faith belief that the use of the content or material of which you are complaining is not authorized by the copyright owner, its agent, or the law.',
        '- A signed statement by you that the above information in your notice is accurate and that, under penalty of perjury, you are the copyright owner or authorized to act on the copyright owner’s behalf.',
      ],
    },
    {
      heading: 'XXIV. Miscellaneous',
      paragraphs: [
        'The Terms set forth the entire understanding and agreement between you and us with respect to the subject matter herein. If any provision of the Terms is found by a court of competent jurisdiction to be invalid, the parties nevertheless agree that the court should endeavor to give effect to the parties’ intentions as reflected in the provision, and the other provisions of the Terms shall remain in full force and effect. Headings are for reference only and in no way define, limit, construe, or describe the scope or extent of such section. Our failure to act with respect to any failure by you or others to comply with these Terms does not waive our right to act with respect to subsequent or similar failures. You may not assign or transfer your rights or obligations under these Terms without our prior written consent, and any assignment or transfer in violation of this provision shall be null and void.',
      ],
    },
    {
      heading: 'XXV. Contact Information',
      paragraphs: [
        `If you have any questions or concerns, please contact ${EMAIL}.`,
        'AUM Health is a patient management platform that works with independent physicians and practitioners who provide services utilizing the AUM Health Platform. AUM Health does not directly provide medical or pharmacy services and payment does not guarantee the writing or dispensing of a prescription. Medical Services are provided via independent providers. The information provided on this website is for informational purposes and not a substitute for professional medical advice, diagnosis, or treatment. If you have questions or concerns about your health, please talk to your doctor. This site is an advertisement for services and not any specific medication.',
      ],
    },
  ],
};

export const privacyPolicyContent = {
  id: 'privacy-policy',
  title: 'Privacy Policy',
  lastUpdated: 'August 15, 2026',
  intro: [
    'PLEASE READ THIS PRIVACY POLICY CAREFULLY BEFORE USING OUR SERVICES OR WEBSITE.',
    'IMPORTANT NOTE — Our Notice of Privacy Practices is a separate document that governs how protected health information ("PHI") about you may be used and disclosed in connection with the health care services in accordance with the Health Insurance Portability and Accountability Act ("HIPAA").',
  ],
  sections: [
    {
      heading: 'I. Introduction',
      paragraphs: [
        `This Privacy Policy (the "Privacy Policy") describes how AUM Health collects and uses Personal Data about you through the use of our Website, and through email, text, and other electronic communications between you and AUM Health. The terms "we", "us", "our" and "AUM Health" refer to AUM Health, located at ${ADDRESS}.`,
        'AUM Health respects your privacy, and we are committed to protecting it through our compliance with this policy. This Privacy Policy describes the types of information we and our affiliates, including certain affiliated professional entities (collectively, "AUM Health", "we", "our", or "us") may collect from you or that you may provide when you use AUM Health through our website ("website" or the "Platform").',
        'This Privacy Policy also describes our practices for collecting, using, maintaining, protecting, and disclosing that information. Use of the Platform is governed by this Privacy Policy and our Terms of Service. This Privacy Policy is incorporated into our Terms of Service. All capitalized terms used in this Privacy Policy, but not defined herein, have the meanings assigned to them in the Terms of Service. By accessing or using the Platform, you acknowledge that you have read, understood and agreed to be legally bound by and comply with this Privacy Policy and our Terms of Service. If any term in this Privacy Policy is unacceptable to you, please do not use the Platform or provide any Personal Information. This Privacy Policy may change from time to time and your use of the Platform after we make changes is deemed to be acceptance of those changes, so please check this Privacy Policy periodically for updates.',
        'This Privacy Policy does not apply to information collected by any third party, including through any application or content (including advertising) that may link to, be embedded on, or otherwise accessible from or on the Platform. Also, you may be subject to different privacy policies or terms of service for other websites or applications.',
      ],
    },
    {
      heading: 'II. Information We Collect About You and How It’s Collected',
      paragraphs: [
        'We collect several types of information from and about users of our Platform, including:',
        '- Information by which you may be personally identified, such as name, mailing address, email address, telephone number and account information, postal address, gender, occupation, billing and collection information that you provide to us, information related to your eligibility, or any other information collected on the Platform that is defined as personally identifiable information under applicable law ("Personal Information").',
        '- Health-related information, such as clinical history and condition, and any other information exchanged in emails, texts, chats or calls between you and AUM Health.',
        '- Information about your Internet connection, the equipment you use to access our Platform, and usage details.',
        '- Information about you, such as whether you are a current user, your product interests, location or demographics, or information related to your inquiry or request.',
        '- Any other information we specifically request.',
        'We collect this information directly from you when you provide it to us; automatically as you navigate through the Platform (e.g., usage details, IP address, and information collected through cookies, web beacons, and other tracking technologies); and from third parties with whom we work to provide you services, such as physicians, medical professionals, and pharmacies.',
      ],
    },
    {
      heading: 'III. Information You Give to Us',
      paragraphs: [
        'The information we collect on or through our Platform may include:',
        '- Information that we collect when you browse our website. Even without creating an account, we still may collect from you some of the information described above.',
        '- Information that you provide on our Platform, including information provided when you sign in or register for an account, or through communications with you as a result of any healthcare services.',
        '- Information to process or respond to your inquiries related to requests for treatment, payment, and customer service, including payment processing information such as billing information, address, email address, and payment card information. When you provide or update your payment processing information, we transmit the payment via an encrypted connection to a third-party credit card processor. AUM Health does not collect or store your full credit card details.',
        '- Records and copies of your correspondence if you contact us.',
        '- Information that you provide for display or posting on the Platform, including in social media and/or testimonials. Please remember that testimonials are located in the public areas of our Platform. Do not provide information for display or posting that you would not want others to save or share.',
        '- Your search queries on the Platform.',
        'As with many other websites and applications, we may use automatic data tracking technologies to collect certain information about your equipment, browsing actions, and patterns, including details of your visits to our Platform, information about your computer and Internet connection, and details of referring websites. We may also use these technologies to collect information about your online activities over time and across third-party websites or other online services (behavioral tracking).',
        'The Platform may utilize "cookies" to improve functionality. Cookies are text files sent by servers to web browsers and stored on your computer that help us recognize you when you return to the Platform and save your preferences. Visitors who do not wish to have cookies placed on their computers should set their browsers to refuse cookies before using the Platform; some parts of the Platform may then be inaccessible or may not function properly. Visitors can also utilize the Global Privacy Control ("GPC") add-on or browser preference, which signals that you do not want personal information collected by websites you visit; our Sites are designed to respond to GPC signals.',
      ],
    },
    {
      heading: 'IV. Third-Party Tools',
      paragraphs: [
        'We use third-party payment processors. In order to allow these services to function properly, a cookie is stored on your browser, which assists in detecting and preventing fraud. These are considered session cookies and typically only remain on your browser for 24 hours.',
        'We use other third-party tools that allow us to track the performance of our Site. These tools provide us with information about errors, website performance, and other technical details we may use to improve our Site and/or our Service.',
        'We may also collect data by using "pixel tags," "web beacons," "clear GIFs" or similar means (collectively, "pixel tags") that allow us to know when you visit our Platform. Through pixel tags, we collect non-Personal Information or aggregate information that can be used to enhance your online experience and understand traffic patterns.',
      ],
    },
    {
      heading: 'V. Information We Receive From Other Sources',
      paragraphs: [
        'This is information we receive about you if you use any of the other websites we operate or other services we provide. We sometimes work with third parties, such as subcontractors, analytics providers, advertising networks, and search information providers, or third parties who share your information to provide health care services to you, and they sometimes provide information about you.',
        'We may combine information we receive from other sources with information you give to us and information we collect about you. Depending on the types of information received, we will use the information received from other sources or the combined information for the purposes described in Section VI below.',
      ],
    },
    {
      heading: 'VI. How We Use Your Information',
      paragraphs: [
        'We may use information collected about you, including Personal Information, in the following ways:',
        '- To complete any registration or other transactions or actions you request online, such as payment processing, including determining eligibility, use, and other benefits.',
        '- For treatment, payment, or healthcare operational purposes.',
        '- To communicate with you about our healthcare services and information, products, and services that you request from us (which may include telephone, voicemail, email, SMS/text messages, or notifications within the Platform).',
        '- To contact you if you receive healthcare services resulting from your use of the Platform.',
        '- To administer your account, including processing your payments and fulfilling your orders.',
        '- To operate the Platform and perform any services associated with it, including providing you with technical support and improving the Platform and our products and services.',
        '- To provide you with information that you have requested or to respond to your inquiries.',
        '- To create de-identified information that cannot be used to personally identify you, such as aggregate statistics relating to the use of our service.',
        '- To measure or understand the effectiveness of communications (including advertising) that we send to you and others.',
        '- To better understand our audience.',
        '- To enhance the safety and security or performance of our products and services, including verifying your identity and preventing or detecting fraud or other unauthorized or illegal activities.',
        '- To design, develop, and communicate with you about our features, products, and services, or, subject to any consents or authorizations required by applicable law, those of our subsidiaries, affiliates, and parent companies and their related businesses and third-party partners.',
        '- To notify you about changes to our services or the Platform.',
        '- To enforce this Privacy Policy and any other terms that you have agreed to, including to protect the rights, property, or safety of us or any other person.',
        '- For any purpose where you have given your consent (where legally required).',
        '- To comply with applicable federal, state, and other laws and regulations.',
      ],
    },
    {
      heading: 'VII. SMS Communications — AUM Health Offers Program',
      paragraphs: [
        'AUM Health operates a promotional text messaging program called "AUM Health Offers." By opting in, you consent to receive recurring automated marketing and promotional text messages from AUM Health at the mobile number you provide, including offers, program updates, and health-related promotions.',
        'Message frequency varies. Message and data rates may apply.',
        `To stop receiving messages, reply STOP, UNSUBSCRIBE, or CANCEL to any message. You'll receive a single confirmation and no further texts. AUM Health also accepts opt-out requests submitted by any reasonable method, including email to ${EMAIL}, and will process them within 10 business days.`,
        `For help, reply HELP or contact us at ${PHONE} or email ${EMAIL}.`,
        'SMS opt-in data will not be shared with any third party for marketing or advertising purposes. We may share your number and consent status with service providers who help us deliver messages (platform providers, carriers, SMS vendors) solely for that purpose. This applies regardless of any other data-sharing provisions in this Privacy Policy — SMS opt-in data is explicitly excluded from sharing with marketing and advertising entities.',
        'Consent to receive AUM Health Offers messages is not a condition of purchase. Wireless carriers are not liable for delayed or undelivered messages.',
        'For full program terms, see our Mobile Terms of Service.',
      ],
    },
    {
      heading: 'VIII. Disclosure of Your Information',
      paragraphs: [
        'We may disclose Personal Information that we collect or you provide as described in this Privacy Policy as follows:',
        '- For treatment, payment, or healthcare operations purposes.',
        '- To anyone authorized under this Privacy Policy or pursuant to any other consent or authorization that you may provide.',
        '- To service providers that assist us in the maintenance, improvement, and optimization of our Platform, such as providers of email delivery, auditing, and similar services.',
        '- To medical providers, healthcare facilities and organizations, pharmacies, and laboratories that provide any services to you.',
        '- To AUM Health and its affiliated professional entities’ employees, or other third parties who provide services to AUM Health or an affiliated professional entity.',
        '- To our affiliates and their employees, including for the purpose of posting information or notifications about healthcare services in your account.',
        '- To fulfill the purpose for which you provide it.',
        '- To third-party credit card processors via an encrypted connection so that they can process any payments by you.',
        '- To any third parties we believe necessary or appropriate to comply with applicable laws.',
        '- For any other purpose disclosed by us when you provide the information or with your consent.',
        '- If we are under a duty to disclose or share your Personal Information in order to comply with applicable law, to enforce our Terms of Service, or to protect the rights, property, or safety of AUM Health, our customers, or others.',
        '- With respect to de-identified information, for any purpose without restriction.',
        '- In the event of a sale, merger, consolidation, change in control, transfer of substantial assets, reorganization, or liquidation, we may transfer, sell, or assign information concerning your relationship with us.',
      ],
    },
    {
      heading: 'IX. Options About How We Use And Disclose Your Information',
      paragraphs: [
        'Tracking Technologies and Advertising. You can set your browser to refuse all or some browser cookies, or to alert you when cookies are being sent. If you disable or refuse cookies, please note that some parts of our Platform may then be inaccessible or may not function properly.',
        'Do Not Track. We do not currently respond to "do not track" signals.',
      ],
    },
    {
      heading: 'X. Data Security',
      paragraphs: [
        'We have implemented measures designed to reasonably secure your Personal Information from accidental loss and from unauthorized access, use, alteration, and disclosure.',
        'Where we have given you (or where you have chosen) a password which enables you to access certain parts of our Platform, you are responsible for keeping this password confidential. We ask you not to share a password with anyone. The information you share in public areas may be viewed by any user of the Platform.',
        'Unfortunately, the transmission of information via the Internet is not completely secure. Although we will do our best to protect your Personal Information, we cannot guarantee the security of your data transmitted to our Platform; any transmission is at your own risk.',
        'When you use our Platform there is a risk that your PHI will be stored unencrypted on your mobile device. We take a variety of technical safeguards to make sure that your PHI does not leak onto your mobile device but we cannot guarantee that these safeguards work.',
      ],
    },
    {
      heading: 'XI. Third-Party Platforms',
      paragraphs: [
        'Our Platform may contain links or references to other websites outside of our control. Please be aware that this Privacy Policy does not apply to third-party websites. AUM Health encourages you to read the privacy statements and terms of service of linked or referenced websites you enter.',
        'AUM HEALTH DOES NOT CONTROL AND IS NOT RESPONSIBLE FOR WHAT THIRD PARTIES DO IN CONNECTION WITH THEIR WEBSITES, OR HOW THEY HANDLE YOUR PERSONAL INFORMATION. PLEASE EXERCISE CAUTION AND CONSULT THE PRIVACY POLICIES POSTED ON EACH THIRD-PARTY WEBSITE FOR FURTHER INFORMATION.',
      ],
    },
    {
      heading: 'XII. SMS Terms and Conditions',
      paragraphs: [
        `By providing your mobile phone number, you consent to receive SMS messages from AUM Health related to our patient care process, used to send appointment reminders, medication updates, refill reminders, care coordination messages, wellness check-ins, and responses to patient inquiries. Message frequency may vary. Standard message and data rates may apply depending on your carrier. You may opt out at any time by replying "STOP" to any SMS message you receive from us. After opting out, you will receive a confirmation message, and we will cease sending SMS messages to your number. If you need assistance, reply "HELP" to any SMS message, or contact our customer support team at ${PHONE} or email ${EMAIL}.`,
        'Your phone number will be handled in accordance with this Privacy Policy. We do not share SMS opt-in consent with any third parties for solicitation purposes. No mobile information will be shared with third parties/affiliates for marketing/promotional purposes; text messaging originator opt-in data and consent will not be shared with any third parties.',
      ],
    },
    {
      heading: 'XIII. No Services To Persons Under The Age of 18',
      paragraphs: ['AUM Health does not knowingly provide services to minors under 18.'],
    },
    {
      heading: 'XIV. California Resident Privacy Rights',
      paragraphs: [
        'If you are a resident of California, the California Consumer Privacy Act ("CCPA") provides you with additional rights regarding your Personal Information. See our For California Residents page for the full detail of these rights, including the categories of Personal Information we collect, how we use and disclose it, and how to exercise your rights.',
        'Your privacy rights under the CCPA do not apply to all information that we might collect, use, or disclose. For example, the CCPA does not apply to PHI governed by HIPAA, "medical information" governed by the California Confidentiality of Medical Information Act ("CMIA"), or other patient information we maintain in the same manner as PHI or "medical information." When we collect, use, or disclose information not covered by the CCPA, we do so as described in this Privacy Policy and our Notice of Privacy Practices.',
      ],
    },
    {
      heading: 'XV. Revisions to Our Privacy Policy',
      paragraphs: [
        'We reserve the right to change this Privacy Policy at any time. It is our policy to post any changes we make to our Privacy Policy on this page. The date this Privacy Policy was last modified is identified at the top of the page. You are responsible for ensuring we have an up-to-date, active, and deliverable email address for you, and for periodically monitoring and reviewing any updates to this Privacy Policy. Your continued use of our Platform after such amendments will be deemed your acknowledgment of these changes to this Privacy Policy.',
      ],
    },
    {
      heading: 'XVI. Contact Information',
      paragraphs: [
        `If you have any questions or comments about this Privacy Policy and our privacy practices, please message us through the Platform or contact us at: AUM Health, ${ADDRESS}, ${EMAIL}.`,
      ],
    },
  ],
};

export const privacyPracticesContent = {
  id: 'privacy-practices',
  title: 'Notice of Privacy Practices',
  lastUpdated: 'August 15, 2026',
  intro: [
    'THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION. PLEASE REVIEW IT CAREFULLY.',
  ],
  sections: [
    {
      heading: 'I. Who We Are',
      paragraphs: [
        'This Notice of Privacy Practices ("Notice") describes the privacy practices of AUM Health and its affiliates, including certain affiliated professional entities, their physicians, health care practitioners, and other personnel ("we" or "us").',
      ],
    },
    {
      heading: 'II. Our Privacy Obligations',
      paragraphs: [
        'We are required by law to maintain the privacy of your health information ("Protected Health Information" or "PHI") and to provide you with this Notice of our legal duties and privacy practices with respect to your PHI. We are also obligated to notify you following a Breach of unsecured PHI. When we use or disclose your PHI, we are required to abide by the terms of this Notice (or other notice in effect at the time of the use or disclosure).',
      ],
    },
    {
      heading: 'III. Permissible Uses and Disclosures Without Your Written Authorization',
      paragraphs: [
        'In certain situations, described in Section IV below, we must obtain your written authorization in order to use and/or disclose your PHI. We do not need any type of authorization, however, for the following uses and disclosures:',
        'A. Uses and Disclosures For Treatment, Payment and Health Care Operations. We may use and disclose PHI, but not your "Highly Confidential Information" (defined in Section IV.B below), in order to treat you, obtain payment for services provided to you, and conduct our "Healthcare Operations." Treatment: we may disclose PHI to other health care providers involved in your treatment. Payment: in most cases, we may use and disclose your PHI to obtain payment for services that we provide to you. Healthcare Operations: we may use and disclose your PHI for internal administration, planning, and activities that improve the quality and cost effectiveness of the care that we deliver, including quality assessment and improvement activities, reviewing the competence of healthcare professionals, resolving complaints, and health care fraud and abuse detection or compliance.',
        'B. Disclosure to Relatives, Close Friends and Other Caregivers. We may use or disclose your PHI to a family member, other relative, a close personal friend, or any other person identified by you when you are present for, or otherwise available prior to the disclosure, if we (1) obtain your agreement; (2) provide you with the opportunity to object and you do not object; or (3) reasonably infer that you do not object. If you are not present, or the opportunity to agree or object cannot practicably be provided because of your incapacity or an emergency circumstance, we may exercise our professional judgment to determine whether a disclosure is in your best interests, limited to information directly relevant to that person’s involvement with your care. We may also disclose your PHI in order to notify such persons of your location, general condition, or death.',
        'C. Public Health Activities. We may disclose your PHI for public health activities, including reporting to public health authorities, reporting child abuse and neglect, reporting to the FDA, alerting persons who may have been exposed to a communicable disease, and reporting work-related illnesses and injuries as required by law.',
        'D. Victims of Abuse, Neglect or Domestic Violence. If we reasonably believe you are a victim of abuse, neglect, or domestic violence, we may disclose your PHI to a governmental authority authorized by law to receive such reports.',
        'E. Health Oversight Activities. We may disclose your PHI to a health oversight agency responsible for ensuring compliance with the rules of government health programs, such as Medicare or Medicaid.',
        'F. Judicial and Administrative Proceedings. We may disclose your PHI in the course of a judicial or administrative proceeding in response to a legal order or other lawful process.',
        'G. Law Enforcement Officers. We may disclose your PHI to the police or other law enforcement officials as required or permitted by law or in compliance with a court order or subpoena.',
        'H. Decedents. We may disclose your PHI to a coroner, medical examiner, or funeral director as authorized by law.',
        'I. Research. We may use or disclose your PHI without your consent or authorization if an Institutional Review Board or Privacy Board approves a waiver of authorization for disclosure.',
        'J. Health or Safety. We may use or disclose your PHI to prevent or lessen a serious and imminent threat to a person’s or the public’s health or safety.',
        'K. Specialized Government Functions. We may use and disclose your PHI to units of the government with special functions, such as the U.S. military, under certain circumstances.',
        'L. Workers’ Compensation. We may disclose your PHI as authorized by and to the extent necessary to comply with state law relating to workers’ compensation or other similar programs.',
        'M. As Required By Law. We may use and disclose your PHI when required to do so by any other law not already referred to above.',
      ],
    },
    {
      heading: 'IV. Uses and Disclosures Requiring Your Written Authorization',
      paragraphs: [
        'A. Use or Disclosure with Your Authorization. We must obtain your written authorization for uses and disclosures of PHI for marketing purposes and disclosures that constitute the sale of PHI. Other uses and disclosures of PHI not described in this Notice will be made only when you give us your written permission on an authorization form.',
        'B. Uses and Disclosures of Your Highly Confidential Information. Federal and state law requires special privacy protections for certain highly confidential information about you ("Highly Confidential Information"), including information about mental health and developmental disabilities services; alcohol and drug abuse prevention, treatment and referral; HIV/AIDS testing, diagnosis or treatment; sexually-transmitted disease(s); genetic testing; child abuse and neglect; domestic abuse of an adult with a disability; or sexual assault. In order for us to disclose your Highly Confidential Information for a purpose other than those permitted by law, we must have your written authorization.',
        'C. Revocation of Your Authorization. You may withdraw (revoke) your Authorization, or any written authorization regarding your Highly Confidential Information (except to the extent that we have acted in reliance upon it), by delivering a written statement to the Privacy Officer identified below.',
      ],
    },
    {
      heading: 'V. Your Rights Regarding Your Protected Health Information',
      paragraphs: [
        'A. For Further Information and Complaints. If you would like more information about your privacy rights, if you are concerned that we have violated your privacy rights, or if you disagree with a decision we made about access to your PHI, you may contact our Compliance and Privacy Officer. You may also file written complaints with the Director, Office for Civil Rights of the U.S. Department of Health and Human Services. We will not retaliate against you if you file a complaint with us or the Director.',
        'B. Right to Request Additional Restrictions. You have the right to request a restriction on the uses and disclosures of your PHI for treatment, payment, and health care operations purposes, and to individuals involved in your care. Unless otherwise required by law, we are required to comply with your request for this type of restriction where the PHI pertains solely to an item or service paid out of pocket in full. For all other requests, we are not required to agree, but will attempt to accommodate reasonable requests when appropriate.',
        'C. Right to Receive Confidential Communications. You may request, and we will accommodate, any reasonable written request for you to receive your PHI by alternative means of communication or at alternative locations.',
        `D. Right to Inspect and Copy Your Health Information. You may request access to your medical record file and billing records maintained by us. Under limited circumstances, we may deny you access to a portion of your records. If you would like to access your records, please request a Release of Information Form from the Privacy Officer and submit the completed form to ${EMAIL}. If you request copies, we will charge you a cost-based fee that includes labor, supplies, and postage costs, and, if you agree in advance, the cost of preparing a summary of the PHI.`,
        `E. Right to Request to Amend Your Records. You have the right to request that we amend PHI maintained in your medical record file or billing records. Please obtain an Amendment Request Form from the Compliance and Privacy Officer and submit the completed form to ${EMAIL}. We will comply with your request unless we believe the information is accurate and complete or other special circumstances apply.`,
        'F. Right to Receive An Accounting of Disclosures. Upon request, you may obtain an accounting of certain disclosures of your PHI made by us during any period of time prior to the date of your request, provided such period does not exceed six years. If you request an accounting more than once during a twelve-month period, we will charge a reasonable fee and will inform you in advance.',
        `G. Right to Receive A Copy of this Notice. Upon request, you may obtain a copy of this Notice, either by email or in paper format. Please submit your request to AUM Health, ${ADDRESS}, ${EMAIL}.`,
      ],
    },
    {
      heading: 'VI. Effective Date and Duration of This Notice',
      paragraphs: [
        'A. Effective Date. This Notice is effective on August 15, 2026.',
        `B. Right to Change Terms of this Notice. We may change the terms of this Notice at any time. If we change this Notice, we may make the new notice terms effective for all Protected Health Information that we maintain, including any information created or received prior to issuing the new notice. If we change this Notice, we will post the new notice on our website at ${SITE}. You also may obtain any new notice by contacting ${EMAIL}.`,
      ],
    },
    {
      heading: 'VII. Privacy Officer',
      paragraphs: [
        `AUM Health, ${ADDRESS}, ${EMAIL}.`,
        'You may contact our Data Protection Officer at the same address above, or by emailing the address listed for privacy inquiries.',
      ],
    },
  ],
};

export const refundPolicyContent = {
  id: 'refund-policy',
  title: 'Cancellation and Refund Policy',
  lastUpdated: 'August 15, 2026',
  intro: [],
  sections: [
    {
      heading: 'Subscription Services',
      paragraphs: [
        'Your membership in the subscription program ("Subscription Service") begins once you have completed the intake form and paid for the first month of the Subscription Services.',
        'Please note if you are disqualified by our healthcare provider for a medical reason you will receive a full refund.',
        'The Subscription Services include access to healthcare providers, medications where appropriate, and online support.',
        'There is no guarantee of results or effectiveness of any treatment or care plan provided to you as part of your participation or use of the Subscription Services.',
        'This Refund Policy is incorporated into our Terms and Conditions which govern the Subscription Services.',
      ],
    },
    {
      heading: 'Cancellation Policy',
      paragraphs: [
        `You may cancel your Subscription Service at any time for any reason. To cancel your Subscription Services, please contact customer service (${EMAIL}) and request a cancellation, or through the chat feature in your patient portal.`,
        'To ensure a smooth process, we require your cancellation request to be received at least 72 hours prior to your next billing date. If prior notice is not received in this window, your subscription will be charged in accordance with the then-current billing cycle, and the cancellation will take effect on the subsequent billing cycle.',
        'After cancellation, you will continue to receive the Subscription Services through the end of the then-current billing cycle.',
        'Please see our Refund Policy below to determine if you are eligible for a refund for your canceled Subscription Service.',
      ],
    },
    {
      heading: 'Refund Policy',
      paragraphs: [
        `If your Subscription Service is cancelled by notifying patient support at ${EMAIL} within the first 72 hours of your Subscription term and you have not received any Subscription Services, you will be issued a full refund.`,
        'If your Subscription Service is cancelled due to disqualification by our healthcare provider, you will be issued a refund for your Subscription Service charges following the disqualification.',
        'If your Subscription Service is charged monthly, YOU WILL NOT BE ISSUED A REFUND UPON CANCELLATION FOR THE MONTH IN WHICH THE CANCELLATION OCCURRED OR FOR ANY PRIOR MONTHS.',
        'If your Subscription Service is charged 2 or more months at a time, you will be issued a refund for the months for which no medication was shipped to you.',
        'Other than as outlined above, IN NO EVENT WILL YOU BE ISSUED A REFUND UPON CANCELLATION OF THE SUBSCRIPTION SERVICES.',
        'Federal law generally prohibits the return of prescription medications to pharmacies for refund or reuse once they have been ordered for a patient. This policy ensures that all medications provided are handled and dispensed with utmost care and compliance.',
        `Damaged or Incorrect items: Please inspect your medication immediately upon receipt. If the medication appears to be damaged or incorrect, please contact customer service immediately at ${EMAIL}.`,
        '- Damaged items: Damaged items may be replaced by the pharmacy upon receipt of evidence of damage.',
        '- Incorrect items: Incorrect items will be replaced by the pharmacy.',
      ],
    },
    {
      heading: 'Subscription Services FAQs',
      paragraphs: [
        'What is included in my Subscription Services price? Your Subscription Services represents a single price for the subscription purchased. This may include consultations both live and via electronic form submissions and reviews by a healthcare provider for medications that are fulfilled through a pharmacy, lab services, or other health care services for which we collect payments, 24/7 patient support line, and other services to support your medical journey.',
        `What if my provider determines I am no longer eligible for the Subscription Services? If your healthcare provider determines you are no longer eligible for the Subscription Services, your subscription will be canceled, and a refund may be issued. If you have questions or concerns about an eligibility-initiated cancellation, please contact our customer service at ${EMAIL}.`,
      ],
    },
  ],
};

export const medicalConsentContent = {
  id: 'medical-consent',
  title: 'Medical Consent',
  lastUpdated: 'August 15, 2026',
  intro: [
    'WE ARE NOT A REPLACEMENT FOR EMERGENCY MEDICAL SERVICES. IF YOU HAVE A MEDICAL EMERGENCY SEEK EMERGENCY MEDICAL CARE IMMEDIATELY IN-PERSON OR DIAL 911 OR YOUR LOCAL EMERGENCY NUMBER.',
    'We may change these terms at any time, as required by law. This may include changing, adding, or removing terms. We may do this in response to legal, business, competitive environment or other reasons not listed here.',
  ],
  sections: [
    {
      heading: 'Telehealth Consent',
      paragraphs: [
        'Telehealth is the type of care that allows clients to access health services using audio-video interface such as videoconferencing.',
        'Electronic systems used will incorporate network and software security protocols to protect the confidentiality of client identification and imaging data and will include measures to safeguard the data and to ensure its integrity against intentional or unintentional corruption.',
        'Expected Benefits:',
        '- Improved access to weight loss management health care by enabling a client to receive services across distances and between programs.',
        '- More efficient weight loss management health care including medical evaluation and management.',
        '- Obtaining expertise of a distant specialist.',
        '- Maintaining connections with established providers in other areas.',
        'Possible Risks: As with any medical procedure, there are potential risks associated with the use of telehealth for weight loss management health treatment. These risks include, but may not be limited to:',
        '- In rare cases, information transmitted may not be sufficient (e.g. poor resolution of images) to allow for appropriate medical decision making by the physician or other clinical staff.',
        '- Delays in medical evaluation and treatment could occur due to deficiencies or failures of the equipment.',
        '- In very rare instances, security protocols could fail, causing a breach of privacy of personal medical information.',
        '- In rare cases, a lack of access to complete medical records may result in adverse drug interactions or allergic reactions or other judgmental errors.',
        'By consenting to these forms, I understand the following:',
        '- I understand that the laws that protect privacy and the confidentiality of medical information also apply to telehealth, and that no information obtained in the use of telehealth which identifies me will be disclosed to researchers or other entities without my consent.',
        '- I understand that I have the right to withhold or withdraw my consent to the use of telehealth in the course of my care at any time, without affecting my right to future care or treatment.',
        '- I understand that I have the right to inspect all information obtained and documented in the course of a telehealth interaction and may receive copies of this information for a reasonable fee.',
        '- I understand that a variety of alternative methods of weight loss management health care may be available to me, and that I may choose one or more of these at any time.',
        '- I understand that it is in my best interest to inform my physician or other clinical staff of any other healthcare providers involved in my medical care.',
        '- I understand that I may expect the anticipated benefits from the use of telehealth in my care, but that no results can be guaranteed or assured.',
      ],
    },
    {
      heading: 'Client Consent to the Use of Telehealth',
      paragraphs: [
        'I have read and understand the information provided above regarding telehealth, have discussed it with my physician or other clinical staff as may be designated, and all of my questions have been answered to my satisfaction. I hereby give my informed consent for the use of telehealth in my weight loss management health care. I have been offered a copy of this form for my personal records.',
        'My continued use of the services constitutes my understanding and acceptance of the above terms and I hereby authorize the use of telehealth in the course of my diagnosis and treatment.',
      ],
    },
    {
      heading: 'HIPAA Consent',
      paragraphs: [
        'The Health Insurance Portability and Accountability Act (HIPAA) provides safeguards to protect your privacy. This form is a "friendly" version. A more complete text is available through the office.',
        'What this is all about: Specifically, there are rules and restrictions on who may see or be notified of your Protected Health Information (PHI). These restrictions do not include the normal interchange of information necessary to provide you with office services. HIPAA provides certain rights and protections to you as the patient. We balance these needs with our goal of providing you with quality professional service and care. Additional information is available from the U.S. Department of Health and Human Services at www.hhs.gov.',
        'We have adopted the following policies:',
        '- Patient information will be kept confidential except as is necessary to provide services or to ensure that all administrative matters related to your care are handled appropriately. This specifically includes the sharing of information with other healthcare providers, laboratories, health insurance payers as is necessary and appropriate for your care.',
        '- It is the policy of this office to remind patients of their appointments. We may do this by telephone, e-mail, U.S. mail, or by any means convenient for the practice and/or as requested by you.',
        '- The practice utilizes a number of vendors in the conduct of business. These vendors may have access to PHI but must agree to abide by the confidentiality rules of HIPAA.',
        '- You understand and agree to inspections of the office and review of documents which may include PHI by government agencies or insurance payers in normal performance of their duties.',
        '- You agree to bring any concerns or complaints regarding privacy to the attention of the office manager or the doctor.',
        '- Your confidential information will not be used for the purposes of marketing or advertising of products, goods, or services.',
        '- We agree to provide patients with access to their records in accordance with state and federal laws.',
        '- We may change, add, delete, or modify any of these provisions to better serve the needs of both the practice and the patient.',
        '- You have the right to request restrictions in the use of your protected health information and to request a change in certain policies used within the office concerning your PHI. However, we are not obligated to alter internal policies to conform to your request.',
        'My continued use of the services constitutes my understanding and acceptance of the above terms set forth in the HIPAA information form and any subsequent changes in office policy. I understand that this consent shall remain in force from this time forward.',
      ],
    },
    {
      heading: 'Financial Consent',
      paragraphs: [
        'I understand and accept the terms in order to render services that a payment method may be kept on file and that any remaining balances for services rendered shall be paid in full. I authorize AUM Health to submit on my behalf and the release of any medical records or other information necessary to process my consultation order. Fee schedules and receipts for all professional services are available upon request.',
        'I authorize AUM Health to make invoice changes and debit my account for orders placed, goods received, and/or services rendered not fully covered by third-party vouchers or credits.',
        'I authorize AUM Health to charge my payment method for any unpaid balances due.',
        'All programs are auto-renewing and I consent to be automatically charged for any program I am a part of unless I explicitly request to cancel before my payment is processed. There are no refunds or exchanges except as described in our Refund Policy. I certify that I am an authorized user of this payment method and that I will not dispute the payments with my payment provider.',
      ],
    },
    {
      heading: 'Shipping Authorization',
      paragraphs: [
        'All prescription medications are dispensed according to state and federal law with the approval of the pharmacist in charge and in compliance with all laws applicable from the relevant Medical Boards and State Boards of Pharmacy. The customer requesting shipping disclaims and agrees to hold harmless AUM Health for any delays or errors during the shipping process. Medication is considered dispensed and the order completed when it is signed out for shipping, not when it arrives via delivery.',
        'My continued use of the services constitutes my understanding and acceptance of the above terms and I give permission for AUM Health to ship medication to me at the address provided in my intake form or any other address given by me to the company and agree to all of the conditions listed above.',
      ],
    },
  ],
};

export const californiaResidentsContent = {
  id: 'california-residents',
  title: 'Privacy Statement — California',
  lastUpdated: 'August 15, 2026',
  intro: [
    'This Privacy Notice is applicable to California residents ("consumers" or "you") only and supplements the information in AUM Health’s general Privacy Policy. We adopt this notice to comply with the California Consumer Privacy Act of 2018 ("CCPA"), the California Privacy Rights Act ("CPRA"), and other California privacy laws. Any terms defined in the CCPA or CPRA have the same meaning when used in this notice.',
  ],
  sections: [
    {
      heading: 'Information We Collect',
      paragraphs: [
        'We collect information that identifies, relates to, describes, references, is capable of being associated with, or could reasonably be linked, directly or indirectly, with a particular consumer or device ("Personal Information").',
        'We have collected the following categories of Personal Information from California consumers since January 1, 2024 on AUM Health’s Platform:',
        'Category A. Identifiers — e.g., name, address, email address, phone number, and unique identifiers such as your IP address or cookies. Collected: Yes.',
        'Category B. Personal information categories listed in the California Customer Records statute (Cal. Civ. Code § 1798.80(e)) — e.g., name, signature, address, phone number, insurance policy number, employment history, financial information, or medical information. Collected: Yes.',
        'Category C. Characteristics of protected classifications under California or federal law — e.g., gender, age, disability, marital status. Collected: Yes.',
        'Category D. Commercial information — e.g., payment information, policy or account details. Collected: Yes.',
        'Category E. Biometric information — e.g., health information, medical conditions. Collected: Yes.',
        'Category F. Internet or other similar network activity — e.g., browser type, cookies, device, interactions with our website, IP address. Collected: Yes.',
        'Category G. Geolocation data. Collected: No.',
        'Category H. Sensory data — e.g., audio recordings of phone calls or medical interviews. Collected: Yes.',
        'Category I. Professional or employment-related information — e.g., occupation. Collected: Yes.',
        'Category J. Non-public education information (per FERPA). Collected: No.',
        'Category K. Inferences drawn from other personal information — e.g., preferences, consumer attitudes. Collected: Yes.',
      ],
    },
    {
      heading: 'Sources of Personal Information',
      paragraphs: [
        'We obtain the categories of Personal Information listed above from the following categories of sources:',
        '- Directly from our clients or their agents.',
        '- Indirectly from our clients or their agents, such as through information we collect in the course of providing services and from activity on our website.',
        '- From third parties that interact with us in connection with the services we perform.',
      ],
    },
    {
      heading: 'Personal Information Does NOT Include',
      paragraphs: [
        '- Information that is lawfully made available from federal, state, or local government records ("Publicly Available Information").',
        '- De-identified or aggregate consumer information (as such terms are defined in the CCPA).',
        '- Information excluded from the CCPA’s scope, such as health or medical information covered by HIPAA and the California Confidentiality of Medical Information Act (CMIA) or clinical trial data, and personal information covered by certain sector-specific privacy laws (FCRA, GLBA, CalFIPA, DPPA).',
      ],
    },
    {
      heading: 'Sensitive Personal Information',
      paragraphs: [
        'Sensitive personal information means information that reveals your social security, driver’s license, or passport number; your account log-in, financial account, debit card, or credit card number in combination with any required security or access code; your precise geolocation; your racial or ethnic origin, religious or philosophical beliefs, or union membership; contents of your mail, email, and text messages unless we are the intended recipient; and your genetic data. Unless the information is publicly available, sensitive personal information also includes biometric information processed to uniquely identify you, and personal information concerning your health or your sex life or sexual orientation.',
      ],
    },
    {
      heading: 'Use of Personal Information',
      paragraphs: [
        'We may use or disclose the Personal Information we collect for one or more of the following business purposes:',
        '- To fulfill or meet the reason for which the information is provided.',
        '- To provide you with information, products, or services.',
        '- To provide you with email alerts, event registrations and other notices concerning our products or services, or events or news, that may be of interest to you.',
        '- To carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collections.',
        '- To improve our website and present its contents to you.',
        '- For testing, research, analysis, and product development.',
        '- As reasonably necessary and proportionate to protect the rights, property or safety of us, our clients, or others.',
        '- To respond to regulatory and/or law enforcement requests and as required by applicable law, court order, or governmental regulations.',
        '- To third-party service providers who perform marketing or other services on our behalf.',
        '- To our affiliates and subsidiaries.',
        '- As otherwise required or permitted by law.',
        'We will not collect additional categories of Personal Information from those identified above or use the Personal Information we collected for materially different, unrelated, or incompatible purposes without providing you notice.',
      ],
    },
    {
      heading: 'Sharing Personal Information',
      paragraphs: [
        'We may disclose your Personal Information to a third party for a business purpose. In the preceding twelve (12) months, we have disclosed the following categories of personal information to third parties for a business purpose: None.',
        'We disclose your Personal Information for a business purpose to the following categories of third parties: our affiliates; service providers and vendors; third parties to whom you authorize us to disclose your personal information in connection with products or services we provide to you; our independent contractor providers; and other third parties as required or permitted by law.',
        'We do not sell your Personal Information to anyone.',
      ],
    },
    {
      heading: 'Your Rights and Choices',
      paragraphs: [
        'The CCPA provides California residents with specific rights regarding their Personal Information, including:',
        '- Right to Know: You have the right to know about the Personal Information we collect, use, and disclose about you in the twelve (12) months preceding your request.',
        '- Right to Correction: You have the right to request that we correct inaccurate personal information about you.',
        '- Right to Deletion: You have the right to request that we delete the Personal Information we collect about you, subject to certain exceptions (e.g., completing the transaction for which it was collected, detecting security incidents, debugging, complying with a legal obligation).',
        '- Right to Opt-out of Sale/Sharing: You have the right to request that we do not sell or share your Personal Information with third parties.',
        '- Right to Limit Use of Sensitive Personal Information: You have the right to request that we limit the use and disclosure of your Sensitive Personal Information, subject to certain exceptions.',
        '- Right to Non-Discrimination: We do not discriminate against you for exercising any of your privacy rights under the CCPA.',
      ],
    },
    {
      heading: 'Exercising Your Rights',
      paragraphs: [
        `To exercise the rights described above, please submit a verifiable consumer request to us by calling ${PHONE}, visiting ${SITE}, or emailing ${EMAIL}.`,
        'Only you, or a person registered with the California Secretary of State whom you authorize to act on your behalf, may make a verifiable consumer request related to your Personal Information. You may also make a verifiable consumer request on behalf of your minor child. You may only make a verifiable consumer request for access or data portability twice within a 12-month period.',
        'We endeavor to respond to a verifiable consumer request within 45 days of its receipt. If we require more time (up to 90 days), we will inform you of the reason and extension period in writing. We do not charge a fee to process or respond to your verifiable consumer request unless it is excessive, repetitive, or manifestly unfounded.',
      ],
    },
    {
      heading: 'Changes to This Notice',
      paragraphs: [
        'We reserve the right to amend this Privacy Notice at our discretion and at any time. When we make changes, we will notify you by email or through a notice on our website homepage.',
      ],
    },
    {
      heading: 'Contact Information',
      paragraphs: [
        `Phone: ${PHONE}. Website: ${SITE}. Email: ${EMAIL}. Postal Address: AUM Health, ${ADDRESS}.`,
      ],
    },
  ],
};

export const billOfRightsContent = {
  id: 'bill-of-rights',
  title: 'Weight-Loss Consumer Bill of Rights',
  lastUpdated: 'August 15, 2026',
  intro: [
    'This page reproduces Florida Statute § 501.0575, the Weight-Loss Consumer Bill of Rights, which providers of weight-loss services operating in Florida are required to disclose to consumers.',
  ],
  sections: [
    {
      heading: '501.0575 Weight-Loss Consumer Bill of Rights',
      paragraphs: [
        '(1) The Weight-Loss Consumer Bill of Rights shall consist of the following provisions:',
        '(A) WARNING: RAPID WEIGHT LOSS MAY CAUSE SERIOUS HEALTH PROBLEMS. RAPID WEIGHT LOSS IS WEIGHT LOSS OF MORE THAN 1½ POUNDS TO 2 POUNDS PER WEEK OR WEIGHT LOSS OF MORE THAN 1 PERCENT OF BODY WEIGHT PER WEEK AFTER THE SECOND WEEK OF PARTICIPATION IN A WEIGHT-LOSS PROGRAM.',
        '(B) CONSULT YOUR PERSONAL PHYSICIAN BEFORE STARTING ANY WEIGHT-LOSS PROGRAM.',
        '(C) ONLY PERMANENT LIFESTYLE CHANGES, SUCH AS MAKING HEALTHFUL FOOD CHOICES AND INCREASING PHYSICAL ACTIVITY, PROMOTE LONG-TERM WEIGHT LOSS.',
        '(D) QUALIFICATIONS OF THIS PROVIDER ARE AVAILABLE UPON REQUEST.',
        '(E) YOU HAVE A RIGHT TO:',
        '- ASK QUESTIONS ABOUT THE POTENTIAL HEALTH RISKS OF THIS PROGRAM AND ITS NUTRITIONAL CONTENT, PSYCHOLOGICAL SUPPORT, AND EDUCATIONAL COMPONENTS.',
        '- RECEIVE AN ITEMIZED STATEMENT OF THE ACTUAL OR ESTIMATED PRICE OF THE WEIGHT-LOSS PROGRAM, INCLUDING EXTRA PRODUCTS, SERVICES, SUPPLEMENTS, EXAMINATIONS, AND LABORATORY TESTS.',
        '- KNOW THE ACTUAL OR ESTIMATED DURATION OF THE PROGRAM.',
        '- KNOW THE NAME, ADDRESS, AND QUALIFICATIONS OF THE DIETITIAN OR NUTRITIONIST WHO HAS REVIEWED AND APPROVED THE WEIGHT-LOSS PROGRAM ACCORDING TO s. 468.505(1)(j), FLORIDA STATUTES.',
        '(2) The copies of the Weight-Loss Consumer Bill of Rights to be posted according to s. 501.0573(6) shall be printed in at least 24-point boldfaced type on one side of a sign. The palm-sized copies to be distributed according to s. 501.0573(5) shall be in boldfaced type and legible. Each weight-loss provider shall be responsible for producing and printing appropriate copies of the Weight-Loss Consumer Bill of Rights.',
        'History.—s. 4, ch. 93-274; s. 45, ch. 2000-154.',
      ],
    },
  ],
};

export const legalPages = [
  termsContent,
  privacyPolicyContent,
  privacyPracticesContent,
  refundPolicyContent,
  medicalConsentContent,
  californiaResidentsContent,
  billOfRightsContent,
];
