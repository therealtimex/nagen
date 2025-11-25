export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NAGEN",
    "alternateName": "Nagen Vietnam",
    "url": "https://nagen.vn",
    "logo": "https://nagen.vn/images/logo_nagen_chinh_thuc.png",
    "description": "Tấm lót hỗ trợ vòm bàn chân NAGEN nhập khẩu từ Mỹ - Bio Orthotics International",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "VN",
      "addressRegion": "Vietnam"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+84966578008",
      "contactType": "customer service",
      "availableLanguage": "Vietnamese"
    },
    "sameAs": [
      "https://www.facebook.com/nagen.vn",
      "https://www.youtube.com/nagen",
      "https://www.instagram.com/nagen.vn"
    ]
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Tấm lót hỗ trợ vòm bàn chân NAGEN",
    "description": "Tấm lót hỗ trợ vòm bàn chân NAGEN nhập khẩu từ Mỹ do Bio Orthotics International sản xuất. Hơn 4 triệu người tin dùng trên toàn thế giới.",
    "brand": {
      "@type": "Brand",
      "name": "NAGEN"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Bio Orthotics International, Inc"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "VND"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1250"
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "NAGEN",
    "url": "https://nagen.vn",
    "description": "Tấm lót hỗ trợ vòm bàn chân NAGEN nhập khẩu từ Mỹ",
    "inLanguage": "vi-VN",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://nagen.vn/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
    </>
  )
}