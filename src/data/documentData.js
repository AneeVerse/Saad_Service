const documentData = [
  {
    id: "birth-certificate",
    title: "Birth Certificate",
    firstImage: "/images/documents/birth-certificate.jpg",
    description: "We provide attestation and legalization services for birth certificates to ensure they are valid for use in foreign jurisdictions.",
    details: 
      <div className="space-y-4">
        <p className="text-gray-600 leading-relaxed">
          A birth certificate is one of the primary identity documents, required for a variety of legal procedures such as applying for a passport, visa, or for school and college admissions abroad. Our birth certificate attestation ensures your document is legally valid for use in foreign countries.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-4">Why Attestation is Important:</h3>
        <ul className="list-disc ml-6 pl-5 space-y-2 text-gray-600">
          <li>Required for obtaining a visa or work permit abroad.</li>
          <li>Accepted by immigration authorities in foreign countries.</li>
          <li>Proof of identity for educational or residency applications.</li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-800 mt-6">Steps Involved:</h3>
        <ol className="list-decimal ml-6 pl-5 space-y-2 text-gray-600">
          <li>Submit the original birth certificate.</li>
          <li>We authenticate it with the relevant authorities.</li>
          <li>We process the certificate through the Ministry of External Affairs (MEA) for attestation.</li>
          <li>Receive your attested birth certificate, valid for international use.</li>
        </ol>
      </div>
  },
  {
    id: "marriage-certificate",
    title: "Marriage Certificate",
    firstImage: "/images/documents/marriage-certificate.jpg",
    description: "Attestation and legalization of marriage certificates for use in visa, immigration, or other legal proceedings.",
    details: 
      <div className="space-y-4">
        <p className="text-gray-600 leading-relaxed">
          A marriage certificate is required for visa and immigration processes when moving abroad with a spouse. Our attestation service ensures your marriage certificate is legally recognized in foreign countries.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-4">Key Features:</h3>
        <ul className="list-disc ml-6 pl-5 space-y-2 text-gray-600">
          <li>Required for family visas and immigration procedures.</li>
          <li>Accepted by consulates and embassies for spouse sponsorship.</li>
          <li>Proves legal marital status in foreign jurisdictions.</li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-800 mt-6">Steps Involved:</h3>
        <ol className="list-decimal ml-6 pl-5 space-y-2 text-gray-600">
          <li>Submit your original marriage certificate.</li>
          <li>We process it through the relevant state government authorities for verification.</li>
          <li>The certificate is then attested by the MEA and the concerned foreign embassy.</li>
          <li>Receive your attested marriage certificate, ready for use abroad.</li>
        </ol>
      </div>
  },
  {
    id: "bonafide-certificate",
    title: "Bonafide Certificate",
    firstImage: "/images/documents/bonafide-certificate.webp",
    description: "Get your Bonafide Certificate attested for academic or work-related purposes abroad.",
    details: 
      <div className="space-y-4">
        <p className="text-gray-600 leading-relaxed">
          A Bonafide Certificate is often required for academic or work-related purposes to confirm your association with an institution or organization. Our attestation services ensure that this document is validated for official use abroad.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-4">Uses of Bonafide Certificate Attestation:</h3>
        <ul className="list-disc ml-6 pl-5 space-y-2 text-gray-600">
          <li>Required for higher education applications abroad.</li>
          <li>Necessary for internships and job applications overseas.</li>
          <li>Serves as proof of your current or past affiliation with an organization or institution.</li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-800 mt-6">How We Assist:</h3>
        <ol className="list-decimal ml-6 pl-5 space-y-2 text-gray-600">
          <li>Submit your Bonafide Certificate issued by your institution.</li>
          <li>We verify it with the concerned authorities and process it through MEA for attestation.</li>
          <li>Receive your attested certificate, ready for international use.</li>
        </ol>
      </div>
  },
  {
    id: "power-of-attorney",
    title: "Power of Attorney",
    firstImage: "/images/documents/power-of-attorney.jpeg",
    description: "Legalization and attestation of Power of Attorney documents for legal use in foreign countries.",
    details: 
      <div className="space-y-4">
        <p className="text-gray-600 leading-relaxed">
          A Power of Attorney (POA) is used to authorize another person to act on your behalf in legal, financial, or business matters. When used abroad, it requires attestation for legal validity.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-4">Why You Need Attestation for POA:</h3>
        <ul className="list-disc ml-6 pl-5 space-y-2 text-gray-600">
          <li>Required for legal and financial transactions abroad.</li>
          <li>Mandates legal acceptance in foreign courts and legal systems.</li>
          <li>Ensures your POA is valid and enforceable overseas.</li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-800 mt-6">How It Works:</h3>
        <ol className="list-decimal ml-6 pl-5 space-y-2 text-gray-600">
          <li>Submit the original Power of Attorney document.</li>
          <li>We handle the attestation process with the local authorities and the MEA.</li>
          <li>The POA is further attested by the relevant embassy or consulate for international use.</li>
        </ol>
      </div>
  },
  {
    id: "school-leaving-certificate",
    title: "School Leaving Certificate",
    firstImage: "/images/documents/school-leaving-certificate.png",
    description: "Attestation of School Leaving Certificates for overseas studies or immigration purposes.",
    details: 
      <div className="space-y-4">
        <p className="text-gray-600 leading-relaxed">
          A School Leaving Certificate is necessary for academic pursuits or immigration applications in foreign countries. Our attestation service ensures that this document is valid for international use.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-4">Why Attestation is Needed:</h3>
        <ul className="list-disc ml-6 pl-5 space-y-2 text-gray-600">
          <li>Required for university admissions and scholarships abroad.</li>
          <li>Accepted by immigration authorities as proof of education.</li>
          <li>Provides legal validity for school records in foreign countries.</li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-800 mt-6">Steps in Attestation:</h3>
        <ol className="list-decimal ml-6 pl-5 space-y-2 text-gray-600">
          <li>Submit the original School Leaving Certificate.</li>
          <li>We verify the certificate with the issuing school or board.</li>
          <li>The document is attested by the MEA and foreign embassies as required.</li>
        </ol>
      </div>
  },
  {
    id: "degree-diploma-certificate",
    title: "Degree / Diploma Certificate",
    firstImage: "/images/documents/degree-certificate.jpg",
    description: "Document attestation for Degree or Diploma Certificates required for higher education or employment abroad.",
    details: 
      <div className="space-y-4">
        <p className="text-gray-600 leading-relaxed">
          Attestation of Degree or Diploma Certificates is required for pursuing higher education or employment in foreign countries. Our service ensures that your degree is recognized internationally.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-4">Importance of Attestation:</h3>
        <ul className="list-disc ml-6 pl-5 space-y-2 text-gray-600">
          <li>Needed for university admissions abroad.</li>
          <li>Required for work visa and employment purposes in foreign countries.</li>
          <li>Provides international legal validity for your academic achievements.</li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-800 mt-6">How It Works:</h3>
        <ol className="list-decimal ml-6 pl-5 space-y-2 text-gray-600">
          <li>Submit your original degree or diploma certificate.</li>
          <li>We verify the document with the issuing university and process it through the MEA for attestation.</li>
          <li>The certificate is then attested by the concerned embassy for use abroad.</li>
        </ol>
      </div>
  },
  {
    id: "company-agreement",
    title: "Company / Agency Agreement",
    firstImage: "/images/documents/company-agreement.png",
    description: "Legalization of business contracts and company agreements for international business dealings.",
    details: 
      <div className="space-y-4">
        <p className="text-gray-600 leading-relaxed">
          Company or Agency Agreements are crucial legal documents for international business dealings. Our attestation service ensures that your business agreements are legally recognized in foreign countries.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-4">Why Legalization is Required:</h3>
        <ul className="list-disc ml-6 pl-5 space-y-2 text-gray-600">
          <li>Mandated for business operations in foreign countries.</li>
          <li>Required for contract enforcement and legal proceedings abroad.</li>
          <li>Ensures your agreements are legally binding internationally.</li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-800 mt-6">Process Involved:</h3>
        <ol className="list-decimal ml-6 pl-5 space-y-2 text-gray-600">
          <li>Submit the original business agreement or contract.</li>
          <li>We verify and legalize the document through the relevant authorities and MEA.</li>
          <li>It is further attested by the foreign embassy for international legal use.</li>
        </ol>
      </div>
  },
  {
    id: "invoice-origin",
    title: "Invoice & Certificate of Origin",
    firstImage: "/images/documents/invoice-origin.jpg",
    description: "We assist with the attestation and legalization of commercial documents like Invoices and Certificates of Origin.",
    details: 
      <div className="space-y-4">
        <p className="text-gray-600 leading-relaxed">
          Invoices and Certificates of Origin are essential for international trade and business transactions. Our service provides attestation for these documents to ensure their validity abroad.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-4">Key Features:</h3>
        <ul className="list-disc ml-6 pl-5 space-y-2 text-gray-600">
          <li>Required for international trade and customs clearance.</li>
          <li>Accepted by foreign governments and trade bodies.</li>
          <li>Provides legal validity for commercial transactions abroad.</li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-800 mt-6">Steps in the Process:</h3>
        <ol className="list-decimal ml-6 pl-5 space-y-2 text-gray-600">
          <li>Submit the commercial documents (invoice, certificate of origin).</li>
          <li>We handle the attestation with the local authorities and MEA.</li>
          <li>The documents are then legalized by the concerned embassy for use abroad.</li>
        </ol>
      </div>
  },
  {
    id: "memorandum-of-company",
    title: "Memorandum of Company",
    firstImage: "/images/documents/memorandum-company.jpg",
    description: "Attestation and certification of Memorandums of Association for company registration or legal requirements abroad.",
    details: 
      <div className="space-y-4">
        <p className="text-gray-600 leading-relaxed">
          The Memorandum of Association is an important legal document that outlines a company&lsquo;s formation and objectives. Our attestation ensures your memorandum is legally valid in foreign countries.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-4">Uses of Attestation:</h3>
        <ul className="list-disc ml-6 pl-5 space-y-2 text-gray-600">
          <li>Required for company registration abroad.</li>
          <li>Necessary for legal proceedings involving foreign entities.</li>
          <li>Provides international legal validity for your company formation documents.</li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-800 mt-6">Attestation Process:</h3>
        <ol className="list-decimal ml-6 pl-5 space-y-2 text-gray-600">
          <li>Submit the original Memorandum of Association.</li>
          <li>We handle the attestation with the necessary government bodies and the MEA.</li>
          <li>Receive your attested document, valid for international business dealings.</li>
        </ol>
      </div>
  },
  {
    id: "article-association",
    title: "Article of Association",
    firstImage: "/images/documents/article-association.jpeg",
    description: "We handle attestation and legalization for Articles of Association for company legal processes abroad.",
    details: 
      <div className="space-y-4">
        <p className="text-gray-600 leading-relaxed">
          The Articles of Association govern the internal management of a company. For international legal procedures, attestation of this document is essential.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-4">Why Attestation is Needed:</h3>
        <ul className="list-disc ml-6 pl-5 space-y-2 text-gray-600">
          <li>Necessary for company registration and legal procedures abroad.</li>
          <li>Required for enforcement of internal company regulations in foreign jurisdictions.</li>
          <li>Ensures legal recognition of your company&lsquo;s operations internationally.</li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-800 mt-6">How We Help:</h3>
        <ol className="list-decimal ml-6 pl-5 space-y-2 text-gray-600">
          <li>Submit your Articles of Association.</li>
          <li>We process the document through the necessary authorities for attestation.</li>
          <li>The document is attested by the relevant embassy for international legal use.</li>
        </ol>
      </div>
  }
];

export default documentData;
