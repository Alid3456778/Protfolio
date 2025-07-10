// // use a script tag or an external JS file
// document.addEventListener("DOMContentLoaded", (event) => {
//   gsap.registerPlugin(ScrollSmoother,MotionPathHelper,ScrambleTextPlugin,SplitText,CustomEase,CustomBounce,CustomWiggle)
//   // gsap code here!
//  });
 
   
 
 
 
 
 
//  // // Toggle sidebar
//  // const hamburger = document.getElementById('hamburger');
//  // const sidebar = document.getElementById('sidebar');
 
//  // hamburger.addEventListener('click', () => {
//  //     if (sidebar.style.left === '0px') {
//  //         sidebar.style.left = '-250px'; // Close sidebar
//  //     } else {
//  //         sidebar.style.left = '0px'; // Open sidebar
//  //     }
//  // });
//  const hamburger = document.getElementById('hamburger');
//  const navLinks = document.getElementById('nav-links');
//  const body = document.querySelector('body');
 
//  // Add overlay for outside clicks
//  const overlay = document.createElement('div');
//  overlay.classList.add('overlay');
//  document.body.appendChild(overlay);
 
//  // Function to check screen size and toggle sidebar only on mobile
//  const isMobileView = () => window.innerWidth <= 768;
 
//  // Toggle sidebar visibility
//  hamburger.addEventListener('click', () => {
//      if (isMobileView()) {
//          navLinks.classList.toggle('sidebar-visible');
//          overlay.classList.toggle('overlay-visible');
//          body.classList.toggle('no-scroll');
//      }
//  });
 
//  // Close sidebar when clicking outside
//  overlay.addEventListener('click', () => {
//      if (isMobileView()) {
//          navLinks.classList.remove('sidebar-visible');
//          overlay.classList.remove('overlay-visible');
//          body.classList.remove('no-scroll');
//      }
//  });
 
//  // Close sidebar when clicking on a menu link
//  navLinks.addEventListener('click', (e) => {
//      if (isMobileView() && e.target.tagName === 'A') {
//          navLinks.classList.remove('sidebar-visible');
//          overlay.classList.remove('overlay-visible');
//          body.classList.remove('no-scroll');
//      }
//  });
 
 
//  document.addEventListener("DOMContentLoaded", () => {
//      const progressBars = document.querySelectorAll(".progress-bar-container");
     
//      const animateProgressBar = (entry) => {
//        if (entry.isIntersecting) {
//          const container = entry.target;
//          const progressValue = container.querySelector(".progress-value");
//          const progress = container.querySelector(".progress");
//          const value = parseInt(progressValue.dataset.value, 10);
         
//          let current = 0;
//          const interval = setInterval(() => {
//            if (current >= value) {
//              clearInterval(interval);
//            } else {
//              current++;
//              progressValue.textContent = `${current}%`;
//              progress.style.width = `${current}%`;
//            }
//          }, 20);
   
//          observer.unobserve(container); // Stop observing once animation starts
//        }
//      };
   
//      const observer = new IntersectionObserver(
//        (entries) => {
//          entries.forEach((entry) => {
//            if (entry.isIntersecting) {
//              animateProgressBar(entry);
//            }
//          });
//        },
//        {
//          threshold: 0.5, // Trigger when 50% of the element is visible
//        }
//      );
   
//      // Observe all progress bars
//      progressBars.forEach((bar) => observer.observe(bar));
//    });
   
//    document.addEventListener("DOMContentLoaded", () => {
//      const skillBars = document.querySelectorAll(".skill-bar");
   
//      // Observer to detect when the skill section is in view
//      const observer = new IntersectionObserver(
//        (entries) => {
//          entries.forEach((entry) => {
//            if (entry.isIntersecting) {
//              const bar = entry.target;
//              const percentage = bar.getAttribute("data-percentage");
   
//              // Set width to animate the bar
//              const innerBar = bar.querySelector(".inner-bar");
//              innerBar.style.width = `${percentage}%`;
   
//              // Display the percentage number
//              const percentageText = bar.querySelector(".percentage-text");
//              let currentPercent = 0;
   
//              // Animated number counting
//              const interval = setInterval(() => {
//                if (currentPercent < percentage) {
//                  currentPercent++;
//                  percentageText.textContent = `${currentPercent}%`;
//                } else {
//                  clearInterval(interval);
//                }
//              }, 10);
   
//              // Stop observing once animation is triggered
//              observer.unobserve(bar);
//            }
//          });
//        },
//        { threshold: 0.5 } // Trigger when 50% of the section is visible
//      );
   
//      // Observe each skill bar
//      skillBars.forEach((bar) => observer.observe(bar));
//    });
   
 
 
//    const observer = new IntersectionObserver((entries)=>{
//      entries.forEach((entry)=>{
//        console.log(entry)
//        if(entry.isIntersecting){
//          entry.target.classList.add('show');
//        }
//        else{
//          entry.target.classList.remove('show');
//        }
//      });
//    });
   
//    const hidden = document.querySelectorAll('.home-text');
//    hidden.forEach((el)=>observer.observe(el));
 

      // Register GSAP plugins
      gsap.registerPlugin(ScrollTrigger);

      // Initialize animations when DOM loads
      document.addEventListener("DOMContentLoaded", () => {
        // Horizontal scroll animation
        const panels = gsap.utils.toArray(".panel");
        const totalPanels = panels.length;

        gsap.to(".sector-content", {
          xPercent: -100 * (totalPanels - 1.5),
          ease: "none",
          scrollTrigger: {
            trigger: ".sector",
            start: "top top",
            end: "+=4000",
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          },
        });

        // Floating decorative elements animation
        gsap.to(".circle-1", {
          duration: 20,
          x: "+=50",
          y: "+=30",
          rotation: 360,
          repeat: -1,
          ease: "none",
          yoyo: true,
        });

        gsap.to(".circle-2", {
          duration: 25,
          x: "-=60",
          y: "-=40",
          rotation: -360,
          repeat: -1,
          ease: "none",
          yoyo: true,
        });

        // Marquee animation
        gsap.to(".marquee-inner", {
          xPercent: -50,
          duration: 20,
          ease: "none",
          repeat: -1,
        });

        // Panel entrance animations
        panels.forEach((panel, i) => {
          const title = panel.querySelector(".title-t");
          const text = panel.querySelector(".text-t");
          const button = panel.querySelector(".animate-button");

          // Staggered entrance for each panel
          gsap.fromTo(
            title,
            {
              opacity: 0,
              y: 80,
              skewY: 8,
            },
            {
              opacity: 1,
              y: 0,
              skewY: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: panel,
                start: "top center",
                end: "bottom center",
                toggleActions: "play none none none",
                scrub: 1,
                once: true,
              },
            }
          );

          gsap.fromTo(
            text,
            {
              opacity: 0,
              clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
            },
            {
              opacity: 1,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              duration: 1.2,
              delay: 0.3,
              ease: "power2.out",
              scrollTrigger: {
                trigger: panel,
                start: "top center",
                end: "bottom center",
                toggleActions: "play none none none",
                once: true,
              },
            }
          );

          gsap.fromTo(
            button,
            {
              opacity: 0,
              scale: 0.8,
              y: 30,
            },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.8,
              delay: 0.6,
              ease: "back.out(2)",
              scrollTrigger: {
                trigger: panel,
                start: "top center",
                end: "bottom center",
                toggleActions: "play none none none",
                once: true,
              },
            }
          );

          // Hover animations
          panel.addEventListener("mouseenter", () => {
            gsap.to(panel, {
              scale: 1.03,
              duration: 0.4,
              ease: "power2.out",
            });
          });

          panel.addEventListener("mouseleave", () => {
            gsap.to(panel, {
              scale: 1,
              duration: 0.4,
              ease: "power2.out",
            });
          });
        });
      });
    

      // Register GSAP ScrollTrigger plugin
      gsap.registerPlugin(ScrollTrigger);

      // Split text function
      function splitText(element) {
        const text = element.textContent;
        const words = text.split(" ");
        element.innerHTML = "";

        words.forEach((word) => {
          const wordSpan = document.createElement("span");
          wordSpan.className = "word";
          wordSpan.innerHTML = word + " ";
          element.appendChild(wordSpan);
        });
      }

      // Initialize text animations
      function initTextAnimations() {
        // Split text for all animate-text elements
        const textElements = document.querySelectorAll(".animate-text");
        textElements.forEach((element) => {
          splitText(element);
        });

        // Animate titles
        gsap.utils.toArray(".animate-title").forEach((title) => {
          gsap.fromTo(
            title,
            {
              opacity: 1,
              y: 50,
              scale: 0.8,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: title,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });

        // Animate text words
        gsap.utils.toArray(".animate-text").forEach((text) => {
          const words = text.querySelectorAll(".word");

          gsap.fromTo(
            words,
            {
              opacity: 0,
              y: 30,
              rotationX: 90,
            },
            {
              opacity: 1,
              y: 0,
              rotationX: 0,
              duration: 0.2,
              ease: "power3.out",
              stagger: 0.1,
              scrollTrigger: {
                trigger: text,
                start: "top 100%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });

        // Animate buttons
        gsap.utils.toArray(".animate-button").forEach((button) => {
          gsap.fromTo(
            button,
            {
              opacity: 0,
              y: 30,
              scale: 0.8,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: button,
                start: "top 85%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });

        gsap.to("[data-speed]", {
          y: (i, el) =>
            (1 - parseFloat(el.getAttribute("data-speed"))) *
            ScrollTrigger.maxScroll(window),
          ease: "none",
          scrollTrigger: {
            start: 0,
            end: "max",
            invalidateOnRefresh: true,
            scrub: 0,
          },
        });

        gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

        const skillItems = document.querySelectorAll(".skills-category ul li");

        const originalTexts = [...skillItems].map((li) => li.textContent);

        ScrollTrigger.create({
          trigger: ".skills-section",
          start: "top 80%",
          once: true, // run only once
          onEnter: () => {
            skillItems.forEach((li, i) => {
              gsap.fromTo(
                li,
                {
                  opacity: 0,
                  scrambleText: { text: "", chars: "01", speed: 0.3 },
                },
                {
                  opacity: 1,
                  scrambleText: {
                    text: originalTexts[i],
                    chars: "abcdefghijklmnopqrstuvwxyz",
                    revealDelay: 0.3,
                    speed: 0.5,
                  },
                  duration: 1.5,
                  delay: i * 0.05,
                  ease: "power3.out",
                }
              );
            });
          },
        });
      }

      // Parallax scrolling effect
      window.addEventListener("scroll", () => {
        const scrolled = window.pageYOffset;
        const heroName = document.getElementById("heroName");
        const heroSection = document.querySelector(".hero-section");

        // Calculate opacity based on scroll position
        const heroHeight = heroSection.offsetHeight;
        const opacityValue = Math.max(0, 1 - (scrolled / heroHeight) * 2);

        // Apply opacity to the hero name
        heroName.style.opacity = opacityValue;

        // Add subtle parallax effect to background
        const heroBg = document.querySelector(".hero-bg");
        heroBg.style.transform = `translateY(${scrolled * 0.3}px)`;

        // Parallax effect for particles
        const particles = document.querySelectorAll(".particle");
        particles.forEach((particle, index) => {
          const speed = (index + 1) * 0.1;
          particle.style.transform = `translateY(${scrolled * speed}px)`;
        });
      });

      // Initialize everything when DOM is loaded
      document.addEventListener("DOMContentLoaded", () => {
        initTextAnimations();

        // Hero name animation on load
        const heroName = document.getElementById("heroName");
        gsap.fromTo(
          heroName,
          {
            opacity: 0,
            y: 50,
            scale: 0.8,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.5,
            ease: "power3.out",
            delay: 0.5,
          }
        );
      });
    

      // Wait for DOM to be fully loaded
      document.addEventListener("DOMContentLoaded", function () {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        // Title animation
        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".projects-title",
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          })
          .to(".projects-title .char", {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.05,
          });

        // Project items animation
        gsap.utils.toArray(".project-item").forEach((item, index) => {
          const number = item.querySelector(".project-number");
          const details = item.querySelector(".project-details");

          // Animate project details
          gsap
            .timeline({
              scrollTrigger: {
                trigger: item,
                start: "top 60%",
                end: "bottom 40%",
                toggleActions: "play none none reverse",
              },
            })
            .to(details, {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
            })
            .to(
              number,
              {
                className: "project-number active",
                duration: 0.3,
              },
              "-=0.8"
            );

          // Parallax effect for project details
          gsap.to(details, {
            yPercent: -30,
            ease: "none",
            scrollTrigger: {
              trigger: item,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        });

        // Scroll indicator functionality
        const scrollDots = document.querySelectorAll(".scroll-dot");
        const projectItems = document.querySelectorAll(".project-item");

        scrollDots.forEach((dot, index) => {
          dot.addEventListener("click", () => {
            const target = projectItems[index];
            target.scrollIntoView({ behavior: "smooth" });
          });
        });

        // Update active dot on scroll
        ScrollTrigger.batch(".project-item", {
          onEnter: (elements) => {
            elements.forEach((element, index) => {
              const projectIndex = Array.from(projectItems).indexOf(element);
              scrollDots.forEach((dot) => dot.classList.remove("active"));
              if (scrollDots[projectIndex]) {
                scrollDots[projectIndex].classList.add("active");
              }
            });
          },
        });

        // Mouse hover effects
        document.querySelectorAll(".project-details").forEach((detail) => {
          detail.addEventListener("mouseenter", () => {
            gsap.to(detail, {
              scale: 1.02,
              duration: 0.3,
              ease: "power2.out",
            });
          });

          detail.addEventListener("mouseleave", () => {
            gsap.to(detail, {
              scale: 1,
              duration: 0.3,
              ease: "power2.out",
            });
          });
        });

        // Magnetic effect for project numbers
        document.querySelectorAll(".project-number").forEach((number) => {
          const numberElement = number.querySelector(".number");

          number.addEventListener("mousemove", (e) => {
            const rect = number.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            gsap.to(numberElement, {
              x: x * 0.1,
              y: y * 0.1,
              duration: 0.3,
              ease: "power2.out",
            });
          });

          number.addEventListener("mouseleave", () => {
            gsap.to(numberElement, {
              x: 0,
              y: 0,
              duration: 0.3,
              ease: "power2.out",
            });
          });
        });

        // Smooth scrolling enhancement
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
          anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
              target.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          });
        });
      });
    

      // Register GSAP plugins
      gsap.registerPlugin(ScrollTrigger);

      // Initialize animations when DOM loads
      document.addEventListener("DOMContentLoaded", function () {
        // Title animation
        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".certificates-title",
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          })
          .to(".certificates-title .char", {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.05,
          })
          .to(
            ".certificates-title::after",
            {
              opacity: 1,
              duration: 0.5,
              ease: "power2.out",
            },
            "-=0.3"
          );

        // Certificate cards animation
        gsap.utils.toArray(".certificate-card").forEach((card, index) => {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
              },
            })
            .to(card, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              delay: index * 0.1,
            });
        });

        // Stats animation
        gsap.utils.toArray(".stat-item").forEach((item, index) => {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: ".cert-stats",
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
              },
            })
            .to(item, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              delay: index * 0.2,
            });
        });

        // Counter animation for stats
        ScrollTrigger.create({
          trigger: ".cert-stats",
          start: "top 80%",
          onEnter: () => {
            document.querySelectorAll(".stat-number").forEach((counter) => {
              const target = parseInt(counter.getAttribute("data-target"));
              const increment = target / 60;
              let current = 0;

              const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                  counter.textContent = target;
                  clearInterval(timer);
                } else {
                  counter.textContent = Math.ceil(current);
                }
              }, 50);
            });
          },
          once: true,
        });

        // Certificate card interactions
        document.querySelectorAll(".certificate-card").forEach((card) => {
          card.addEventListener("mouseenter", () => {
            gsap.to(card, {
              scale: 1.05,
              duration: 0.3,
              ease: "power2.out",
            });
          });

          card.addEventListener("mouseleave", () => {
            gsap.to(card, {
              scale: 1,
              duration: 0.3,
              ease: "power2.out",
            });
          });
        });

        // Scroll progress bar
        window.addEventListener("scroll", () => {
          const scrollTop = window.pageYOffset;
          const docHeight =
            document.documentElement.scrollHeight - window.innerHeight;
          const scrollPercent = (scrollTop / docHeight) * 100;
          document.getElementById("progressBar").style.width =
            scrollPercent + "%";
        });

        // Floating shapes animation
        gsap.utils.toArray(".floating-shape").forEach((shape, index) => {
          gsap.to(shape, {
            rotation: 360,
            duration: 20 + index * 5,
            repeat: -1,
            ease: "none",
          });

          gsap.to(shape, {
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
            duration: 15 + index * 3,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut",
          });
        });

        // Parallax effect for background shapes
        gsap.utils.toArray(".floating-shape").forEach((shape, index) => {
          gsap.to(shape, {
            yPercent: -50 * (index + 1),
            ease: "none",
            scrollTrigger: {
              trigger: ".certificates-section",
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        });

        // Skill tag hover effects
        document.querySelectorAll(".skill-tag").forEach((tag) => {
          tag.addEventListener("mouseenter", () => {
            gsap.to(tag, {
              scale: 1.1,
              duration: 0.2,
              ease: "power2.out",
            });
          });

          tag.addEventListener("mouseleave", () => {
            gsap.to(tag, {
              scale: 1,
              duration: 0.2,
              ease: "power2.out",
            });
          });
        });

        // Button hover effects
        document.querySelectorAll(".cert-button").forEach((button) => {
          button.addEventListener("mouseenter", () => {
            gsap.to(button, {
              scale: 1.05,
              duration: 0.3,
              ease: "power2.out",
            });
          });

          button.addEventListener("mouseleave", () => {
            gsap.to(button, {
              scale: 1,
              duration: 0.3,
              ease: "power2.out",
            });
          });
        });
      });

      // Modal functionality
      function openModal(certId) {
        const modal = document.getElementById("certModal");
        const modalContent = document.getElementById("modalContent");

        // Here you would typically load certificate details
        modalContent.innerHTML = `
                <h3>Certificate Details</h3>
                <p>Detailed information about certificate ${certId}</p>
            `;

        modal.classList.add("active");
      }

      function closeModal() {
        const modal = document.getElementById("certModal");
        modal.classList.remove("active");
      }

      // Close modal when clicking outside
      document.getElementById("certModal").addEventListener("click", (e) => {
        if (e.target === document.getElementById("certModal")) {
          closeModal();
        }
      });

      // Smooth scrolling for anchor links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        });
      });
    

      gsap.registerPlugin(ScrollTrigger);

      gsap.to(".github-heading", {
        scrollTrigger: {
          trigger: ".github-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.to("#github-graph", {
        scrollTrigger: {
          trigger: ".github-section",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "back.out(1.7)",
      });
    

      // GSAP Animations
      gsap.registerPlugin(ScrollTrigger);

      // Initial animations
      gsap.to(".contact-info", {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.to(".contact-form-container", {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.4,
      });

      // Social links animation
      gsap.from(".social-link", {
        opacity: 1,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        delay: 0.8,
      });

      // Form inputs animation
      gsap.from(".form-group", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        delay: 1,
      });

      // Contact details animation
      gsap.from(".contact-item", {
        opacity: 0,
        x: -20,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        delay: 1.2,
      });

      // Form submission handling
      // document
      //   .getElementById("contactForm")
      //   .addEventListener("submit", function (e) {
      //     e.preventDefault();

      //     // Get form data
      //     const formData = new FormData(this);
      //     const data = Object.fromEntries(formData);

      //     // Show loading state
      //     const submitBtn = document.querySelector(".submit-btn");
      //     const originalText = submitBtn.textContent;
      //     submitBtn.textContent = "Sending...";
      //     submitBtn.disabled = true;

      //     // Simulate form submission (replace with your actual form handling)
      //     setTimeout(() => {
      //       // Show success message
      //       document.getElementById("successMessage").style.display = "block";

      //       // Reset form
      //       this.reset();

      //       // Reset button
      //       submitBtn.textContent = originalText;
      //       submitBtn.disabled = false;

      //       // Hide success message after 5 seconds
      //       setTimeout(() => {
      //         document.getElementById("successMessage").style.display = "none";
      //       }, 5000);

      //       // Console log data (for testing - remove in production)
      //       console.log("Form Data:", data);
      //     }, 2000);
      //   });

      document
    .getElementById("contactForm")
    .addEventListener("submit", async function (e) {
      e.preventDefault();

      const submitBtn = this.querySelector(".submit-btn");
      const originalText = submitBtn.textContent;
      submitBtn.textContent = "Sending...";
      submitBtn.disabled = true;

      // Gather form data
      const formData = new FormData(this);

      try {
        // Send to Formspree
        const response = await fetch(this.action, {
          method: this.method,
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (!response.ok) throw new Error("Network response was not ok");

        // Show success UI
        document.getElementById("successMessage").style.display = "block";
        this.reset();
      } catch (err) {
        alert("Oops! There was a problem submitting your form.");
        console.error(err);
      } finally {
        // Restore button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        // Hide success after 5s
        setTimeout(() => {
          document.getElementById("successMessage").style.display = "none";
        }, 5000);
      }
    });

      // Add interactive hover effects
      document.querySelectorAll(".social-link").forEach((link) => {
        link.addEventListener("mouseenter", function () {
          gsap.to(this, {
            scale: 1.1,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        link.addEventListener("mouseleave", function () {
          gsap.to(this, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });

      // Form input focus animations
      document.querySelectorAll("input, textarea").forEach((input) => {
        input.addEventListener("focus", function () {
          gsap.to(this, {
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        input.addEventListener("blur", function () {
          gsap.to(this, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });

      // Parallax effect for background shapes
      gsap.to(".shape:nth-child(1)", {
        y: -100,
        rotation: 360,
        duration: 20,
        ease: "none",
        repeat: -1,
      });

      gsap.to(".shape:nth-child(2)", {
        y: 100,
        rotation: -360,
        duration: 25,
        ease: "none",
        repeat: -1,
      });

      gsap.to(".shape:nth-child(3)", {
        y: -50,
        rotation: 180,
        duration: 15,
        ease: "none",
        repeat: -1,
      });
    