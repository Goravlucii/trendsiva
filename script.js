document.addEventListener('DOMContentLoaded', function() {
    // 1. Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        once: true,
        mirror: false,
        offset: 120,
    });

    let globalSettings = {}; // To store global settings
    let caseStudyData = {};  // To store case study data fetched from backend
    let testimonialsData = []; // To store testimonials data fetched from backend

    // Function to fetch and display content from backend
    async function loadContentFromBackend() {
        try {
            // Fetch Global Settings
            const globalSettingsResponse = await fetch('http://127.0.0.1:5000/api/global-settings');
            globalSettings = await globalSettingsResponse.json();
            
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
            document.querySelector('.hero-video-bg .bg-video source').src = globalSettings.hero_video_url;
            
            // Update Footer
            document.querySelector('footer .footer-col p:nth-of-type(1)').textContent = globalSettings.footer_address;
            document.querySelector('footer .footer-col p:nth-of-type(2) a').href = `mailto:${globalSettings.footer_email}`;
            document.querySelector('footer .footer-col p:nth-of-type(2) a').textContent = globalSettings.footer_email;
            document.querySelector('footer .footer-col p:nth-of-type(3) a').href = `tel:${globalSettings.footer_phone}`;
            document.querySelector('footer .footer-col p:nth-of-type(3) a').textContent = globalSettings.footer_phone;
            document.querySelector('.footer-logo').src = globalSettings.footer_logo_light; // Assuming path is relative to frontend
            document.querySelector('.social-icons a[aria-label="LinkedIn"]').href = globalSettings.footer_linkedin;
            document.querySelector('.social-icons a[aria-label="Twitter"]').href = globalSettings.footer_twitter;


            // Fetch Client Logos
            const clientLogosResponse = await fetch('http://127.0.0.1:5000/static/');
            const clientLogos = await clientLogosResponse.json();
            const logoCarousel = document.querySelector('.logo-carousel');
            if (logoCarousel) {
                logoCarousel.innerHTML = ''; // Clear existing static logos
                clientLogos.forEach(logo => {
                    const img = document.createElement('img');
                    img.src = logo.image_url; // Path relative to frontend
                    img.alt = logo.name;
                    logoCarousel.appendChild(img);
                });
                // Duplicate logos for continuous scroll effect (needs enough items)
                clientLogos.forEach(logo => {
                    const img = document.createElement('img');
                    img.src = logo.image_url;
                    img.alt = logo.name;
                    logoCarousel.appendChild(img);
                });
            }

            // Fetch AI Advantages
            const aiAdvantagesResponse = await fetch('http://127.0.0.1:5000/api/ai-advantages');
            const aiAdvantages = await aiAdvantagesResponse.json();
            const aiPointsGrid = document.querySelector('.ai-points-grid');
            if (aiPointsGrid) {
                aiPointsGrid.innerHTML = ''; // Clear existing static content
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

            // Fetch Services
            const servicesResponse = await fetch('http://127.0.0.1:5000/api/services');
            const services = await servicesResponse.json();
            const servicesGrid = document.querySelector('.services-grid');
            if (servicesGrid) {
                servicesGrid.innerHTML = ''; // Clear existing static content
                services.forEach((service, index) => {
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

            // Fetch Case Studies
            const caseStudiesResponse = await fetch('http://127.0.0.1:5000/api/case-studies');
            const fetchedCaseStudies = await caseStudiesResponse.json();
            // Convert array to object for easy lookup by ID
            caseStudyData = fetchedCaseStudies.reduce((acc, cs) => {
                acc[cs.id] = cs;
                return acc;
            }, {});

            // Dynamically create case study cards (if needed, or update existing)
            const caseStudyGrid = document.querySelector('.case-study-grid');
            if (caseStudyGrid) {
                caseStudyGrid.innerHTML = ''; // Clear static cards
                fetchedCaseStudies.forEach((cs, index) => {
                    const card = document.createElement('div');
                    card.className = 'case-study-card';
                    card.setAttribute('data-aos', 'zoom-in');
                    card.setAttribute('data-aos-delay', (index + 1) * 100);
                    card.innerHTML = `
                        <img src="${cs.thumbnail_url}" alt="${cs.title}">
                        <div class="card-content">
                            <h3>${cs.title}</h3>
                            <p class="result">${cs.results_text.split('**')[0]}<span>${cs.results_text.split('**')[1] || ''}</span>${cs.results_text.split('**')[2] || ''}</p>
                            <button class="btn btn-secondary view-case-study" data-case-id="${cs.id}">View Details</button>
                        </div>
                    `;
                    caseStudyGrid.appendChild(card);
                });
                // Re-attach event listeners after new elements are added
                attachCaseStudyEventListeners();
            }


            // Fetch Testimonials
            const testimonialsResponse = await fetch('http://127.0.0.1:5000/api/testimonials');
            testimonialsData = await testimonialsResponse.json();
            const testimonialCarousel = document.querySelector('.testimonial-carousel');
            if (testimonialCarousel) {
                testimonialCarousel.innerHTML = ''; // Clear existing static testimonials
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

        } catch (error) {
            console.error('Failed to load content from backend:', error);
            // Fallback to static content or display an error message
            alert("Could not load dynamic content. Please ensure the backend server is running.");
        }
    }

    // Call this function when the page loads
    loadContentFromBackend();


    // Case Study Modal Logic (now uses fetched caseStudyData)
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
        const data = caseStudyData[caseId]; // Use the fetched data

        if (data) {
            document.getElementById("modal-case-title").textContent = data.title;
            document.getElementById("modal-case-industry").textContent = data.industry;
            document.getElementById("modal-case-challenge").textContent = data.challenge;
            document.getElementById("modal-case-solution").textContent = data.solution;
            document.getElementById("modal-case-results-text").innerHTML = data.results_text; // Use innerHTML for bold text
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

    // Form Submission (Client-Side)
    const growthBlueprintForm = document.getElementById('growth-blueprint-form');
    if (growthBlueprintForm) {
        growthBlueprintForm.addEventListener('submit', function(event) {
            event.preventDefault(); 

            const formData = new FormData(this);
            const data = {};
            for (let [key, value] of formData.entries()) {
                data[key] = value;
            }

            console.log("Form Submitted:", data); 
            alert("Thank you for your inquiry! We've received your request for an AI Growth Blueprint and will be in touch shortly."); 

            // In a live environment, you would send this 'data' to your server or a form service:
            /*
            fetch('http://127.0.0.1:5000/api/submit-form', { // Example: You'd need to create this endpoint in app.py
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json(); 
            })
            .then(result => {
                console.log('Success:', result);
                alert("Thank you for your inquiry! We've received your request for an AI Growth Blueprint and will be in touch shortly.");
                this.reset(); 
            })
            .catch((error) => {
                console.error('Error submitting form:', error);
                alert("There was an error submitting your form. Please try again later.");
            });
            */
            this.reset(); 
        });
    }

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
});