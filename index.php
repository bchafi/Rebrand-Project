<!DOCTYPE html>
<html lang="en">

<head>
    <meta name="description" content="RebrandApps offers custom IPTV app design services, helping you create personalized apps with your logo and colors. Stand out with unique, branded IPTV solutions tailored to your needs.">
    <meta property="og:title" content="Rebrand IPTV Services | RebrandApps">
    <meta property="og:description" content="Rebrand iptv offers the ultimate solution for IPTV resellers, providing fully customized IPTV apps and panels with your logo, background, and portal URL—all delivered within just one day. Get your IPTV business rebranded effortlessly and professionally!">
    <meta property="og:url" content="https://rebrandapps.us">
    <meta property="og:image" content="https://rebrandapps.us/reb.png"> <!-- Add the path to your image -->
    <meta property="og:type" content="website">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="BRAND - REBRAND applications | RebrandApps">
    <meta name="twitter:description" content="Rebranding iptv apps is the best way for IPTV resellers to get IPTV application or iptv panel customized with your logo &amp; background and portal url in one day only">
    <meta name="twitter:image" content="https://rebrandapps.us/reb.png"> <!-- Add the path to your image -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css?v=2">
    <link rel="stylesheet" href="css/header.css?v=2">
    <link rel="icon" href="src/rebfav.png" type="image/png">
    <title>IPTV Rebrand & Customization | RebrandApps</title>
    <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "RebrandApps",
            "url": "https://rebrandapps.us",
            "logo": "https://rebrandapps.us/reb.png",
            "sameAs": [
                "https://www.facebook.com/profile.php?id=61566618407652",
                "https://x.com/ElayachiILYASS",
                "https://www.instagram.com/elayachi_ilyass/"
            ],
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+212653023032",
                "contactType": "Customer Service",
                "areaServed": "US",
                "availableLanguage": "English"
            }
        }
    </script>
    <!-- Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZJ8ZGPJK8X"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'G-ZJ8ZGPJK8X');
    </script>
    <!-- End Google Analytics -->
</head>

<body>
    <div id="header" style="background-color: #161515"></div>
    <div class="social-share">
        <h3>Share Our Service</h3>
        <a href="https://www.facebook.com/sharer/sharer.php?u=https://rebrandapps.us" target="_blank" rel="noopener noreferrer" class="social-btn facebook-btn">Share on Facebook</a>
        <a href="https://twitter.com/intent/tweet?text=Check out RebrandApps!&url=https://rebrandapps.us" target="_blank" rel="noopener noreferrer" class="social-btn twitter-btn">Share on Twitter</a>
        <a href="https://www.pinterest.com/pin/create/button/?url=https://rebrandapps.us&media=https://rebrandapps.us/theme/reb.png&description=Custom IPTV App Design Services" target="_blank" rel="noopener noreferrer" class="social-btn pinterest-btn">Share on Pinterest</a>
    </div>
    <div class="content" id="product-list"></div>
    <div class="faq-header">
        <h1>Frequently Asked Questions</h1>
        <p>Your most common questions, answered.</p>
    </div>
    <div class="faq-container">
        <div class="faq-item">
            <button class="faq-question">What services do you offer?</button>
            <div class="faq-answer">
                <p>We offer a variety of services including IPTV app customization, web development, and more. Check our services page for a full list.</p>
            </div>
        </div>
        <div class="faq-item">
            <button class="faq-question">How can I contact customer support?</button>
            <div class="faq-answer">
                <p>You can reach us via our contact form, email, or through WhatsApp. We are available 24/7 to assist you.</p>
            </div>
        </div>
        <div class="faq-item">
            <button class="faq-question">What payment methods do you accept?</button>
            <div class="faq-answer">
                <p>We accept major credit cards, PayPal, and other payment methods, depending on your location.</p>
            </div>
        </div>
    </div>
    <script src="src/script.js?v=2" defer></script>
    <script src="src/script2.js?v=2" defer></script>
    <footer id="footer"></footer>
    <script>
        function toggleMenu() {
            let menu = document.getElementById("navLinks");
            menu.classList.toggle("show");
        }

        // ✅ Attach event listener to make sure function is recognized
        document.addEventListener("DOMContentLoaded", function() {
            document.getElementById("menuToggle").addEventListener("click", toggleMenu);
        });
    </script>
    <script>
        // Load the header
        fetch('../header.html')
            .then(response => response.text())
            .then(data => document.getElementById('header').innerHTML = data);

        // Load the footer
        fetch('../footer.html')
            .then(response => response.text())
            .then(data => document.getElementById('footer').innerHTML = data);
    </script>
</body>

</html>