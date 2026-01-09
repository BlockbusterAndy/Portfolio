import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SEO = ({ title, description, keywords, image, url }) => {
    const siteTitle = 'Aniket Jadhav - Full Stack Developer Portfolio';
    const siteDescription = 'Full Stack Developer specializing in React, Node.js, and TypeScript. Browse my portfolio of 10+ projects showcasing modern web development skills.';
    const siteKeywords = 'Aniket Jadhav, Full Stack Developer, React, Node.js, TypeScript, JavaScript, Web Developer, Portfolio';
    const siteUrl = 'https://aniketjadhav.dev';
    const siteImage = '/logo.svg';

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
            <meta name="description" content={description || siteDescription} />
            <meta name="keywords" content={keywords || siteKeywords} />
            <meta name="author" content="Aniket Jadhav" />
            <link rel="canonical" href={url || siteUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title || siteTitle} />
            <meta property="og:description" content={description || siteDescription} />
            <meta property="og:image" content={image || siteImage} />
            <meta property="og:url" content={url || siteUrl} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:title" content={title || siteTitle} />
            <meta property="twitter:description" content={description || siteDescription} />
            <meta property="twitter:image" content={image || siteImage} />
        </Helmet>
    );
};

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    keywords: PropTypes.string,
    image: PropTypes.string,
    url: PropTypes.string,
};

export default SEO;
