import { Metadata } from "next"

export function constructMetadata({
    title = 'K S.',
    description = 'Pandit Kailash Shastri Ji की परामर्श सेवा में आपका स्वागत है, जहाँ प्राचीन ज्ञान आधुनिक समाधान से मिलता है। दशकों के अनुभव के साथ, पंडित जी ज्योतिष और आध्यात्मिक परामर्श में गहन मार्गदर्शन प्रदान करते हैं ताकि आप जीवन की चुनौतियों का सामना कर सकें। हमारा दृष्टिकोण समग्र है, जो केवल लक्षणों को नहीं बल्कि आपकी समस्याओं की जड़ को भी संबोधित करता है। व्यक्तिगत मुद्दों और संबंध कठिनाइयों से लेकर व्यवसायी समस्याओं और आध्यात्मिक बाधाओं तक, पंडित जी की विशेषज्ञता आपके जीवन के हर पहलू को कवर करती है। उनकी ईमानदारी और ग्राहकों की देखभाल के प्रति समर्पण उन्हें एक विश्वसनीय सलाहकार बनाता है, जो आपको समाधान और शांति की ओर मार्गदर्शन करता है।',
   
    icons = '/favicon.ico',
    noIndex = false,
  }: {
    title?: string
    description?: string
    image?: string
    icons?: string
    noIndex?: boolean
  } = {}): Metadata {
    return {
      title,
      description,
      // openGraph: {
      //   title,
      //   description,
      //   images: [
      //     {
      //       url: image,
      //     },
      //   ],
      // },
      // twitter: {
      //   card: 'summary_large_image',
      //   title,
      //   description,
      //   images: [image],
      //   creator: '@skupta',
      // },
      icons,
    //   metadataBase: new URL('https://'),
      ...(noIndex && {
        robots: {
          index: false,
          follow: false,
        },
      }),
    }
  }

  export const generatePagination = (currentPage: number, totalPages: number) => {
    // If the total number of pages is 7 or less,
    // display all pages without any ellipsis.
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
  
    // If the current page is among the first 3 pages,
    // show the first 3, an ellipsis, and the last 2 pages.
    if (currentPage <= 3) {
      return [1, 2, 3, '...', totalPages - 1, totalPages];
    }
  
    // If the current page is among the last 3 pages,
    // show the first 2, an ellipsis, and the last 3 pages.
    if (currentPage >= totalPages - 2) {
      return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
    }
  
    // If the current page is somewhere in the middle,
    // show the first page, an ellipsis, the current page and its neighbors,
    // another ellipsis, and the last page.
    return [
      1,
      '...',
      currentPage - 1,
      currentPage,
      currentPage + 1,
      '...',
      totalPages,
    ];
  };
  