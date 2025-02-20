$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

    // <!-- emailjs to mail contact form data -->
    $("#contact-form").submit(function (event) {
        emailjs.init("user_TTDmetQLYgWCLzHTDgqxm");

        emailjs.sendForm('contact_service', 'template_contact', '#contact-form')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById("contact-form").reset();
                alert("Form Submitted Successfully");
            }, function (error) {
                console.log('FAILED...', error);
                alert("Form Submission Failed! Try Again");
            });
        event.preventDefault();
    });
    // <!-- emailjs to mail contact form data -->

});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Raditya Putra";
            $("#favicon").attr("href", "assets/images/favicon.png");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "assets/images/favhand.png");
        }
    });


// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["I'm a student"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends -->

async function fetchData(type = "skills") {
    let response
    type === "skills" ?
        response = await fetch("skills.json")
        :
        response = await fetch("./projects/projects.json")
    const data = await response.json();
    return data;
}

function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
              <div class="info">
                <img src=${skill.icon} alt="skill" />
                <span>${skill.name}</span>
              </div>
            </div>`
    });
    skillsContainer.innerHTML = skillHTML;
}

function showProjects(projects) {
    let projectsContainer = document.querySelector("#work .box-container");
    let projectHTML = "";
    projects.slice(0, 10).filter(project => project.category != "android").forEach(project => {
        projectHTML += `
        <div class="box tilt">
      <img draggable="false" src="/assets/images/projects/${project.image}.png" alt="project" />
      <div class="content">
        <div class="tag">
        <h3>${project.name}</h3>
        </div>
        <div class="desc">
          <p>${project.desc}</p>
          <div class="btns">
            <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
            <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
          </div>
        </div>
      </div>
    </div>`
    });
    projectsContainer.innerHTML = projectHTML;

    // <!-- tilt js effect starts -->
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15,
    });
    // <!-- tilt js effect ends -->

    /* ===== SCROLL REVEAL ANIMATION ===== */
    const srtop = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1000,
        reset: true
    });

    /* SCROLL PROJECTS */
    srtop.reveal('.work .box', { interval: 200 });

}

fetchData().then(data => {
    showSkills(data);
});

fetchData("projects").then(data => {
    showProjects(data);
});

// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});
// <!-- tilt js effect ends -->


// pre loader start
// function loader() {
//     document.querySelector('.loader-container').classList.add('fade-out');
// }
// function fadeOut() {
//     setInterval(loader, 500);
// }
// window.onload = fadeOut;
// pre loader end

// disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}



/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .whatsapp', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .telegram', { interval: 600 });
srtop.reveal('.home .instagram', { interval: 600 });
srtop.reveal('.home .dev', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });


/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });


/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.work .card', { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });


$(document).ready(function () {

    // Scroll Reveal untuk Sertifikat
    const srtop = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1000,
        reset: true
    });

    /* SCROLL CERTIFICATES */
    srtop.reveal('.certificates .box', { interval: 200 });

    // Fungsi untuk mengambil data sertifikat
    async function fetchCertificates() {
        let response = await fetch("./certificates/certificates.json"); // File JSON untuk sertifikat
        const data = await response.json();
        return data;
    }

    // Menampilkan Sertifikat
    function showCertificates(certificates) {
        let certificatesContainer = document.querySelector("#certificates .box-container");
        let certificatesHTML = "";
        certificates.forEach(cert => {
            certificatesHTML += `
            <div class="box tilt">
              <img draggable="false" src="/assets/images/certificates/${cert.image}.png" alt="certificate" />
              <div class="content">
                <div class="tag">
                  <h3>${cert.name}</h3>
                </div>
                <div class="desc">
                  <p>${cert.desc}</p>
                  <div class="btns">
                    <a href="${cert.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
                    <a href="${cert.links.download}" class="btn" target="_blank">Download <i class="fas fa-download"></i></a>
                  </div>
                </div>
              </div>
            </div>`
        });
        certificatesContainer.innerHTML = certificatesHTML;

        // Apply tilt js effect
        VanillaTilt.init(document.querySelectorAll(".tilt"), {
            max: 15,
        });
    }

    // Ambil data sertifikat dan tampilkan
    fetchCertificates().then(data => {
        showCertificates(data);
    });

    // Scroll Reveal untuk Sertifikat
    srtop.reveal('.certificates .box', { interval: 200 });

});

function toggleText(id, element) {
    const desc = document.getElementById(id);
    
    if (desc.classList.contains('expanded')) {
      // Saat menutup, ukur tinggi penuh dan animasikan ke tinggi terpotong
      const fullHeight = desc.scrollHeight; // tinggi penuh saat terbuka
      // Tetapkan tinggi saat ini agar transisi bisa terjadi
      desc.style.height = fullHeight + 'px';
      // Paksa reflow agar browser menerapkan perubahan (flush the style)
      desc.offsetHeight;
      // Atur ke tinggi terpotong
      desc.style.height = '3em';
      desc.classList.remove('expanded');
      element.innerHTML = 'Selengkapnya <i class="fas fa-arrow-right ml-1"></i>';
    } else {
      // Saat membuka, ukur tinggi penuh dan animasikan ke tinggi itu
      const fullHeight = desc.scrollHeight;
      // Tetapkan tinggi awal (3em) secara eksplisit
      desc.style.height = '3em';
      // Paksa reflow
      desc.offsetHeight;
      // Atur ke tinggi penuh
      desc.style.height = fullHeight + 'px';
      desc.classList.add('expanded');
      element.innerHTML = 'Lebih Sedikit <i class="fas fa-arrow-up ml-1"></i>';
      
      // Setelah transisi selesai, ubah height ke auto agar responsive
      desc.addEventListener('transitionend', function handler() {
        // Pastikan kita berada dalam keadaan expanded
        if (desc.classList.contains('expanded')) {
          desc.style.height = 'auto';
        }
        desc.removeEventListener('transitionend', handler);
      });
    }
  }

  
// Data keterampilan (soft skills & hard skills)
const skillsData = [
    { icon: "https://static-00.iconduck.com/assets.00/mikrotik-icon-1921x2048-1eai97he.png", name: "Mikrotik" },
    { icon: "https://images.seeklogo.com/logo-png/3/1/cisco-logo-png_seeklogo-30674.png", name: "Cisco Packet Tracer" },
    { icon: "https://seeklogo.com/images/A/autocad-logo-69326D7728-seeklogo.com.png", name: "AutoCad" },
    { icon: "https://images.seeklogo.com/logo-png/37/2/microsoft-excel-logo-png_seeklogo-370278.png", name: "Excel" },
    { icon: "https://cdn-icons-png.flaticon.com/512/3094/3094939.png", name: "Time Management" },
    { icon: "https://cdn-icons-png.flaticon.com/512/10984/10984764.png", name: "Adapt quickly" },
    { icon: "https://cdn-icons-png.flaticon.com/512/10108/10108194.png", name: "Empathy" },
    { icon: "https://cdn-icons-png.flaticon.com/512/7966/7966954.png", name: "Decision-making" },
    { icon: "https://cdn-icons-png.flaticon.com/512/3281/3281311.png", name: "Teamwork" },
  ];
  
document.addEventListener("DOMContentLoaded", function () {
    // Ambil elemen container
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";

    // Looping untuk menambahkan keterampilan ke dalam container
    skillsData.forEach(skill => {
        skillHTML += `
        <div class="bar hidden">
            <div class="info">
                <img src="${skill.icon}" alt="${skill.name}" />
                <span>${skill.name}</span>
            </div>
        </div>`;
    });

    // Masukkan skill ke dalam container
    skillsContainer.innerHTML = skillHTML;

    // === SCROLL REVEAL: Animasi muncul satu per satu saat di-scroll ===
    ScrollReveal().reveal('.bar', {
        interval: 200, // Jeda antar elemen (200ms)
        origin: 'left', // Muncul dari kiri
        distance: '50px',
        duration: 800,
        reset: true // Animasi diulang saat scroll kembali ke atas
    });
});


  // Fungsi untuk menampilkan keterampilan
  function showSkills() {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skillsData.forEach(skill => {
      skillHTML += `
        <div class="bar">
          <div class="info">
            <img src="${skill.icon}" alt="${skill.name}" />
            <span>${skill.name}</span>
          </div>
        </div>`;
    });
    skillsContainer.innerHTML = skillHTML;
  }
  
  // Panggil fungsi saat halaman dimuat
  document.addEventListener("DOMContentLoaded", showSkills);
  
