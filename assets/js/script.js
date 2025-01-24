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
            start: "top bottom",
            end: "top 90%",
            scrub: true,
        },
        ease: "none",
        y: "50px",
        autoAlpha: 0,
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
    if(window.innerWidth === 1920){
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
    }
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
    showLetters();
};
const section4Animation = () => {
    document.addEventListener('DOMContentLoaded', () => {
        let target = gsap.utils.toArray(".section4_grid_contents");
        target.forEach((ele) => {
            gsap.from(ele, {
                scrollTrigger: {
                    trigger: ele,
                    start: "top bottom",
                    end: "bottom bottom",
                    scrub: true,
                },
                onStart:()=>{
                    console.log("start")
                },
                y: 50,
                scale: 0.95,
                stagger: 0.5,
            });
        });
    })
};
const section5Animation = () => {
    gsap.from(".section5_decobox1", {
        scrollTrigger: {
            trigger: ".section5",
            start: "10% bottom",
            end: "bottom bottom",
            scrub: true,
        },
        height: 20,
    });
    gsap.to(".section5_decobox2", {
        scrollTrigger: {
            trigger: ".section5",
            start: "10% bottom",
            end: "bottom bottom",
            scrub: true,
        },
        transform: "rotate(90deg)",
    });

    gsap.from(".section5_text_top > span", {
        scrollTrigger:{
            trigger:".section5_container",
            start:"10% bottom",
            end :"center bottom",
            scrub:true,
        },
        x : 100,
        autoAlpha:0,
        stagger:0.2
    })
    gsap.from(".section5_img", {
        scrollTrigger:{
            trigger:".section5_container",
            start:"10% bottom",
            end :"bottom bottom",
            scrub:true,
        },
        yPercent : 100,
        ease:"power2.out",
        autoAlpha:0,
    })
    var aerinswiper = new Swiper(".mySwiper", {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        speed: 1000,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
    });

    aerinswiper.on("slideChange", function () {
        const aerintitle = ["로즈 드 그라스 조이풀 브룸", "로즈 드 그라스 퍼퓸 & 뿌르 퓌", "이캇 자스민", "라일락 패스"];
        const aerintext = [
            "달콤한 핑크빛 인디안 로즈와 싱그럽고 모던한 로즈 센티폴리아의 조합으로 <br>두배의 행복을 담은 조이풀 블룸.",
            "100장의 꽃잎으로 알려진 센티폴리아 로즈를 담은 정교한 로즈 향수와 <br>싱그러운 아침 장미향을 떠오르게 하는 특별한 향수를 경험해보세요.",
            "편안하면서도 시크한 데님을 연상시키는 플로랄 우디 계열의 향수",
            "봄날의 라일락을 연상시키게 하는 플로랄 그린 계열의 향수",
        ];
        let currentIndex = aerinswiper.realIndex;
        document.querySelector(".section5_text_bottom > h2").innerHTML = aerintitle[currentIndex];
        document.querySelector(".section5_text_bottom > p").innerHTML = aerintext[currentIndex];
    });
};
const section6Animation = () => {
    var swiper = new Swiper(".Nutrivswiper", {
        loop : true,
        autoplay : {
            delay: 3000,
            disableOnInteraction: false,
        },
        slidesPerView: 5,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    const buttons = document.querySelectorAll(".section6_categories > span");
    for(let i = 0 ; i < buttons.length ; i++) {
        buttons[i].addEventListener('click', () => {
            buttons.forEach((ele)=>{
                ele.classList.remove('active');
            })
            buttons[i].classList.add('active');
        })
    }
    scrollBtn(".section6_inner > button");
};
const section7Animation = () => {
    const titles = new SplitType('.section6_title > strong', {
        type : "chars",
    });
    const subtitles = new SplitType('.section6_title > p', {
        type : "chars",
    })
    gsap.from(titles.chars, {
        scrollTrigger : {
            trigger : ".section6_inner",
            start :"10% bottom",
            end : "30% bottom",
            scrub:true,
        },
        stagger : 0.3,
        y : 30,
        autoAlpha : 0
    })
    gsap.from(subtitles.chars, {
        scrollTrigger : {
            trigger : ".section6_inner",
            start :"30% bottom",
            end : "center bottom",
            scrub:true,
        },
        stagger : 0.1,
        y : 20,
        autoAlpha : 0
    })
}
const section8Animation = () => {
    ScrollTrigger.create({
        trigger: ".section7_inner",
        start: "bottom bottom",
        end: "500%",
        pin: true,
        pinSpacing: true,
    });
    let section8tl = gsap.timeline({
        scrollTrigger:{
            trigger:".section7_inner",
            start:"bottom bottom",
            end:"500%",
            scrub:true,
        }
    })
    section8tl
        .to('.section7_grid', {y:-160, duration:2})
        .to('.section7_grid', {x : `-${document.querySelector('.section7_grid').offsetWidth}`, duration:9})

    gsap.to('.section7_grid_item_img', {
        scrollTrigger:{
            trigger:".section7_inner",
            start:"bottom bottom",
            end:"+=100%",
            scrub:true,
        },
        height: "460px",
    })

    gsap.to('.section7_grid_item_img', {
        scrollTrigger:{
            trigger:".section7_inner",
            start:"bottom bottom",
            end:"+=130%",
            scrub:true,
        },
        width: "380px",
    })

    gsap.to('.section7_grid_item_img > img', {
        scrollTrigger:{
            trigger:".section7_inner",
            start:"bottom bottom",
            end:"+=130%",
            scrub:true,
        },
        filter : "grayscale(0.5)"
    })

    window.addEventListener('scroll', () => {
        if ( window.scrollY >10500){
            document.querySelector('.section7_title').classList.add('active')
        } else {
            document.querySelector('.section7_title').classList.remove('active')
        }
    })
}
const initAnimations = () => {
    scrollSmooth();
    modifyHeader();
    section1Animation();
    actionHolidayText();
    section2Animation();
    section3Animation();
    // section4Animation();
    section5Animation();
    section6Animation();
    section7Animation();
    section8Animation();
};
observer.observe(document.querySelector("#bannervideo"));
initAnimations();
