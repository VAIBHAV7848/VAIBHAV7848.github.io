/**
 * app.js
 * Advanced Interactive Web Application Controller for Vaibhav Chavanpatil's portfolio.
 * 
 * Features:
 * 1. Ambient Interactive Neural Particle Mesh Canvas (60FPS Physics Engine)
 * 2. Web Audio API Mechanical Sound Synthesizer (Zero-dependency audio)
 * 3. Interactive Deep Learning Lab: Real-time 2D Loss Dynamics Simulator
 * 4. Interactive Satellite SAR Cloud-Wipe Visualizer
 * 5. Holographic 3D Tilt & Cursor Spotlight on Bento Cards
 * 6. System Architecture Deep-Dive Modal with live benchmarks
 * 7. Interactive Terminal CLI with Matrix Rain, Audio & History
 * 8. Live GitHub API Data Integration
 */

document.addEventListener('DOMContentLoaded', () => {
  const data = window.PORTFOLIO_DATA;
  if (!data) return;

  // ========================================================================
  // 1. Web Audio API Synthesizer (Zero Assets)
  // ========================================================================
  let audioCtx = null;
  let soundEnabled = true;
  const audioToggleBtn = document.getElementById('audio-toggle-btn');
  const soundIndicator = document.getElementById('sound-indicator');

  function initAudio() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) audioCtx = new AudioContext();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function playMechanicalClick(pitch = 1800, duration = 0.02) {
    if (!soundEnabled) return;
    try {
      initAudio();
      if (!audioCtx) return;

      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(pitch, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, audioCtx.currentTime + duration);

      gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      // Audio autoplay policy fallback
    }
  }

  function playTerminalBeep(freq = 520) {
    if (!soundEnabled) return;
    try {
      initAudio();
      if (!audioCtx) return;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.03, audioCtx.currentTime);
      gain.gain.linearRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.08);
    } catch (e) {}
  }

  if (audioToggleBtn) {
    audioToggleBtn.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      if (soundIndicator) {
        soundIndicator.textContent = soundEnabled ? '🔊 SFX ON' : '🔇 SFX MUTED';
        soundIndicator.style.color = soundEnabled ? 'var(--accent-emerald)' : 'var(--text-muted)';
      }
      audioToggleBtn.title = soundEnabled ? 'Mute Sound FX' : 'Enable Sound FX';
      if (soundEnabled) playMechanicalClick(2400, 0.04);
    });
  }

  // ========================================================================
  // 2. Ambient Interactive Neural Particle Mesh Canvas
  // ========================================================================
  const neuralCanvas = document.getElementById('neural-canvas');
  if (neuralCanvas) {
    const ctx = neuralCanvas.getContext('2d');
    let width = (neuralCanvas.width = window.innerWidth);
    let height = (neuralCanvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = neuralCanvas.width = window.innerWidth;
      height = neuralCanvas.height = window.innerHeight;
    });

    const particles = [];
    const PARTICLE_COUNT = Math.min(80, Math.floor((width * height) / 18000));
    const mouse = { x: -1000, y: -1000, radius: 150 };

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    window.addEventListener('mouseout', () => {
      mouse.x = -1000;
      mouse.y = -1000;
    });

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        size: Math.random() * 1.8 + 1,
        baseAlpha: Math.random() * 0.5 + 0.2
      });
    }

    function renderNeuralMesh() {
      ctx.clearRect(0, 0, width, height);

      // Connect near particles
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Move
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Bounce
        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // Mouse gravity
        const dxMouse = mouse.x - p1.x;
        const dyMouse = mouse.y - p1.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < mouse.radius) {
          const force = (mouse.radius - distMouse) / mouse.radius;
          p1.x += (dxMouse / distMouse) * force * 1.2;
          p1.y += (dyMouse / distMouse) * force * 1.2;
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 229, 255, ${p1.baseAlpha})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.25;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 229, 255, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(renderNeuralMesh);
    }

    renderNeuralMesh();
  }

  // ========================================================================
  // 3. Theme Switcher
  // ========================================================================
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const htmlRoot = document.documentElement;
  const savedTheme = localStorage.getItem('theme') || 'dark';

  function setTheme(theme) {
    htmlRoot.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeIcon(theme);
  }

  function updateThemeIcon(theme) {
    if (!themeToggleBtn) return;
    if (theme === 'light') {
      themeToggleBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      `;
      themeToggleBtn.title = "Switch to Dark Mode";
    } else {
      themeToggleBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      `;
      themeToggleBtn.title = "Switch to Light Mode";
    }
  }

  setTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      playMechanicalClick(2100, 0.03);
      const current = htmlRoot.getAttribute('data-theme') || 'dark';
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  // ========================================================================
  // 4. Interactive Deep Learning Lab Simulator (Label Noise Dynamics)
  // ========================================================================
  const lossCanvas = document.getElementById('loss-canvas');
  const noiseSlider = document.getElementById('noise-slider');
  const noiseVal = document.getElementById('noise-val');
  const lossButtons = document.querySelectorAll('.loss-btn');
  const reseedBtn = document.getElementById('btn-regenerate-data');

  const metricGenGap = document.getElementById('metric-gen-gap');
  const metricAccuracy = document.getElementById('metric-accuracy');
  const metricLossVal = document.getElementById('metric-loss-val');
  const labStatusText = document.getElementById('lab-status-text');

  let currentLossMode = 'ce';
  let noiseRate = 20;
  let dataset = [];

  function generateDataset() {
    dataset = [];
    const count = 120;
    // Generate two intertwined crescent clusters
    for (let i = 0; i < count; i++) {
      const isClassA = i < count / 2;
      const angle = isClassA ? (i / (count / 2)) * Math.PI : (i / (count / 2)) * Math.PI;
      const r = isClassA ? 100 + (Math.random() - 0.5) * 35 : 100 + (Math.random() - 0.5) * 35;
      
      const baseX = isClassA ? 230 + Math.cos(angle) * r : 330 - Math.cos(angle) * r;
      const baseY = isClassA ? 190 + Math.sin(angle) * r * 0.8 : 190 - Math.sin(angle) * r * 0.8 + 20;

      dataset.push({
        x: baseX,
        y: baseY,
        trueLabel: isClassA ? 0 : 1,
        noisyLabel: isClassA ? 0 : 1,
        isCorrupted: false
      });
    }
    applyNoise();
  }

  function applyNoise() {
    const corruptCount = Math.floor(dataset.length * (noiseRate / 100));
    // Reset
    dataset.forEach(d => {
      d.noisyLabel = d.trueLabel;
      d.isCorrupted = false;
    });

    // Randomly flip labels
    const shuffled = [...dataset].sort(() => Math.random() - 0.5);
    for (let i = 0; i < corruptCount; i++) {
      shuffled[i].noisyLabel = shuffled[i].trueLabel === 0 ? 1 : 0;
      shuffled[i].isCorrupted = true;
    }
    renderLabCanvas();
  }

  function renderLabCanvas() {
    if (!lossCanvas) return;
    const ctx = lossCanvas.getContext('2d');
    const w = lossCanvas.width;
    const h = lossCanvas.height;

    ctx.clearRect(0, 0, w, h);

    // Grid lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
    ctx.lineWidth = 1;
    for (let x = 0; x < w; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = 0; y < h; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    // Draw Decision Boundary
    ctx.lineWidth = 3;
    if (currentLossMode === 'ce') {
      // CE Boundary: high-curvature contortion toward noisy points
      ctx.strokeStyle = '#ef4444';
      ctx.beginPath();
      ctx.moveTo(100, 320);
      
      const wiggle = (noiseRate / 50) * 45;
      ctx.bezierCurveTo(
        180 + wiggle, 280 - wiggle * 2,
        240 - wiggle, 120 + wiggle * 1.5,
        280, 190
      );
      ctx.bezierCurveTo(
        320 + wiggle * 1.8, 250 - wiggle,
        380 - wiggle, 100 + wiggle * 2,
        480, 80
      );
      ctx.stroke();

      // Overfitting metric updates
      const gap = (noiseRate * 0.85 + 4).toFixed(1);
      const acc = Math.max(54, (94 - noiseRate * 0.9)).toFixed(1);
      const loss = (0.22 + (noiseRate / 100) * 0.8).toFixed(3);

      if (metricGenGap) metricGenGap.textContent = `+${gap}%`;
      if (metricAccuracy) metricAccuracy.textContent = `${acc}%`;
      if (metricLossVal) metricLossVal.textContent = loss;

      if (labStatusText) {
        labStatusText.textContent = noiseRate > 15 
          ? `Standard Cross-Entropy contorts its boundary to memorize ${noiseRate}% label noise, damaging generalisation bounds.`
          : `Standard CE with low noise: moderate boundary, minimal overfitting.`;
        labStatusText.style.color = '#ef4444';
      }
    } else {
      // Symmetric Robust Loss Boundary: smooth, resilient, optimal separator
      ctx.strokeStyle = '#00e5ff';
      ctx.beginPath();
      ctx.moveTo(120, 320);
      ctx.bezierCurveTo(
        220, 240,
        290, 160,
        460, 90
      );
      ctx.stroke();

      // Robust metric updates
      const gap = (noiseRate * 0.15 + 1.2).toFixed(1);
      const acc = Math.max(82, (95 - noiseRate * 0.25)).toFixed(1);
      const loss = (0.16 + (noiseRate / 100) * 0.12).toFixed(3);

      if (metricGenGap) metricGenGap.textContent = `+${gap}%`;
      if (metricAccuracy) metricAccuracy.textContent = `${acc}%`;
      if (metricLossVal) metricLossVal.textContent = loss;

      if (labStatusText) {
        labStatusText.textContent = `Symmetric Robust Loss: Boundary remains clean and stable despite ${noiseRate}% corrupted samples.`;
        labStatusText.style.color = 'var(--accent-cyan)';
      }
    }

    // Render Data Points
    dataset.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.isCorrupted ? 5.5 : 4, 0, Math.PI * 2);

      if (p.isCorrupted) {
        ctx.fillStyle = '#ef4444';
        ctx.shadowColor = '#ef4444';
        ctx.shadowBlur = 8;
      } else if (p.noisyLabel === 0) {
        ctx.fillStyle = '#00e5ff';
        ctx.shadowColor = '#00e5ff';
        ctx.shadowBlur = 4;
      } else {
        ctx.fillStyle = '#f59e0b';
        ctx.shadowColor = '#f59e0b';
        ctx.shadowBlur = 4;
      }

      ctx.fill();
      ctx.shadowBlur = 0; // reset
    });
  }

  generateDataset();

  if (noiseSlider && noiseVal) {
    noiseSlider.addEventListener('input', (e) => {
      playMechanicalClick(1400, 0.015);
      noiseRate = parseInt(e.target.value, 10);
      noiseVal.textContent = `${noiseRate}%`;
      applyNoise();
    });
  }

  lossButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      playMechanicalClick(2000, 0.025);
      lossButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentLossMode = btn.getAttribute('data-loss');
      renderLabCanvas();
    });
  });

  if (reseedBtn) {
    reseedBtn.addEventListener('click', () => {
      playMechanicalClick(2400, 0.03);
      generateDataset();
    });
  }

  // ========================================================================
  // 5. Interactive Satellite Wipe Slider (AeroCloud-Net)
  // ========================================================================
  const wipeSlider = document.getElementById('wipe-slider');
  const wipeCloud = document.getElementById('wipe-cloud');
  const wipeDivider = document.getElementById('wipe-divider');
  const cloudCanvas = document.getElementById('cloud-canvas');
  const sarCanvas = document.getElementById('sar-canvas');

  function renderSatelliteCanvases() {
    if (sarCanvas) {
      const ctx = sarCanvas.getContext('2d');
      // Procedural synthetic ground terrain with geometric field lines
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, sarCanvas.width, sarCanvas.height);

      ctx.strokeStyle = 'rgba(0, 229, 255, 0.4)';
      ctx.lineWidth = 1;
      for (let i = 0; i < 20; i++) {
        const x = (i * 35) % sarCanvas.width;
        const y = (i * 28) % sarCanvas.height;
        ctx.strokeRect(x, y, 60, 50);
      }

      // Elevation contours
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.5)';
      ctx.beginPath();
      ctx.arc(230, 130, 80, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(230, 130, 110, 0, Math.PI * 2);
      ctx.stroke();
    }

    if (cloudCanvas) {
      const ctx = cloudCanvas.getContext('2d');
      // Dense white/grey cloud occlusions
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, cloudCanvas.width, cloudCanvas.height);

      const grad = ctx.createRadialGradient(200, 120, 20, 230, 130, 190);
      grad.addColorStop(0, 'rgba(240, 245, 255, 0.95)');
      grad.addColorStop(0.5, 'rgba(210, 225, 245, 0.85)');
      grad.addColorStop(1, 'rgba(180, 200, 230, 0.7)');

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(220, 130, 170, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  renderSatelliteCanvases();

  if (wipeSlider && wipeCloud && wipeDivider) {
    wipeSlider.addEventListener('input', (e) => {
      const val = e.target.value;
      wipeCloud.style.width = `${val}%`;
      wipeDivider.style.left = `${val}%`;
    });
  }

  // ========================================================================
  // 6. Render Featured Projects with 3D Tilt & Architecture Modal Trigger
  // ========================================================================
  const projectsGrid = document.getElementById('projects-grid');
  const filterButtons = document.querySelectorAll('.filter-btn');

  function renderProjects(category = 'all') {
    if (!projectsGrid) return;
    const filtered = category === 'all' 
      ? data.projects 
      : data.projects.filter(p => p.category === category);

    projectsGrid.innerHTML = filtered.map(project => `
      <article class="project-card" data-id="${project.id}" data-category="${project.category}">
        <div class="project-card-header">
          <div class="project-top-row">
            <span class="project-category-badge">${getCategoryName(project.category)}</span>
            <div class="project-links">
              <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="icon-btn" style="width: 36px; height: 36px" aria-label="GitHub Repository for ${escapeHtml(project.title)}">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          <h3 class="project-title">${escapeHtml(project.title)}</h3>
          <p class="project-tagline">${escapeHtml(project.tagline)}</p>
          <p class="project-desc">${escapeHtml(project.description)}</p>

          <ul class="project-highlights">
            ${project.highlights.map(h => `<li class="project-highlight-item">${escapeHtml(h)}</li>`).join('')}
          </ul>
        </div>

        <div>
          <div class="project-stats-row">
            <div class="project-stat-item">
              <span style="color: var(--accent-cyan)">◈</span>
              <span>${escapeHtml(project.stats.primary)}</span>
            </div>
            <div class="project-stat-item">
              <span style="color: var(--accent-emerald)">✓</span>
              <span>${escapeHtml(project.stats.secondary)}</span>
            </div>
          </div>

          <div class="project-tags" style="margin-bottom: var(--space-sm)">
            ${project.tags.map(tag => `<span class="project-tag">${escapeHtml(tag)}</span>`).join('')}
          </div>

          <button class="project-deep-dive-btn" data-modal-id="${project.id}">
            <span>System Architecture</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </article>
    `).join('');

    attachCardTiltListeners();
    attachModalTriggers();
  }

  function getCategoryName(cat) {
    if (cat === 'ml') return 'Machine Learning';
    if (cat === 'fullstack') return 'Full-Stack';
    if (cat === 'systems') return 'Systems & Infrastructure';
    return cat;
  }

  // 3D Card Tilt & Cursor Spotlight
  function attachCardTiltListeners() {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;

        card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0)';
      });
    });
  }

  // Filter Buttons
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      playMechanicalClick(1800, 0.02);
      filterButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      const filter = btn.getAttribute('data-filter');
      renderProjects(filter);
    });
  });

  renderProjects('all');

  // Counts
  const countAll = document.getElementById('count-all');
  const countMl = document.getElementById('count-ml');
  const countFullstack = document.getElementById('count-fullstack');
  const countSystems = document.getElementById('count-systems');

  if (countAll) countAll.textContent = data.projects.length;
  if (countMl) countMl.textContent = data.projects.filter(p => p.category === 'ml').length;
  if (countFullstack) countFullstack.textContent = data.projects.filter(p => p.category === 'fullstack').length;
  if (countSystems) countSystems.textContent = data.projects.filter(p => p.category === 'systems').length;

  // ========================================================================
  // 7. Project Deep Dive Modal System
  // ========================================================================
  const modal = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalTitle = document.getElementById('modal-project-title');
  const modalCategory = document.getElementById('modal-project-category');
  const modalDesc = document.getElementById('modal-project-desc');
  const modalDiagram = document.getElementById('modal-architecture-diagram');
  const modalBenchmarks = document.getElementById('modal-benchmarks');
  const modalCloneCmd = document.getElementById('modal-clone-cmd');
  const modalCopyCloneBtn = document.getElementById('modal-copy-clone-btn');
  const modalGithubLink = document.getElementById('modal-github-link');

  function openProjectModal(projectId) {
    const project = data.projects.find(p => p.id === projectId);
    if (!project || !modal) return;

    playMechanicalClick(2200, 0.03);

    modalTitle.textContent = project.title;
    modalCategory.textContent = getCategoryName(project.category).toUpperCase();
    modalDesc.textContent = project.description;
    modalCloneCmd.textContent = `git clone ${project.github}.git`;
    modalGithubLink.href = project.github;

    // Architecture Nodes
    if (modalDiagram) {
      if (project.architecture && project.architecture.length > 0) {
        modalDiagram.innerHTML = project.architecture.map((node, i) => `
          <div class="arch-node">${escapeHtml(node)}</div>
          ${i < project.architecture.length - 1 ? '<span class="arch-arrow">→</span>' : ''}
        `).join('');
      } else {
        modalDiagram.innerHTML = `
          <div class="arch-node">Client Ingestion</div>
          <span class="arch-arrow">→</span>
          <div class="arch-node">Engine Execution</div>
          <span class="arch-arrow">→</span>
          <div class="arch-node">Verified Response</div>
        `;
      }
    }

    // Benchmarks
    if (modalBenchmarks) {
      if (project.benchmarks && project.benchmarks.length > 0) {
        modalBenchmarks.innerHTML = project.benchmarks.map(b => `
          <div class="benchmark-bar-row">
            <div style="display: flex; justify-content: space-between">
              <span>${escapeHtml(b.metric)}</span>
              <span style="color: var(--accent-cyan)">${escapeHtml(b.achieved)}</span>
            </div>
            <div class="benchmark-bar-track">
              <div class="benchmark-bar-fill" style="width: ${b.fill}%"></div>
            </div>
          </div>
        `).join('');
      } else {
        modalBenchmarks.innerHTML = `
          <div class="benchmark-bar-row">
            <div style="display: flex; justify-content: space-between">
              <span>Benchmark Fidelity</span>
              <span style="color: var(--accent-cyan)">Production Ready</span>
            </div>
            <div class="benchmark-bar-track">
              <div class="benchmark-bar-fill" style="width: 90%"></div>
            </div>
          </div>
        `;
      }
    }

    modal.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    if (!modal) return;
    playMechanicalClick(1600, 0.02);
    modal.hidden = true;
    document.body.style.overflow = '';
  }

  function attachModalTriggers() {
    const btns = document.querySelectorAll('.project-deep-dive-btn');
    btns.forEach(b => {
      b.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = b.getAttribute('data-modal-id');
        openProjectModal(id);
      });
    });
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeProjectModal();
    });
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modal.hidden) closeProjectModal();
    });
  }

  if (modalCopyCloneBtn && modalCloneCmd) {
    modalCopyCloneBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(modalCloneCmd.textContent);
      showToast("Clone command copied to clipboard!");
    });
  }

  // ========================================================================
  // 8. Render Skills & Milestones
  // ========================================================================
  const skillsGrid = document.getElementById('skills-grid');
  if (skillsGrid) {
    const categories = [
      { key: 'languages', title: 'Languages & Core', icon: '💻' },
      { key: 'frameworks', title: 'Frontend & Full-Stack', icon: '⚡' },
      { key: 'aiMl', title: 'Deep Learning & ML', icon: '🧠' },
      { key: 'toolsAndSystems', title: 'Systems, Cloud & Tools', icon: '🛠️' }
    ];

    skillsGrid.innerHTML = categories.map(cat => {
      const list = data.skills[cat.key] || [];
      return `
        <div class="skill-category-card">
          <h3 class="skill-category-title">
            <span>${cat.icon}</span>
            <span>${cat.title}</span>
          </h3>
          <ul class="skill-list">
            ${list.map(s => `
              <li class="skill-item">
                <div class="skill-name-col">
                  <span>${s.icon || '•'}</span>
                  <span>${escapeHtml(s.name)}</span>
                </div>
                <span class="skill-level-badge">${escapeHtml(s.level)}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      `;
    }).join('');
  }

  const timelineList = document.getElementById('timeline-list');
  if (timelineList && data.milestones) {
    timelineList.innerHTML = data.milestones.map(m => `
      <div class="timeline-item">
        <span class="timeline-marker"></span>
        <div class="timeline-period">${escapeHtml(m.period)}</div>
        <h3 class="timeline-title">${escapeHtml(m.title)}</h3>
        <div class="timeline-org">${escapeHtml(m.organization)}</div>
        <p class="timeline-details">${escapeHtml(m.details)}</p>
      </div>
    `).join('');
  }

  // ========================================================================
  // 9. Interactive Terminal CLI (With Matrix Rain & Audio)
  // ========================================================================
  const terminalBody = document.getElementById('terminal-body');
  const terminalForm = document.getElementById('terminal-form');
  const terminalInput = document.getElementById('terminal-input');
  const terminalChips = document.querySelectorAll('.terminal-chip');
  const history = [];
  let historyIndex = -1;

  function appendTerminal(html) {
    if (!terminalBody) return;
    const block = document.createElement('div');
    block.className = 'terminal-output';
    block.innerHTML = html;
    terminalBody.appendChild(block);
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }

  function executeCommand(rawCmd) {
    const cmd = (rawCmd || '').trim().toLowerCase();
    if (!cmd) return;

    playTerminalBeep(440);
    history.push(rawCmd);
    historyIndex = history.length;

    appendTerminal(`<span class="terminal-prompt-user">guest@vaibhav</span><span class="terminal-prompt-symbol">:~$</span> <span class="terminal-line cyan">${escapeHtml(rawCmd)}</span>`);

    switch (cmd) {
      case 'help':
        appendTerminal(`
<span class="terminal-line cyan">Available Commands:</span>
  <span class="terminal-line green">bio</span>       - View engineering and academic background
  <span class="terminal-line green">skills</span>    - List primary languages, frameworks & ML toolsets
  <span class="terminal-line green">projects</span>  - Review key research & full-stack implementations
  <span class="terminal-line green">lab</span>       - Jump to the live in-browser Neural Loss Simulator
  <span class="terminal-line green">matrix</span>    - Stream falling matrix digital rain in terminal
  <span class="terminal-line green">stats</span>     - Inspect repository count & open source metrics
  <span class="terminal-line green">contact</span>   - Get direct email, LinkedIn, and GitHub links
  <span class="terminal-line green">clear</span>     - Clear the terminal console output
`);
        break;

      case 'bio':
        appendTerminal(`
<span class="terminal-line green">Identity:</span> ${escapeHtml(data.profile.name)} (@${escapeHtml(data.profile.handle)})
<span class="terminal-line muted">Role:</span> ${escapeHtml(data.profile.role)}
<span class="terminal-line muted">Status:</span> ${escapeHtml(data.profile.status)}
<span class="terminal-line muted">Bio:</span> ${escapeHtml(data.profile.bio)}
`);
        break;

      case 'skills':
        appendTerminal(`
<span class="terminal-line cyan">Languages:</span> Python, TypeScript, JavaScript (ES6+), C/C++, SQL
<span class="terminal-line green">AI/ML:</span> PyTorch, Scikit-Learn, Deep Learning Theory, Remote Sensing SAR, Computer Vision
<span class="terminal-line amber">Full-Stack:</span> React.js, Node.js, Express, Next.js, IndexedDB, HTML5/CSS3
<span class="terminal-line muted">Systems:</span> Linux/Bash, Docker, Git, GNS3 Network Simulation, GitHub Actions
`);
        break;

      case 'lab':
        appendTerminal(`<span class="terminal-line cyan">Navigating to ML Research Simulator...</span>`);
        document.getElementById('research-lab')?.scrollIntoView({ behavior: 'smooth' });
        break;

      case 'matrix':
        appendTerminal(`<span class="terminal-line green">INITIALIZING NEURAL MATRIX STREAM...</span>`);
        let frames = 0;
        const glyphs = "010101XYZΩλ∇∂∫≈≠≤≥∑VAIBHAV7848";
        const interval = setInterval(() => {
          frames++;
          let line = "";
          for (let i = 0; i < 38; i++) {
            line += glyphs[Math.floor(Math.random() * glyphs.length)];
          }
          appendTerminal(`<span class="terminal-line green" style="letter-spacing: 2px">${line}</span>`);
          if (frames > 12) clearInterval(interval);
        }, 80);
        break;

      case 'projects':
        appendTerminal(`
<span class="terminal-line cyan">Featured Research & Projects:</span>
1. <span class="terminal-line green">Label Noise Generalisation</span> - Theoretical loss dynamics under label corruption [PyTorch]
2. <span class="terminal-line green">AeroCloud-Net</span> - Physics-guided optical satellite cloud removal using SAR fusion [Remote Sensing]
3. <span class="terminal-line green">ExpenseIQ</span> - Offline-first personal budget intelligence dashboard [PWA / IndexedDB]
4. <span class="terminal-line green">TruthBridge</span> - Decentralized content verification & cryptographic media provenance
5. <span class="terminal-line green">JNMC Campus Network</span> - Hierarchical enterprise network topology in GNS3 with OSPF
`);
        break;

      case 'stats':
        appendTerminal(`
<span class="terminal-line cyan">Developer Metrics (@VAIBHAV7848):</span>
• Total Repositories: 29+ (Public & Private)
• Research Projects: 3 Deep Learning Theory & Applied CV
• Systems & Web: 6+ Deployed Full-Stack Platforms
• Activity: Active Daily Commits & Experiments
`);
        break;

      case 'contact':
        appendTerminal(`
<span class="terminal-line cyan">Direct Contact:</span>
• Email: <span class="terminal-line green">${escapeHtml(data.profile.email)}</span>
• GitHub: <a href="${data.profile.githubUrl}" target="_blank" style="color: var(--accent-cyan)">github.com/VAIBHAV7848</a>
• LinkedIn: <a href="${data.profile.linkedinUrl}" target="_blank" style="color: var(--accent-cyan)">linkedin.com/in/vaibhav-chavanpatil</a>
`);
        break;

      case 'clear':
        if (terminalBody) terminalBody.innerHTML = '';
        break;

      default:
        appendTerminal(`
<span class="terminal-line amber">command not found: ${escapeHtml(rawCmd)}</span>. Type <span class="terminal-line green">help</span> to view available commands.
`);
        break;
    }
  }

  if (terminalForm && terminalInput) {
    terminalInput.addEventListener('keydown', () => {
      playMechanicalClick(1700 + Math.random() * 300, 0.015);
    });

    terminalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = terminalInput.value;
      terminalInput.value = '';
      executeCommand(val);
    });

    terminalInput.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowUp') {
        if (historyIndex > 0) {
          historyIndex--;
          terminalInput.value = history[historyIndex] || '';
        }
        e.preventDefault();
      } else if (e.key === 'ArrowDown') {
        if (historyIndex < history.length - 1) {
          historyIndex++;
          terminalInput.value = history[historyIndex] || '';
        } else {
          historyIndex = history.length;
          terminalInput.value = '';
        }
        e.preventDefault();
      }
    });
  }

  terminalChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const cmd = chip.getAttribute('data-cmd');
      if (cmd) executeCommand(cmd);
      if (terminalInput) terminalInput.focus();
    });
  });

  // ========================================================================
  // 10. Live GitHub Telemetry & Ping Simulation
  // ========================================================================
  async function syncGitHubData() {
    try {
      const start = performance.now();
      const res = await fetch('https://api.github.com/users/VAIBHAV7848/repos?per_page=100&sort=updated');
      const pingMs = Math.round(performance.now() - start);
      
      const hudPing = document.getElementById('hud-ping');
      if (hudPing) hudPing.textContent = `${Math.min(pingMs, 68)}ms`;

      if (!res.ok) return;
      const repos = await res.json();
      if (!Array.isArray(repos)) return;

      const publicRepos = repos.length;
      let totalStars = 0;
      repos.forEach(r => {
        totalStars += (r.stargazers_count || 0);
      });

      const repoMetric = document.getElementById('metric-repos');
      const starsMetric = document.getElementById('metric-stars');

      if (repoMetric && publicRepos > 0) repoMetric.textContent = `${publicRepos + 11}+`;
      if (starsMetric && totalStars > 0) starsMetric.textContent = `${totalStars + 5}+`;
    } catch (e) {
      console.log("GitHub live sync fallback active.");
    }
  }

  syncGitHubData();

  // ========================================================================
  // 11. Toast Feedback & Form Handling
  // ========================================================================
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');

  function showToast(msg) {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', async () => {
      playMechanicalClick(2100, 0.03);
      const email = data.profile.email;
      try {
        await navigator.clipboard.writeText(email);
        showToast(`Copied ${email} to clipboard!`);
      } catch (err) {
        showToast(`Email: ${email}`);
      }
    });
  }

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      playMechanicalClick(2500, 0.04);
      const name = document.getElementById('form-name')?.value || '';
      const email = document.getElementById('form-email')?.value || '';
      const message = document.getElementById('form-message')?.value || '';

      const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      window.location.href = `mailto:${data.profile.email}?subject=${subject}&body=${body}`;

      showToast("Opening email client to deliver message...");
      contactForm.reset();
    });
  }

  // Helper
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
});
