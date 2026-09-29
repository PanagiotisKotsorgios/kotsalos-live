(function () {
  const page = document.body.dataset.page || 'services';
  const pageApp = document.getElementById('page-app');
  const pages = {
    services: {
      eyebrow: 'Insurance Services', title: 'Ασφαλιστικές λύσεις\nμε ουσία.', subtitle: 'Σχεδιάζουμε την προστασία που ταιριάζει στη ζωή, στην οικογένεια και στην επιχείρησή σας.',
      body: `<section class="page-content section-pad"><div class="container"><div class="page-intro reveal-on-scroll"><div><p class="eyebrow eyebrow-dark"><span></span> Η δική σας ασφάλεια</p><h2>Όλα όσα χρειάζεστε,<br /><em>σε ένα σχέδιο.</em></h2><p>Από την πρώτη συζήτηση μέχρι τη στιγμή που θα χρειαστείτε υποστήριξη, είμαστε δίπλα σας με καθαρή καθοδήγηση, αξιόπιστες συνεργασίες και λύσεις προσαρμοσμένες σε εσάς.</p></div><div class="page-intro-image"><img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&amp;fit=crop&amp;w=1200&amp;q=88" alt="Ασφαλιστική συμβουλευτική" /></div></div><div class="detail-grid">${serviceCards()}</div><div class="page-cta reveal-on-scroll"><div><h3>Δεν βρίσκετε αυτό που ψάχνετε;</h3><p>Μιλήστε μαζί μας για μια λύση φτιαγμένη γύρω από τις ανάγκες σας.</p></div><a class="button button-primary" href="../epikoinonia/">Ζητήστε προσφορά <i class="fa-solid fa-arrow-right"></i></a></div></div></section>`
    },
    about: {
      eyebrow: 'Ποιοι είμαστε', title: 'Η εμπιστοσύνη\nχτίζεται μαζί.', subtitle: '14 χρόνια εμπειρίας, 4 γραφεία και μία σταθερή δέσμευση: η δική σας προστασία.',
      body: `<section class="about-section section-pad"><div class="container about-grid"><div class="about-visual reveal-on-scroll"><div class="about-image-main"><img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&amp;fit=crop&amp;w=1200&amp;q=88" alt="Συνεργασία ασφαλιστικού συμβούλου με πελάτη" /></div><div class="about-image-small"><img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&amp;fit=crop&amp;w=700&amp;q=88" alt="Ομάδα συνεργατών σε συνάντηση" /></div><div class="experience-badge"><strong>14</strong><span>χρόνια<br />εμπειρίας</span></div></div><div class="about-copy reveal-on-scroll"><p class="eyebrow"><span></span> Η φιλοσοφία μας</p><h2>Ένας σύμβουλος<br /><em>που ακούει πραγματικά.</em></h2><p class="lead-copy">Με δυναμική παρουσία σε Νεοχώρι, Μεσολόγγι, Ναύπακτο και Κατοχή, προσφέρουμε ασφαλιστικές λύσεις για ιδιώτες, οικογένειες και επιχειρήσεις με συνέπεια και προσωπική φροντίδα.</p><div class="about-points"><div><span>01</span><p><strong>Ειλικρινής καθοδήγηση</strong><br />Εξηγούμε κάθε επιλογή απλά και καθαρά, χωρίς περιττή ορολογία.</p></div><div><span>02</span><p><strong>Σταθερή παρουσία</strong><br />Δεν είμαστε δίπλα σας μόνο όταν υπογράφετε — είμαστε εδώ σε κάθε βήμα.</p></div><div><span>03</span><p><strong>Ισχυρές συνεργασίες</strong><br />Συνεργαζόμαστε με αξιόπιστες ασφαλιστικές εταιρείες για περισσότερες επιλογές.</p></div></div></div></div></section><section class="why-section section-pad"><div class="container"><div class="section-heading why-heading"><div><p class="eyebrow"><span></span> Η ομάδα Κότσαλος</p><h2>Προσωπική φροντίδα.<br /><em>Με επαγγελματισμό.</em></h2></div><p>Κάθε άνθρωπος έχει διαφορετικές ανάγκες. Η δουλειά μας είναι να τις κατανοήσουμε.</p></div><div class="stats-grid"><article class="stat-card reveal-on-scroll"><span class="stat-icon"><i class="fa-solid fa-building"></i></span><strong>4</strong><p>Γραφεία</p><small>σε όλη την Αιτωλοακαρνανία</small></article><article class="stat-card reveal-on-scroll"><span class="stat-icon"><i class="fa-solid fa-award"></i></span><strong>14</strong><p>Έτη εμπειρίας</p><small>με συνέπεια και αξιοπιστία</small></article><article class="stat-card reveal-on-scroll"><span class="stat-icon"><i class="fa-solid fa-headset"></i></span><strong>24<span>/7</span></strong><p>Υποστήριξη</p><small>όταν τη χρειάζεστε</small></article><article class="stat-card reveal-on-scroll"><span class="stat-icon"><i class="fa-solid fa-heart"></i></span><strong>5.0</strong><p>Αξιολόγηση Google</p><small>η εμπιστοσύνη των πελατών μας</small></article></div></div></section>`
    },
    offices: {
      eyebrow: 'Τα γραφεία μας', title: 'Κοντά σας,\nσε κάθε σημείο.', subtitle: '4 σημεία εξυπηρέτησης σε όλη την Αιτωλοακαρνανία, με προσωπική και άμεση φροντίδα.',
      body: `<section class="page-content section-pad"><div class="container"><p class="page-lead">Επιλέξτε το γραφείο που σας εξυπηρετεί ή καλέστε μας για να κλείσουμε το ραντεβού σας.</p><div class="office-grid"><article class="office-card is-main reveal-on-scroll"><div class="office-icon"><i class="fa-solid fa-building"></i></div><div><h3>Μεσολόγγι</h3><p><i class="fa-solid fa-location-dot"></i> Δημ. Θεμέλη 1, 302 00</p><p><i class="fa-solid fa-phone"></i> 2631 302433</p><p><i class="fa-solid fa-star"></i> Κεντρικό γραφείο</p></div></article><article class="office-card reveal-on-scroll"><div class="office-icon"><i class="fa-solid fa-building"></i></div><div><h3>Νεοχώρι</h3><p><i class="fa-solid fa-location-dot"></i> Κεντρική Πλατεία, Νεοχώρι</p><p><i class="fa-solid fa-phone"></i> 2632 000000</p></div></article><article class="office-card reveal-on-scroll"><div class="office-icon"><i class="fa-solid fa-building"></i></div><div><h3>Ναύπακτος</h3><p><i class="fa-solid fa-location-dot"></i> Οδός Αθηνών, Ναύπακτος</p><p><i class="fa-solid fa-phone"></i> 2634 000000</p></div></article><article class="office-card reveal-on-scroll"><div class="office-icon"><i class="fa-solid fa-building"></i></div><div><h3>Κατοχή</h3><p><i class="fa-solid fa-location-dot"></i> Κεντρικός Δρόμος, Κατοχή</p><p><i class="fa-solid fa-phone"></i> 2632 000000</p></div></article></div><div class="map-frame reveal-on-scroll"><iframe title="Χάρτης κεντρικού γραφείου" src="https://www.google.com/maps?q=%CE%94%CE%97%CE%9C.%20%CE%98%CE%95%CE%9C%CE%95%CE%9B%CE%97%201%2C%20%CE%9C%CE%B5%CF%83%CE%BF%CE%BB%CF%8C%CE%B3%CE%B3%CE%B9&output=embed" loading="lazy"></iframe></div></div></section>`
    },
    reviews: {
      eyebrow: 'Αξιολογήσεις', title: 'Η εμπιστοσύνη σας\nείναι η ανταμοιβή μας.', subtitle: 'Δείτε τι λένε οι άνθρωποι που μας εμπιστεύτηκαν για την ασφάλεια τη δική τους και της οικογένειάς τους.',
      body: `<section class="page-content section-pad"><div class="container"><div class="page-lead"><span class="review-stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span><br /><strong>5.0 / 5</strong> στο Google από τους πελάτες μας.</div><div class="review-grid">${reviewCards()}</div><div class="page-cta reveal-on-scroll"><div><h3>Θέλετε να μιλήσουμε;</h3><p>Η προσωπική εξυπηρέτηση ξεκινά με ένα απλό τηλεφώνημα.</p></div><a class="button button-primary" href="../epikoinonia/">Επικοινωνήστε μαζί μας <i class="fa-solid fa-arrow-right"></i></a></div></div></section>`
    },
    contact: {
      eyebrow: 'Επικοινωνία', title: 'Ας μιλήσουμε για\nό,τι έχει αξία.', subtitle: 'Στείλτε το αίτημά σας και θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατό.',
      body: `<section class="contact-section section-pad"><div class="container contact-panel reveal-on-scroll"><div class="contact-copy"><p class="eyebrow"><span></span> Είμαστε εδώ</p><h2>Η σωστή κάλυψη<br /><em>ξεκινά με μια συζήτηση.</em></h2><p>Καλέστε μας ή συμπληρώστε τη φόρμα για να σας προτείνουμε την κατάλληλη λύση.</p><div class="contact-details"><a href="tel:+302631302433"><span>Τηλέφωνο</span><strong>2631 302433</strong></a><a href="mailto:info@kotsalos-insurance.gr"><span>Email</span><strong>info@kotsalos-insurance.gr</strong></a><a href="../grafeia/"><span>Κεντρικό γραφείο</span><strong>Δημ. Θεμέλη 1, Μεσολόγγι</strong></a></div></div>${contactForm()}</div></section>`
    }
  };

  function serviceCards() {
    const cards = [
      ['fa-house', 'Ασφάλιση Κατοικίας', 'Προστασία από πυρκαγιά, κλοπή, σεισμό, πλημμύρα και φυσικές καταστροφές.'],
      ['fa-car', 'Ασφάλιση Αυτοκινήτου', 'Ανταγωνιστικά ασφάλιστρα, οδική βοήθεια και φροντίδα ατυχήματος για κάθε όχημα.'],
      ['fa-heart-pulse', 'Ασφάλιση Υγείας', 'Νοσοκομειακά και εξωνοσοκομειακά προγράμματα για ολοκληρωμένη κάλυψη.'],
      ['fa-shield-heart', 'Ασφάλιση Ζωής', 'Προγράμματα ζωής, αποταμίευσης και επενδύσεων για τους ανθρώπους σας.'],
      ['fa-piggy-bank', 'Σύνταξη & Εισόδημα', 'Χτίστε ένα πιο σίγουρο οικονομικό αύριο με ευέλικτα προγράμματα.'],
      ['fa-briefcase', 'Επαγγελματικές', 'Καλύψεις για επιχειρήσεις, επαγγελματίες, ομαδικά και τεχνικούς κινδύνους.'],
      ['fa-scale-balanced', 'Νομική προστασία', 'Νομική υποστήριξη και καθοδήγηση όταν πραγματικά τη χρειάζεστε.'],
      ['fa-solar-panel', 'Φωτοβολταϊκά & Ενέργεια', 'Προστασία εγκαταστάσεων και λύσεις για τις ενεργειακές σας ανάγκες.'],
      ['fa-truck', 'Μεταφορών & Πυρός', 'Ασφάλιση μεταφορών, εμπορευμάτων, πυρός και περιουσίας.']
    ];
    return cards.map((card, index) => `<article class="detail-card reveal-on-scroll"><div class="detail-card-icon"><i class="fa-solid ${card[0]}"></i></div><span class="service-number">${String(index + 1).padStart(2, '0')}</span><h3>${card[1]}</h3><p>${card[2]}</p><a class="inline-link" href="../epikoinonia/">Ζητήστε προσφορά <i class="fa-solid fa-arrow-right"></i></a></article>`).join('');
  }

  function reviewCards() {
    const reviews = [
      ['FV', 'Fotios Vasileiou', 'πριν από 2 χρόνια', 'Άριστος επαγγελματίας! Κάθε φορά που προκύπτει πρόβλημα παρέχει τις απαραίτητες συμβουλές για να αντιμετωπιστεί άμεσα και υπεύθυνα.'],
      ['MA', 'Mairi Almpani', 'πριν από 5 χρόνια', 'Με το που τον χρειάστηκα ανταποκρίθηκε σαν να ήταν δίπλα μου. Έδειξε επαγγελματισμό και πραγματικό ενδιαφέρον.'],
      ['NA', 'Nikos Asmanis', 'πριν από 5 χρόνια', 'Άμεση εξυπηρέτηση όλο το 24ωρο. Σωστός επαγγελματίας, πάντα πρόθυμος να βοηθήσει σε ό,τι χρειαστείς.'],
      ['GP', 'Giorgos Panagiotou', 'πριν από 1 χρόνο', 'Εξαιρετική εξυπηρέτηση και πολύ καλές τιμές. Με βοήθησε να βρω το ιδανικό πρόγραμμα για την οικογένειά μου.'],
      ['ED', 'Eleni Dimou', 'πριν από 8 μήνες', 'Πολύ επαγγελματική αντιμετώπιση και άμεση ανταπόκριση σε κάθε ερώτηση. Τον εμπιστεύομαι απόλυτα.'],
      ['KM', 'Katerina M.', 'πριν από 6 μήνες', 'Εξαιρετική επικοινωνία, καθαρές εξηγήσεις και άμεση βοήθεια σε κάθε στάδιο.']
    ];
    return reviews.map((review) => `<article class="review-card reveal-on-scroll"><i class="fa-solid fa-quote-right"></i><div class="review-card-head"><span class="review-avatar">${review[0]}</span><div><strong>${review[1]}</strong><small>${review[2]}</small></div></div><div class="review-stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div><p>${review[3]}</p></article>`).join('');
  }

  function contactForm() {
    return `<form class="contact-form contact-page-form" id="contact-form"><div class="form-heading"><span>01</span><p>Αίτημα ασφάλισης</p></div><p class="form-helper">Συμπληρώστε τα στοιχεία σας και επιλέξτε την κάλυψη που σας ενδιαφέρει.</p><label>Ονοματεπώνυμο<input type="text" name="name" placeholder="Το όνομά σας" required /></label><div class="form-row"><label>Τηλέφωνο<input type="tel" name="phone" placeholder="69x xxx xxxx" required /></label><label>Email<input type="email" name="email" placeholder="email@example.com" /></label></div><label>Τι ασφάλιση σας ενδιαφέρει;<select name="insuranceType" required><option value="">Επιλέξτε κατηγορία</option><option>Ασφάλιση Κατοικίας</option><option>Ασφάλιση Αυτοκινήτου</option><option>Ασφάλιση Υγείας</option><option>Ασφάλιση Ζωής</option><option>Ασφάλιση Παιδιού</option><option>Ασφάλιση Σύνταξης / Εισοδήματος</option><option>Επαγγελματική / Επιχειρηματική ασφάλιση</option><option>Άλλη ασφαλιστική ανάγκη</option></select></label><label>Προτιμώμενος τρόπος επικοινωνίας;<select name="contactPreference"><option>Τηλεφωνικά</option><option>Email</option><option>Δεν έχω προτίμηση</option></select></label><label>Μήνυμα<textarea name="message" rows="3" placeholder="Πείτε μας λίγα λόγια..."></textarea></label><label class="check-row"><input type="checkbox" name="consent" required /><span>Συμφωνώ να επικοινωνήσει μαζί μου το ασφαλιστικό γραφείο σχετικά με το αίτημά μου.</span></label><button class="button button-light" type="submit">Αποστολή αιτήματος <i class="fa-solid fa-paper-plane"></i></button><p class="form-status" role="status"></p></form>`;
  }

  function shell(content) {
    const nav = (href, label, key) => `<a class="nav-link ${page === key ? 'is-active' : ''}" href="${href}">${label}</a>`;
    return `<div class="site-shell"><header class="site-header" id="top"><div class="container nav-inner"><a class="brand" href="../" aria-label="Κότσαλος Insurance, αρχική"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSSzqeM8EVenTnPbbinzekyDpOK8Rxwzu6D5ROOTY_fw&amp;s" alt="Κότσαλος Ασφαλιστικές Χρηματοοικονομικές Υπηρεσίες" /></a><button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-navigation" aria-label="Άνοιγμα μενού"><span></span><span></span><span></span></button><nav class="main-navigation" id="main-navigation" aria-label="Κύρια πλοήγηση">${nav('../', 'Αρχική', 'home')}${nav('../ypiresies/', 'Υπηρεσίες', 'services')}${nav('../poioi-eimaste/', 'Ποιοι είμαστε', 'about')}${nav('../grafeia/', 'Γραφεία', 'offices')}${nav('../axiologiseis/', 'Αξιολογήσεις', 'reviews')}${nav('../epikoinonia/', 'Επικοινωνία', 'contact')}<a class="nav-call" href="tel:+302631302433"><span class="phone-icon"><i class="fa-solid fa-phone"></i></span> Κλήση τώρα</a></nav></div></header><main>${content}</main><footer class="site-footer"><div class="container footer-grid"><div class="footer-brand"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSSzqeM8EVenTnPbbinzekyDpOK8Rxwzu6D5ROOTY_fw&amp;s" alt="Κότσαλος Insurance" /><p>Ασφάλιση με σχέδιο.<br />Σιγουριά με ανθρώπινο πρόσωπο.</p></div><div><p class="footer-label">Πλοήγηση</p><a href="../ypiresies/">Υπηρεσίες</a><a href="../poioi-eimaste/">Ποιοι είμαστε</a><a href="../grafeia/">Γραφεία</a><a href="../axiologiseis/">Αξιολογήσεις</a><a href="../epikoinonia/">Επικοινωνία</a></div><div><p class="footer-label">Επικοινωνία</p><a href="tel:+302631302433">2631 302433</a><a href="mailto:info@kotsalos-insurance.gr">info@kotsalos-insurance.gr</a><span>Δημ. Θεμέλη 1, Μεσολόγγι</span></div><div><p class="footer-label">Ωράριο</p><span>Δευτέρα – Παρασκευή<br /><strong>09:00 – 14:00 &amp; 18:00 – 20:00</strong></span><span>Σάββατο<br /><strong>10:00 – 13:00</strong></span></div></div><div class="container footer-bottom"><span>© <span id="year"></span> Κωνσταντίνος Κότσαλος. Με επιφύλαξη κάθε νόμιμου δικαιώματος.</span><span>Ασφαλιστικές &amp; Χρηματοοικονομικές Υπηρεσίες</span></div></footer></div><div class="cookie-banner" id="cookie-banner" role="dialog" aria-label="Ρυθμίσεις cookies"><div class="cookie-icon"><i class="fa-solid fa-cookie-bite"></i></div><div><strong>Η ιδιωτικότητά σας έχει σημασία.</strong><p>Χρησιμοποιούμε απαραίτητα cookies για να λειτουργεί σωστά η ιστοσελίδα.</p></div><div class="cookie-actions"><button type="button" class="cookie-accept">Αποδοχή</button><button type="button" class="cookie-dismiss">Απόρριψη</button></div></div><button class="back-to-top" type="button" aria-label="Επιστροφή στην κορυφή"><i class="fa-solid fa-arrow-up"></i></button>`;
  }

  const current = pages[page] || pages.services;
  const title = current.title.split('\\n');
  const hero = `<section class="page-hero"><div class="container"><p class="eyebrow"><span></span> ${current.eyebrow}</p><h1>${title[0]}${title[1] ? `<br /><em>${title[1]}</em>` : ''}</h1><p>${current.subtitle}</p><div class="breadcrumb"><a href="../">Αρχική</a><i class="fa-solid fa-chevron-right"></i><span>${current.eyebrow}</span></div></div></section>`;
  pageApp.innerHTML = shell(hero + current.body);
  const compactLogo = pageApp.querySelector('.brand img');
  if (compactLogo) compactLogo.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-MiWH6vD_JxBAnH_dAS7SssXDtDy09s30eNz94Ph3rfwfg-5nm7xXGdRo&s=10';
  const detailImages = [
    ['photo-1560185008-b033106af5c3', 'Σύγχρονη κατοικία'],
    ['photo-1503376780353-7e6692767b70', 'Αυτοκίνητο στον δρόμο'],
    ['photo-1576091160399-112ba8d25d1d', 'Γιατρός και ασθενής'],
    ['photo-1511895426328-dc8714191300', 'Οικογένεια μαζί'],
    ['photo-1556761175-b413da4baf72', 'Επαγγελματική συνάντηση'],
    ['photo-1497366811353-6870744d04b2', 'Σύγχρονος επαγγελματικός χώρος'],
    ['photo-1450101499163-c8848c66ca85', 'Σχεδιασμός προστασίας'],
    ['photo-1509391366360-2e959784a276', 'Φωτοβολταϊκά'],
    ['photo-1586528116311-ad8dd3c8310d', 'Μεταφορές']
  ];
  pageApp.querySelectorAll('.detail-card').forEach((card, index) => {
    const image = detailImages[index];
    if (!image) return;
    const media = document.createElement('div');
    media.className = 'detail-card-image';
    media.innerHTML = `<img src="https://images.unsplash.com/${image[0]}?auto=format&fit=crop&w=900&q=85" alt="${image[1]}" loading="lazy" />`;
    card.prepend(media);
  });
  const siteScript = document.createElement('script');
  siteScript.src = '../static/site.js';
  document.body.appendChild(siteScript);
})();
