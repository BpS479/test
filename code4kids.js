
// courses
const modal = document.querySelector('#volunteerModal');
const openBtn = document.querySelector('#openModalBtn');
const closeBtn = document.querySelector('#closeModalBtn');
const cancelBtn = document.querySelector('#cancelBtn');
const form = document.querySelector('#volunteerForm');
const toast = document.querySelector('#toast');
const fullNameInput = document.querySelector('#fullName');
//  Courses
        // Toggle game content visibility
        function toggleGame(gameId) {
            const gameContent = document.getElementById(gameId);
            if (gameContent.style.display === "block") {
                gameContent.style.display = "none";
            } else {
                gameContent.style.display = "block";
            }
        }

        // Click handler for tag information
        function showTagInfo(tagName) {
            const headInfo = document.getElementById("headInfo");
            const tagInfo = document.getElementById("tagInfo");
            const olInfo = document.getElementById("olInfo");
            const ulInfo = document.getElementById("ulInfo");

            const headDescription = {
                h1: '<p>&lt;h1&gt;Heading1&lt;/h1&gt;</p><hr><h1>Heading1</h1>',
                h2: '<p>&lt;h2&gt;Heading2&lt;/h2&gt;</p><hr><h2>Heading2</h2>',
                h3: '<p>&lt;h3&gt;Heading3&lt;/h3&gt;</p><hr><h3>Heading3</h3>',
                h4: '<p>&lt;h4&gt;Heading4&lt;/h4&gt;</p><hr><h4>Heading4</h4>',
                h5: '<p>&lt;h5&gt;Heading5&lt;/h5&gt;</p><hr><h5>Heading5</h5>',
                h6: '<p>&lt;h6&gt;Heading6&lt;/h6&gt;</p><hr><h6>Heading6</h6>'
            };
            
            const tagDescription = {
                b: '<p>&lt;b&gt;Bold&lt;/b&gt;</p><hr><b>Bold</b>',
                i: '<p>&lt;i&gt;Italic&lt;/i&gt;</p><hr><i>Italic</i>',
                mark: '<p>&lt;mark&gt;Mark&lt;/mark&gt;</p><hr><mark>Mark</mark>',
                sub: '<p>&lt;sub&gt;sub&lt;/sub&gt;text</p><hr>H<sub>2</sub>O',
                sup: '<p>&lt;sup&gt;sup&lt;/sup&gt;text</p><hr>1<sup>st</sup>'
            };
            
            const olDescription = {
                ol: '<p>&lt;ol&gt;<br>&nbsp;&nbsp;&lt;li&gt;Blue&lt;/li&gt;<br>&nbsp;&nbsp;&lt;li&gt;Teal&lt;/li&gt;<br>&nbsp;&nbsp;&lt;li&gt;Red&lt;/li&gt;<br>&lt;/ol&gt;</p><hr><ol><li>Blue</li><li>Teal</li><li>Red</li></ol>'
            };
            
            const ulDescription = {
                ul: '<p>&lt;ul&gt;<br>&nbsp;&nbsp;&lt;li&gt;Blue&lt;/li&gt;<br>&nbsp;&nbsp;&lt;li&gt;Teal&lt;/li&gt;<br>&nbsp;&nbsp;&lt;li&gt;Red&lt;/li&gt;<br>&lt;/ul&gt;</p><hr><ul><li>Blue</li><li>Teal</li><li>Red</li></ul>'
            };

            // Reset all info boxes
            headInfo.innerHTML = "You haven't pressed any buttons here yet.";
            tagInfo.innerHTML = "You haven't pressed any buttons here yet.";
            olInfo.innerHTML = "You haven't pressed any buttons here yet.";
            ulInfo.innerHTML = "You haven't pressed any buttons here yet.";

            // Update the appropriate info box based on tagName
            if (headDescription[tagName]) {
                headInfo.innerHTML = headDescription[tagName];
            } else if (tagDescription[tagName]) {
                tagInfo.innerHTML = tagDescription[tagName];
            } else if (olDescription[tagName]) {
                olInfo.innerHTML = olDescription[tagName];
            } else if (ulDescription[tagName]) {
                ulInfo.innerHTML = ulDescription[tagName];
            }
        }

        // Change color function
        function changeColor(color) {
            const colorBox = document.getElementById("colorBox");
            colorBox.style.backgroundColor = color;
        }

        // Apply animation function
        function applyAnimation(animationType) {
            const animationBox = document.getElementById('animationBox');
            
            // Reset any existing animations
            animationBox.style.animation = 'none';
            
            // Force reflow
            void animationBox.offsetWidth;
            
            // Apply the new animation
            switch(animationType) {
                case 'bounce':
                    animationBox.style.animation = 'bounce 2s infinite';
                    break;
                case 'spin':
                    animationBox.style.animation = 'spin 3s infinite linear';
                    break;
                case 'fade':
                    animationBox.style.animation = 'fade 2s infinite';
                    break;
            }
        }

        // Initialize color box
        document.addEventListener('DOMContentLoaded', function() {
            document.getElementById("colorBox").style.backgroundColor = "white";
        });

        // css courses js
        // Box Model
        function updateBoxModel() {
            const demo = document.getElementById('boxModelDemo');
            const margin = document.getElementById('marginSlider').value;
            const padding = document.getElementById('paddingSlider').value;
            const border = document.getElementById('borderSlider').value;
            const borderColor = document.getElementById('borderColor').value;
            
            demo.style.margin = `${margin}px`;
            demo.style.padding = `${padding}px`;
            demo.style.border = `${border}px solid ${borderColor}`;
            
            document.getElementById('marginValue').textContent = `${margin}px`;
            document.getElementById('paddingValue').textContent = `${padding}px`;
            document.getElementById('borderValue').textContent = `${border}px`;
            
            document.getElementById('boxModelCode').innerHTML = 
                `.element {<br>
                &nbsp;&nbsp;margin: ${margin}px;<br>
                &nbsp;&nbsp;padding: ${padding}px;<br>
                &nbsp;&nbsp;border: ${border}px solid ${borderColor};<br>
                }`;
        }
        
        // Flexbox
        function updateFlexbox(justifyContent) {
            const demo = document.getElementById('flexboxDemo');
            demo.style.justifyContent = justifyContent;
            
            document.getElementById('flexboxCode').innerHTML = 
                `.container {<br>
                &nbsp;&nbsp;display: flex;<br>
                &nbsp;&nbsp;justify-content: ${justifyContent};<br>
                &nbsp;&nbsp;align-items: center;<br>
                &nbsp;&nbsp;gap: 10px;<br>
                &nbsp;&nbsp;flex-wrap: wrap;<br>
                }`;
        }
        
        // Transform
        function updateTransform(type, value) {
            const demo = document.getElementById('transformDemo');
            
            if (type === 'reset') {
                demo.style.transform = 'none';
                document.getElementById('transformCode').innerHTML = 
                    `.element {<br>
                    &nbsp;&nbsp;transform: none;<br>
                    }`;
                return;
            }
            
            let transformValue = '';
            switch(type) {
                case 'rotate':
                    transformValue = `rotate(${value})`;
                    break;
                case 'scale':
                    transformValue = `scale(${value})`;
                    break;
                case 'skew':
                    transformValue = `skewX(${value})`;
                    break;
                case 'translate':
                    transformValue = `translateX(${value})`;
                    break;
            }
            
            demo.style.transform = transformValue;
            
            document.getElementById('transformCode').innerHTML = 
                `.element {<br>
                &nbsp;&nbsp;transform: ${transformValue};<br>
                }`;
        }
        
        // Transition
        function updateTransition() {
            const demo = document.getElementById('transitionDemo');
            const duration = document.getElementById('durationSlider').value;
            const property = document.getElementById('propertySelect').value;
            const timing = document.getElementById('timingSelect').value;
            
            demo.style.transition = `${property} ${duration}s ${timing}`;
            
            document.getElementById('durationValue').textContent = `${duration}s`;
            
            document.getElementById('transitionCode').innerHTML = 
                `.element {<br>
                &nbsp;&nbsp;transition: ${property} ${duration}s ${timing};<br>
                }<br><br>
                .element:hover {<br>
                &nbsp;&nbsp;background: #4ecdc4;<br>
                &nbsp;&nbsp;transform: scale(1.2);<br>
                &nbsp;&nbsp;border-radius: 25px;<br>
                }`;
                
            // Add hover effect
            demo.onmouseenter = function() {
                this.style.background = '#4ecdc4';
                this.style.transform = 'scale(1.2)';
                this.style.borderRadius = '25px';
            };
            
            demo.onmouseleave = function() {
                this.style.background = 'linear-gradient(135deg, #ff6b6b, #ff9e6b)';
                this.style.transform = 'scale(1)';
                this.style.borderRadius = '10px';
            };
        }
        
        // Gradient
        function updateGradient() {
            const demo = document.getElementById('gradientDemo');
            const color1 = document.getElementById('color1').value;
            const color2 = document.getElementById('color2').value;
            const angle = document.getElementById('angleSlider').value;
            const type = document.getElementById('gradientType').value;
            
            document.getElementById('angleValue').textContent = `${angle}deg`;
            
            if (type === 'linear') {
                demo.style.background = `linear-gradient(${angle}deg, ${color1}, ${color2})`;
            } else {
                demo.style.background = `radial-gradient(circle, ${color1}, ${color2})`;
            }
            
            document.getElementById('gradientCode').innerHTML = 
                `.element {<br>
                &nbsp;&nbsp;background: ${type}-gradient(${type === 'linear' ? angle + 'deg' : 'circle'}, ${color1}, ${color2});<br>
                }`;
        }
        
        // Initialize transitions
        updateTransition();

        
        // Practical Examples
        function applyEffect(type) {
  const box = document.getElementById("main-box");
  const codeBox = document.getElementById("code-box");
  const sound = document.getElementById("notiSound");

  // Reset
  box.className = "animation-box";
  box.style.background = "#74b9ff";
  box.textContent = "Choose an Effect";
  codeBox.innerText = "";

  if (type === "loading") {
    box.textContent = "Loading";
    box.classList.add("loading-dots");

    codeBox.innerText = `.loading-dots::after {
  content: "...";
  animation: dots 1.5s infinite;
}

@keyframes dots {
  0% { content: ""; }
  25% { content: "."; }
  50% { content: ".."; }
  75% { content: "..."; }
  100% { content: ""; }
}`;
  }

  else if (type === "notification") {
    box.textContent = "🔔 New Notification!";
    box.style.background = "#e17055";
    box.style.animation = "shake 0.5s ease";

    // play sound
    sound.play();

    setTimeout(() => {
      box.style.animation = "";
      box.textContent = "🔔";
      box.style.background = "#74b9ff";
    }, 2000);

    codeBox.innerText = `@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-6px); }
  50% { transform: translateX(6px); }
  75% { transform: translateX(-3px); }
}`;
  }

  else if (type === "button") {
    box.textContent = "Pressed!";
    box.style.background = "#55efc4";
    box.style.animation = "pop 0.5s ease";

    setTimeout(() => {
      box.style.animation = "";
      box.textContent = "Click Me!";
      box.style.background = "#74b9ff";
    }, 1000);

    codeBox.innerText = `@keyframes pop {
  0% { transform: scale(1); }
  50% { transform: scale(1.15); box-shadow: 0 0 20px #fff; }
  100% { transform: scale(1); }
}`;
  }
}
// Quiz & Registration
let isRegistered = false;
let score = 0;


// Registration
document.getElementById("registration").addEventListener("submit", function(e){
  e.preventDefault();
  const name = document.getElementById("regName").value.trim();
  const age = document.getElementById("regAge").value.trim();
  const email = document.getElementById("regEmail").value.trim();

  if(name && age && email){
    isRegistered = true;
    
    alert("✅ Registration successful! Welcome " + name);
   
  } else {
    alert("Please fill all fields!");
  }
 
});

// Quiz Answer Check
function checkAnswer(button, isCorrect){
 
  const buttons = button.parentElement.querySelectorAll("button");
  buttons.forEach(btn => btn.disabled = true);
  
  if(isCorrect){
    button.classList.add("correct");
    button.textContent = "✔️ Correct!";
    score++;
  } else {
    button.classList.add("wrong");
    button.textContent = "✖️ Wrong!";
  }
}

// Submit Quiz
document.getElementById("quizBtn").addEventListener("click", function(){
  if(!isRegistered){
    alert("❌ Please register first!");
    return;
  }
  if(score >= 8){
        
    alert("Congratulations! You have earned your certificate 🎉");

    document.getElementById("certificateBody").style.display = "block";

    // Name from registration
    document.getElementById("certName").innerText = document.getElementById("regName").value;

    
    // Date auto fill
    const today = new Date();
    document.getElementById("certDate").innerText = today.toLocaleDateString();

  } else {
    alert("⚠️ You got " + score + " correct. Minimum 8 required for certificate.");
  }
  
   
});






// contact js
const submitBtn = document.getElementById('submitBtn');

  submitBtn.addEventListener("click", function (e) {
    e.preventDefault(); 
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const role = document.getElementById("role").value.trim();
    const time = document.getElementById("time").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!fullName || !email || !role || !time || !message) {
      alert("Please fill in all required fields before submitting ❗");
      return;
    }

    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address ❗");
      return;
    }

    alert("Thanks for your interest! We’ll contact you soon. 🎉");
    form.reset(); 
  });


  // rating js
(function () {
  const root = document.getElementById('review-component');
  if (!root) return;

  // DOM elements
  const openBtn = root.querySelector('#review-open-form');
  const formWrap = root.querySelector('#review-form-wrap');
  const form = root.querySelector('#review-form');
  const stars = Array.from(root.querySelectorAll('.review-star'));
  const ratingInput = root.querySelector('#review-rating');
  const reviewsContainer = root.querySelector('#review-list');
  const avgNumber = root.querySelector('#review-average-number');
  const avgStars = root.querySelector('#review-average-stars');
  const totalCount = root.querySelector('#review-total-count');
  const cancelBtn = root.querySelector('#review-cancel');
  const errorBox = root.querySelector('#review-error');

  const STORAGE_KEY = 'review_data_v1';
  let reviews = loadReviews();

  // Update overview
  function updateOverview() {
    const count = reviews.length;
    if (count === 0) {
      avgNumber.textContent = '0.0';
      avgStars.textContent = '☆☆☆☆☆';
      totalCount.textContent = '0 reviews';
      return;
    }
    const sum = reviews.reduce((s, r) => s + r.rating, 0);
    const avg = sum / count;
    const rounded = Math.round(avg * 10) / 10;
    avgNumber.textContent = rounded.toFixed(1);
    avgStars.textContent = starString(Math.round(avg));
    totalCount.textContent = `${count} review${count > 1 ? 's' : ''}`;
  }

  function starString(n) {
    const filled = '★'.repeat(n);
    const empty = '☆'.repeat(5 - n);
    return filled + empty;
  }

  // Render reviews
  function renderReviews() {
    reviewsContainer.innerHTML = '';
    if (reviews.length === 0) {
      const p = document.createElement('div');
      p.className = 'review-card';
      p.textContent = 'No reviews yet — be the first to add one!';
      reviewsContainer.appendChild(p);
      return;
    }

    reviews.slice().reverse().forEach(r => {
      const card = document.createElement('article');
      card.className = 'review-card';

      const header = document.createElement('div');
      header.className = 'review-header';

      const name = document.createElement('div');
      name.className = 'review-name';
      name.textContent = r.name || 'Anonymous';

      const meta = document.createElement('div');
      meta.className = 'review-meta';
      meta.textContent = `${starString(r.rating)} • ${new Date(r.time).toLocaleDateString()}`;

      header.appendChild(name);
      header.appendChild(meta);

      const body = document.createElement('div');
      body.className = 'review-body';
      body.textContent = r.review;

      card.appendChild(header);
      card.appendChild(body);
      reviewsContainer.appendChild(card);
    });
  }

  // Open / close form
  function openForm() {
    formWrap.setAttribute('aria-hidden', 'false');
    formWrap.style.display = 'block';
    root.querySelector('#review-name').focus();
  }
  function closeForm() {
    formWrap.setAttribute('aria-hidden', 'true');
    formWrap.style.display = 'none';
    errorBox.hidden = true;
    form.reset();
    clearStarSelection();
  }

  // Star selection
  function setStarSelection(value) {
    ratingInput.value = value;
    stars.forEach((s, i) => {
      const idx = i + 1;
      if (idx <= value) {
        s.dataset.selected = 'true';
        s.setAttribute('aria-checked', 'true');
      } else {
        s.dataset.selected = 'false';
        s.setAttribute('aria-checked', 'false');
      }
    });
  }
  function clearStarSelection() {
    ratingInput.value = '';
    stars.forEach(s => {
      s.dataset.selected = 'false';
      s.setAttribute('aria-checked', 'false');
    });
  }

  // Events
  openBtn.addEventListener('click', openForm);
  cancelBtn.addEventListener('click', closeForm);

  stars.forEach(star => {
    star.addEventListener('click', () => {
      const v = Number(star.dataset.value);
      setStarSelection(v);
    });
    star.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter' || ev.key === ' ') {
        ev.preventDefault();
        const v = Number(star.dataset.value);
        setStarSelection(v);
      }
      if (ev.key === 'ArrowLeft' || ev.key === 'ArrowDown') {
        ev.preventDefault();
        const cur = Number(ratingInput.value) || 0;
        setStarSelection(Math.max(1, cur - 1));
      }
      if (ev.key === 'ArrowRight' || ev.key === 'ArrowUp') {
        ev.preventDefault();
        const cur = Number(ratingInput.value) || 0;
        setStarSelection(Math.min(5, cur + 1));
      }
    });
  });

  // Form submit
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    errorBox.hidden = true;
    const name = (root.querySelector('#review-name').value || '').trim();
    const rating = Number(root.querySelector('#review-rating').value || 0);
    const reviewText = (root.querySelector('#review-text').value || '').trim();

    if (!name || !rating || !reviewText) {
      errorBox.hidden = false;
      errorBox.textContent = 'Check your information — name, rating & review are required';
      return;
    }

    const newReview = { name, rating, review: reviewText, time: Date.now() };
    reviews.push(newReview);
    saveReviews();
    updateOverview();
    renderReviews();

    window.alert('Thanks for your review');
    closeForm();
  });

  // Storage
  function loadReviews() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
    } catch (e) {}
    return [];
  }
  function saveReviews() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
    } catch (e) {}
  }

  // Init
  updateOverview();
  renderReviews();

  // Custom event
  function dispatchReviewEvent(review) {
    try {
      const ev = new CustomEvent('review:added', { detail: review });
      document.dispatchEvent(ev);
    } catch (err) {}
  }

  const originalSave = saveReviews;
  saveReviews = function () {
    originalSave();
    const last = reviews[reviews.length - 1];
    if (last) dispatchReviewEvent(last);
  };
})();

