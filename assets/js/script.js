gsap.registerPlugin(ScrollTrigger);

/* lenis */
const scrollSmooth = () => {
    const lenis = new Lenis({
        duration: 2,
    });
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
};

/* 배너영상 loading-lazy 함수 */
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            const element = entry.target;
            if (entry.isIntersecting) {
                element.play();
                // console.log("플레이시작")
            } else {
                element.pause();
                // console.log("재생중지")
            }
        });
    },
    {
        root: null,
        threshold: 0.3,
    }
);

const modifyHeader = () => {
    const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY >= 200) {
            header.classList.add("active");
            // console.log("헤더클래스추가");
        } else {
            header.classList.remove("active");
            // console.log("헤더클래스삭제");
        }
    });
};
const actionHolidayText = () => {
    const holidaytext = new SplitType("#holiday_text", {
        type: "chars",
    });
    const holidaytitle = new SplitType("#holiday_title", {
        type: "chars",
    });
    // console.log(holidaytext.lines);
    // console.log(holidaytext.words);
    // console.log(holidaytext.chars);
    gsap.from(holidaytext.chars, {
        scrollTrigger: {
            trigger: ".holiday_imgwrap",
            start: "center bottom",
            end: "bottom bottom",
            scrub: true,
        },
        opacity: 0,
        delay: 1,
        yPercent: 100,
        duration: 1,
        stagger: {
            amount: 2,
        },
    });
    gsap.from(holidaytitle.chars, {
        scrollTrigger: {
            trigger: ".holiday_imgwrap",
            start: "center bottom",
            end: "bottom bottom",
            scrub: true,
        },
        opacity: 0,
        yPercent: 100,
        duration: 1,
        stagger: {
            amount: 2,
        },
    });
};

/* 버튼 애니메이션 모듈화 */
const scrollBtn = (button) => {
    gsap.from(`${button}`, {
        scrollTrigger: {
            trigger: `${button}`,
            start: "bottom bottom",
            end: "+=70px bottom",
            scrub: true,
        },
        ease: "none",
        y: "50px",
        autoAlpha: 0,
    });
};

const showLetters = () => {
    const bestseller1 = new SplitType("#bestsellertitle", {
        type: "chars",
    });
    gsap.from(bestseller1.chars, {
        scrollTrigger: {
            trigger: ".bestseller_inner1",
            start: "35% bottom",
            end: "+=200px bottom",
            scrub: true,
        },
        y: 50,
        autoAlpha: 0,
        ease: "power1.out",
        stagger: {
            amount: 0.2,
        },
    });
    const bestseller2 = new SplitType(".bestseller_inner1_context > h3", {
        type: "chars",
    });
    gsap.from(bestseller2.chars, {
        scrollTrigger: {
            trigger: ".bestseller_inner1",
            start: "45% bottom",
            end: "+=200px bottom",
            scrub: true,
        },
        y: 50,
        autoAlpha: 0,
        ease: "power1.out",
        stagger: {
            amount: 0.4,
        },
    });
    const bestseller3 = new SplitType("#perfume_pricetag", {
        type: "chars",
    });
    gsap.from(bestseller3.chars, {
        scrollTrigger: {
            trigger: ".bestseller_inner1",
            start: "65% bottom",
            end: "+=200px bottom",
            scrub: true,
        },
        y: 50,
        autoAlpha: 0,
        ease: "power1.out",
        stagger: {
            amount: 0.6,
        },
    });
    gsap.from(".bestseller_pricespan", {
        scrollTrigger: {
            trigger: ".bestseller_inner1",
            start: "70% bottom",
            end: "+=200px bottom",
            scrub: true,
        },
        autoAlpha: 0,
        ease: "power1.out",
    });
    gsap.from(".bestseller_inner1_context > a", {
        scrollTrigger: {
            trigger: ".bestseller_inner1",
            start: "80% bottom",
            end: "+=100px bottom",
            scrub: true,
        },
        autoAlpha: 0,
        ease: "power1.out",
    });
};
const section1Animation = () => {
    actionHolidayText();
    scrollBtn(".holiday_textwrap > button");
};
const section2Animation = () => {
    gsap.from(".promotion15_deco_box2", {
        scrollTrigger: {
            trigger: ".promotion15",
            start: "top 90%",
            end: "bottom bottom",
            scrub: 0.5,
        },
        height: "30px",
        ease: "power3.out",
    });
    gsap.from(".promotion15_deco_box", {
        scrollTrigger: {
            trigger: ".promotion15_deco_box",
            start: "top bottom",
            end: "+=200px bottom",
            scrub: true,
        },
        transform: "rotate(90deg)",
        ease: "power3.out",
    });
    gsap.from(".promotion15_titles > span", {
        scrollTrigger: {
            trigger: ".promotion15",
            start: "top 90%",
            end: "center bottom",
            scrub: true,
        },
        xPercent: -75,
        stagger: {
            amount: 0.2,
            ease: "curc.out",
        },
    });
    gsap.from(".promotion15_imgwrap > img", {
        scrollTrigger: {
            trigger: ".promotion15",
            start: "20% bottom",
            end: "bottom bottom",
            scrub: true,
        },
        autoAlpha: 0,
        xPercent: 100,
        ease: "power1.out",
    });
    scrollBtn(".promotion15_inner > button");
};
const section3Animation = () => {
    gsap.to("#IU", {
        scrollTrigger: {
            trigger: ".bestseller_stickyway",
            start: "top top",
            end: "center center",
            scrub: true,
        },
        autoAlpha: 0,
        ease: "power1.in",
    });
    gsap.to("#perfume", {
        scrollTrigger: {
            trigger: ".bestseller_stickyway",
            start: "center center",
            scrub: true,
        },
        transform: "rotate(-25deg)",
    });
    gsap.to(".section3", {
        scrollTrigger: {
            trigger: ".section3",
            start: "center center",
            end: "80% 80%",
            scrub: true,
        },
        backgroundColor: "#ffffff",
    });
    showLetters();
    /* 가격 클릭 */
    const perfumeprices = document.querySelectorAll(".perfumeprice");
    for (let i = 0; i < perfumeprices.length; i++) {
        perfumeprices[i].addEventListener("click", () => {
            perfumeprices.forEach((ele) => {
                ele.classList.remove("active");
            });
            perfumeprices[i].classList.add("active");
            if (i === 0) {
                document.querySelector("#perfume_pricetag").innerHTML = "₩ 127,000";
            } else {
                document.querySelector("#perfume_pricetag").innerHTML = "₩ 299,000";
            }
        });
    }
};

const section5Animation = () => {
    gsap.from(".section5_decobox1", {
        scrollTrigger: {
            trigger: ".section5_container",
            start: "10% bottom",
            end: "bottom bottom",
            scrub: true,
        },
        height: 20,
    });
    gsap.to(".section5_decobox2", {
        scrollTrigger: {
            trigger: ".section5_container",
            start: "10% bottom",
            end: "bottom bottom",
            scrub: true,
        },
        transform: "rotate(90deg)",
    });

    var swiper = new Swiper(".mySwiper", {
        autoplay:{
            delay:5000,
        },
        speed:1000,
        loop:true,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
    });
};
const initAnimations = () => {
    scrollSmooth();
    modifyHeader();
    section1Animation();
    actionHolidayText();
    section2Animation();
    section3Animation();
    section5Animation();
};
observer.observe(document.querySelector("#bannervideo"));
initAnimations();
