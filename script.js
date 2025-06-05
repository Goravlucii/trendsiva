document.addEventListener('DOMContentLoaded', function() {
    // 1. Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        once: true,
        mirror: false,
        offset: 120,
    });

    // --- Hardcoded Static Data (KEEP THIS AS IS) ---
    const globalSettings = {
        hero_typed_words: ["Elevate", "Innovate", "Accelerate"],
        hero_sub_headline: "Data-driven, AI-powered digital marketing strategies for ambitious US brands.",
        hero_video_url: "/static/videos/hero_video.mp4", // Corrected path to '/static/videos'
        footer_email: "info@trendsiva.com",
        footer_phone: "+1 (555) 123-4567",
        footer_logo_light: "/static/trendsiva_logo_light.png", // Assuming this path
        footer_linkedin: "https://linkedin.com/company/trendsiva",
        footer_twitter: "https://twitter.com/trendsiva" // Placeholder, update if you have a Twitter
    };

    const clientLogos = [
        { name: 'US Client Logo 1', image_url: '/static/trendsiva.png' },
        { name: 'US Client Logo 2', image_url: '/static/img_logo.png' },
        { name: 'US Client Logo 3', image_url: '/static/trendsiva.png' },
        { name: 'US Client Logo 4', image_url: '/static/img_logo.png' },
        { name: 'US Client Logo 5', image_url: '/static/trendsiva.png' },
        // Duplicate for continuous scroll effect if needed by CSS
        { name: 'US Client Logo 1', image_url: '/static/trendsiva.png' },
        { name: 'US Client Logo 2', image_url: '/static/img_logo.png' },
        { name: 'US Client Logo 3', image_url: '/static/trendsiva.png' },
        { name: 'US Client Logo 4', image_url: '/static/img_logo.png' },
        { name: 'US Client Logo 5', image_url: '/static/trendsiva.png' }
    ];

    const aiAdvantages = [
        { icon_url: '/static/icons/icon-predictive.png', title: 'Accurate Audience Insights', description: 'Our in-depth data analysis precisely identifies your target customers, allowing us to craft optimal marketing strategies.' },
        { icon_url: '/static/icons/icon-automation.png', title: 'Unrivaled Efficiency', description: 'We streamline repetitive tasks and optimize campaigns in real-time, allowing you to scale your efforts for maximum impact without proportional increases in manual labor.' },
        { icon_url: '/static/icons/icon-growth.png', title: 'Unlock Rapid Growth', description: 'Accelerate your market expansion by rapidly testing and deploying campaigns across diverse channels and segments, achieving unprecedented growth for your business.' }
    ];

    const servicesData = [
        { icon_url: '/static/icons/service-seo.png', title: 'Strategic SEO', description: 'Dominate US search results with in-depth keyword research, insight-driven content, and robust technical optimization.' },
        { icon_url: '/static/icons/service-ecommerce.png', title: 'Shopify & E-commerce Optimization', description: 'Build high-converting online stores with personalized shopping experiences, dynamic pricing, and streamlined customer support.' },
        { icon_url: '/static/icons/service-wordpress.png', title: 'WordPress & Content Solutions', description: 'Develop robust WordPress sites with streamlined content creation, performance optimization, and effective tracking.' },
        { icon_url: '/static/icons/service-dropshipping.png', title: 'Dropshipping Setup & Automation', description: 'Launch and scale your dropshipping business through intelligent product research and automated fulfillment processes.' },
        { icon_url: '/static/icons/service-social.png', title: 'Social Media Management', description: 'Boost your social presence with engaging content, precisely targeted ads, and in-depth sentiment analysis for powerful results.' },
        { icon_url: '/static/icons/service-branding.png', title: 'Branding & Identity Development', description: 'Craft compelling brands by leveraging deep market insights for creative inspiration and trend analysis.' },
        { icon_url: '/static/icons/service-ppc.png', title: 'Optimized PPC Campaigns', description: 'Maximize ROI with strategic bidding, dynamic ad copy generation, and precise audience targeting for US campaigns.' },
        { icon_url: '/static/icons/service-analytics.png', title: 'Advanced Analytics & Reporting', description: 'Receive deep, actionable insights and automated reports that guide strategic decisions and predict future trends.' }
    ];

    const caseStudyData = {
        'scratchit': {
            id: 'scratchit',
            title: 'Dropshipping Success: Scratchit\'s Daily Growth',
            thumbnail_url: '/static/case_studies/treandsiva_thumbnail.png',
            results_text: 'Drove <span>consistent daily growth</span> for a dropshipping store with expert SEO, optimized product listings, and high-impact multi-channel ads.',
            industry: 'E-commerce / Dropshipping',
            challenge: 'Before partnering with Trendsiva, Scratchit faced significant challenges in scaling their newly launched dropshipping store. They struggled with inconsistent sales, limited brand visibility, and inefficient ad spending, resulting in low ROI and slow customer acquisition. The manual processes for product research and ad management were time-consuming and unsustainable for rapid growth.',
            solution: 'Trendsiva implemented a comprehensive AI-powered dropshipping acceleration program. This involved: <br>1. **AI-Driven Product Research:** Utilized predictive analytics to identify high-demand, low-competition products with strong profit margins. <br>2. **Automated Ad Campaign Optimization:** Deployed AI algorithms to dynamically optimize ad spend across Facebook and Google Ads, ensuring maximum reach and conversion at minimal cost. <br>3. **SEO & Content Enhancement:** Optimized product descriptions and store content for search engines, increasing organic traffic. <br>4. **Customer Experience Automation:** Integrated AI chatbots for 24/7 customer support and automated order fulfillment notifications, reducing manual workload and improving customer satisfaction.',
            results_charts_html: '<div><img src="/static/case_studies/charts/scratchit_chart.png" alt="Scratchit Growth Chart" style="max-width:100%; height:auto; margin-top: 15px;"></div>', // Placeholder image. Ensure this path exists.
            testimonial: '“Trendsiva\'s innovative AI strategies transformed our business. We went from struggling to scale to achieving consistent, exponential daily growth. Their team truly understands how to leverage technology for tangible results.”',
            cite: '— Rahul Sharma, Founder, Scratchit.in'
        },
        'lisatxguide': {
            id: 'lisatxguide',
            title: 'Lisatxguide: Enhancing San Antonio Travel Discovery',
            thumbnail_url: '/static/case_studies/techstartup_thumbnail.png',
            results_text: 'Significantly boosted online discovery and user engagement for a leading travel guide, connecting visitors with San Antonio\'s top hotels, restaurants, events, and attractions.',
            industry: 'Travel & Tourism',
            challenge: 'Lisatxguide, a comprehensive online travel guide for San Antonio, struggled with attracting organic traffic and engaging users effectively. Their existing website lacked advanced SEO features, dynamic content updates, and a mobile-optimized experience, making it difficult for tourists to find relevant information about local attractions, hotels, and events. This resulted in low visibility in search engine rankings and limited user interaction.',
            solution: 'Trendsiva implemented a multi-faceted digital strategy focused on SEO, content marketing, and user experience enhancement. Key solutions included: <br>1. **Comprehensive SEO Audit & Implementation:** Conducted thorough keyword research tailored to tourist queries and optimized website content, meta descriptions, and technical aspects for improved search rankings. <br>2. **Dynamic Content Creation:** Developed an AI-assisted content generation system to regularly update and expand information on hotels, restaurants, and attractions, ensuring fresh and relevant content. <br>3. **Mobile-First Responsive Design:** Redesigned the website with a focus on mobile responsiveness to cater to travelers on the go, improving navigation and accessibility. <br>4. **Local SEO Optimization:** Enhanced Google My Business profiles and local citations to capture location-based searches for San Antonio attractions.',
            results_charts_html: '<div><img src="/static/case_studies/charts/lisatxguide_chart.png" alt="Lisatxguide Traffic Growth Chart" style="max-width:100%; height:auto; margin-top: 15px;"></div>', // Placeholder image. Ensure this path exists.
            testimonial: '“Partnering with Trendsiva revolutionized our online presence. The surge in website traffic and user engagement has been incredible, solidifying our position as the go-to guide for San Antonio visitors. Their strategic approach and execution are unmatched.”',
            cite: '— Lisa Ramirez, Founder, Lisatxguide.com'
        },
        'summit-cleaners': {
            id: 'summit-cleaners',
            title: 'Local Lead Generation: Summit Cleaners',
            thumbnail_url: '/static/case_studies/leads_img.png',
            results_text: 'Drove a <span>180% surge in qualified local leads</span> and secured top 3 Google Map Pack rankings for a growing cleaning service in Denver, CO.',
            industry: 'Local Services (Cleaning)',
            challenge: 'Summit Cleaners, a burgeoning cleaning service in Denver, CO, faced intense local competition and struggled to generate consistent, qualified leads through their online presence. Their website had poor local search visibility, and their Google My Business listing was unoptimized, hindering their ability to attract new residential and commercial clients within their service area.',
            solution: 'Trendsiva deployed a hyper-local SEO and lead generation strategy. This involved: <br>1. **Google My Business Optimization:** Fully optimized their GMB profile with accurate information, service areas, photos, and consistent posting to improve local pack rankings. <br>2. **Local Keyword Targeting:** Conducted granular keyword research for Denver-specific cleaning terms and integrated them into website content and local landing pages. <br>3. **Citation Building & Management:** Built and managed citations across relevant local directories to boost authority and trust signals. <br>4. **Review Management Strategy:** Implemented a system to encourage positive customer reviews, significantly improving their online reputation and GMB ranking. <br>5. **Targeted Local PPC:** Launched highly targeted Google Ads campaigns for immediate lead generation, focusing on specific Denver neighborhoods and service types.',
            results_charts_html: '<div><img src="/static/case_studies/charts/summit_cleaners_chart.png" alt="Summit Cleaners Lead Growth Chart" style="max-width:100%; height:auto; margin-top: 15px;"></div>', // Placeholder image. Ensure this path exists.
            testimonial: '“Trendsiva completely changed our business trajectory! We went from struggling to find local clients to having a steady stream of inquiries. Their expertise in local SEO and lead generation is simply outstanding.”',
            cite: '— Mark Johnson, Owner, Summit Cleaners (Denver, CO)'
        }
    };

    const testimonialsData = [
        { photo_url: '/static/testimonials/sarah_chen.png', quote: "Bringing Trendsiva onboard was the smartest decision we made. Their AI-driven approach to SEO utterly transformed our online visibility. We saw a dramatic increase in organic leads that were genuinely interested in our services. It's clear they're at the forefront of digital marketing with AI.", client_name: 'David Chen', client_title_location: 'CEO of "Tech Innovations Inc." (New York, NY)' },
        { photo_url: '/static/testimonials/michael_b.png', quote: "As a dropshipper, efficiency is everything. Trendsiva's AI automation for product sourcing and customer service has been invaluable. It's like having a 24/7 team working for us, allowing us to focus on scaling. Their specialization in AI truly sets them apart.", client_name: 'Jessica Miller', client_title_location: 'Founder of "Zenith Drops" (Los Angeles, CA)' },
        { photo_url: '/static/testimonials/emily_r.png', quote: "We needed a fresh, data-driven approach to our social media, and Trendsiva delivered. Their use of AI for content creation and audience targeting resulted in our most engaging campaigns to date. We're consistently seeing higher conversion rates from our social efforts now.", client_name: 'Robert Davis', client_title_location: 'Marketing Director at "Coastal Resorts" (Miami, FL)' }
    ];

    // --- Content Population (using hardcoded data) ---

    // Update Hero Section
    const typedTextElement = document.getElementById('typed-text');
    if (typedTextElement && globalSettings.hero_typed_words) {
        new Typed(typedTextElement, {
            strings: globalSettings.hero_typed_words,
            typeSpeed: 80,
            backSpeed: 50,
            loop: true,
            showCursor: false,
        });
    }
    document.querySelector('.hero-content .sub-headline').textContent = globalSettings.hero_sub_headline;
    // Note: The video source is already set in HTML and doesn't need JS modification unless dynamic video switching is desired.

    // Update Footer
    document.querySelector('footer .footer-col p:nth-of-type(1)').textContent = "Driving US Market Success with Strategic Digital Solutions."; // This text was static in HTML
    document.querySelector('footer .footer-col p:nth-of-type(2) a').href = `mailto:${globalSettings.footer_email}`;
    document.querySelector('footer .footer-col p:nth-of-type(2) a').textContent = globalSettings.footer_email;
    document.querySelector('footer .footer-col p:nth-of-type(3) a').href = `tel:${globalSettings.footer_phone}`;
    document.querySelector('footer .footer-col p:nth-of-type(3) a').textContent = globalSettings.footer_phone;
    document.querySelector('.footer-logo').src = globalSettings.footer_logo_light;
    const twitterLink = document.querySelector('.social-icons a[aria-label="Twitter"]');
    if (twitterLink) {
        twitterLink.href = globalSettings.footer_twitter;
    }


    // Populate Client Logos
    const logoCarousel = document.querySelector('.logo-carousel');
    if (logoCarousel) {
        logoCarousel.innerHTML = ''; // Clear existing static logos from HTML if any
        clientLogos.forEach(logo => {
            const img = document.createElement('img');
            img.src = logo.image_url;
            img.alt = logo.name;
            logoCarousel.appendChild(img);
        });
    }

    // Populate AI Advantages
    const aiPointsGrid = document.querySelector('.ai-points-grid');
    if (aiPointsGrid) {
        aiPointsGrid.innerHTML = ''; // Clear existing static content from HTML
        aiAdvantages.forEach((adv, index) => {
            const item = document.createElement('div');
            item.className = 'ai-point-item';
            item.setAttribute('data-aos', 'fade-left');
            item.setAttribute('data-aos-delay', (index + 1) * 100);
            item.innerHTML = `
                <img src="${adv.icon_url}" alt="${adv.title} Icon">
                <h3>${adv.title}</h3>
                <p>${adv.description}</p>
            `;
            aiPointsGrid.appendChild(item);
        });
    }

    // Populate Services
    const servicesGrid = document.querySelector('.services-grid');
    if (servicesGrid) {
        servicesGrid.innerHTML = ''; // Clear existing static content from HTML
        servicesData.forEach((service, index) => {
            const item = document.createElement('div');
            item.className = 'service-item';
            item.setAttribute('data-aos', 'fade-up');
            item.setAttribute('data-aos-delay', (index + 1) * 100);
            item.innerHTML = `
                <div class="service-icon"><img src="${service.icon_url}" alt="${service.title} Icon"></div>
                <h3>${service.title}</h3>
                <p>${service.description}</p>
            `;
            servicesGrid.appendChild(item);
        });
    }

    // Populate Case Studies (and prepare data for modal)
    const caseStudyGrid = document.querySelector('.case-study-grid');
    const caseStudiesArray = Object.values(caseStudyData);
    if (caseStudyGrid) {
        caseStudyGrid.innerHTML = ''; // Clear static cards from HTML
        caseStudiesArray.forEach((cs, index) => {
            const card = document.createElement('div');
            card.className = 'case-study-card';
            card.setAttribute('data-aos', 'zoom-in');
            card.setAttribute('data-aos-delay', (index + 1) * 100);
            const resultParts = cs.results_text.split('<span>');
            const resultSpanEndParts = resultParts[1] ? resultParts[1].split('</span>') : ['', ''];
            const formattedResult = resultParts[0] + (resultParts[1] ? `<span>${resultSpanEndParts[0]}</span>${resultSpanEndParts[1] || ''}` : '');

            card.innerHTML = `
                <img src="${cs.thumbnail_url}" alt="${cs.title}">
                <div class="card-content">
                    <h3>${cs.title}</h3>
                    <p class="result">${formattedResult}</p>
                    <button class="btn btn-secondary view-case-study" data-case-id="${cs.id}">View Details</button>
                </div>
            `;
            caseStudyGrid.appendChild(card);
        });
        attachCaseStudyEventListeners();
    }

    // Populate Testimonials
    const testimonialCarousel = document.querySelector('.testimonial-carousel');
    if (testimonialCarousel) {
        testimonialCarousel.innerHTML = ''; // Clear existing static testimonials from HTML
        testimonialsData.forEach((test, index) => {
            const item = document.createElement('div');
            item.className = 'testimonial-item';
            item.setAttribute('data-aos', 'fade-up');
            item.setAttribute('data-aos-delay', (index + 1) * 100);
            item.innerHTML = `
                <img src="${test.photo_url}" alt="Client ${test.client_name}" class="client-photo">
                <blockquote>
                    <p>"${test.quote}"</p>
                    <cite>— ${test.client_name}, ${test.client_title_location}</cite>
                </blockquote>
            `;
            testimonialCarousel.appendChild(item);
        });
    }


    // --- Case Study Modal Logic (now uses hardcoded caseStudyData) ---
    const modal = document.getElementById("caseStudyModal");
    const closeButton = modal.querySelector(".close-button");

    function attachCaseStudyEventListeners() {
        const viewButtons = document.querySelectorAll(".view-case-study");
        viewButtons.forEach(button => {
            button.removeEventListener('click', handleCaseStudyClick); // Prevent duplicate listeners
            button.addEventListener("click", handleCaseStudyClick);
        });
    }

    function handleCaseStudyClick(event) {
        const caseId = event.currentTarget.dataset.caseId;
        const data = caseStudyData[caseId]; // Use the hardcoded data

        if (data) {
            document.getElementById("modal-case-title").textContent = data.title;
            document.getElementById("modal-case-industry").textContent = data.industry;
            document.getElementById("modal-case-challenge").textContent = data.challenge;
            document.getElementById("modal-case-solution").textContent = data.solution;
            document.getElementById("modal-case-results-text").innerHTML = data.results_text;
            document.getElementById("modal-case-results-charts").innerHTML = data.results_charts_html;
            document.getElementById("modal-case-testimonial").textContent = data.testimonial;
            document.getElementById("modal-case-cite").textContent = data.cite;

            modal.style.display = "flex";
            document.body.classList.add('no-scroll');
        }
    }

    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
        document.body.classList.remove('no-scroll');
    });

    window.addEventListener("click", (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.classList.remove('no-scroll');
        }
    });

    // Optional: Smooth scroll for hero arrow
    const scrollArrow = document.querySelector('.scroll-down-arrow');
    if (scrollArrow) {
        scrollArrow.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('#ai-advantage').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // --- Firebase Initialization and Form Submission Logic ---
    let db;
    let auth;
    let currentUserId = null;

    // Helper to display messages in the UI
    const contactFormMessageDisplay = document.getElementById('contact-form-message'); // Assume you add a div with this ID near your form
    function showFormMessage(text, isError = false) {
        if (!contactFormMessageDisplay) {
            console.warn("Contact form message display element not found.");
            // Fallback for debugging, but avoid alert() in production
            // alert(text);
            return;
        }
        contactFormMessageDisplay.textContent = text;
        contactFormMessageDisplay.classList.remove('hidden', 'bg-red-100', 'text-red-700', 'bg-blue-100', 'text-blue-700');
        if (isError) {
            contactFormMessageDisplay.classList.add('bg-red-100', 'text-red-700');
        } else {
            contactFormMessageDisplay.classList.add('bg-blue-100', 'text-blue-700');
        }
        contactFormMessageDisplay.classList.remove('opacity-0'); // Ensure visible
        contactFormMessageDisplay.classList.add('opacity-100');
        setTimeout(() => {
            contactFormMessageDisplay.classList.remove('opacity-100');
            contactFormMessageDisplay.classList.add('opacity-0');
            setTimeout(() => {
                contactFormMessageDisplay.classList.add('hidden');
            }, 500); // Hide completely after transition
        }, 5000); // Display for 5 seconds
    }

    // Initialize Firebase
    async function initFirebaseForForm() {
        try {
            const firebaseAppId = window.__firebaseAppId;
            const firebaseConfig = window.__firebaseConfig;
            const firebaseInitialAuthToken = window.__firebaseInitialAuthToken;

            if (!firebaseConfig || !firebaseConfig.apiKey) {
                showFormMessage('Firebase configuration is missing. Cannot initialize contact form functionality.', true);
                return;
            }

            const app = firebase.initializeApp(firebaseConfig);
            db = firebase.firestore(app);
            auth = firebase.auth(app);

            // Sign in anonymously for form submissions (or with custom token if available)
            if (firebaseInitialAuthToken) {
                await auth.signInWithCustomToken(firebaseInitialAuthToken);
            } else {
                await auth.signInAnonymously();
            }

            auth.onAuthStateChanged(user => {
                if (user) {
                    currentUserId = user.uid;
                    // console.log("Firebase initialized for form, user ID:", currentUserId);
                } else {
                    currentUserId = null;
                    // console.warn("Firebase not signed in for form submission.");
                }
            });

        } catch (error) {
            console.error("Error initializing Firebase for form:", error);
            showFormMessage(`Error initializing form: ${error.message}`, true);
        }
    }

    // Form Submission (Capture data and save to Firestore)
    const growthBlueprintForm = document.getElementById('growth-blueprint-form');
    if (growthBlueprintForm) {
        // Remove the existing Netlify Forms event listener if it conflicts,
        // or ensure it's still handled by Netlify's internal mechanism.
        // For direct Firestore saving, we control the submit.
        growthBlueprintForm.addEventListener('submit', async function(event) {
            event.preventDefault(); // Prevent default form submission (important for custom handling)

            const submitButton = this.querySelector('.btn-submit');
            submitButton.disabled = true; // Disable button to prevent multiple submissions
            submitButton.textContent = 'Submitting...';

            if (!db || !currentUserId) {
                showFormMessage('Database not ready or user not authenticated. Please try again.', true);
                submitButton.disabled = false;
                submitButton.textContent = 'Send Message';
                return;
            }

            // Collect form data
            const formData = {
                name: this.querySelector('input[name="name"]').value,
                email: this.querySelector('input[name="email"]').value,
                company: this.querySelector('input[name="company"]').value,
                phone: this.querySelector('input[name="phone"]').value, // Assuming you have a phone input
                message: this.querySelector('textarea[name="message"]').value,
                timestamp: firebase.firestore.FieldValue.serverTimestamp() // Firestore server timestamp
            };

            // Save to Firestore
            try {
                // We'll save form submissions to a subcollection under the app and user,
                // for example: /artifacts/{appId}/users/{userId}/formSubmissions
                const formSubmissionsRef = db.collection(`artifacts/${window.__firebaseAppId}/users/${currentUserId}/formSubmissions`);
                await formSubmissionsRef.add(formData);

                showFormMessage("Thank you for your inquiry! We've received your message and will be in touch shortly.", false);
                this.reset(); // Clear form fields
            } catch (error) {
                console.error("Error saving form data to Firestore:", error);
                showFormMessage(`Error sending message: ${error.message}. Please try again.`, true);
            } finally {
                submitButton.disabled = false;
                submitButton.textContent = 'Send Message';
            }
        });
    }

    // Initialize Firebase for form handling when the DOM is loaded
    initFirebaseForForm();

});
