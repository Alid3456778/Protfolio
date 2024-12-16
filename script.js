// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollSmoother,MotionPathHelper,ScrambleTextPlugin,SplitText,CustomEase,CustomBounce,CustomWiggle)
  // gsap code here!
 });
 
   
 
 
 
 
 
 // // Toggle sidebar
 // const hamburger = document.getElementById('hamburger');
 // const sidebar = document.getElementById('sidebar');
 
 // hamburger.addEventListener('click', () => {
 //     if (sidebar.style.left === '0px') {
 //         sidebar.style.left = '-250px'; // Close sidebar
 //     } else {
 //         sidebar.style.left = '0px'; // Open sidebar
 //     }
 // });
 const hamburger = document.getElementById('hamburger');
 const navLinks = document.getElementById('nav-links');
 const body = document.querySelector('body');
 
 // Add overlay for outside clicks
 const overlay = document.createElement('div');
 overlay.classList.add('overlay');
 document.body.appendChild(overlay);
 
 // Function to check screen size and toggle sidebar only on mobile
 const isMobileView = () => window.innerWidth <= 768;
 
 // Toggle sidebar visibility
 hamburger.addEventListener('click', () => {
     if (isMobileView()) {
         navLinks.classList.toggle('sidebar-visible');
         overlay.classList.toggle('overlay-visible');
         body.classList.toggle('no-scroll');
     }
 });
 
 // Close sidebar when clicking outside
 overlay.addEventListener('click', () => {
     if (isMobileView()) {
         navLinks.classList.remove('sidebar-visible');
         overlay.classList.remove('overlay-visible');
         body.classList.remove('no-scroll');
     }
 });
 
 // Close sidebar when clicking on a menu link
 navLinks.addEventListener('click', (e) => {
     if (isMobileView() && e.target.tagName === 'A') {
         navLinks.classList.remove('sidebar-visible');
         overlay.classList.remove('overlay-visible');
         body.classList.remove('no-scroll');
     }
 });
 
 
 document.addEventListener("DOMContentLoaded", () => {
     const progressBars = document.querySelectorAll(".progress-bar-container");
     
     const animateProgressBar = (entry) => {
       if (entry.isIntersecting) {
         const container = entry.target;
         const progressValue = container.querySelector(".progress-value");
         const progress = container.querySelector(".progress");
         const value = parseInt(progressValue.dataset.value, 10);
         
         let current = 0;
         const interval = setInterval(() => {
           if (current >= value) {
             clearInterval(interval);
           } else {
             current++;
             progressValue.textContent = `${current}%`;
             progress.style.width = `${current}%`;
           }
         }, 20);
   
         observer.unobserve(container); // Stop observing once animation starts
       }
     };
   
     const observer = new IntersectionObserver(
       (entries) => {
         entries.forEach((entry) => {
           if (entry.isIntersecting) {
             animateProgressBar(entry);
           }
         });
       },
       {
         threshold: 0.5, // Trigger when 50% of the element is visible
       }
     );
   
     // Observe all progress bars
     progressBars.forEach((bar) => observer.observe(bar));
   });
   
   document.addEventListener("DOMContentLoaded", () => {
     const skillBars = document.querySelectorAll(".skill-bar");
   
     // Observer to detect when the skill section is in view
     const observer = new IntersectionObserver(
       (entries) => {
         entries.forEach((entry) => {
           if (entry.isIntersecting) {
             const bar = entry.target;
             const percentage = bar.getAttribute("data-percentage");
   
             // Set width to animate the bar
             const innerBar = bar.querySelector(".inner-bar");
             innerBar.style.width = `${percentage}%`;
   
             // Display the percentage number
             const percentageText = bar.querySelector(".percentage-text");
             let currentPercent = 0;
   
             // Animated number counting
             const interval = setInterval(() => {
               if (currentPercent < percentage) {
                 currentPercent++;
                 percentageText.textContent = `${currentPercent}%`;
               } else {
                 clearInterval(interval);
               }
             }, 10);
   
             // Stop observing once animation is triggered
             observer.unobserve(bar);
           }
         });
       },
       { threshold: 0.5 } // Trigger when 50% of the section is visible
     );
   
     // Observe each skill bar
     skillBars.forEach((bar) => observer.observe(bar));
   });
   
 
 
   const observer = new IntersectionObserver((entries)=>{
     entries.forEach((entry)=>{
       console.log(entry)
       if(entry.isIntersecting){
         entry.target.classList.add('show');
       }
       else{
         entry.target.classList.remove('show');
       }
     });
   });
   
   const hidden = document.querySelectorAll('.home-text');
   hidden.forEach((el)=>observer.observe(el));
 