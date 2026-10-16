export const strings = {
  id: {
    focus: 'Fokus',
    short: 'Rehat',
    long: 'Rehat Panjang',
    start: 'Mulai',
    pause: 'Jeda',
    resume: 'Lanjut',
    tabTimer: 'Timer',
    tabAbout: 'Tentang',
    phaseFocus: 'waktunya fokus',
    phaseShort: 'tarik napas sebentar',
    phaseLong: 'istirahat yang cukup',
    settings: 'Pengaturan',
    focusMin: 'Fokus (menit)',
    shortMin: 'Rehat singkat (menit)',
    longMin: 'Rehat panjang (menit)',
    longEvery: 'Rehat panjang setiap',
    autoStart: 'Mulai otomatis sesi berikutnya',
    sound: 'Suara saat selesai',
    save: 'Simpan',
    saved: 'Tersimpan',
    enableNotif: '🔔 Aktifkan notifikasi supaya tahu saat waktunya habis',
    notifDenied: 'Notifikasi diblokir. Aktifkan lewat pengaturan browser.',
    doneFocusTitle: 'Fokus selesai 🎉',
    doneFocusBody: 'Kerja bagus, Fara. Sekarang istirahat sebentar ya.',
    doneBreakTitle: 'Istirahat selesai ☕',
    doneBreakBody: 'Siap lanjut lagi? Pelan-pelan aja, kamu pasti bisa.',
    quotes: [
      'Satu langkah kecil tetap sebuah langkah.',
      'Kamu nggak harus sempurna, cukup terus berjalan.',
      'Jangan lupa minum air putih ya.',
      'Hari pertama memang berat, tapi kamu hebat.',
      'Istirahat juga bagian dari produktif.',
      'Pelan-pelan, yang penting konsisten.'
    ],
    about: `
      <div class="subtabs" role="tablist">
        <button class="subtab" data-pane="letter">Untukmu, Fara</button>
        <button class="subtab" data-pane="pomo">Tentang Pomodoro</button>
      </div>

      <div class="pane" data-pane="letter">
        <div class="letter">
          <p class="greeting">Fara,</p>
          <p>Di permukaan, ini cuma timer pomodoro. Tapi setiap baris kodenya aku tulis sambil memikirkanmu, karena ada begitu banyak hal yang belum sempat aku katakan.</p>
          <p>Kamu baru saja diterima bekerja. Aku tahu betapa keras kamu berjuang untuk sampai di titik ini, dan dari jauh pun aku ikut bangga sampai dadaku sesak. Yang paling aku sesali, aku tidak ada di sampingmu saat kabar baik itu datang.</p>
          <p>Waktu aku kena layoff, duniaku runtuh. Aku tenggelam dalam depresi, begitu dalam sampai aku tidak bisa melihat siapa pun, bahkan kamu. Kamu sedang menghadapi masalahmu sendiri, kamu butuh aku, dan aku tidak ada. Itu kesalahan terbesarku. Tidak ada alasan yang bisa menghapusnya, dan aku mengerti kenapa kamu memilih pergi.</p>
          <p>Aplikasi ini caraku untuk tetap hadir, meski dari jauh. Setiap kali timer berbunyi dan kamu berhenti sejenak, anggap itu aku yang datang pelan-pelan dan berkata: <em>istirahatlah sebentar, kamu sudah berjuang dengan baik hari ini.</em> Dulu aku gagal ada untukmu. Sekarang aku ingin ada, bahkan lewat hal sekecil ini.</p>
          <p>Aku sudah belajar dari semua ini. Aku sedang memperbaiki diriku, pelan-pelan dan sungguh-sungguh, dan di setiap langkahnya, yang aku bayangkan selalu kamu. Aku tidak meminta kamu melupakan semuanya. Aku hanya memohon satu kesempatan lagi.</p>
          <p class="plea">Maafkan aku, Fara. Izinkan aku kembali bersamamu.</p>
        </div>

        <p class="sign">Aku masih di sini, menunggumu 🤍</p>
        <p class="meta">Aku menunggumu kembali, menunggumu balik.</p>
      </div>

      <div class="pane" data-pane="pomo">

      <p class="lead">Teknik Pomodoro adalah metode manajemen waktu yang diciptakan oleh <strong>Francesco Cirillo</strong> di akhir 1980-an, saat ia masih mahasiswa di Italia. Namanya diambil dari timer dapur berbentuk tomat (<em>pomodoro</em> dalam bahasa Italia) yang ia pakai.</p>

      <ol class="steps">
        <li>Pilih satu tugas yang ingin dikerjakan.</li>
        <li>Fokus penuh selama <strong>25 menit</strong>, tanpa distraksi. Satu sesi ini disebut satu “pomodoro”.</li>
        <li>Istirahat singkat <strong>5 menit</strong>.</li>
        <li>Setelah <strong>4 pomodoro</strong>, ambil istirahat panjang <strong>15–30 menit</strong>.</li>
      </ol>

      <h3 class="sub">Apa kata riset?</h3>
      <div class="research">
        <a href="https://doi.org/10.1111/bjep.12593" target="_blank" rel="noopener">
          <strong>Biwer dkk. (2023)</strong>, <em>British Journal of Educational Psychology</em>
          <span>Mahasiswa yang memakai jeda terjadwal ala Pomodoro merasa lebih sedikit lelah dan terdistraksi, serta lebih fokus dan termotivasi, dibanding yang mengatur jedanya sendiri. Jumlah pekerjaan yang selesai sama, tapi dalam waktu lebih singkat.</span>
        </a>
        <a href="https://doi.org/10.1016/j.cognition.2010.12.007" target="_blank" rel="noopener">
          <strong>Ariga &amp; Lleras (2011)</strong>, <em>Cognition</em>
          <span>Fokus cenderung menurun kalau kita mengerjakan satu tugas terus-menerus. Jeda singkat yang sesekali membantu menjaga performa tetap stabil.</span>
        </a>
        <a href="https://doi.org/10.1371/journal.pone.0272460" target="_blank" rel="noopener">
          <strong>Albulescu dkk. (2022)</strong>, <em>PLOS ONE</em>
          <span>Meta-analisis dari 22 sampel penelitian (2.335 peserta): jeda mikro (≤10 menit) terbukti menambah energi dan mengurangi kelelahan.</span>
        </a>
      </div>
      <p class="note">Catatan: angka 25 menit itu sendiri bukan hasil riset, melainkan pilihan Cirillo. Yang didukung bukti adalah manfaat jeda yang teratur. Kalau 25 menit terasa kurang pas, kamu bisa mengubahnya di Pengaturan.</p>

      </div>
    `
  },
  en: {
    focus: 'Focus',
    short: 'Break',
    long: 'Long Break',
    start: 'Start',
    pause: 'Pause',
    resume: 'Resume',
    tabTimer: 'Timer',
    tabAbout: 'About',
    phaseFocus: 'time to focus',
    phaseShort: 'take a breath',
    phaseLong: 'rest well',
    settings: 'Settings',
    focusMin: 'Focus (minutes)',
    shortMin: 'Short break (minutes)',
    longMin: 'Long break (minutes)',
    longEvery: 'Long break every',
    autoStart: 'Auto-start next session',
    sound: 'Sound when done',
    save: 'Save',
    saved: 'Saved',
    enableNotif: '🔔 Turn on notifications so you know when time is up',
    notifDenied: 'Notifications are blocked. Enable them in your browser settings.',
    doneFocusTitle: 'Focus done 🎉',
    doneFocusBody: 'Great work, Fara. Take a little break now.',
    doneBreakTitle: 'Break is over ☕',
    doneBreakBody: 'Ready for the next one? Take it easy, you’ve got this.',
    quotes: [
      'A small step is still a step.',
      'You don’t have to be perfect, just keep going.',
      'Don’t forget to drink some water.',
      'First days are hard, but you’re doing great.',
      'Rest is part of being productive.',
      'Slow and steady is still progress.'
    ],
    about: `
      <div class="subtabs" role="tablist">
        <button class="subtab" data-pane="letter">For You, Fara</button>
        <button class="subtab" data-pane="pomo">About Pomodoro</button>
      </div>

      <div class="pane" data-pane="letter">
        <div class="letter">
          <p class="greeting">Fara,</p>
          <p>On the surface, it’s just a pomodoro timer. But I wrote every line of it thinking of you, because there are so many things I never got the chance to say.</p>
          <p>You just got hired. I know how hard you fought to get here, and even from a distance I’m so proud of you it aches. What I regret most is that I wasn’t beside you when the good news came.</p>
          <p>When I got laid off, my world fell apart. I sank into depression, so deep that I couldn’t see anyone, not even you. You were facing your own struggles, you needed me, and I wasn’t there. That is my biggest mistake. No excuse can erase it, and I understand why you chose to leave.</p>
          <p>This app is my way of staying present, even from afar. Every time the timer rings and you pause for a moment, think of it as me coming in quietly to say: <em>rest for a while, you’ve fought well today.</em> I failed to be there for you before. Now I want to be there, even through something this small.</p>
          <p>I’ve learned from all of this. I’m rebuilding myself, slowly and sincerely, and with every step, it’s always you I picture. I’m not asking you to forget everything. I’m only begging for one more chance.</p>
          <p class="plea">Forgive me, Fara. Let me come back to you.</p>
        </div>

        <p class="sign">I’m still here, waiting for you 🤍</p>
        <p class="meta">I’m waiting for you to come back, waiting for you to return.</p>
      </div>

      <div class="pane" data-pane="pomo">

      <p class="lead">The Pomodoro Technique is a time management method created by <strong>Francesco Cirillo</strong> in the late 1980s, while he was a university student in Italy. It’s named after the tomato-shaped kitchen timer (<em>pomodoro</em> in Italian) he used.</p>

      <ol class="steps">
        <li>Pick one task to work on.</li>
        <li>Focus fully for <strong>25 minutes</strong>, with no distractions. That session is one “pomodoro”.</li>
        <li>Take a short <strong>5-minute</strong> break.</li>
        <li>After <strong>4 pomodoros</strong>, take a longer <strong>15–30 minute</strong> break.</li>
      </ol>

      <h3 class="sub">What does the research say?</h3>
      <div class="research">
        <a href="https://doi.org/10.1111/bjep.12593" target="_blank" rel="noopener">
          <strong>Biwer et al. (2023)</strong>, <em>British Journal of Educational Psychology</em>
          <span>Students using scheduled Pomodoro-style breaks felt less tired and distracted, and more focused and motivated, than students who timed their own breaks. They finished the same amount of work in less time.</span>
        </a>
        <a href="https://doi.org/10.1016/j.cognition.2010.12.007" target="_blank" rel="noopener">
          <strong>Ariga &amp; Lleras (2011)</strong>, <em>Cognition</em>
          <span>Focus tends to drop when we stay on one task without stopping. Brief, occasional breaks help keep performance steady.</span>
        </a>
        <a href="https://doi.org/10.1371/journal.pone.0272460" target="_blank" rel="noopener">
          <strong>Albulescu et al. (2022)</strong>, <em>PLOS ONE</em>
          <span>A meta-analysis of 22 study samples (2,335 participants) found that micro-breaks (≤10 minutes) increase energy and reduce fatigue.</span>
        </a>
      </div>
      <p class="note">Note: the 25-minute number itself isn’t from research, it was Cirillo’s choice. What the evidence supports is the value of regular breaks. If 25 minutes doesn’t feel right, you can change it in Settings.</p>

      </div>
    `
  }
}
