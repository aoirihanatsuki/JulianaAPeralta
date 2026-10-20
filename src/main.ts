const baseUrl = import.meta.env.BASE_URL;

// Hardcoded explicit list of all 13 certificates with base URL support
const certificates: Post[] = [
  { id: 1, kind: "certificate", image: `${baseUrl}cer1.jpg`, caption: "#CERTIFICATE 1 - 2025 International Conference.", likes: 42 },
  { id: 2, kind: "certificate", image: `${baseUrl}cer2.jpg`, caption: "#CERTIFICATE 2 - 2025 International Conference.", likes: 15 },
  { id: 3, kind: "certificate", image: `${baseUrl}cer3.jpg`, caption: "#CERTIFICATE 3 - 2025 International Conference.", likes: 8 },
  { id: 4, kind: "certificate", image: `${baseUrl}cer4.jpg`, caption: "#CERTIFICATE 4 - TALAKTECH SERIES: PAGTALAKAY SA MAKABAGONG TEKNOLOHIYA 2025.", likes: 23 },
  { id: 5, kind: "certificate", image: `${baseUrl}cer5.jpg`, caption: "#CERTIFICATE 5 - TALAKTECH SERIES: PAGTALAKAY SA MAKABAGONG TEKNOLOHIYA 2025.", likes: 12 },
  { id: 6, kind: "certificate", image: `${baseUrl}cer6.jpg`, caption: "#CERTIFICATE 6 - TALAKTECH SERIES: PAGTALAKAY SA MAKABAGONG TEKNOLOHIYA 2025.", likes: 19 },
  { id: 7, kind: "certificate", image: `${baseUrl}cer7.jpg`, caption: "#CERTIFICATE 7 - TALAKTECH SERIES: PAGTALAKAY SA MAKABAGONG TEKNOLOHIYA 2025.", likes: 31 },
  { id: 8, kind: "certificate", image: `${baseUrl}cer8.jpg`, caption: "#CERTIFICATE 8 - TALAKTECH SERIES: PAGTALAKAY SA MAKABAGONG TEKNOLOHIYA 2025.", likes: 14 },
  { id: 9, kind: "certificate", image: `${baseUrl}cer9.jpg`, caption: "#CERTIFICATE 9 - TALAKTECH SERIES: PAGTALAKAY SA MAKABAGONG TEKNOLOHIYA 2025.", likes: 27 },
  { id: 10, kind: "certificate", image: `${baseUrl}cer10.jpg`, caption: "#CERTIFICATE 10 - TALAKTECH SERIES: PAGTALAKAY SA MAKABAGONG TEKNOLOHIYA 2025.", likes: 35 },
  { id: 11, kind: "certificate", image: `${baseUrl}cer11.jpg`, caption: "#CERTIFICATE 11 - TALAKTECH SERIES: PAGTALAKAY SA MAKABAGONG TEKNOLOHIYA 2025.", likes: 18 },
  { id: 12, kind: "certificate", image: `${baseUrl}cer12.jpg`, caption: "#CERTIFICATE 12 - TALAKTECH SERIES: PAGTALAKAY SA MAKABAGONG TEKNOLOHIYA 2025.", likes: 22 },
  { id: 13, kind: "certificate", image: `${baseUrl}cer13.jpg`, caption: "#CERTIFICATE 13 - TALAKTECH SERIES: PAGTALAKAY SA MAKABAGONG TEKNOLOHIYA 2025.", likes: 50 }
];

// Hardcoded explicit list of all 5 experiences with base URL support
const experiences: Post[] = [
  { id: 1, kind: "experience", image: `${baseUrl}exp1.jpg`, caption: "#EXPERIENCE 1 - First Pin and Hard Hat! First Batch", likes: 45 },
  { id: 2, kind: "experience", image: `${baseUrl}exp2.jpg`, caption: "#EXPERIENCE 2 - On the Job Training in Mandaluyong, Picture with our supervisor", likes: 60 },
  { id: 3, kind: "experience", image: `${baseUrl}exp3.jpg`, caption: "#EXPERIENCE 3 - Wireframing, UI/UX, #OJT", likes: 38 },
  { id: 4, kind: "experience", image: `${baseUrl}exp4.jpg`, caption: "#EXPERIENCE 4 - NC2 Training 2026", likes: 74 },
  { id: 5, kind: "experience", image: `${baseUrl}exp5.jpg`, caption: "#EXPERIENCE 5 - Regional Information Technology and Engineering Summit 2026", likes: 92 }
];
