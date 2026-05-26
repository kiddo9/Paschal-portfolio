import React from "react";
import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  keywords: string;
  author: string;
  ogImage: string;
  twitterImage: string;
}

const SEO = ({
  title,
  description,
  keywords,
  author,
  ogImage,
  twitterImage,
}: SeoProps) => {
  const siteTitle = title || "Paschal Elechi | Backend & DevOps Developer";
  const siteDescription =
    description ||
    "Portfolio of Paschal Elechi, a Backend & DevOps Developer specializing in Node.js and Golang. I design real-time systems, optimized APIs, and cloud infrastructure.";
  const siteKeywords =
    keywords ||
    "Paschal Elechi, Backend Developer, DevOps, Node.js, Golang, Portfolio, Software Engineer, Cloud infrastructure";
  const siteAuthor = author || "Paschal Elechi";
  const siteOgImage =
    ogImage || "https://paschal-portfolio.vercel.app/og-image.png";
  const siteTwitterImage =
    twitterImage || "https://paschal-portfolio.vercel.app/og-image.png";

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={siteKeywords} />
      <meta name="author" content={siteAuthor} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteOgImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={siteDescription} />
      <meta property="twitter:image" content={siteTwitterImage} />
    </Helmet>
  );
};

export default SEO;
