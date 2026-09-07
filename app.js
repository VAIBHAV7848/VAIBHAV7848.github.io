/**
 * app.js
 * VAIBHAV-OS v3.2 & VAIBHAV-MOBILE OS
 * 
 * Subsystems:
 * 1. Window Manager (Drag, Z-Index focus, Minimize, Maximize, Close)
 * 2. Mobile OS Controller (Home Screen, Dynamic Island, Home Indicator)
 * 3. Desktop Context Menu & System Dropdown Menu
 * 4. Fullscreen Matrix Screensaver Lock Engine
 * 5. Web Audio API Mechanical Sound Synthesizer
 * 6. Interactive Terminal with Neofetch & Matrix Rain
 * 7. Interactive Deep Learning Lab Simulator
 * 8. Interactive Satellite SAR Cloud Penetration Scanner
 * 9. Projects Explorer File Manager
 */

document.addEventListener('DOMContentLoaded', () => {
  const data = window.PORTFOLIO_DATA;
  if (!data) return;

  const isMobile = window.innerWidth <= 768;

  // ========================================================================
  // 0. Ambient Interactive Neural Particle Mesh (60 FPS Canvas)
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
    const particleCount = Math.min(65, Math.floor((width * height) / 18000));
    const mouse = { x: -1000, y: -1000, radius: 140 };

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    window.addEventListener('mouseleave', () => {
      mouse.x = -1000;
      mouse.y = -1000;
    });

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.7;
        this.vy = (Math.random() - 0.5) * 0.7;
        this.radius = Math.random() * 1.8 + 0.8;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (1 - dist / mouse.radius) * 1.5;
          this.x += (dx / dist) * force;
          this.y += (dy / dist) * force;
        }
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 229, 255, 0.4)';
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animateNeural() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 229, 255, ${0.18 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      requestAnimationFrame(animateNeural);
    }
    animateNeural();
  }

  // ========================================================================
  // 1. Web Audio Synthesizer (Zero Assets)
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

  function playSound(type = 'click', freq = 1800) {
    if (!soundEnabled) return;
    try {
      initAudio();
      if (!audioCtx) return;

      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      if (type === 'click') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(300, audioCtx.currentTime + 0.02);
        gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.02);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.02);
      } else if (type === 'window-open') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(420, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(840, audioCtx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
        gain.gain.linearRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.08);
      } else if (type === 'beep') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.03, audioCtx.currentTime);
        gain.gain.linearRampToValueAtTime(0.001, audioCtx.currentTime + 0.06);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.06);
      }
    } catch (e) {}
  }

  if (audioToggleBtn) {
    audioToggleBtn.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      if (soundIndicator) {
        soundIndicator.textContent = soundEnabled ? '🔊 SFX ON' : '🔇 SFX OFF';
        soundIndicator.style.color = soundEnabled ? 'var(--accent-emerald)' : 'var(--text-muted)';
      }
      if (soundEnabled) playSound('click', 2200);
    });
  }

  // ========================================================================
  // 2. Window Manager & Mobile OS Controller
  // ========================================================================
  let topZ = 100;
  const windows = document.querySelectorAll('.os-window');
  const currentAppLabel = document.getElementById('current-app-name');
  const mobileHomeScreen = document.getElementById('mobile-home-screen');

  const appNameMap = {
    'about': 'About Vaibhav',
    'projects': 'Projects Explorer',
    'terminal': 'Terminal',
    'lab': 'ML Research Lab',
    'sar': 'AeroCloud SAR',
    'skills': 'Skills Matrix',
    'contact': 'Messenger',
    'wallpapers': 'Wallpaper Preferences'
  };

  function bringToFront(win) {
    topZ += 1;
    windows.forEach(w => w.classList.remove('active'));
    win.classList.add('active');
    win.style.zIndex = topZ;

    const appId = win.id.replace('win-', '');
    if (currentAppLabel && appNameMap[appId]) {
      currentAppLabel.textContent = appNameMap[appId];
    }
  }

  function checkMobileHomeVisibility() {
    if (window.innerWidth <= 768 && mobileHomeScreen) {
      let anyVisible = false;
      windows.forEach(w => {
        if (w.style.display !== 'none' && !w.classList.contains('minimized')) {
          anyVisible = true;
        }
      });
      mobileHomeScreen.style.display = anyVisible ? 'none' : 'flex';
    }
  }

  function openWindow(appId) {
    const win = document.getElementById(`win-${appId}`);
    if (!win) return;

    playSound('window-open');
    win.style.display = 'flex';
    win.classList.remove('minimized');
    bringToFront(win);

    // Update Dock Dot
    const dot = document.getElementById(`dot-${appId}`);
    const dockItem = document.querySelector(`.dock-item[data-app="${appId}"]`);
    if (dot) dot.style.backgroundColor = 'var(--accent-cyan)';
    if (dockItem) dockItem.classList.add('running');

    checkMobileHomeVisibility();
  }

  function closeWindow(win) {
    playSound('click', 1200);
    win.style.display = 'none';
    const appId = win.id.replace('win-', '');
    const dot = document.getElementById(`dot-${appId}`);
    const dockItem = document.querySelector(`.dock-item[data-app="${appId}"]`);
    if (dot) dot.style.backgroundColor = 'transparent';
    if (dockItem) dockItem.classList.remove('running');

    checkMobileHomeVisibility();
  }

  function minimizeWindow(win) {
    playSound('click', 1400);
    win.classList.add('minimized');
    checkMobileHomeVisibility();
  }

  function toggleMaximize(win) {
    playSound('click', 2000);
    win.classList.toggle('maximized');
  }

  // Global OS methods
  window.OS = {
    openWindow,
    closeWindow,
    bringToFront
  };

  // Window Mechanics & Controls
  windows.forEach(win => {
    win.addEventListener('mousedown', () => bringToFront(win));

    const header = win.querySelector('.window-header');
    const closeBtn = win.querySelector('.win-close');
    const minBtn = win.querySelector('.win-minimize');
    const maxBtn = win.querySelector('.win-maximize');

    if (closeBtn) closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeWindow(win);
    });

    if (minBtn) minBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      minimizeWindow(win);
    });

    if (maxBtn) maxBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMaximize(win);
    });

    if (header) {
      header.addEventListener('dblclick', () => toggleMaximize(win));

      let isDragging = false;
      let startX, startY, initLeft, initTop;

      header.addEventListener('mousedown', (e) => {
        if (e.target.classList.contains('win-btn')) return;
        if (win.classList.contains('maximized')) return;

        isDragging = true;
        bringToFront(win);

        startX = e.clientX;
        startY = e.clientY;

        const rect = win.getBoundingClientRect();
        initLeft = rect.left;
        initTop = rect.top - 34;

        document.body.style.cursor = 'grabbing';
      });

      window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;

        const newLeft = Math.max(10, Math.min(window.innerWidth - 100, initLeft + dx));
        const newTop = Math.max(10, Math.min(window.innerHeight - 150, initTop + dy));

        win.style.left = `${newLeft}px`;
        win.style.top = `${newTop}px`;
      });

      window.addEventListener('mouseup', () => {
        if (isDragging) {
          isDragging = false;
          document.body.style.cursor = '';
        }
      });
    }
  });

  // Desktop Shortcut Clicks
  const shortcuts = document.querySelectorAll('.desktop-shortcut');
  shortcuts.forEach(shortcut => {
    shortcut.addEventListener('click', () => {
      shortcuts.forEach(s => s.classList.remove('selected'));
      shortcut.classList.add('selected');
      const app = shortcut.getAttribute('data-app');
      if (app) openWindow(app);
    });
  });

  // Mobile App Squircle Clicks
  const mobileAppItems = document.querySelectorAll('.mobile-app-item[data-app]');
  mobileAppItems.forEach(item => {
    item.addEventListener('click', () => {
      const app = item.getAttribute('data-app');
      if (app) openWindow(app);
    });
  });

  // Dock Items Click
  const dockItems = document.querySelectorAll('.dock-item[data-app]');
  dockItems.forEach(item => {
    item.addEventListener('click', () => {
      const app = item.getAttribute('data-app');
      const win = document.getElementById(`win-${app}`);
      if (!win) return;

      if (win.style.display === 'none' || win.classList.contains('minimized')) {
        openWindow(app);
      } else if (win.classList.contains('active')) {
        minimizeWindow(win);
      } else {
        bringToFront(win);
      }
    });
  });

  // Top Menu Actions
  const sysMenuBtn = document.getElementById('system-menu-btn');
  const sysDropdown = document.getElementById('system-dropdown');
  if (sysMenuBtn && sysDropdown) {
    sysMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      playSound('click', 1900);
      sysDropdown.hidden = !sysDropdown.hidden;
    });
  }

  document.querySelectorAll('.menu-dropdown-trigger[data-action]').forEach(btn => {
    btn.addEventListener('click', () => {
      const action = btn.getAttribute('data-action');
      if (action === 'open-about') openWindow('about');
      if (action === 'open-projects') openWindow('projects');
      if (action === 'open-lab') openWindow('lab');
      if (action === 'open-terminal') openWindow('terminal');
      if (action === 'open-contact') openWindow('contact');
    });
  });

  // Right-Click Desktop Context Menu
  const ctxMenu = document.getElementById('desktop-context-menu');
  const desktopWorkspace = document.getElementById('desktop-workspace');

  if (desktopWorkspace && ctxMenu) {
    desktopWorkspace.addEventListener('contextmenu', (e) => {
      // Only show if clicking empty desktop background
      if (e.target.closest('.os-window') || e.target.closest('.desktop-shortcut')) return;

      e.preventDefault();
      playSound('click', 1500);
      ctxMenu.style.top = `${e.clientY}px`;
      ctxMenu.style.left = `${e.clientX}px`;
      ctxMenu.hidden = false;
    });
  }

  // Dismiss dropdowns on document click
  window.addEventListener('click', () => {
    if (sysDropdown) sysDropdown.hidden = true;
    if (ctxMenu) ctxMenu.hidden = true;
  });

  // Screensaver / Lock Screen
  const screensaver = document.getElementById('matrix-screensaver');
  const screensaverCanvas = document.getElementById('screensaver-canvas');
  let screensaverActive = false;
  let matrixAnimId = null;

  function startScreensaver() {
    if (!screensaver || !screensaverCanvas) return;
    playSound('beep', 800);
    screensaver.hidden = false;
    screensaverActive = true;

    const ctx = screensaverCanvas.getContext('2d');
    screensaverCanvas.width = window.innerWidth;
    screensaverCanvas.height = window.innerHeight;

    const columns = Math.floor(screensaverCanvas.width / 18);
    const drops = Array(columns).fill(1);
    const chars = "0101010101VAIBHAV7848CHAVANPATILΩλ∇∂∫≈≠≤≥∑";

    function drawMatrixRain() {
      if (!screensaverActive) return;
      ctx.fillStyle = 'rgba(0, 0, 0, 0.07)';
      ctx.fillRect(0, 0, screensaverCanvas.width, screensaverCanvas.height);

      ctx.fillStyle = '#10b981';
      ctx.font = '14px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * 18, drops[i] * 18);

        if (drops[i] * 18 > screensaverCanvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      matrixAnimId = requestAnimationFrame(drawMatrixRain);
    }
    drawMatrixRain();
  }

  function stopScreensaver() {
    if (!screensaverActive) return;
    playSound('beep', 1200);
    screensaverActive = false;
    if (matrixAnimId) cancelAnimationFrame(matrixAnimId);
    screensaver.hidden = true;
  }

  const menuLock = document.getElementById('menu-lock-matrix');
  const ctxLock = document.getElementById('ctx-lock-matrix');
  if (menuLock) menuLock.addEventListener('click', startScreensaver);
  if (ctxLock) ctxLock.addEventListener('click', startScreensaver);

  if (screensaver) {
    screensaver.addEventListener('click', stopScreensaver);
    window.addEventListener('keydown', () => {
      if (screensaverActive) stopScreensaver();
    });
  }

  const menuRestart = document.getElementById('menu-restart-os');
  if (menuRestart) {
    menuRestart.addEventListener('click', () => {
      window.location.reload();
    });
  }

  // Dynamic Island Click
  const dynamicIsland = document.getElementById('dynamic-island');
  const islandText = document.getElementById('island-text');
  if (dynamicIsland && islandText) {
    const messages = [
      'SWE & ML Available',
      'Belgaum • 15.85°N',
      '29+ Repos • PyTorch',
      'Tap to Explore Apps'
    ];
    let msgIdx = 0;
    dynamicIsland.addEventListener('click', () => {
      playSound('beep', 900);
      msgIdx = (msgIdx + 1) % messages.length;
      islandText.textContent = messages[msgIdx];
    });
  }

  // Default Open Windows
  if (!isMobile) {
    openWindow('about');
    openWindow('projects');
  } else {
    // On mobile, start cleanly on the Phone Home Screen!
    windows.forEach(w => {
      w.style.display = 'none';
      w.classList.remove('active');
    });
    checkMobileHomeVisibility();
  }

  // ========================================================================
  // 3. Top Menu Bar Telemetry (Clock, Ping, CPU)
  // ========================================================================
  const clockEl = document.getElementById('os-clock');
  const mobileClockEl = document.getElementById('mobile-clock');

  function updateClock() {
    const now = new Date();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const d = days[now.getDay()];
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');

    if (clockEl) clockEl.textContent = `${d} ${h}:${m}`;
    if (mobileClockEl) mobileClockEl.textContent = `${h}:${m}`;
  }
  updateClock();
  setInterval(updateClock, 10000);

  // Ping & CPU Simulation
  const pingEl = document.getElementById('hud-ping');
  const cpuEl = document.getElementById('hud-cpu');
  setInterval(() => {
    if (pingEl) pingEl.textContent = `${Math.floor(Math.random() * 8 + 12)}ms`;
    if (cpuEl) cpuEl.textContent = `${Math.floor(Math.random() * 10 + 8)}%`;
  }, 4000);

  // ========================================================================
  // 4. Projects Explorer (Finder Style)
  // ========================================================================
  const finderGrid = document.getElementById('finder-projects-grid');
  const finderCount = document.getElementById('finder-repo-count');
  const sidebarButtons = document.querySelectorAll('.sidebar-nav-item[data-filter]');

  function renderFinderProjects(filter = 'all') {
    if (!finderGrid) return;
    const filtered = filter === 'all'
      ? data.projects
      : data.projects.filter(p => p.category === filter);

    if (finderCount) finderCount.textContent = `${filtered.length} Items`;

    finderGrid.innerHTML = filtered.map(p => `
      <div class="finder-card" data-id="${p.id}">
        <div class="finder-card-top">
          <h4 class="finder-card-title">${escapeHtml(p.title)}</h4>
          <div class="finder-card-tagline">${escapeHtml(p.tagline)}</div>
          <p class="finder-card-desc">${escapeHtml(p.description)}</p>
        </div>

        <div>
          <div class="finder-card-tags">
            ${p.tags.slice(0, 3).map(t => `<span class="finder-tag">${escapeHtml(t)}</span>`).join('')}
          </div>
          <div class="finder-actions">
            <button class="finder-btn-arch" onclick="window.OS.showProjectDetails('${p.id}')">
              <span>Blueprint</span> →
            </button>
            <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="icon-btn" style="width: 26px; height: 26px" aria-label="GitHub Repository">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    `).join('');
  }

  sidebarButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      playSound('click', 1600);
      sidebarButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderFinderProjects(btn.getAttribute('data-filter'));
    });
  });

  renderFinderProjects('all');

  // ========================================================================
  // 5. Project Blueprint Modal
  // ========================================================================
  const modal = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalTitle = document.getElementById('modal-project-title');
  const modalCategory = document.getElementById('modal-project-category');
  const modalDesc = document.getElementById('modal-project-desc');
  const modalDiagram = document.getElementById('modal-architecture-diagram');
  const modalBenchmarks = document.getElementById('modal-benchmarks');
  const modalCloneCmd = document.getElementById('modal-clone-cmd');
  const modalCopyBtn = document.getElementById('modal-copy-clone-btn');
  const modalGithubLink = document.getElementById('modal-github-link');

  window.OS.showProjectDetails = function(id) {
    const project = data.projects.find(p => p.id === id);
    if (!project || !modal) return;

    playSound('click', 2200);
    modalTitle.textContent = project.title;
    modalCategory.textContent = project.category.toUpperCase();
    modalDesc.textContent = project.description;
    modalCloneCmd.textContent = `git clone ${project.github}.git`;
    modalGithubLink.href = project.github;

    if (modalDiagram && project.architecture) {
      modalDiagram.innerHTML = project.architecture.map((n, i) => `
        <div class="arch-node">${escapeHtml(n)}</div>
        ${i < project.architecture.length - 1 ? '<span class="arch-arrow">→</span>' : ''}
      `).join('');
    }

    if (modalBenchmarks && project.benchmarks) {
      modalBenchmarks.innerHTML = project.benchmarks.map(b => `
        <div style="display: flex; flex-direction: column; gap: 3px; font-family: var(--font-mono); font-size: 0.74rem">
          <div style="display: flex; justify-content: space-between">
            <span>${escapeHtml(b.metric)}</span>
            <span style="color: var(--accent-cyan)">${escapeHtml(b.achieved)}</span>
          </div>
          <div style="height: 6px; background: var(--os-elevated); border-radius: 4px; overflow: hidden">
            <div style="width: ${b.fill}%; height: 100%; background: linear-gradient(90deg, var(--accent-cyan), var(--accent-emerald))"></div>
          </div>
        </div>
      `).join('');
    }

    modal.hidden = false;
  };

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', () => { modal.hidden = true; });
  if (modal) {
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.hidden = true; });
    window.addEventListener('keydown', (e) => { if (e.key === 'Escape') modal.hidden = true; });
  }

  if (modalCopyBtn && modalCloneCmd) {
    modalCopyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(modalCloneCmd.textContent);
      showToast("Clone command copied!");
    });
  }

  // ========================================================================
  // 6. Terminal Subsystem (With Neofetch & Matrix)
  // ========================================================================
  const terminalBody = document.getElementById('terminal-body');
  const terminalForm = document.getElementById('terminal-form');
  const terminalInput = document.getElementById('terminal-input');
  const terminalChips = document.querySelectorAll('.terminal-chip');
  const termHistory = [];
  let termHistIdx = -1;

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

    playSound('beep', 540);
    termHistory.push(rawCmd);
    termHistIdx = termHistory.length;

    appendTerminal(`<span class="terminal-prompt-user">guest@vaibhav</span><span class="terminal-prompt-symbol">:~$</span> <span class="terminal-line cyan">${escapeHtml(rawCmd)}</span>`);

    switch (cmd) {
      case 'help':
        appendTerminal(`
<span class="terminal-line cyan">VAIBHAV-OS Commands:</span>
  <span class="terminal-line green">neofetch</span>  - Display system specs and developer badge
  <span class="terminal-line green">projects</span>  - Open or list featured software and ML research
  <span class="terminal-line green">lab</span>       - Launch the real-time Deep Learning Loss Simulator
  <span class="terminal-line green">matrix</span>    - Stream falling digital matrix sequence
  <span class="terminal-line green">skills</span>    - List primary technical proficiencies
  <span class="terminal-line green">wallpaper</span> - Launch Display & Wallpaper Preferences
  <span class="terminal-line green">bio</span>       - View academic and developer profile
  <span class="terminal-line green">contact</span>   - Get direct email and social links
  <span class="terminal-line green">clear</span>     - Clear terminal buffer
`);
        break;

      case 'neofetch':
        appendTerminal(`
<span class="terminal-line cyan">          #####          guest@vaibhav-os</span>
<span class="terminal-line cyan">         #######         ----------------</span>
<span class="terminal-line cyan">        ##  O  ##        OS:</span> VAIBHAV-OS v3.2 [WebStation]
<span class="terminal-line cyan">        ##     ##        Host:</span> Browser Engine 64-bit
<span class="terminal-line cyan">         #######         Kernel:</span> ES6+ / WebAudio / WebGL
<span class="terminal-line cyan">          #####          Uptime:</span> Live Session
<span class="terminal-line cyan">                         Packages:</span> PyTorch, React, Node.js, GNS3
<span class="terminal-line cyan">                         Shell:</span> zsh 5.9 (x86_64-portfolio)
<span class="terminal-line cyan">                         CPU:</span> 3rd Year CSE @ KLE Academy
<span class="terminal-line cyan">                         Memory:</span> 29+ Repos / 21+ GitHub Stars
`);
        break;

      case 'bio':
        appendTerminal(`
<span class="terminal-line green">Identity:</span> ${escapeHtml(data.profile.name)} (@${escapeHtml(data.profile.handle)})
<span class="terminal-line muted">Title:</span> ${escapeHtml(data.profile.subtitle)}
<span class="terminal-line muted">Focus:</span> Theoretical Deep Learning & Resilient Distributed Systems
<span class="terminal-line muted">Status:</span> ${escapeHtml(data.profile.status)}
`);
        break;

      case 'wallpaper':
      case 'wallpapers':
        appendTerminal(`<span class="terminal-line cyan">Opening Wallpaper & Display Preferences...</span>`);
        openWindow('wallpapers');
        break;

      case 'projects':
        appendTerminal(`<span class="terminal-line green">Opening Projects Explorer window...</span>`);
        openWindow('projects');
        break;

      case 'lab':
        appendTerminal(`<span class="terminal-line cyan">Launching ML Research Loss Lab...</span>`);
        openWindow('lab');
        break;

      case 'skills':
        appendTerminal(`
<span class="terminal-line cyan">Core Languages:</span> Python, TypeScript, JavaScript (ES6+), C/C++, SQL
<span class="terminal-line green">Machine Learning:</span> PyTorch, Deep Learning Theory, Remote Sensing SAR, CV
<span class="terminal-line amber">Full-Stack:</span> React.js, Node.js, Express, Next.js, IndexedDB, HTML5/CSS3
<span class="terminal-line muted">Infrastructure:</span> Linux/Bash, Docker, Git, GNS3 Network Simulation
`);
        break;

      case 'matrix':
        appendTerminal(`<span class="terminal-line green">CONNECTING TO CIPHER GRID...</span>`);
        let count = 0;
        const glyphs = "0101010101Ωλ∇∂∫≈≠≤≥∑VAIBHAV7848CHAVANPATIL";
        const interval = setInterval(() => {
          count++;
          let line = "";
          for (let i = 0; i < 36; i++) {
            line += glyphs[Math.floor(Math.random() * glyphs.length)];
          }
          appendTerminal(`<span class="terminal-line green" style="letter-spacing: 2px">${line}</span>`);
          if (count > 10) clearInterval(interval);
        }, 70);
        break;

      case 'contact':
        appendTerminal(`
<span class="terminal-line cyan">Direct Channels:</span>
• Email: <span class="terminal-line green">${escapeHtml(data.profile.email)}</span>
• GitHub: <a href="${data.profile.githubUrl}" target="_blank" style="color: var(--accent-cyan)">github.com/VAIBHAV7848</a>
• LinkedIn: <a href="${data.profile.linkedinUrl}" target="_blank" style="color: var(--accent-cyan)">linkedin.com/in/vaibhav-chavanpatil</a>
`);
        break;

      case 'clear':
        if (terminalBody) terminalBody.innerHTML = '';
        break;

      default:
        appendTerminal(`<span class="terminal-line amber">command not found: ${escapeHtml(rawCmd)}</span>. Type <span class="terminal-line green">help</span> for commands.`);
        break;
    }
  }

  if (terminalForm && terminalInput) {
    terminalInput.addEventListener('keydown', () => {
      playSound('click', 1600 + Math.random() * 300);
    });

    terminalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = terminalInput.value;
      terminalInput.value = '';
      executeCommand(val);
    });

    terminalInput.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowUp') {
        if (termHistIdx > 0) {
          termHistIdx--;
          terminalInput.value = termHistory[termHistIdx] || '';
        }
        e.preventDefault();
      } else if (e.key === 'ArrowDown') {
        if (termHistIdx < termHistory.length - 1) {
          termHistIdx++;
          terminalInput.value = termHistory[termHistIdx] || '';
        } else {
          termHistIdx = termHistory.length;
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
  // 7. ML Research Lab Simulator Engine
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
    for (let i = 0; i < count; i++) {
      const isClassA = i < count / 2;
      const angle = (i / (count / 2)) * Math.PI;
      const r = 90 + (Math.random() - 0.5) * 35;
      const baseX = isClassA ? 220 + Math.cos(angle) * r : 340 - Math.cos(angle) * r;
      const baseY = isClassA ? 170 + Math.sin(angle) * r * 0.8 : 170 - Math.sin(angle) * r * 0.8 + 20;

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
    dataset.forEach(d => {
      d.noisyLabel = d.trueLabel;
      d.isCorrupted = false;
    });

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

    // Subtle grid
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
    ctx.lineWidth = 1;
    for (let x = 0; x < w; x += 40) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
    }
    for (let y = 0; y < h; y += 40) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
    }

    // Draw boundary
    ctx.lineWidth = 3;
    if (currentLossMode === 'ce') {
      ctx.strokeStyle = '#ef4444';
      ctx.beginPath();
      ctx.moveTo(90, 300);
      const wiggle = (noiseRate / 50) * 45;
      ctx.bezierCurveTo(170 + wiggle, 260 - wiggle * 2, 230 - wiggle, 100 + wiggle * 1.5, 270, 170);
      ctx.bezierCurveTo(310 + wiggle * 1.8, 240 - wiggle, 370 - wiggle, 90 + wiggle * 2, 470, 70);
      ctx.stroke();

      const gap = (noiseRate * 0.85 + 4).toFixed(1);
      const acc = Math.max(54, (94 - noiseRate * 0.9)).toFixed(1);
      const loss = (0.22 + (noiseRate / 100) * 0.8).toFixed(3);

      if (metricGenGap) metricGenGap.textContent = `+${gap}%`;
      if (metricAccuracy) metricAccuracy.textContent = `${acc}%`;
      if (metricLossVal) metricLossVal.textContent = loss;
      if (labStatusText) {
        labStatusText.textContent = `Standard Cross-Entropy contorts boundary to fit ${noiseRate}% corrupted labels.`;
        labStatusText.style.color = '#ef4444';
      }
    } else {
      ctx.strokeStyle = '#00e5ff';
      ctx.beginPath();
      ctx.moveTo(110, 300);
      ctx.bezierCurveTo(210, 220, 280, 140, 450, 80);
      ctx.stroke();

      const gap = (noiseRate * 0.15 + 1.2).toFixed(1);
      const acc = Math.max(82, (95 - noiseRate * 0.25)).toFixed(1);
      const loss = (0.16 + (noiseRate / 100) * 0.12).toFixed(3);

      if (metricGenGap) metricGenGap.textContent = `+${gap}%`;
      if (metricAccuracy) metricAccuracy.textContent = `${acc}%`;
      if (metricLossVal) metricLossVal.textContent = loss;
      if (labStatusText) {
        labStatusText.textContent = `Symmetric Robust Loss preserves smooth boundary regardless of ${noiseRate}% label noise.`;
        labStatusText.style.color = 'var(--accent-cyan)';
      }
    }

    // Points
    dataset.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.isCorrupted ? 5 : 3.5, 0, Math.PI * 2);
      if (p.isCorrupted) {
        ctx.fillStyle = '#ef4444';
        ctx.shadowColor = '#ef4444';
        ctx.shadowBlur = 6;
      } else if (p.noisyLabel === 0) {
        ctx.fillStyle = '#00e5ff';
        ctx.shadowColor = '#00e5ff';
        ctx.shadowBlur = 3;
      } else {
        ctx.fillStyle = '#f59e0b';
        ctx.shadowColor = '#f59e0b';
        ctx.shadowBlur = 3;
      }
      ctx.fill();
      ctx.shadowBlur = 0;
    });
  }

  generateDataset();

  if (noiseSlider && noiseVal) {
    noiseSlider.addEventListener('input', (e) => {
      playSound('click', 1400);
      noiseRate = parseInt(e.target.value, 10);
      noiseVal.textContent = `${noiseRate}%`;
      applyNoise();
    });
  }

  lossButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      playSound('click', 1900);
      lossButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentLossMode = btn.getAttribute('data-loss');
      renderLabCanvas();
    });
  });

  if (reseedBtn) {
    reseedBtn.addEventListener('click', () => {
      playSound('click', 2400);
      generateDataset();
    });
  }

  // ========================================================================
  // 8. Satellite SAR Cloud Penetration Scanner
  // ========================================================================
  const wipeSlider = document.getElementById('wipe-slider');
  const wipeCloud = document.getElementById('wipe-cloud-pane');
  const wipeDivider = document.getElementById('wipe-divider');
  const cloudCanvas = document.getElementById('cloud-canvas');
  const sarCanvas = document.getElementById('sar-canvas');

  function renderSatelliteCanvases() {
    if (sarCanvas) {
      const ctx = sarCanvas.getContext('2d');
      ctx.fillStyle = '#0a0f1d';
      ctx.fillRect(0, 0, sarCanvas.width, sarCanvas.height);
      ctx.strokeStyle = 'rgba(0, 229, 255, 0.45)';
      ctx.lineWidth = 1;
      for (let i = 0; i < 20; i++) {
        const x = (i * 35) % sarCanvas.width;
        const y = (i * 28) % sarCanvas.height;
        ctx.strokeRect(x, y, 60, 50);
      }
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.5)';
      ctx.beginPath(); ctx.arc(230, 130, 75, 0, Math.PI * 2); ctx.stroke();
      ctx.beginPath(); ctx.arc(230, 130, 105, 0, Math.PI * 2); ctx.stroke();
    }

    if (cloudCanvas) {
      const ctx = cloudCanvas.getContext('2d');
      ctx.fillStyle = '#0a0f1d';
      ctx.fillRect(0, 0, cloudCanvas.width, cloudCanvas.height);
      const grad = ctx.createRadialGradient(200, 120, 20, 230, 130, 180);
      grad.addColorStop(0, 'rgba(240, 245, 255, 0.95)');
      grad.addColorStop(0.5, 'rgba(210, 225, 245, 0.85)');
      grad.addColorStop(1, 'rgba(180, 200, 230, 0.65)');
      ctx.fillStyle = grad;
      ctx.beginPath(); ctx.arc(220, 130, 160, 0, Math.PI * 2); ctx.fill();
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
  // 9. Skills Matrix Injector
  // ========================================================================
  const skillsGrid = document.getElementById('skills-grid');
  if (skillsGrid) {
    const categories = [
      { key: 'languages', title: 'Languages & Core', icon: '💻' },
      { key: 'frameworks', title: 'Frontend & Full-Stack', icon: '⚡' },
      { key: 'aiMl', title: 'Deep Learning & ML', icon: '🧠' },
      { key: 'toolsAndSystems', title: 'Systems & Tools', icon: '🛠️' }
    ];

    skillsGrid.innerHTML = categories.map(cat => {
      const list = data.skills[cat.key] || [];
      return `
        <div class="skill-category-card">
          <h4 class="skill-category-title">
            <span>${cat.icon}</span>
            <span>${cat.title}</span>
          </h4>
          <ul class="skill-list">
            ${list.map(s => `
              <li class="skill-item">
                <span>${s.icon} ${escapeHtml(s.name)}</span>
                <span class="skill-level-badge">${escapeHtml(s.level)}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      `;
    }).join('');
  }

  // ========================================================================
  // 10. Toast & Contact Actions
  // ========================================================================
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');

  function showToast(msg) {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
  }

  const copyEmailBtn = document.getElementById('copy-email-btn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', async () => {
      playSound('click', 2100);
      try {
        await navigator.clipboard.writeText(data.profile.email);
        showToast("Email address copied to clipboard!");
      } catch (e) {
        showToast(`Email: ${data.profile.email}`);
      }
    });
  }

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      playSound('click', 2500);
      const name = document.getElementById('form-name')?.value || '';
      const email = document.getElementById('form-email')?.value || '';
      const msg = document.getElementById('form-message')?.value || '';
      window.location.href = `mailto:${data.profile.email}?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(msg)}`;
      showToast("Dispatching email client...");
      contactForm.reset();
    });
  }

  // Theme Toggle
  const themeToggle = document.getElementById('theme-toggle-btn');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      playSound('click', 1800);
      const cur = document.documentElement.getAttribute('data-theme') || 'dark';
      document.documentElement.setAttribute('data-theme', cur === 'dark' ? 'light' : 'dark');
    });
  }

  // Live GitHub Integration
  async function syncGitHub() {
    try {
      const res = await fetch('https://api.github.com/users/VAIBHAV7848/repos?per_page=100');
      if (!res.ok) return;
      const repos = await res.json();
      if (!Array.isArray(repos)) return;
      const reposMetric = document.getElementById('metric-repos');
      const starsMetric = document.getElementById('metric-stars');
      if (reposMetric) reposMetric.textContent = `${repos.length + 11}+`;
      let stars = 0;
      repos.forEach(r => stars += (r.stargazers_count || 0));
      if (starsMetric) starsMetric.textContent = `${stars + 5}+`;
    } catch (e) {}
  }
  syncGitHub();

  // ========================================================================
  // 11. Cybernetic Wallpaper & Display Engine
  // ========================================================================
  const WALLPAPER_PRESETS = [
    {
      id: 'cyber-obsidian',
      name: 'Cyber Obsidian',
      tag: 'Default Core',
      css: 'radial-gradient(at 15% 15%, rgba(0, 229, 255, 0.20) 0px, transparent 55%), radial-gradient(at 85% 85%, rgba(16, 185, 129, 0.18) 0px, transparent 50%), radial-gradient(at 50% 50%, rgba(30, 41, 59, 0.4) 0px, transparent 65%), #07080c',
      thumb: 'radial-gradient(at 15% 15%, rgba(0, 229, 255, 0.5) 0px, transparent 55%), radial-gradient(at 85% 85%, rgba(16, 185, 129, 0.5) 0px, transparent 50%), #07080c'
    },
    {
      id: 'deep-nebula',
      name: 'Deep Space Nebula',
      tag: 'Cosmic Violet',
      css: 'radial-gradient(ellipse at 80% 20%, rgba(139, 92, 246, 0.35) 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(59, 130, 246, 0.32) 0%, transparent 55%), radial-gradient(circle at 50% 30%, rgba(236, 72, 153, 0.20) 0%, transparent 40%), #060814',
      thumb: 'radial-gradient(ellipse at 80% 20%, rgba(139, 92, 246, 0.6) 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(59, 130, 246, 0.5) 0%, transparent 55%), #060814'
    },
    {
      id: 'matrix-rain',
      name: 'Matrix Digital Rain',
      tag: 'Emerald Phosphor',
      css: 'radial-gradient(circle at 50% 20%, rgba(16, 185, 129, 0.30) 0%, transparent 60%), radial-gradient(circle at 80% 80%, rgba(5, 150, 105, 0.24) 0%, transparent 50%), radial-gradient(circle at 10% 60%, rgba(6, 182, 212, 0.20) 0%, transparent 45%), #030a07',
      thumb: 'radial-gradient(circle at 50% 20%, rgba(16, 185, 129, 0.6) 0%, transparent 60%), radial-gradient(circle at 80% 80%, rgba(5, 150, 105, 0.5) 0%, transparent 50%), #030a07'
    },
    {
      id: 'tokyo-midnight',
      name: 'Tokyo Midnight',
      tag: 'Neon Synthwave',
      css: 'radial-gradient(circle at 15% 85%, rgba(244, 63, 94, 0.30) 0%, transparent 50%), radial-gradient(circle at 85% 15%, rgba(6, 182, 212, 0.32) 0%, transparent 55%), radial-gradient(circle at 50% 90%, rgba(168, 85, 247, 0.24) 0%, transparent 50%), #090614',
      thumb: 'radial-gradient(circle at 15% 85%, rgba(244, 63, 94, 0.6) 0%, transparent 50%), radial-gradient(circle at 85% 15%, rgba(6, 182, 212, 0.5) 0%, transparent 55%), #090614'
    },
    {
      id: 'solar-flare',
      name: 'Solar Flare',
      tag: 'Golden Amber',
      css: 'radial-gradient(circle at 75% 25%, rgba(245, 158, 11, 0.30) 0%, transparent 50%), radial-gradient(circle at 20% 70%, rgba(239, 68, 68, 0.22) 0%, transparent 55%), radial-gradient(circle at 60% 80%, rgba(217, 119, 6, 0.18) 0%, transparent 40%), #0c0804',
      thumb: 'radial-gradient(circle at 75% 25%, rgba(245, 158, 11, 0.6) 0%, transparent 50%), radial-gradient(circle at 20% 70%, rgba(239, 68, 68, 0.5) 0%, transparent 55%), #0c0804'
    },
    {
      id: 'minimal-stealth',
      name: 'Obsidian Stealth',
      tag: 'Matte Carbon',
      css: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 70%), #050608',
      thumb: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 70%), #050608'
    }
  ];

  const wallpaperBackdrop = document.getElementById('os-wallpaper-backdrop');
  const wallpaperOverlay = document.getElementById('os-wallpaper-overlay');
  const wallpaperGrid = document.getElementById('wallpaper-presets-grid');
  const customUrlInput = document.getElementById('custom-wallpaper-url');
  const applyCustomUrlBtn = document.getElementById('apply-custom-url-btn');
  const wallpaperFileInput = document.getElementById('wallpaper-file-input');
  const particleSlider = document.getElementById('particle-slider');
  const particleVal = document.getElementById('particle-val');
  const dimSlider = document.getElementById('dim-slider');
  const dimVal = document.getElementById('dim-val');

  let currentWallpaperId = localStorage.getItem('vaibhav_os_wallpaper') || 'cyber-obsidian';
  let customWallpaperData = localStorage.getItem('vaibhav_os_custom_wp') || null;

  function renderWallpaperGrid() {
    if (!wallpaperGrid) return;
    wallpaperGrid.innerHTML = WALLPAPER_PRESETS.map(preset => {
      const isActive = (currentWallpaperId === preset.id && !customWallpaperData);
      return `
        <div class="wallpaper-card ${isActive ? 'active' : ''}" data-id="${preset.id}">
          <div class="wallpaper-thumb" style="background: ${preset.thumb}"></div>
          <div class="wallpaper-info">
            <span class="wallpaper-title">${escapeHtml(preset.name)}</span>
            <span class="wallpaper-tag">${escapeHtml(preset.tag)}</span>
          </div>
        </div>
      `;
    }).join('');

    wallpaperGrid.querySelectorAll('.wallpaper-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        applyPresetWallpaper(id);
      });
    });
  }

  function applyPresetWallpaper(id, showFeedback = true) {
    const preset = WALLPAPER_PRESETS.find(p => p.id === id) || WALLPAPER_PRESETS[0];
    currentWallpaperId = preset.id;
    customWallpaperData = null;
    localStorage.setItem('vaibhav_os_wallpaper', preset.id);
    localStorage.removeItem('vaibhav_os_custom_wp');

    if (wallpaperBackdrop) {
      wallpaperBackdrop.style.background = preset.css;
    }

    renderWallpaperGrid();

    if (showFeedback) {
      playSound('click', 2200);
      showToast(`Wallpaper updated: ${preset.name}`);
    }
  }

  function applyCustomImage(urlOrData, showFeedback = true) {
    customWallpaperData = urlOrData;
    localStorage.setItem('vaibhav_os_custom_wp', urlOrData);

    if (wallpaperBackdrop) {
      wallpaperBackdrop.style.background = `url("${urlOrData}") center/cover no-repeat fixed #07080c`;
    }

    if (wallpaperGrid) {
      wallpaperGrid.querySelectorAll('.wallpaper-card').forEach(c => c.classList.remove('active'));
    }

    if (showFeedback) {
      playSound('click', 2400);
      showToast("Custom wallpaper applied!");
    }
  }

  window.OS.setWallpaper = applyPresetWallpaper;
  window.OS.setCustomWallpaper = applyCustomImage;

  if (applyCustomUrlBtn && customUrlInput) {
    applyCustomUrlBtn.addEventListener('click', () => {
      const val = customUrlInput.value.trim();
      if (val) {
        applyCustomImage(val);
      }
    });
  }

  if (wallpaperFileInput) {
    wallpaperFileInput.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          applyCustomImage(event.target.result);
        };
        reader.readAsDataURL(file);
      }
    });
  }

  if (particleSlider && particleVal && neuralCanvas) {
    particleSlider.addEventListener('input', (e) => {
      const val = e.target.value;
      particleVal.textContent = `${val}%`;
      neuralCanvas.style.opacity = (val / 100);
    });
  }

  if (dimSlider && dimVal && wallpaperOverlay) {
    dimSlider.addEventListener('input', (e) => {
      const val = e.target.value;
      dimVal.textContent = `${val}%`;
      wallpaperOverlay.style.background = `rgba(0, 0, 0, ${val / 100})`;
    });
  }

  // Restore saved wallpaper state
  if (customWallpaperData) {
    applyCustomImage(customWallpaperData, false);
  } else {
    applyPresetWallpaper(currentWallpaperId, false);
  }
  renderWallpaperGrid();

  // URL Hash Deep-Linking (e.g. #wallpapers, #lab, #projects, #terminal)
  if (window.location.hash) {
    const targetApp = window.location.hash.replace('#', '');
    if (appNameMap[targetApp]) {
      setTimeout(() => openWindow(targetApp), 100);
    }
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
