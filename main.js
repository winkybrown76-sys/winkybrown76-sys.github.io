const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const reveals = document.querySelectorAll("[data-reveal]");
const counters = document.querySelectorAll("[data-count]");
const contactForm = document.querySelector(".contact-card");
const languageButtons = document.querySelectorAll("[data-lang]");
const translatableElements = document.querySelectorAll("[data-i18n]");

const translations = {
  en: {
    "nav.home": "Home",
    "nav.Product and Service": "Product and Services",
   

    "nav.contact": "Contact",
    "cta.bookDemo": "Book a Demo",
    "footer.tagline": "HKUIT-SZ helps teams deploy dependable vision systems for sports, facilities, and public-space operations with a calm, credible product experience.",
    "home.eyebrow": "HKUIT-SZ",
    "home.title": "Leading the New Era of AI-Driven Smart Safety.",
    "home.description": "HKUIT-SZ helps teams deploy dependable vision systems for sports, facilities, and public-space operations with a calm, credible product experience.",
    "home.primaryAction": "Schedule a walkthrough",
    "home.secondaryAction": "Explore Product and Service",
    "home.stats.deployments": "live deployment scenarios",
    "home.stats.consistency": "detection consistency target",
    "home.stats.deployments1":'Year Established',
    "home.stats.coverage": "hour operational coverage",
    "home.note.label": "Operational view",
    "home.note.title": "Sports / Safety / Security/Campus",
    "home.note.body": "Unified monitoring with explainable alerts and audit trails.",
    "home.pulse.label": "Inference network",
    "home.pulse.title": "Streaming stable",
    "home.trust": "Built for performance-driven operators, venue teams, and enterprise partners.",
    "home.navigation.eyebrow": "Navigation",
    "home.navigation.title": "Each major topic now lives on its own page.",
    "home.navigation.description": "Browse the site like a real company website, with dedicated subpages for product areas, case-study messaging, careers, and contact.",
    "home.cards.Product and Service.title": "Product and Service",
    "home.cards.Product and Service.body": "Explore Smart Education, Smart Construction Site, Smart Sport and Smart Security.",
    
    
  
    "home.cards.contact.title": "Contact",
    "home.cards.contact.body": "Customize Your Smart Solution",
    "Product and Service.eyebrow": "Product and Service",
    "Product and Service.title": "Building a Universal Safety Ecosystem.",
    "Product and Service.description": "Providing one-stop AI solutions from safety monitoring to automated assessment.",
    "Product and Service.cards.Education.title": "Smart Education",
    "Product and Service.cards.sports.body": "Joining hands with the Faculty of Engineering at the University of Hong Kong: Deeply cultivating natural human-machine collaboration and empowering students to integrate across disciplines.",
    "Product and Service.cards.sports.item1": "Customized course design",
    "Product and Service.cards.sports.item2": "Interdisciplinary technology integration",
    "Product and Service.cards.sports.item3": "Disciplinary background enhancement",
    "Product and Service.cards.safety.title": "Smart Construction Site",
    "Product and Service.cards.safety.body": "By integrating proprietary AI vision, IoT sensors, and a central platform, it offers real-time hazard monitoring and compliance management to achieve zero accidents on construction sites.",
    "Product and Service.cards.safety.item1": "Holistic IoT Ecosystem",
    "Product and Service.cards.safety.item2": "Crowd density snapshots",
    "Product and Service.cards.safety.item3": "Proven Track Record & Rapid Setup",
    "Product and Service.cards.Sport.title": "Smart Sport",
    "Product and Service.cards.security.body": "Robocoach is a Campus AI Sports Ecosystem connecting teachers and students. By integrating AI running analysis and electronic fitness measurements, it automates MVPA60 data collection to track athletic performance and cultivate healthy exercise habits.",
    "Product and Service.cards.security.item1": "Automated Data Assessment",
    "Product and Service.cards.security.item2": "Engaging Interactive Modes",
    "Product and Service.cards.security.item3": "Closed-Loop Data Tracking",
     "Product and Service.cards.campus.title": "Smart Campus",
    "Product and Service.cards.campus.body": "The system accurately identifies anomalies such as violent conflicts, self-harm, or falls, automatically triggering alarms at the moment of danger. By delivering real-time alerts to security centers, it transforms campus safety from reactive investigation to proactive prevention and instant intervention.",
    "Product and Service.cards.campus.item1": "Second-Level Alerts & Multi-Channel Response",
    "Product and Service.cards.campus.item2": "High-Precision Skeletal Motion Analysis",
    "Product and Service.cards.campus.item3": "Privacy Protection & Edge Computing",
  

    
    "contact.eyebrow": "Contact",
    "contact.title": "Customize Your Smart Solution",
    "contact.description": "Tell us your project requirements. Our experts will provide 4S system demos, compliance consulting, and site visit arrangements.",
    "contact.sectionTitle": "Tell us what you want to build.",
    
    "contact.form.nameLabel": "Name",
    "contact.form.namePlaceholder": "Your name",
    "contact.form.emailLabel": "Work email",
    "contact.form.emailPlaceholder": "you@company.com",
    "contact.form.goalLabel": "Project goal",
    "contact.form.goalPlaceholder": "Tell us what you want to build.",
    "contact.form.submit": "Request a proposal",
    "contact.form.sent": "Request sent"
  },
  "zh-Hans": {
    "nav.home": "首页",
    "nav.Product and Service": "产品与服务",



    "nav.contact": "联系",
    "cta.bookDemo": "预约演示",
    "footer.tagline": "港慧星云帮助团队在体育、园区设施和公共空间运营中部署稳定可信的视觉系统，并提供沉稳、专业的产品体验。",
    "home.eyebrow": "港慧星云科技有限公司",
    "home.title": "引领 AI 驱动的智慧安全新时代",
    "home.description": "港慧星云帮助团队在体育、园区设施和公共空间运营中部署稳定可信的视觉系统，并提供沉稳、专业的产品体验。",
    "home.primaryAction": "预约产品演示",
    "home.secondaryAction": "查看产品与服务",
    "home.stats.deployments": "已覆盖的部署场景",
    "home.stats.consistency": "识别一致性目标",
    "home.stats.coverage": "小时级运营覆盖",
    "home.stats.deployments1":'建立',
    "home.note.label": "运营视图",
    "home.note.title": "体育 / 安全 / 安保",
    "home.note.body": "通过可解释告警与审计轨迹实现统一监控。",
    "home.pulse.label": "推理网络",
    "home.pulse.title": "流式处理稳定",
    "home.trust": "为高性能运营团队、场馆团队和企业合作伙伴而打造。",
    "home.navigation.eyebrow": "导航",
    "home.navigation.title": "每个核心主题现在都有独立页面。",
    "home.navigation.description": "像真正的企业官网一样浏览站点，为产品方向、案例价值、招聘和联系信息提供独立子页面。",
    "home.cards.Product and Service.title": "产品与服务",
    "home.cards.Product and Service.body": "探索智慧教育、智慧工地和安保监管能力。",

   
   
    "home.cards.contact.title": "联系",
    "home.cards.contact.body": "定制您的智慧方案。",
    "Product and Service.eyebrow": "产品与服务",
    "Product and Service.title": "构建全场景安全生态",
    "Product and Service.description": "提供从安全监测到自动化评估的一站式 AI 解决方案",
    "Product and Service.cards.Education.title": "智慧教育",
    "Product and Service.cards.sports.body": "携手港大工程学院:深耕自然人机协作,赋能学生跨科整合",
    "Product and Service.cards.sports.item1": "定制化课程设计",
    "Product and Service.cards.sports.item2": "跨学科技术整合",
    "Product and Service.cards.sports.item3": "学科背景提升",
    "Product and Service.cards.safety.title": "智慧工地",
    "Product and Service.cards.safety.body": "通过自主研发的“安全智慧工地系统 (4S)”，整合 AI 视觉侦测、IoT 传感器与中央管理平台，为建筑业提供 24/7 实时安全预警与合规管理，助力实现工地“零事故”。",
    "Product and Service.cards.safety.item1": "全方位 IoT 防护生态",
    "Product and Service.cards.safety.item2": "人流密度快照",
    "Product and Service.cards.safety.item3": "政府认可与快速落地",
    "Product and Service.cards.Sport.title": "智慧运动",
    "Product and Service.cards.security.body": "Robocoach 是一款连接老师管理端与学生应用的 校园 AI 体育生态系统。系统整合 AI 跑步计算与体适能电子测量，实现 MVPA60 数据的自动采集与分析，通过数字化手段追踪学生运动表现并培养运动习惯。",
    "Product and Service.cards.security.item1": "自动化数据评估",
    "Product and Service.cards.security.item2": "趣味化互动模式",
    "Product and Service.cards.security.item3": "全场景数据闭环",
    "Product and Service.cards.campus.title": "智慧校园",
    "Product and Service.cards.campus.body": "系统能够精准识别暴力冲突、自残行为、人员倒地等异常情况，并在危险发生瞬间自动触发报警系统，实时推送预警至安保中心，将传统的“事后追溯”转变为“事前预防”与“即时干预”，全方位守护校园师生安全。。",
    "Product and Service.cards.campus.item1": "秒级预警与多渠道联动",
    "Product and Service.cards.campus.item2": "高精度动作骨架识别",
    "Product and Service.cards.campus.item3": "隐私保护与边缘计算部署",

 
    "contact.eyebrow": "联系",
    "contact.title": "定制您的智慧方案。",
    "contact.description": "告诉我们您的项目需求，资深专家将为您提供合规咨询及实地考察安排 。",
    "contact.sectionTitle": "告诉我们你想构建什么。",
   
    "contact.form.nameLabel": "姓名",
    "contact.form.namePlaceholder": "请输入你的姓名",
    "contact.form.emailLabel": "工作邮箱",
    "contact.form.emailPlaceholder": "you@company.com",
    "contact.form.goalLabel": "项目目标",
    "contact.form.goalPlaceholder": "告诉我们你想构建什么。",
    "contact.form.submit": "提交需求",
    "contact.form.sent": "已发送"
  }
};

const defaultLanguage = localStorage.getItem("visionedge-language") || "en";

const applyLanguage = (language) => {
  const locale = translations[language] ? language : "en";
  document.documentElement.lang = locale === "zh-Hans" ? "zh-Hans" : "en";
  localStorage.setItem("visionedge-language", locale);

  translatableElements.forEach((element) => {
    const key = element.dataset.i18n;
    const value = translations[locale][key];

    if (!value) {
      return;
    }

    if (element.dataset.i18nAttr) {
      element.setAttribute(element.dataset.i18nAttr, value);
      return;
    }

    element.textContent = value;
  });

  languageButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === locale);
  });
};

applyLanguage(defaultLanguage);

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang || "en");
  });
});

if (menuToggle && header) {
  menuToggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.2 }
);

reveals.forEach((element) => revealObserver.observe(element));

const animateCount = (element) => {
  const target = Number(element.dataset.count || 0);
  const suffix = target === 24 ? "/7" : target === 98 ? "%" : "";
  const duration = 1400;
  const start = performance.now();

  const tick = (timestamp) => {
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(target * eased);
    element.textContent = `${value}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  };

  requestAnimationFrame(tick);
};

const counterObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      animateCount(entry.target);
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.7 }
);

counters.forEach((counter) => counterObserver.observe(counter));

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const button = contactForm.querySelector("button");
    if (!button) {
      return;
    }

    const originalLabel = button.textContent;
    button.textContent = translations[localStorage.getItem("visionedge-language") || "en"]["contact.form.sent"];
    button.disabled = true;

    window.setTimeout(() => {
      applyLanguage(localStorage.getItem("visionedge-language") || "en");
      button.textContent = originalLabel;
      button.disabled = false;
      contactForm.reset();
    }, 2200);
  });
}
