"use client";

import { useEffect, useState } from "react";
import { HeaderPortal } from "./HeaderPortal";
import { FooterPortal } from "./FooterPortal";

const randomTools = [
  "https://today.funnyfunny.cloud",
  "https://todo.funnyfunny.cloud/",
  "https://random.funnyfunny.cloud",
  "https://rest.funnyfunny.cloud",
  "https://dailycheck.funnyfunny.cloud/",
  "https://coffee.funnyfunny.cloud",
  "https://dream.funnyfunny.cloud/",
  "https://video.funnyfunny.cloud",
  "https://file.funnyfunny.cloud/",
  "https://meta.funnyfunny.cloud",
  "https://ocr.funnyfunny.cloud",
  "https://beauty.funnyfunny.cloud",
  "https://cosmetics.funnyfunny.cloud",
  "https://year.funnyfunny.cloud",
  "https://energy.funnyfunny.cloud",
  "https://money.funnyfunny.cloud",
  "https://specific.funnyfunny.cloud/",
  "https://invest.funnyfunny.cloud",
  "https://life.funnyfunny.cloud",
  "https://ego.funnyfunny.cloud",
  "https://senseyear.funnyfunny.cloud",
  "https://alcohol.funnyfunny.cloud",
  "https://lazy.funnyfunny.cloud",
  "https://drain.funnyfunny.cloud",
  "https://maldives.funnyfunny.cloud",
  "https://bit.funnyfunny.cloud",
  "https://next.funnyfunny.cloud",
  "https://house.funnyfunny.cloud",
  "https://space.funnyfunny.cloud",
  "https://edu.funnyfunny.cloud",
  "https://baby.funnyfunny.cloud/",
  "https://miracle.funnyfunny.cloud/",
  "https://n.funnyfunny.cloud/",
  "https://nospend.funnyfunny.cloud",
  "https://waste.funnyfunny.cloud",
  "https://health.funnyfunny.cloud",
  "https://bmi.funnyfunny.cloud/",
  "https://cafe.funnyfunny.cloud",
  "https://drink.funnyfunny.cloud",
  "https://joke.funnyfunny.cloud",
  "https://mental.funnyfunny.cloud",
  "https://mind.funnyfunny.cloud",
  "https://fortune.funnyfunny.cloud",
  "https://soul.funnyfunny.cloud",
  "https://wisdom.funnyfunny.cloud",
  "https://motivate.funnyfunny.cloud/",
  "https://beat.funnyfunny.cloud",
  "https://cook.funnyfunny.cloud",
  "https://chef.funnyfunny.cloud/",
  "https://winter.funnyfunny.cloud",
  "https://anju.funnyfunny.cloud",
  "https://product.funnyfunny.cloud",
  "https://human.funnyfunny.cloud",
  "https://average.funnyfunny.cloud",
  "https://pick.funnyfunny.cloud",
  "https://audio.funnyfunny.cloud",
  "https://music.funnyfunny.cloud",
  "https://vocal.funnyfunny.cloud",
  "https://run.funnyfunny.cloud",
  "https://charm.funnyfunny.cloud",
  "https://downy.funnyfunny.cloud",
  "https://xmas.funnyfunny.cloud",
  "https://hand.funnyfunny.cloud",
  "https://soccer.funnyfunny.cloud",
  "https://heal.funnyfunny.cloud",
  "https://need.funnyfunny.cloud/",
  "https://image.funnyfunny.cloud",
  "http://heic.funnyfunny.cloud/",
  "https://temple.funnyfunny.cloud",
  "https://sleep.funnyfunny.cloud",
  "https://balance.funnyfunny.cloud/",
  "https://lotto.funnyfunny.cloud/",
  "http://sudoku.funnyfunny.cloud/",
  "https://commute.funnyfunny.cloud/",
];

const seoTopItems = [
  {
    name: "Local Image Optimizer & File Insights",
    url: "https://file.funnyfunny.cloud/",
    description:
      "Re-encode WebP/JPEG and auto-resize with one drag. View local file info, SHA-256, and previews without uploads.",
  },
  {
    name: "Meta Kit — SEO · OG · Favicon",
    url: "https://meta.funnyfunny.cloud",
    description:
      "Generate meta tags, OG/Twitter cards, and favicons in one place, plus OG image text ready to copy.",
  },
  {
    name: "Image Merge & PDF Converter",
    url: "https://image.funnyfunny.cloud",
    description:
      "Upload multiple images, reorder by drag, and save as a single image or PDF.",
  },
  {
    name: "Image Text Extractor",
    url: "https://ocr.funnyfunny.cloud",
    description: "OCR that extracts text from photos automatically.",
  },
  {
    name: "Time Checker",
    url: "https://time.funnyfunny.cloud",
    description: "Accurate server time, time zone conversion, and quick time calculations.",
  },
  {
    name: "Current Weather",
    url: "https://weather.funnyfunny.cloud",
    description: "Local weather, feels-like temperature, dust, and UV info.",
  },
  {
    name: "IT News Today",
    url: "https://news.funnyfunny.cloud",
    description: "Quick summaries of domestic and global IT news.",
  },
  {
    name: "Simple Audio Editor",
    url: "https://audio.funnyfunny.cloud",
    description: "Edit audio directly in the browser.",
  },
  {
    name: "EmojiCon Studio",
    url: "https://emojicon.funnyfunny.cloud",
    description: "Create icons and favicons from a single emoji.",
  },
];

const seoGuides = [
  {
    slug: "meta-kit",
    emoji: "🧰",
    title: "Meta Kit — SEO/OG/Favicon Bundle Guide",
    desc: "Enter meta tags, OG/Twitter cards, favicons, and OG image text, then generate and copy.",
  },
  {
    slug: "local-image-optimizer",
    emoji: "🗜️",
    title: "Local Image Optimizer & File Insights Guide",
    desc: "Re-encode WebP/JPEG, auto-resize, and view local file info, SHA-256, and previews.",
  },
  {
    slug: "heic-to-jpg",
    emoji: "📷",
    title: "HEIC to JPG Converter Guide",
    desc: "Convert HEIC to JPG/WebP/PNG in-browser with compression, resize, and ZIP export.",
  },
  {
    slug: "pyeong-calculator",
    emoji: "📐",
    title: "Pyeong-to-Square-Meter Calculator Guide",
    desc: "Convert pyeong to square meters and check typical apartment sizes quickly.",
  },
  {
    slug: "nbang-calculator",
    emoji: "🍽️",
    title: "Split-the-Bill Calculator Guide",
    desc: "Enter venue, headcount, and total to calculate per-person cost and copy instantly.",
  },
  {
    slug: "commute-cost-time",
    emoji: "⏰",
    title: "Commute Cost & Time Calculator Guide",
    desc: "Calculate commuting cost/time and get ideas for using reclaimed time.",
  },
  {
    slug: "lotto-picker",
    emoji: "🎟️",
    title: "Lotto Number Picker Guide",
    desc: "Get recommended number sets with one click and save your favorites.",
  },
  {
    slug: "image-merge-pdf",
    emoji: "🖼️",
    title: "Image Merge & PDF Converter Guide",
    desc: "Upload and reorder multiple images, then export as one image or PDF.",
  },
  {
    slug: "autocut-studio",
    emoji: "🎬",
    title: "AutoCut Studio Guide",
    desc: "Speed up YouTube editing with silence detection and jump-cut timelines.",
  },
  {
    slug: "head-voice-trainer",
    emoji: "🎤",
    title: "Head Voice Trainer Guide",
    desc: "Breathing, resonance routines, and scale-following practice for head voice.",
  },
  {
    slug: "image-text-extract",
    emoji: "🔍",
    title: "Image Text Extractor Guide",
    desc: "Quick OCR workflow to extract and copy text from images.",
  },
  {
    slug: "today-well-done",
    emoji: "🌱",
    title: "Today, Well Done Guide",
    desc: "Summarize today’s wins in one line and set a small action for tomorrow.",
  },
  {
    slug: "today-todo",
    emoji: "✅",
    title: "Today's To-Do Guide",
    desc: "Capture focus tasks and wrap your day with clean completion checks.",
  },
  {
    slug: "daily-condition-check",
    emoji: "📝",
    title: "Daily Condition Check Guide",
    desc: "Use five quick checks to summarize your condition in one line.",
  },
  {
    slug: "dream-diary",
    emoji: "💭",
    title: "Dream Diary Guide",
    desc: "Record dreams locally and organize them with tags.",
  },
  {
    slug: "rest-check",
    emoji: "🛋️",
    title: "Should I Rest Now? Guide",
    desc: "Use a short survey to decide on rest and pick a recovery routine.",
  },
  {
    slug: "sleep-helper",
    emoji: "🌙",
    title: "Sleep Helper Guide",
    desc: "Fall asleep with white noise mixes, ambient sounds, and timers.",
  },
  {
    slug: "chef-judge-choice",
    emoji: "👨‍🍳",
    title: "Chef Judge: Today's Choice Guide",
    desc: "Get meme-style judging comments to decide today’s choice fast.",
  },
  {
    slug: "music-now",
    emoji: "🎵",
    title: "Music for This Moment Guide",
    desc: "Pick a music mood that fits the time of day and your rhythm.",
  },
  {
    slug: "winter-ruin-top1",
    emoji: "❄️",
    title: "Winter Trigger Top 1 Guide",
    desc: "Spot your winter crash pattern and fix it with a 10-minute routine.",
  },
  {
    slug: "flow-community",
    emoji: "🧵",
    title: "FLOW Community Guide",
    desc: "How to post and discuss on the thread-style FLOW board.",
  },
  {
    slug: "next-2026",
    emoji: "🔮",
    title: "Future Me 2026 Guide",
    desc: "Interpret next-year routes shaped by habits, money, relationships, and focus.",
  },
  {
    slug: "life-spending-report",
    emoji: "🧾",
    title: "Life Spending Report Guide",
    desc: "Get a 3-minute report on money, time, and emotion spending.",
  },
  {
    slug: "coffee-addiction-test",
    emoji: "☕",
    title: "Coffee Addiction Test Guide",
    desc: "Caffeine limits, addiction signals, and the test criteria at a glance.",
  },
  {
    slug: "bmi-diet-plan",
    emoji: "📏",
    title: "BMI Survey Diet Plan Guide",
    desc: "Check BMI and lifestyle patterns in quick taps to get a realistic plan.",
  },
  {
    slug: "beauty-bankruptcy-test",
    emoji: "💄",
    title: "Beauty Bankruptcy Test Guide",
    desc: "How beauty and fashion spending affects your assets and how it’s calculated.",
  },
  {
    slug: "cosmetics-routine-check",
    emoji: "💄",
    title: "Cosmetics Routine Check Guide",
    desc: "Check current products/features to see gaps or overloads and get a minimal plan.",
  },
  {
    slug: "asset-shield-index",
    emoji: "🛡️",
    title: "Asset Shield Index Guide",
    desc: "Assess resilience with cash flow, emergency funds, and diversification checks.",
  },
  {
    slug: "asset-allocation-check",
    emoji: "🧮",
    title: "Asset Allocation Check Guide",
    desc: "Review your portfolio type across cash, gold, real estate, stocks, and crypto.",
  },
  {
    slug: "invest-confidence-builder",
    emoji: "📈",
    title: "Investment Confidence Builder Guide",
    desc: "Stabilize decisions by logging your reasoning rather than returns.",
  },
  {
    slug: "bitcoin-regret-calculator",
    emoji: "💸",
    title: "Bitcoin Regret Calculator Guide",
    desc: "Includes regret simulation, data assumptions, and investment cautions.",
  },
  {
    slug: "daily-productivity-check",
    emoji: "⚡",
    title: "Daily Productivity Check Guide",
    desc: "A quick checklist to assess today’s focus and energy.",
  },
  {
    slug: "missed-house-opportunity",
    emoji: "🏠",
    title: "Missed House Opportunity Guide",
    desc: "Opportunity cost of price growth and realistic next steps.",
  },
  {
    slug: "birthrate-reality-test",
    emoji: "👶",
    title: "Birthrate Reality Test Guide",
    desc: "Follow the questions to feel the shift and interpret/share the results.",
  },
  {
    slug: "better-birth-odds",
    emoji: "🌍",
    title: "Better Birth Odds Guide",
    desc: "Compare birth conditions and interpret/share your probability results.",
  },
  {
    slug: "palm-reading-analysis",
    emoji: "✋",
    title: "Palm Reading Analysis Guide",
    desc: "Analyze palm lines from a single photo and interpret key signals.",
  },
  {
    slug: "soccer-combo",
    emoji: "⚽",
    title: "Soccer Combo Guide",
    desc: "Mix two personalities to find the footballer you resemble.",
  },
  {
    slug: "neon-pinball-random",
    emoji: "🎱",
    title: "Neon Pinball Random Draw Guide",
    desc: "Use rolling pinballs to pick random winners and share results.",
  },
  {
    slug: "one-line-fortune",
    emoji: "🔮",
    title: "One-Line Fortune Guide",
    desc: "Pick a daily fortune based on your mood and interpret it fast.",
  },
  {
    slug: "saju-sintojungbi",
    emoji: "🔮",
    title: "Saju & Sintojungbi Guide",
    desc: "Use birth date/time to read your four pillars and yearly/monthly flow.",
  },
  {
    slug: "heal-card",
    emoji: "💌",
    title: "Maybe Not a Coincidence Guide",
    desc: "Get a comfort card with one click and share it easily.",
  },
  {
    slug: "need-one-line",
    emoji: "🧭",
    title: "The One Line I Need Guide",
    desc: "Click your emotion and situation to receive the line you need today.",
  },
  {
    slug: "motivate",
    emoji: "🔥",
    title: "Motivation Reset Guide",
    desc: "Get a short line to reset your mindset and refocus quickly.",
  },
  {
    slug: "daily-wisdom",
    emoji: "📜",
    title: "Daily Wisdom Guide",
    desc: "Choose a daily line inspired by scripture and share it.",
  },
  {
    slug: "temple-daily-quote",
    emoji: "🛕",
    title: "Temple Daily Quote Guide",
    desc: "Pick and share daily lines based on Buddhist teachings in modern language.",
  },
];

const seoApplications = [
  {
    name: "Today, Well Done",
    url: "https://today.funnyfunny.cloud/",
    description:
      "Log today’s wins in one line and plan a small action for tomorrow.",
    category: "ProductivityApplication",
  },
  {
    name: "Today's To-Do",
    url: "https://todo.funnyfunny.cloud/",
    description:
      "A focused to-do list with simple completion checks.",
    category: "ProductivityApplication",
  },
  {
    name: "Dream Diary",
    url: "https://dream.funnyfunny.cloud/",
    description:
      "A local dream journal saved in your browser with tags.",
    category: "LifestyleApplication",
  },
  {
    name: "Should I Rest Now?",
    url: "https://rest.funnyfunny.cloud/",
    description:
      "A short survey to decide rest needs and recovery routines.",
    category: "LifestyleApplication",
  },
  {
    name: "Sleep Helper",
    url: "https://sleep.funnyfunny.cloud/",
    description:
      "White noise and ambient mixes with timer and fade-out for better sleep.",
    category: "LifestyleApplication",
  },
  {
    name: "Motivation Reset",
    url: "https://motivate.funnyfunny.cloud/",
    description:
      "Get a short line to reset your mindset and regain focus.",
    category: "LifestyleApplication",
  },
  {
    name: "Music for This Moment",
    url: "https://music.funnyfunny.cloud/",
    description:
      "Pick a music mood that matches your time of day.",
    category: "EntertainmentApplication",
  },
  {
    name: "Cosmetics Routine Check",
    url: "https://cosmetics.funnyfunny.cloud/",
    description:
      "Check your products and features to find gaps, overloads, and a minimal plan.",
    category: "LifestyleApplication",
  },
  {
    name: "Winter Trigger Top 1",
    url: "https://winter.funnyfunny.cloud/",
    description:
      "Identify your biggest winter drag and get recovery tips.",
    category: "LifestyleApplication",
  },
  {
    name: "Meta Kit — SEO · OG · Favicon",
    url: "https://meta.funnyfunny.cloud/",
    description:
      "Generate meta tags, OG/Twitter cards, favicons, and OG text for easy copy.",
    category: "UtilityApplication",
  },
  {
    name: "Life Spending Report",
    url: "https://year.funnyfunny.cloud/",
    description:
      "A 3-minute report on how you spent money, time, and emotions.",
    category: "LifestyleApplication",
  },
  {
    name: "Waste Index",
    url: "https://waste.funnyfunny.cloud/",
    description:
      "See wasted money and time as a single score.",
    category: "LifestyleApplication",
  },
  {
    name: "Korea Average vs Me",
    url: "https://average.funnyfunny.cloud/",
    description:
      "Compare your metrics with national averages.",
    category: "LifestyleApplication",
  },
  {
    name: "Daily Productivity Check",
    url: "https://product.funnyfunny.cloud/",
    description:
      "Quickly check focus, energy, and decision state.",
    category: "ProductivityApplication",
  },
  {
    name: "Total Wealth of What I Didn’t Buy",
    url: "https://nospend.funnyfunny.cloud/",
    description:
      "Estimate how much you could have saved by not buying.",
    category: "FinanceApplication",
  },
  {
    name: "Asset Allocation Check",
    url: "https://specific.funnyfunny.cloud/",
    description:
      "Review your mix across cash, gold, real estate, stocks, and crypto.",
    category: "FinanceApplication",
  },
  {
    name: "OTT Pick",
    url: "https://pick.funnyfunny.cloud/",
    description:
      "Get instant Korean OTT movie and drama picks without searching.",
    category: "EntertainmentApplication",
  },
  {
    name: "Chef Judge: Today's Choice",
    url: "https://chef.funnyfunny.cloud/",
    description:
      "Meme-style judging comments that help you choose fast.",
    category: "EntertainmentApplication",
  },
  {
    name: "Lotto Number Picker",
    url: "https://lotto.funnyfunny.cloud/",
    description:
      "One-click lotto number recommendations with save support.",
    category: "EntertainmentApplication",
  },
  {
    name: "Bitcoin Regret Calculator",
    url: "https://bit.funnyfunny.cloud/",
    description:
      "Calculate opportunity cost if you didn’t buy Bitcoin.",
    category: "FinanceApplication",
  },
  {
    name: "Future Me 2026",
    url: "https://next.funnyfunny.cloud/",
    description:
      "Simulate next-year routes based on habits, money, relationships, and focus.",
    category: "LifestyleApplication",
  },
  {
    name: "Missed House Opportunity",
    url: "https://house.funnyfunny.cloud/",
    description:
      "Calculate missed gains from rising home prices.",
    category: "FinanceApplication",
  },
  {
    name: "Investment Confidence Builder",
    url: "https://invest.funnyfunny.cloud/",
    description:
      "Record decisions to reduce volatility in judgment.",
    category: "FinanceApplication",
  },
  {
    name: "Birthrate Reality Test",
    url: "https://baby.funnyfunny.cloud/",
    description:
      "A scenario-based test that frames the birthrate shift in real life.",
    category: "LifestyleApplication",
  },
  {
    name: "Better Birth Odds",
    url: "https://miracle.funnyfunny.cloud/",
    description:
      "Compare birth conditions and estimate the odds of a better environment.",
    category: "LifestyleApplication",
  },
  {
    name: "Pyeong Calculator",
    url: "https://space.funnyfunny.cloud/",
    description:
      "Convert pyeong to square meters and check typical sizes.",
    category: "UtilityApplication",
  },
  {
    name: "Split-the-Bill Calculator",
    url: "https://n.funnyfunny.cloud/",
    description:
      "Enter venue, headcount, and total to calculate per-person cost.",
    category: "UtilityApplication",
  },
  {
    name: "Coffee Addiction Test",
    url: "https://coffee.funnyfunny.cloud/",
    description:
      "A meme-style test to check caffeine dependence.",
    category: "LifestyleApplication",
  },
  {
    name: "BMI Survey Diet Plan",
    url: "https://bmi.funnyfunny.cloud/",
    description:
      "A quick survey to check BMI and lifestyle patterns for a realistic plan.",
    category: "LifestyleApplication",
  },
  {
    name: "Beauty Bankruptcy Test",
    url: "https://beauty.funnyfunny.cloud/",
    description:
      "A felt-impact calculator for beauty spending.",
    category: "LifestyleApplication",
  },
  {
    name: "People Who Drain Me Test",
    url: "https://human.funnyfunny.cloud/",
    description:
      "Find the people types that drain you (not a self-evaluation).",
    category: "LifestyleApplication",
  },
  {
    name: "Simple Audio Editor",
    url: "https://audio.funnyfunny.cloud/",
    description:
      "Trim, merge, and export audio directly in the browser.",
    category: "UtilityApplication",
  },
  {
    name: "Head Voice Trainer",
    url: "https://vocal.funnyfunny.cloud/",
    description:
      "Warm up head voice with breathing, resonance, and scale routines.",
    category: "LifestyleApplication",
  },
  {
    name: "AutoCut Studio",
    url: "https://video.funnyfunny.cloud/",
    description:
      "Detect silence and auto-create highlight/jump-cut timelines.",
    category: "UtilityApplication",
  },
  {
    name: "Image Merge & PDF Converter",
    url: "https://image.funnyfunny.cloud/",
    description:
      "Upload images, reorder by drag, and export as one image or PDF.",
    category: "UtilityApplication",
  },
  {
    name: "Image Text Extractor",
    url: "https://ocr.funnyfunny.cloud/",
    description:
      "OCR that extracts text from photos.",
    category: "UtilityApplication",
  },
  {
    name: "HEIC to JPG Converter",
    url: "http://heic.funnyfunny.cloud/",
    description:
      "Convert HEIC to JPG/WebP/PNG with compression, resize, and ZIP export.",
    category: "UtilityApplication",
  },
  {
    name: "Local Image Optimizer & File Insights",
    url: "https://file.funnyfunny.cloud/",
    description:
      "Re-encode and auto-resize images, plus local file info and SHA-256.",
    category: "UtilityApplication",
  },
  {
    name: "Dino Runner",
    url: "https://run.funnyfunny.cloud/",
    description: "Dino runner ranking game with score submissions.",
    category: "GameApplication",
  },
  {
    name: "Charm (NEON ARCADE)",
    url: "https://charm.funnyfunny.cloud/",
    description: "Switch lanes to dodge incoming missiles.",
    category: "GameApplication",
  },
  {
    name: "Downy (NEON STAIRS)",
    url: "https://downy.funnyfunny.cloud/",
    description: "Step left/right on stairs; fall and it's over.",
    category: "GameApplication",
  },
  {
    name: "Daily Tetris",
    url: "https://tet.funnyfunny.cloud/",
    description: "Tetris with solo AI and two-player mode.",
    category: "GameApplication",
  },
  {
    name: "Warm Gift Report",
    url: "https://xmas.funnyfunny.cloud/",
    description: "Check the probability of a warm gift arrival.",
    category: "LifestyleApplication",
  },
  {
    name: "Palm Reading Story",
    url: "https://hand.funnyfunny.cloud/",
    description: "Palm-line analysis from a single photo in seconds.",
    category: "LifestyleApplication",
  },
  {
    name: "Soccer Combo",
    url: "https://soccer.funnyfunny.cloud/",
    description:
      "Combine two play styles to find the footballer you resemble.",
    category: "EntertainmentApplication",
  },
  {
    name: "Neon Pinball Random Draw",
    url: "https://random.funnyfunny.cloud/",
    description: "A neon pinball game that selects random winners.",
    category: "GameApplication",
  },
  {
    name: "One-Line Fortune",
    url: "https://fortune.funnyfunny.cloud/",
    description: "Pick a daily fortune line based on your mood.",
    category: "LifestyleApplication",
  },
  {
    name: "Daily Wisdom",
    url: "https://wisdom.funnyfunny.cloud/",
    description:
      "Choose a daily line inspired by scripture.",
    category: "LifestyleApplication",
  },
  {
    name: "Maybe Not a Coincidence",
    url: "https://heal.funnyfunny.cloud/",
    description: "A one-click comfort card.",
    category: "LifestyleApplication",
  },
  {
    name: "The One Line I Need",
    url: "https://need.funnyfunny.cloud/",
    description:
      "Get a comforting line based on your emotion and situation.",
    category: "LifestyleApplication",
  },
  {
    name: "Temple Daily Quote",
    url: "https://temple.funnyfunny.cloud/",
    description: "Daily lines based on Buddhist teachings in modern language.",
    category: "LifestyleApplication",
  },
];

const seoFaq = [
  {
    question: "What services does FunnyFunny Cloud provide?",
    answer:
      "funnyfunny.cloud helps you review everyday spending, time, and habit data through tests and calculators.\n\nAll services are designed and built in-house to help users understand their patterns and compare them against realistic benchmarks.\n\nResults are for reference only and meant to support everyday choices and planning. The site is operated safely and transparently in compliance with Google policies.",
  },
  {
    question: "Is it free to use?",
    answer:
      "All services are free to use without logging in, and you can share links without restrictions.",
  },
  {
    question: "Is it mobile-friendly?",
    answer:
      "Yes. The UI is optimized for mobile, and the random button helps you start quickly.",
  },
  {
    question: "Are new services added?",
    answer:
      "We regularly add new services aligned with popular topics and trends, visible in the full list and search.",
  },
];

const allServices = [
  {
    href: "https://today.funnyfunny.cloud",
    icon: "🌱",
    title: "Today, Well Done",
    desc: "What did I do well today?",
    tags: ["reminder", "praise", "routine", "reflection"],
  },
  {
    href: "https://todo.funnyfunny.cloud/",
    icon: "✅",
    title: "Today's To-Do",
    desc: "Keep only focus tasks and check them off cleanly.",
    tags: ["todo", "tasks", "checklist", "focus"],
  },
  {
    href: "https://dream.funnyfunny.cloud/",
    icon: "💭",
    title: "Dream Diary",
    desc: "A local dream journal with tagging.",
    tags: ["dreams", "journal", "records", "local"],
  },
  {
    href: "https://rest.funnyfunny.cloud",
    icon: "🛋️",
    title: "Should I Rest Now?",
    desc: "A short survey to check if you should rest now.",
    tags: ["rest", "condition", "survey", "burnout"],
  },
  {
    href: "https://dailycheck.funnyfunny.cloud/",
    icon: "📝",
    title: "Daily Condition Check",
    desc: "Summarize today’s condition in one line with 5 checks.",
    tags: ["condition", "status", "check", "summary", "one-line"],
  },
  {
    href: "https://sleep.funnyfunny.cloud",
    icon: "🌙",
    title: "Sleep Helper",
    desc: "Sleep sound player that masks snoring and noise.",
    tags: ["sleep", "white-noise", "ambient", "rest"],
  },
  {
    href: "https://motivate.funnyfunny.cloud/",
    icon: "🔥",
    title: "Motivation Reset",
    desc: "Get a short line to reset your mindset.",
    tags: ["motivation", "mindset", "reset", "focus"],
  },
  {
    href: "https://flow.funnyfunny.cloud/",
    icon: "🧵",
    title: "FLOW Community",
    desc: "A thread-style board for sharing opinions.",
    tags: ["community", "board", "discussion"],
  },
  {
    href: "https://coffee.funnyfunny.cloud",
    icon: "☕",
    title: "Coffee Addiction Test",
    desc: "Check caffeine dependence and revival count.",
    tags: ["caffeine", "coffee", "health", "addiction"],
  },
  {
    href: "https://beauty.funnyfunny.cloud",
    icon: "💄",
    title: "Beauty Bankruptcy Test",
    desc: "Feel the impact of your beauty spending.",
    tags: ["beauty", "spending", "consumption"],
  },
  {
    href: "https://cosmetics.funnyfunny.cloud",
    icon: "🧴",
    title: "Cosmetics Routine Check",
    desc: "Check routine gaps or overloads and get a minimal recommendation.",
    tags: ["cosmetics", "routine", "skincare", "check"],
  },
  {
    href: "https://next.funnyfunny.cloud",
    icon: "🔮",
    title: "Future Me 2026",
    desc: "Your one-year route shaped by habits, money, relationships, and focus.",
    tags: ["future", "habits", "focus", "relationships"],
  },
  {
    href: "https://year.funnyfunny.cloud",
    icon: "🧾",
    title: "Life Spending Report",
    desc: "A 3-minute summary of money, time, and emotion flow.",
    tags: ["year-end", "spending", "time", "emotion"],
  },
  {
    href: "https://winter.funnyfunny.cloud",
    icon: "❄️",
    title: "Winter Trigger Top 1",
    desc: "Find the top trigger that breaks your winter routine.",
    tags: ["winter", "habits", "condition", "reset"],
  },
  {
    href: "https://energy.funnyfunny.cloud",
    icon: "⚡",
    title: "Life Energy Balance",
    desc: "Identify burnout points and recovery guides.",
    tags: ["energy", "burnout", "recovery"],
  },
  {
    href: "https://product.funnyfunny.cloud",
    icon: "🚀",
    title: "Daily Productivity Check",
    desc: "Quickly check focus, energy, and decision state.",
    tags: ["productivity", "focus", "routine"],
  },
  {
    href: "https://mental.funnyfunny.cloud",
    icon: "🧠",
    title: "Daily Mental Stamina Index",
    desc: "Assess today’s brain energy and focus state.",
    tags: ["mental", "focus", "condition"],
  },
  {
    href: "https://commute.funnyfunny.cloud/",
    icon: "⏰",
    title: "Commute Cost & Time Calculator",
    desc: "Calculate commute cost and time, and get usage ideas.",
    tags: ["commute", "time", "cost", "transport", "routine"],
  },
  {
    href: "https://human.funnyfunny.cloud",
    icon: "🙃",
    title: "People Who Drain Me",
    desc: "This test does not evaluate you.",
    tags: ["relationships", "personality", "types"],
  },
  {
    href: "https://ego.funnyfunny.cloud",
    icon: "🧬",
    title: "EGO Test",
    desc: "Not a personality test. Analyze ego under conflict, stress, and choices.",
    tags: ["ego", "stress", "conflict"],
  },
  {
    href: "https://money.funnyfunny.cloud",
    icon: "🛡️",
    title: "Asset Shield Index",
    desc: "Measure your resilience against economic downturns.",
    tags: ["finance", "risk", "assets"],
  },
  {
    href: "https://specific.funnyfunny.cloud/",
    icon: "🧮",
    title: "Asset Allocation Check",
    desc: "Check your cash, gold, real estate, stock, and crypto ratios.",
    tags: ["assets", "portfolio", "allocation", "diagnosis", "finance"],
  },
  {
    href: "https://life.funnyfunny.cloud",
    icon: "⏰",
    title: "Life Time Dashboard",
    desc: "Remaining time for free time, sleep, and career.",
    tags: ["time", "dashboard", "life"],
  },
  {
    href: "https://soul.funnyfunny.cloud",
    icon: "🔮",
    title: "SoulPrint",
    desc: "A unique personality analysis based on birth data.",
    tags: ["personality", "birth", "analysis"],
  },
  {
    href: "https://saju.funnyfunny.cloud/",
    icon: "🔮",
    title: "Saju & Sintojungbi",
    desc: "Read four pillars and yearly/monthly flow by birth date/time.",
    tags: ["saju", "fortune", "sintojungbi", "reading"],
  },
  {
    href: "https://senseyear.funnyfunny.cloud",
    icon: "🎵",
    title: "Birth-Year Vibe Test",
    desc: "Find your vibe through 12 quick questions.",
    tags: ["vibe", "test", "personality"],
  },
  {
    href: "https://alcohol.funnyfunny.cloud",
    icon: "🍺",
    title: "Alcohol MBTI",
    desc: "Drinking style MBTI.",
    tags: ["drinking", "alcohol", "style"],
  },
  {
    href: "https://lazy.funnyfunny.cloud",
    icon: "😴",
    title: "Laziness Diagnostic",
    desc: "Find causes of lethargy across 7 factors.",
    tags: ["lethargy", "laziness", "diagnosis"],
  },
  {
    href: "https://average.funnyfunny.cloud",
    icon: "📊",
    title: "Korea Average vs Me",
    desc: "Compare your income, spending, and habits to national averages.",
    tags: ["average", "stats", "comparison"],
  },
  {
    href: "https://drain.funnyfunny.cloud",
    icon: "⚡",
    title: "Life Energy Leak Diagnostic",
    desc: "Where is your energy leaking right now?",
    tags: ["energy", "fatigue", "leak"],
  },
  {
    href: "https://maldives.funnyfunny.cloud",
    icon: "🏝️",
    title: "Maldives Match",
    desc: "Find your Maldives travel style.",
    tags: ["travel", "resort", "maldives"],
  },
  {
    href: "https://bit.funnyfunny.cloud",
    icon: "💸",
    title: "Bitcoin Regret",
    desc: "If you bought then, how much would it be now?",
    tags: ["bitcoin", "investment", "opportunity-cost"],
  },
  {
    href: "https://house.funnyfunny.cloud",
    icon: "🏠",
    title: "Missed House Opportunity",
    desc: "How big is the gap now?",
    tags: ["real-estate", "investment", "simulator"],
  },
  {
    href: "https://invest.funnyfunny.cloud",
    icon: "📈",
    title: "Investment Confidence Builder",
    desc: "Log your judgment, not returns, to reduce wobbles.",
    tags: ["investing", "decision", "logging", "confidence", "mindset"],
  },
  {
    href: "https://space.funnyfunny.cloud",
    icon: "📐",
    title: "Pyeong Calculator",
    desc: "Convert pyeong to square meters and check typical sizes.",
    tags: ["real-estate", "pyeong", "area", "calculator"],
  },
  {
    href: "https://nospend.funnyfunny.cloud",
    icon: "💸",
    title: "Total Wealth of What I Didn't Buy",
    desc: "Turn “if only I hadn’t bought it” into numbers.",
    tags: ["saving", "total-wealth", "opportunity-cost"],
  },
  {
    href: "https://n.funnyfunny.cloud/",
    icon: "🍽️",
    title: "Split-the-Bill Calculator",
    desc: "Enter venue, headcount, and total to calculate and copy per-person cost.",
    tags: ["calculator", "cost", "meal", "split", "copy"],
  },
  {
    href: "https://edu.funnyfunny.cloud",
    icon: "🎓",
    title: "Private Education Hell Map",
    desc: "An education cost life simulator.",
    tags: ["education", "spending", "simulation"],
  },
  {
    href: "https://baby.funnyfunny.cloud/",
    icon: "👶",
    title: "Birthrate Reality Test",
    desc: "This may be the present, not a future prediction.",
    tags: ["birthrate", "population", "society", "test"],
  },
  {
    href: "https://miracle.funnyfunny.cloud/",
    icon: "🌍",
    title: "Better Birth Odds",
    desc: "Compare birth conditions and check your odds of a better environment.",
    tags: ["birth", "probability", "country", "comparison", "society"],
  },
  {
    href: "https://health.funnyfunny.cloud",
    icon: "🩺",
    title: "Healthspan & Retirement",
    desc: "A playful take on healthspan.",
    tags: ["health", "retirement", "longevity"],
  },
  {
    href: "https://bmi.funnyfunny.cloud/",
    icon: "📏",
    title: "BMI Survey Diet Plan",
    desc: "Tap once each. Enter numbers once. Surprisingly helpful.",
    tags: ["BMI", "diet", "survey", "plan"],
  },
  {
    href: "https://cook.funnyfunny.cloud",
    icon: "🍱",
    title: "What to Eat Today?",
    desc: "Random menu recommendations for the day.",
    tags: ["food", "recommendation", "random"],
  },
  {
    href: "https://chef.funnyfunny.cloud/",
    icon: "👨‍🍳",
    title: "Chef Judge: Today's Choice",
    desc: "Meme-style judging comments for your choice.",
    tags: ["chef", "judge", "choice", "meme"],
  },
  {
    href: "https://pick.funnyfunny.cloud",
    icon: "🍿",
    title: "OTT Pick",
    desc: "Instant movie and drama recommendations without searching.",
    tags: ["movies", "drama", "OTT", "recommendation"],
  },
  {
    href: "https://lotto.funnyfunny.cloud/",
    icon: "🎟️",
    title: "Lotto Number Picker",
    desc: "One-click lotto number combinations.",
    tags: ["lotto", "recommendation", "numbers", "random"],
  },
  {
    href: "https://anju.funnyfunny.cloud",
    icon: "🍢",
    title: "Today's Snack Pairing",
    desc: "Random snack pairing for drinks.",
    tags: ["snack", "drinks", "random"],
  },
  {
    href: "https://cafe.funnyfunny.cloud",
    icon: "☕",
    title: "Cafe Spending Reversal",
    desc: "How much did coffee cost you by age 30?",
    tags: ["cafe", "spending", "consumption"],
  },
  {
    href: "https://drink.funnyfunny.cloud",
    icon: "🍺",
    title: "That Drink, Now How Much?",
    desc: "Monthly alcohol spend vs invested amount.",
    tags: ["alcohol", "investment", "cost"],
  },
  {
    href: "https://waste.funnyfunny.cloud",
    icon: "♻️",
    title: "Waste Index",
    desc: "Convert money spent into a waste score.",
    tags: ["waste", "money", "habits"],
  },
  {
    href: "https://joke.funnyfunny.cloud",
    icon: "🤣",
    title: "Dad Jokes of the Day",
    desc: "Shareable jokes for a quick laugh.",
    tags: ["dad-jokes", "humor", "meme"],
  },
  {
    href: "https://fortune.funnyfunny.cloud",
    icon: "🔮",
    title: "One-Line Fortune",
    desc: "A daily fortune line based on your mood.",
    tags: ["fortune", "mood", "one-line"],
  },
  {
    href: "https://wisdom.funnyfunny.cloud",
    icon: "📜",
    title: "Daily Wisdom",
    desc: "A daily line inspired by scripture.",
    tags: ["wisdom", "scripture", "quote", "daily"],
  },
  {
    href: "https://heal.funnyfunny.cloud",
    icon: "💌",
    title: "Maybe Not a Coincidence",
    desc: "A comfort card with one click.",
    tags: ["comfort", "healing", "card"],
  },
  {
    href: "https://need.funnyfunny.cloud/",
    icon: "🧭",
    title: "The One Line I Need",
    desc: "Click your emotion and situation for today’s line.",
    tags: ["emotion", "situation", "comfort", "one-line"],
  },
  {
    href: "https://temple.funnyfunny.cloud/",
    icon: "🛕",
    title: "Temple Daily Quote",
    desc: "Daily lines based on Buddhist teachings in modern language.",
    tags: ["buddhism", "meditation", "quote", "daily"],
  },
  {
    href: "https://mind.funnyfunny.cloud",
    icon: "🧠",
    title: "Today's Mindfulness",
    desc: "A one-line quote for calm.",
    tags: ["mindfulness", "quote", "healing"],
  },
  {
    href: "https://beat.funnyfunny.cloud",
    icon: "🥁",
    title: "Drum Beat Trainer",
    desc: "Metronome plus basic pattern practice.",
    tags: ["drum", "rhythm", "practice"],
  },
  {
    href: "https://audio.funnyfunny.cloud",
    icon: "🎵",
    title: "Simple Audio Editor",
    desc: "Audio editing directly in the browser.",
    tags: ["audio", "editing", "tool"],
  },
  {
    href: "https://music.funnyfunny.cloud",
    icon: "🎵",
    title: "Music for This Moment",
    desc: "Music moods that fit today’s rhythm.",
    tags: ["music", "mood", "recommendation", "playlist"],
  },
  {
    href: "https://vocal.funnyfunny.cloud",
    icon: "🎤",
    title: "Head Voice Trainer",
    desc: "Breathing and resonance routines for head voice.",
    tags: ["vocal", "head-voice", "practice"],
  },
  {
    href: "https://video.funnyfunny.cloud",
    icon: "🎬",
    title: "AutoCut Studio",
    desc: "Auto-create highlight and jump-cut timelines via silence detection.",
    tags: ["video-editing", "youtube", "jump-cut", "highlights"],
  },
  {
    href: "https://file.funnyfunny.cloud/",
    icon: "🗜️",
    title: "Local Image Optimizer & File Insights",
    desc: "Re-encode WebP/JPEG, auto-resize, and view local file info, hashes, and previews.",
    tags: ["image", "optimizer", "local", "file-info", "hash"],
  },
  {
    href: "http://heic.funnyfunny.cloud/",
    icon: "📷",
    title: "HEIC to JPG Converter",
    desc: "Convert HEIC to JPG/WebP/PNG with compression, resize, and ZIP export.",
    tags: ["HEIC", "JPG", "convert", "compress", "resize", "ZIP", "WebP", "PNG"],
  },
  {
    href: "https://meta.funnyfunny.cloud",
    icon: "🧰",
    title: "Meta Kit — SEO · OG · Favicon",
    desc: "Enter meta tags, OG/Twitter cards, and favicons to generate and copy. OG text uses English.",
    tags: ["meta-tags", "OG", "SEO", "favicon", "OG-image"],
  },
  {
    href: "https://image.funnyfunny.cloud",
    icon: "🖼️",
    title: "Image Merge & PDF Converter",
    desc: "Drag to reorder and save as one image or PDF.",
    tags: ["image", "PDF", "merge", "edit"],
  },
  {
    href: "https://ocr.funnyfunny.cloud",
    icon: "🔍",
    title: "Image Text Extractor",
    desc: "Extract text from photos automatically.",
    tags: ["OCR", "text", "photo", "convert"],
  },
  {
    href: "https://time.funnyfunny.cloud",
    icon: "⏰",
    title: "Time Checker",
    desc: "Accurate server time and ticketing helper.",
    tags: ["time", "server-time", "ticketing"],
  },
  {
    href: "https://news.funnyfunny.cloud",
    icon: "📰",
    title: "IT News Today",
    desc: "Quick summaries of domestic and global IT news.",
    tags: ["news", "IT", "summary"],
  },
  {
    href: "https://weather.funnyfunny.cloud",
    icon: "🌤️",
    title: "Current Weather",
    desc: "Check nearby weather conditions.",
    tags: ["weather", "dust", "UV"],
  },
  {
    href: "https://emojicon.funnyfunny.cloud",
    icon: "🎨",
    title: "EmojiCon Studio",
    desc: "Create icons and favicons from emojis.",
    tags: ["icons", "favicon", "emoji"],
  },
  {
    href: "https://snaptrail.funnyfunny.cloud",
    icon: "📍",
    title: "SnapTrail",
    desc: "Automatically grouped photo timeline generator.",
    tags: ["photos", "timeline", "memories"],
  },
  {
    href: "https://day.funnyfunny.cloud",
    icon: "📅",
    title: "D-day Calculator",
    desc: "Date calculations, D-Day, days after, anniversaries, widgets.",
    tags: ["date", "D-day", "anniversary"],
  },
  {
    href: "https://run.funnyfunny.cloud",
    icon: "🦖",
    title: "Dino Runner",
    desc: "Dino runner-style ranking game.",
    tags: ["game", "dino", "ranking"],
  },
  {
    href: "https://charm.funnyfunny.cloud",
    icon: "🛸",
    title: "Charm (NEON ARCADE)",
    desc: "Switch lanes to dodge missiles.",
    tags: ["game", "arcade", "dodge"],
  },
  {
    href: "https://downy.funnyfunny.cloud/",
    icon: "🪜",
    title: "Downy (NEON STAIRS)",
    desc: "Step left/right on stairs; fall and it’s over.",
    tags: ["game", "arcade", "stairs"],
  },
  {
    href: "https://tet.funnyfunny.cloud/",
    icon: "🧱",
    title: "Daily Tetris",
    desc: "Tetris with solo AI and two-player support.",
    tags: ["game", "tetris", "puzzle", "two-player"],
  },
  {
    href: "https://random.funnyfunny.cloud/",
    icon: "🎱",
    title: "Neon Pinball Random Draw",
    desc: "Rolling pinballs pick a random winner.",
    tags: ["game", "random", "pinball"],
  },
  {
    href: "https://balance.funnyfunny.cloud/",
    icon: "⚖️",
    title: "Balance Game",
    desc: "Create two-choice questions and share instantly.",
    tags: ["game", "balance", "questions", "choices"],
  },
  {
    href: "https://xmas.funnyfunny.cloud/",
    icon: "🎁",
    title: "Warm Gift Report",
    desc: "🎯 Probability of a warm gift arrival.",
    tags: ["christmas", "gift", "probability", "report"],
  },
  {
    href: "https://hand.funnyfunny.cloud/",
    icon: "✋",
    title: "Palm Reading Story",
    desc: "Palm-line insights from a single photo.",
    tags: ["palm", "personality", "analysis", "photo"],
  },
  {
    href: "https://soccer.funnyfunny.cloud/",
    icon: "⚽",
    title: "Soccer Combo",
    desc: "Combine two personalities to find a matching footballer.",
    tags: ["soccer", "combo", "compatibility", "test"],
  },
  {
    href: "http://sudoku.funnyfunny.cloud/",
    icon: "🧩",
    title: "Sudoku Web Game",
    desc: "Classic sudoku with selectable difficulty.",
    tags: ["sudoku", "puzzle", "game", "brain"],
  },
];

const pageCopy = {
  ko: {
    headerHeroTitle: "유용할 수 있는 서비스, 놀이터",
    ctaPrimarySmall: "랜덤",
    ctaPrimaryLarge: "랜덤 열기",
    heroBadgeMain: "❄️ 스노우 위크",
    heroBadgeSub: "쉽게 즐기기",
    heroTitle: "겨울이 길게 느껴질 때 클릭할 테스트들",
    heroSubtitle: "이번 겨울을 여유롭게 보내고, 더 나은 순간들로 2026년을 시작하세요.",
    heroServiceCount: "총 {count}개 서비스",
    searchPlaceholder: "예: 커피, 투자, 마음챙김",
    searchResultsTitle: "검색 결과",
    searchTagResults: '"{tag}" 태그: {count}개 서비스',
    searchQueryResults: '"{query}" 검색: {count}개 결과',
    searchCount: "{count}개 항목",
    searchBottomSummary: "{count}개 검색 결과",
    searchBottomEmpty: "새로운 서비스가 곧 여기에 나타날 예정입니다.",
    searchResetButton: "초기화",
    searchNoMatches: "해당 키워드와 일치하는 서비스가 없습니다.",
    searchNoMatchesHint: "다른 키워드나 태그를 시도해보세요.",
    tagsMore: "더 많은 태그 ({count})",
    tagsCollapse: "태그 숨기기",
    randomButtonSmall: "랜덤 열기",
    randomButtonLarge: "랜덤 테스트 열기",
    quickFlow: "FLOW 게시판",
    quickAshlight: "AshLight",
    topUtilityHeading: "🧰 유용한 유틸리티 추천",
    insightCtaTitle: "오늘의 한 줄 인사이트",
    hubCtaTitle: "나를 이해하는 가장 간단한 방법",
    utilsCtaTitle: "유용한 서비스",
    viewAllServices: "모든 서비스 보기",
    recommendedContentLabel: "추천 콘텐츠",
    usefulServicesTitle: "유용한 서비스",
    footerIntroTitle: "funnyfunny.cloud 소개",
    footerIntroDescription1:
      "funnyfunny.cloud는 재미있는 유틸리티, 테스트, 계산기, 정보 도구를 통해 일상의 데이터를 전달합니다.",
    footerIntroHighlight: "",
    footerIntroDescription2: "",
    footerIntroDescription3:
      "모든 광고와 요소는 안전한 운영을 위해 Google 정책을 준수합니다.",
    footerOperationTitle: "운영 정보",
    footerOperationDeveloperLabel: "개발 및 운영:",
    footerOperationContactLabel: "문의:",
    footerLinkPrivacy: "개인정보 처리방침",
    footerLinkTerms: "서비스 이용약관",
    footerLinkCopyright: "저작권 안내",
    footerLinkPolicy: "운영 정책",
    footerCopyright: "© 2025 FunnyFunny Cloud by AshLight.",
  },
  en: {
    headerHeroTitle: "Useful services, playground",
    ctaPrimarySmall: "Random",
    ctaPrimaryLarge: "Open random tool",
    heroBadgeMain: "❄️ Snow Week",
    heroBadgeSub: "Easy to enjoy",
    heroTitle: "Tests to click when winter feels long",
    heroSubtitle: "Relax this winter and start 2026 with better moments.",
    heroServiceCount: "{count} services in total",
    searchPlaceholder: "Try: coffee, investment, mindfulness",
    searchResultsTitle: "Search results",
    searchTagResults: '"{tag}" tag: {count} services',
    searchQueryResults: '"{query}" search: {count} results',
    searchCount: "{count} entries",
    searchBottomSummary: "{count} search results",
    searchBottomEmpty: "New services will appear here shortly.",
    searchResetButton: "Reset",
    searchNoMatches: "No services match that keyword.",
    searchNoMatchesHint: "Try another keyword or tag.",
    tagsMore: "More tags ({count})",
    tagsCollapse: "Hide tags",
    randomButtonSmall: "Open random",
    randomButtonLarge: "Open random test",
    quickFlow: "FLOW board",
    quickAshlight: "AshLight",
    topUtilityHeading: "🧰 Useful utility picks",
    insightCtaTitle: "Today's single-line insight",
    hubCtaTitle: "The simplest way to understand me",
    utilsCtaTitle: "Helpful services",
    viewAllServices: "View all services",
    recommendedContentLabel: "Recommended content",
    usefulServicesTitle: "Helpful services",
    footerIntroTitle: "About funnyfunny.cloud",
    footerIntroDescription1:
      "funnyfunny.cloud delivers everyday data through fun utilities, tests, calculators, and informative tools.",
    footerIntroHighlight: "",
    footerIntroDescription2: "",
    footerIntroDescription3:
      "All ads and elements comply with Google's policies for safe operation.",
    footerOperationTitle: "Operation info",
    footerOperationDeveloperLabel: "Developed and operated by:",
    footerOperationContactLabel: "Contact:",
    footerLinkPrivacy: "Privacy policy",
    footerLinkTerms: "Terms of service",
    footerLinkCopyright: "Copyright notice",
    footerLinkPolicy: "Operating policy",
    footerCopyright: "© 2025 FunnyFunny Cloud by AshLight.",
    badgeLocalOnly: "Local only",
    badgeSEOBundle: "SEO bundle",
    badgeConverter: "Converter",
    badgeOCR: "OCR",
    badgeTimeTool: "Time tool",
    badgeLive: "Live",
    badgeSummary: "Summary",
    badgeEdit: "Edit",
    badgeIcons: "Icons",
    communityBoard: "Community / Board",
    openLabel: "Open",
    adLabel: "AD",
    dableLabel: "Dable",
    openFLOW: "Open FLOW",
    hubTitle: "The simplest way to understand me",
    sectionPsychology: "Psychology & Traits",
    sectionMoney: "Money & Investing",
    label3MinQuick: "3-minute quick",
    labelRealityCheck: "Reality check",
    flowBoardDesc: "FLOW board with thread + forum vibes, post and read on mobile",
    sectionHealth: "Health & Lifestyle",
    sectionFun: "Fun & Memes",
    labelQuickCheck: "Quick check",
    label1MinChill: "1-minute chill",
    faqTitle: "Frequently Asked Questions",
    allServicesTitle: "All Services",
    searchNoMatches: "No tests match that keyword.",
    searchNoMatchesHint: "Try a different spelling or keyword.",
    guidesLabel: "Guides",
    viewAllGuides: "View all guides",
    quickBarMessage: "Enjoy without pressure",
    quickBarHub: "Hub",
    quickBarRandomGift: "Random gift",
    hubTitle: "나를 이해하는 가장 간단한 방법",
    sectionPsychology: "심리 & 특성",
    sectionMoney: "돈 & 투자",
    label3MinQuick: "3분 컷",
    labelRealityCheck: "현실 체크",
    flowBoardDesc: "스레드 + 포럼 느낌의 게시판, 모바일에서 글쓰고 읽기",
    sectionHealth: "건강 & 라이프스타일",
    sectionFun: "재미 & 밈",
    labelQuickCheck: "빠른 체크",
    label1MinChill: "1분 여유",
    faqTitle: "자주 묻는 질문",
    allServicesTitle: "모든 서비스",
    searchNoMatches: "해당 키워드와 일치하는 서비스가 없습니다.",
    searchNoMatchesHint: "다른 키워드나 태그를 시도해보세요.",
    guidesLabel: "가이드",
    viewAllGuides: "모든 가이드 보기",
    quickBarMessage: "부담 없이 즐기세요",
    quickBarHub: "Hub",
    quickBarRandomGift: "랜덤 선물",
  },
};

function formatTemplate(template, vars = {}) {
  if (typeof template !== "string") return template;
  return template.replace(/\{(.*?)\}/g, (_, key) =>
    Object.prototype.hasOwnProperty.call(vars, key) ? vars[key] : ""
  );
}

const defaultLang = "en";

function getInitialLang() {
  if (typeof window === "undefined") return defaultLang;
  const stored = window.localStorage?.getItem("preferredLang");
  if (stored && pageCopy[stored]) {
    return stored;
  }
  const hasNavigator = typeof navigator !== "undefined";
  if (hasNavigator) {
    const browserLang =
      navigator.languages && navigator.languages.length
        ? navigator.languages[0]
        : navigator.language;
    if (browserLang && browserLang.toLowerCase().startsWith("ko")) {
      return "ko";
    }
  }
  return defaultLang;
}

export function HomeContent() {
  const [lang, setLang] = useState(getInitialLang);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [tagsExpanded, setTagsExpanded] = useState(false);
  const translationPack = pageCopy[lang] || pageCopy[defaultLang];
  const fallbackPack = pageCopy[defaultLang];

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage?.setItem("preferredLang", lang);
  }, [lang]);

  const t = (key, vars = {}) =>
    formatTemplate(
      translationPack[key] ?? fallbackPack[key] ?? key,
      vars
    );
  const handleLangChange = (nextLang) => {
    setLang(pageCopy[nextLang] ? nextLang : defaultLang);
  };

  useEffect(() => {
    const handler = (e) => {
      const a = e.target?.closest?.("a[data-amp-service]");
      if (!a) return;
      try {
        const href = a.getAttribute("href") || "";
        const service = a.getAttribute("data-amp-service") || "";
        const section = a.getAttribute("data-amp-section") || "";
        window.amplitude?.track?.("service_click", {
          service,
          section,
          href,
        });
      } catch (_) {
        // noop
      }
    };
    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, []);

  useEffect(() => {
    function openRandomTool() {
      const url = randomTools[Math.floor(Math.random() * randomTools.length)];
      window.open(url, "_blank");
    }

    const buttons = document.querySelectorAll("[data-random-btn]");
    buttons.forEach((btn) => btn.addEventListener("click", openRandomTool));

    return () =>
      buttons.forEach((btn) =>
        btn.removeEventListener("click", openRandomTool)
      );
  }, []);

  useEffect(() => {
    const quickBar = document.getElementById("quickBar");
    if (!quickBar) return;

    const onScroll = () => {
      const shouldShow = window.scrollY > 220;
      quickBar.style.transform = shouldShow
        ? "translateY(0)"
        : "translateY(24px)";
      quickBar.style.opacity = shouldShow ? "1" : "0";
      quickBar.style.pointerEvents = shouldShow ? "auto" : "none";
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const widgetContainerId = "dablewidget_6Xgdpy6o_37Jam9xo";

    if (window.dable) {
      window.dable("setService", "funnyfunny.cloud");
      window.dable("renderWidgetByWidth", widgetContainerId, {
        ignore_items: true,
      });
      return;
    }

    (function (d, a, b, l, e, r) {
      if (d[b] && d[b].q) return;
      d[b] = function () {
        (d[b].q = d[b].q || []).push(arguments);
      };
      e = a.createElement(l);
      e.async = 1;
      e.charset = "utf-8";
      e.src = "//static.dable.io/dist/plugin.min.js";
      r = a.getElementsByTagName(l)[0];
      r.parentNode.insertBefore(e, r);
    })(window, document, "dable", "script");

    window.dable("setService", "funnyfunny.cloud");
    window.dable("renderWidgetByWidth", widgetContainerId, {
      ignore_items: true,
    });
  }, []);

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "FunnyFunny Cloud",
      alternateName: ["FunnyFunny", "FunnyFunny Cloud"],
      url: "https://funnyfunny.cloud",
      description:
        "funnyfunny.cloud is an information service that helps you check and compare everyday data like spending, time, and habits through tests and calculators. Results are provided for reference and to support daily decisions and management.",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://funnyfunny.cloud/?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
      publisher: {
        "@type": "Organization",
        name: "AshLight",
        url: "https://funnyfunny.cloud",
        logo: "https://funnyfunny.cloud/favicon.svg",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      url: "https://funnyfunny.cloud",
      name: "FunnyFunny Cloud",
      alternateName: ["FunnyFunny", "FunnyFunny Cloud"],
      logo: "https://funnyfunny.cloud/favicon.svg",
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Core Utilities",
      itemListOrder: "http://schema.org/ItemListOrderAscending",
      itemListElement: seoTopItems.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: item.url,
        description: item.description,
      })),
    },
    ...seoApplications.map((app) => ({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: app.name,
      url: app.url,
      applicationCategory: app.category,
      operatingSystem: "All",
      description: app.description,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "KRW",
      },
    })),
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Guides",
      itemListOrder: "http://schema.org/ItemListOrderAscending",
      itemListElement: seoGuides.map((guide, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: guide.title,
        url: `https://funnyfunny.cloud/guide/${guide.slug}`,
        description: guide.desc,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: seoFaq.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];

  // Extract all tags and sort by popularity (usage frequency).
  const tagCounts = {};
  allServices.forEach((service) => {
    (service.tags || []).forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });
  const allTags = Array.from(
    new Set(allServices.flatMap((service) => service.tags || []))
  ).sort((a, b) => {
    // Sort by usage count first, then alphabetically.
    const countDiff = tagCounts[b] - tagCounts[a];
    return countDiff !== 0 ? countDiff : a.localeCompare(b);
  });

  // Main tags (first 22, roughly two rows).
  const mainTags = allTags.slice(0, 22);
  const remainingTags = allTags.slice(22);

  const normalizedQuery = searchQuery.trim();

  const filteredServices = allServices.filter((test) => {
    // Tag filtering.
    if (selectedTag && !(test.tags || []).includes(selectedTag)) {
      return false;
    }
    // Query filtering.
    if (normalizedQuery) {
      const haystack = [test.title, test.desc, ...(test.tags || [])]
        .join(" ")
        .toLowerCase();
      return haystack.includes(normalizedQuery.toLowerCase());
    }
    return true;
  });

  // Show results only when a query or tag is selected.
  const showSearchResults = normalizedQuery || selectedTag;

  return (
    <div className="relative bg-gradient-to-b from-[#0b1621] via-[#101f2e] to-[#14273b] text-slate-50 text-[15.5px] sm:text-[16px] leading-relaxed min-h-screen">
      <HeaderPortal lang={lang} onLangChange={handleLangChange} t={t} />
      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/85 to-sky-950/80"></div>
          <div className="absolute inset-0 snow-fall opacity-60 mix-blend-screen"></div>
          <div className="absolute -left-10 -top-10 w-48 h-48 bg-sky-200/25 blur-3xl"></div>
          <div className="absolute -right-10 bottom-0 w-48 h-48 bg-slate-200/20 blur-3xl"></div>

          <div className="relative mx-auto max-w-[440px] sm:max-w-5xl px-4 sm:px-6 py-12 sm:py-16">
            <div className="w-full text-white">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-sky-200 bg-white/10 border border-white/20 px-3 py-1 rounded-full shadow">
                <span>{t("heroBadgeMain")}</span>
                <span className="text-slate-100">{t("heroBadgeSub")}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1">
                  <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold leading-tight drop-shadow">
                    {t("heroTitle")}
                  </h2>
                  <p className="mt-3 text-base text-slate-100/90">
                    {t("heroSubtitle")}
                  </p>
                  <div className="mt-3 text-sm text-slate-200/80">
                    {t("heroServiceCount", { count: allServices.length })}
                  </div>
                </div>
                <div className="w-full sm:w-80 flex-shrink-0">
                  <label className="relative w-full">
                    <span className="absolute left-3 top-[calc(50%+2px)] -translate-y-[46%] text-slate-400 text-sm">
                      🔍
                    </span>
                    <input
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setSelectedTag("");
                      }}
                      placeholder={t("searchPlaceholder")}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm text-sm text-white placeholder:text-slate-300 focus:border-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-300/30"
                    />
                  </label>
                </div>
              </div>
              {showSearchResults && (
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {t("searchResultsTitle")}
                    </h3>
                    <p className="text-sm text-slate-200/80 mt-1">
                      {selectedTag
                        ? t("searchTagResults", {
                            tag: selectedTag,
                            count: filteredServices.length,
                          })
                        : normalizedQuery
                        ? t("searchQueryResults", {
                            query: normalizedQuery,
                            count: filteredServices.length,
                          })
                        : t("searchCount", {
                            count: filteredServices.length,
                          })}
                    </p>
                  </div>
                    {(normalizedQuery || selectedTag) && (
                      <button
                        type="button"
                        onClick={() => {
                          setSearchQuery("");
                          setSelectedTag("");
                        }}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-slate-200 text-sm font-semibold hover:bg-white/20 transition"
                      >
                        Reset
                      </button>
                    )}
                  </div>
                  {filteredServices.length === 0 ? (
                    <div className="p-6 rounded-2xl bg-white/10 border border-white/20 text-center text-sm text-slate-200">
                      <p>No services match that keyword.</p>
                      <p className="text-xs text-slate-300/80 mt-1">
                        Try another keyword or tag.
                      </p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                      {filteredServices.map(
                        ({ href, icon, title, desc, tags }) => (
                          <a
                            key={href}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${title} - ${desc}`}
                            data-amp-service={title}
                            data-amp-section="search"
                            className="flex items-start gap-3 p-4 rounded-2xl bg-white/95 text-slate-900 shadow-sm border border-slate-200 hover:border-sky-300 hover:shadow-md transition"
                          >
                            <div className="text-xl">{icon}</div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-lg leading-snug text-slate-900">
                                {title}
                              </h4>
                              <p className="text-sm text-slate-700 mt-1">
                                {desc}
                              </p>
                              {tags && tags.length > 0 && (
                                <div className="flex flex-wrap gap-1 mt-2">
                                  {tags.slice(0, 3).map((tag) => (
                                    <span
                                      key={tag}
                                      className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          </a>
                        )
                      )}
                    </div>
                  )}
                </div>
              )}

              {allTags.length > 0 && (
                <div className="mt-4">
                  <div className="flex flex-wrap gap-2">
                    {mainTags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => {
                          setSelectedTag(selectedTag === tag ? "" : tag);
                          setSearchQuery("");
                        }}
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold transition ${
                          selectedTag === tag
                            ? "bg-sky-200 text-slate-900 shadow-md"
                            : "bg-white/10 border border-white/20 text-slate-200 hover:bg-white/20"
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                    {tagsExpanded &&
                      remainingTags.map((tag) => (
                        <button
                          key={tag}
                          onClick={() => {
                            setSelectedTag(selectedTag === tag ? "" : tag);
                            setSearchQuery("");
                          }}
                          className={`px-3 py-1.5 rounded-full text-xs font-semibold transition ${
                            selectedTag === tag
                              ? "bg-sky-200 text-slate-900 shadow-md"
                              : "bg-white/10 border border-white/20 text-slate-200 hover:bg-white/20"
                          }`}
                        >
                          {tag}
                        </button>
                      ))}
                  </div>
                  {remainingTags.length > 0 && (
                    <button
                      onClick={() => setTagsExpanded(!tagsExpanded)}
                      className="mt-3 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-slate-200 text-sm font-semibold hover:bg-white/20 transition"
                    >
                      {tagsExpanded
                        ? t("tagsCollapse")
                        : t("tagsMore", { count: remainingTags.length })}
                    </button>
                  )}
                </div>
              )}

              <div className="mt-5 flex flex-col sm:flex-row flex-wrap gap-3 sm:items-center">
                <button
                  data-random-btn
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-sky-200 via-cyan-200 to-slate-200 text-slate-900 text-sm font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition whitespace-nowrap"
                >
                  <span className="sm:hidden">{t("randomButtonSmall")}</span>
                  <span className="hidden sm:inline">{t("randomButtonLarge")}</span>
                </button>
              </div>

              <div className="mt-3 flex sm:hidden items-center gap-2">
                <a
                  href="https://flow.funnyfunny.cloud/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-white/90 border border-slate-200 text-sm font-semibold text-slate-900 shadow-sm hover:border-sky-300 hover:text-slate-900 transition"
                >
                <span>{t("quickFlow")}</span>
                </a>
                <a
                  href="https://funnyfunny.cloud"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-white/90 border border-slate-200 text-sm font-semibold text-slate-900 shadow-sm hover:border-sky-300 hover:text-slate-900 transition"
                >
                  <span>{t("quickAshlight")}</span>
                </a>
              </div>
            </div>
            <h2 className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-100 bg-white/10 px-3 py-1 rounded-full shadow-sm border border-white/20 mt-16">
              {t("topUtilityHeading")}
            </h2>
            <div className="mt-8 sm:mt-10 grid gap-4 sm:grid-cols-3">
              <a
                href="https://file.funnyfunny.cloud/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Local Image Optimizer & File Insights - reduce image size with one drag and view file info"
                data-amp-service="Local Image Optimizer & File Insights"
                data-amp-section="top9"
                className="group p-4 rounded-2xl bg-white/85 text-slate-900 border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl">🗜️</span>
                  <span className="text-xs font-semibold text-emerald-600">
                    {t("badgeLocalOnly")}
                  </span>
                </div>
                <h3 className="font-bold text-lg leading-snug">
                  Local Image Optimizer
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  WebP/JPEG re-encode, auto-resize, file info, hash
                </p>
              </a>
              <a
                href="https://meta.funnyfunny.cloud"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Meta Kit — SEO · OG · Favicon - generate meta tags fast"
                data-amp-service="Meta Kit — SEO · OG · Favicon"
                data-amp-section="top9"
                className="group p-4 rounded-2xl bg-white/85 text-slate-900 border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl">🧰</span>
                  <span className="text-xs font-semibold text-indigo-600">
                    {t("badgeSEOBundle")}
                  </span>
                </div>
                <h3 className="font-bold text-lg leading-snug">Meta Kit</h3>
                <p className="text-sm text-slate-600 mt-1">
                  Auto-generate SEO/OG/favicon and copy-paste
                </p>
              </a>
              <a
                href="https://image.funnyfunny.cloud"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Image Merge & PDF Converter - merge multiple images at once"
                data-amp-service="Image Merge & PDF Converter"
                data-amp-section="top9"
                className="group p-4 rounded-2xl bg-white/85 text-slate-900 border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl">🖼️</span>
                  <span className="text-xs font-semibold text-fuchsia-600">
                    {t("badgeConverter")}
                  </span>
                </div>
                <h3 className="font-bold text-lg leading-snug">
                  Image Merge
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Drag to sort → one image or PDF
                </p>
              </a>
              <a
                href="https://ocr.funnyfunny.cloud"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Image Text Extractor - OCR text from photos"
                data-amp-service="Image Text Extractor"
                data-amp-section="top9"
                className="group p-4 rounded-2xl bg-white/85 text-slate-900 border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl">🔍</span>
                  <span className="text-xs font-semibold text-emerald-600">
                    {t("badgeOCR")}
                  </span>
                </div>
                <h3 className="font-bold text-lg leading-snug">
                  Image Text Extractor
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Copy text straight from photos
                </p>
              </a>
              <a
                href="https://time.funnyfunny.cloud"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Time Checker - server time and time calculations"
                data-amp-service="Time Checker"
                data-amp-section="top9"
                className="group p-4 rounded-2xl bg-white/85 text-slate-900 border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl">⏰</span>
                  <span className="text-xs font-semibold text-blue-600">
                    {t("badgeTimeTool")}
                  </span>
                </div>
                <h3 className="font-bold text-lg leading-snug">Time Checker</h3>
                <p className="text-sm text-slate-600 mt-1">
                  Accurate server time and time zones
                </p>
              </a>
              <a
                href="https://weather.funnyfunny.cloud"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Current Weather - local weather, UV, dust"
                data-amp-service="Current Weather"
                data-amp-section="top9"
                className="group p-4 rounded-2xl bg-white/85 text-slate-900 border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl">🌤️</span>
                  <span className="text-xs font-semibold text-sky-600">
                    {t("badgeLive")}
                  </span>
                </div>
                <h3 className="font-bold text-lg leading-snug">Current Weather</h3>
                <p className="text-sm text-slate-600 mt-1">
                  Feels-like temp, dust, and UV
                </p>
              </a>
              <a
                href="https://news.funnyfunny.cloud"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="IT News Today - quick IT news summary"
                data-amp-service="IT News Today"
                data-amp-section="top9"
                className="group p-4 rounded-2xl bg-white/85 text-slate-900 border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl">📰</span>
                  <span className="text-xs font-semibold text-orange-600">
                    {t("badgeSummary")}
                  </span>
                </div>
                <h3 className="font-bold text-lg leading-snug">
                  IT News Today
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Quick IT news highlights
                </p>
              </a>
              <a
                href="https://audio.funnyfunny.cloud"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Simple Audio Editor - browser audio editing"
                data-amp-service="Simple Audio Editor"
                data-amp-section="top9"
                className="group p-4 rounded-2xl bg-white/85 text-slate-900 border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl">🎵</span>
                  <span className="text-xs font-semibold text-emerald-600">
                    {t("badgeEdit")}
                  </span>
                </div>
                <h3 className="font-bold text-lg leading-snug">
                  Simple Audio Editor
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Trim, merge, export
                </p>
              </a>
              <a
                href="https://emojicon.funnyfunny.cloud"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="EmojiCon Studio - create emoji icons"
                data-amp-service="EmojiCon Studio"
                data-amp-section="top9"
                className="group p-4 rounded-2xl bg-white/85 text-slate-900 border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl">🎨</span>
                  <span className="text-xs font-semibold text-amber-600">
                    {t("badgeIcons")}
                  </span>
                </div>
                <h3 className="font-bold text-lg leading-snug">
                  EmojiCon Studio
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Emoji to icons and favicons
                </p>
              </a>
            </div>
            <div className="mt-6 sm:mt-8 grid gap-2 sm:grid-cols-3">
              <a
                href="#insight"
                className="flex items-center gap-2 p-3 rounded-xl bg-white/90 text-slate-900 border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition"
              >
                <span className="text-sm">💡</span>
                <p className="text-sm text-slate-700">{t("insightCtaTitle")}</p>
              </a>
              <a
                href="#hub"
                className="flex items-center gap-2 p-3 rounded-xl bg-white/90 text-slate-900 border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition"
              >
                <span className="text-sm">🧠</span>
                <p className="text-sm text-slate-700">{t("hubCtaTitle")}</p>
              </a>
              <a
                href="#utils"
                className="flex items-center gap-2 p-3 rounded-xl bg-white/90 text-slate-900 border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition"
              >
                <span className="text-sm">🛠️</span>
                <p className="text-sm text-slate-700">{t("utilsCtaTitle")}</p>
              </a>
            </div>

            <a
              href="#tests"
              className="w-full sm:w-auto inline-block text-center flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-white text-slate-900 text-sm font-semibold border border-slate-200 shadow hover:border-blue-300 hover:text-blue-700 hover:-translate-y-0.5 transition mt-16"
            >
              {t("viewAllServices")}
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-[440px] sm:max-w-5xl px-4 sm:px-6 py-8 sm:py-10">
          <div className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-slate-100">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <span className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                  {t("adLabel")}
                </span>
                <span>{t("recommendedContentLabel")}</span>
              </div>
              <span className="text-xs text-slate-400">{t("dableLabel")}</span>
            </div>
            <div className="p-4 sm:p-5">
              <div
                id="dablewidget_6Xgdpy6o_37Jam9xo"
                data-widget_id-pc="6Xgdpy6o"
                data-widget_id-mo="37Jam9xo"
              ></div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[440px] sm:max-w-5xl px-4 sm:px-6 py-12 sm:py-14 space-y-12">
          <div id="utils" className="scroll-mt-24 sm:scroll-mt-28 pt-2">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-2xl">🛠️</span>
              <h3 className="text-xl font-bold">{t("usefulServicesTitle")}</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                [
                  "https://flow.funnyfunny.cloud/",
                  "🧵 FLOW Community",
                  "A board with thread + forum vibes",
                  "Anonymous posting, live reactions, and topic threads to start chatting fast",
                ],
                [
                  "https://video.funnyfunny.cloud",
                  "🎬 AutoCut Studio",
                  "Auto highlight & jump cuts",
                  "Detects silence to extract highlight timelines and shorts to cut editing time.",
                ],
                [
                  "https://file.funnyfunny.cloud/",
                  "🗜️ Local Image Optimizer & File Insights",
                  "One drag to shrink images + view file details",
                  "Re-encode WebP/JPEG, auto-resize, and view file metadata, SHA-256, plus image/PDF/text previews without uploads.",
                ],
                [
                  "https://meta.funnyfunny.cloud",
                  "🧰 Meta Kit — SEO · OG · Favicon",
                  "Generate meta tags, sharing cards, and icons in one go",
                  "Enter SEO/OG/Twitter cards + favicon set → generate → copy. OG image text supports English only.",
                ],
                [
                  "https://image.funnyfunny.cloud",
                  "🖼️ Image Merge & PDF Converter",
                  "Upload multiple images, reorder, and save as one image or PDF",
                  "Drag to order and export to JPG/PNG/PDF in one batch",
                ],
                [
                  "https://space.funnyfunny.cloud",
                  "📐 Pyeong Calculator",
                  "Convert pyeong ↔ square meters + check typical sizes",
                  "Quick area converter for studios, officetels, and apartments",
                ],
                [
                  "https://ocr.funnyfunny.cloud",
                  "🔍 Image Text Extractor",
                  "Auto-read text in photos and copy as text",
                  "OCR tool that extracts text from receipts, documents, or notes to clipboard or file",
                ],
                [
                  "https://audio.funnyfunny.cloud",
                  "🎵 Simple Audio Editor",
                  "Edit audio directly in the browser",
                  "Trim, merge, export with no install — 100% client-side",
                ],
                [
                  "https://vocal.funnyfunny.cloud",
                  "🎤 Head Voice Trainer",
                  "Head voice practice coach",
                  "Build a 5-minute routine with breathing, resonance warmups, and scale-following.",
                ],
                [
                  "https://time.funnyfunny.cloud",
                  "⏰ Time Checker",
                  "Accurate server time and booking helper",
                  "All time-related calculations in one place.",
                ],
                [
                  "https://news.funnyfunny.cloud",
                  "📰 IT News Today",
                  "Quick summaries of local and global IT news",
                  "See the latest tech news at a glance.",
                ],
                [
                  "https://saju.funnyfunny.cloud/",
                  "🔮 Four Pillars & Shinto Fortune",
                  "Four pillars and Shinto fortune summary",
                  "Enter birth date/time to summarize this year and month trends.",
                ],
                [
                  "https://weather.funnyfunny.cloud",
                  "🌤️ Current Weather",
                  "Check nearby weather conditions",
                  "Includes fine dust, UV, and feels-like temperature.",
                ],
                [
                  "https://pick.funnyfunny.cloud",
                  "🍿 What Should I Watch? (OTT Picks)",
                  "Get movie or drama picks in a few clicks",
                  "Curated Korean OTT picks for no-regrets choices",
                ],
                [
                  "https://emojicon.funnyfunny.cloud",
                  "🎨 EmojiCon Studio",
                  "Emoji icon studio for web and apps",
                  "Enter one emoji to generate icons, favicons, and app store sizes",
                ],
                [
                  "https://snaptrail.funnyfunny.cloud",
                  "📍 SnapTrail",
                  "Memory timeline maker",
                  "Auto-group photos by year, month, and region to build a chronological timeline",
                ],
                [
                  "https://day.funnyfunny.cloud",
                  "📅 D-day Calculator",
                  "Date math, D-Day, N days later, anniversaries, widgets",
                  "Manage important dates easily.",
                ],
              ].map(([href, title, desc, detail]) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-5 rounded-2xl bg-white text-slate-900 shadow-sm border border-slate-200 hover:border-blue-400 hover:shadow-md transition"
                >
                  <h4 className="font-bold text-lg">{title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{desc}</p>
                  <p className="text-xs text-gray-500 mt-2">{detail}</p>
                </a>
              ))}
            </div>
          </div>
          <details className="sm:hidden rounded-2xl bg-white text-slate-900 shadow-sm border border-slate-200">
            <summary className="flex items-center justify-between px-4 py-3 cursor-pointer text-slate-900">
              <span className="font-semibold">{t("communityBoard")}</span>
              <span className="text-sm text-blue-600">{t("openLabel")}</span>
            </summary>
            <div className="px-4 pb-4">
              <p className="text-sm text-slate-600 mb-2">
                {t("flowBoardDesc")}
              </p>
              <a
                href="https://flow.funnyfunny.cloud/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold shadow hover:shadow-md transition"
              >
                {t("openFLOW")}
              </a>
            </div>
          </details>

          <div id="hub" className="scroll-mt-24 sm:scroll-mt-28">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-2xl">🧭</span>
              <h3 className="text-xl font-bold">
                {t("hubTitle")}
              </h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="p-5 rounded-2xl bg-white shadow-sm border border-slate-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🧠</span>
                    <h4 className="font-semibold text-slate-900">
                      {t("sectionPsychology")}
                    </h4>
                  </div>
                  <span className="text-xs text-slate-600">{t("label3MinQuick")}</span>
                </div>
                <div className="space-y-2 text-sm text-slate-700">
                  <a
                    className="block hover:text-blue-600"
                    href="https://today.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🌱 Today, Well Done
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://next.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🔮 Your 2026 Starts Now
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://mental.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🧠 Daily Mental Energy Index
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://energy.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ⚡ Life Energy Leak / Allocation
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://rest.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🛋️ Should I Rest Now?
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://product.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🚀 Daily Productivity Check
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://lazy.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    😴 Laziness Check
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://human.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🙃 People Who Drain Me
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://soul.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🔮 SoulPrint — Birth Trait Analysis
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://senseyear.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🎵 My Birth-Year Vibe
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://alcohol.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🍺 Drinking MBTI
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://ego.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🧬 EGO Test
                  </a>
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-white shadow-sm border border-slate-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">💰</span>
                    <h4 className="font-semibold text-slate-900">
                      {t("sectionMoney")}
                    </h4>
                  </div>
                  <span className="text-xs text-slate-600">{t("labelRealityCheck")}</span>
                </div>
                <div className="space-y-2 text-sm text-slate-700">
                  <a
                    className="block hover:text-blue-600"
                    href="https://bit.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    💸 Bitcoin FOMO Check
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://house.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🏠 No-Home Buyer Guilt
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://invest.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📈 Investment Confidence Builder
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://space.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📐 Pyeong Calculator
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://year.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🧾 My Spending Report This Year
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://money.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🛡️ Asset Shield Index
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://specific.funnyfunny.cloud/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🧮 Asset Allocation Check
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://edu.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🎓 Private Education Burn Map
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://average.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📊 Korea Average vs Me
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://nospend.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    💸 Total Worth of What I Skipped
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://waste.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ♻️ Life Waste Index
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://cafe.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ☕ Cafe Spend Break-even
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://drink.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🍺 How Much Is That Drink Now?
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://beauty.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    💄 Beauty Spend Bankrupt Check
                  </a>
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-white shadow-sm border border-slate-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🌿</span>
                    <h4 className="font-semibold text-slate-900">
                      {t("sectionHealth")}
                    </h4>
                  </div>
                  <span className="text-xs text-slate-600">{t("labelQuickCheck")}</span>
                </div>
                <div className="space-y-2 text-sm text-slate-700">
                  <a
                    className="block hover:text-blue-600"
                    href="https://winter.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ❄️ This Winter's Top Problem
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://coffee.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ☕ Coffee Addiction Test
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://rest.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🛋️ Should I Rest Now?
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://health.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🩺 Healthspan & Retirement Prep
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://cook.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🍱 What Should I Eat Today?
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://anju.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🍢 Today's Snack Pairing
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://life.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ⏰ Life Time Remaining Dashboard
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://weather.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🌤️ Current Weather — local weather/UV
                  </a>
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-white shadow-sm border border-slate-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🎉</span>
                    <h4 className="font-semibold text-slate-900">{t("sectionFun")}</h4>
                  </div>
                  <span className="text-xs text-slate-600">{t("label1MinChill")}</span>
                </div>
                <div className="space-y-2 text-sm text-slate-700">
                  <a
                    className="block hover:text-blue-600"
                    href="https://joke.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🤣 Dad Joke of the Day
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://fortune.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🔮 One-line Fortune for Today
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://soccer.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ⚽ Our Combo Footballer
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://mind.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🧠 Mindfulness Line of the Day
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://random.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🎱 Neon Pinball Random Picker
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://beat.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🥁 Drum Beat Practice
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://pick.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🍿 What Should I Watch? (OTT Picks)
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://snaptrail.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📍 SnapTrail — Memory Timeline
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div id="insight" className="scroll-mt-24 sm:scroll-mt-28 pt-2">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-2xl">💡</span>
              <h3 className="text-xl font-bold">Today's One-line Insight</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                [
                  "https://heal.funnyfunny.cloud",
                  "💌 Maybe Not a Coincidence",
                  "One click for a comfort card",
                  "Delivers the words you need today",
                ],
                [
                  "https://fortune.funnyfunny.cloud",
                  "🔮 One-line Fortune for Today",
                  "Pick a fortune line based on your mood",
                  "See a message that matches your moment",
                ],
                [
                  "https://wisdom.funnyfunny.cloud",
                  "📜 Today's Wisdom",
                  "Daily Wisdom in one line",
                  "A one-line message inspired by biblical teachings",
                ],
                [
                  "https://news.funnyfunny.cloud",
                  "📰 IT News Today",
                  "Quick summaries of local and global IT news",
                  "See the latest tech updates at a glance.",
                ],
                [
                  "https://joke.funnyfunny.cloud",
                  "😄 Dad Joke of the Day",
                  "Share-worthy joke collection",
                  "Laughter is the best medicine",
                ],
                [
                  "https://mind.funnyfunny.cloud",
                  "🧠 Mindfulness Line of the Day",
                  "Heal with a one-line quote",
                  "Lighten your mind",
                ],
                [
                  "https://motivate.funnyfunny.cloud/",
                  "🔥 Motivation Reset",
                  "A short line to refocus",
                  "Reset your mindset in seconds",
                ],
              ].map(([href, title, desc, detail]) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-5 rounded-2xl bg-white text-slate-900 shadow-sm border border-slate-200 hover:border-blue-400 hover:shadow-md transition"
                >
                  <h4 className="font-bold text-lg">{title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{desc}</p>
                  <p className="text-xs text-gray-500 mt-2">{detail}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h3 className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 bg-white/70 px-3 py-1 rounded-full shadow-sm border border-emerald-100">
              Games
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <a
                href="https://run.funnyfunny.cloud"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Run — dino runner-style leaderboard game"
                data-amp-service="Run"
                data-amp-section="game"
                className="group p-5 rounded-2xl bg-white/90 text-slate-900 border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">🦖</span>
                  <span className="text-xs font-semibold text-emerald-600">
                    Leaderboard
                  </span>
                </div>
                <h4 className="font-bold text-lg leading-snug">Run</h4>
                <p className="text-sm text-slate-600 mt-1">
                  Dino runner-style ranking game
                </p>
              </a>
              <a
                href="https://charm.funnyfunny.cloud/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Cham Cham Cham! (NEON ARCADE) - switch lanes to dodge missiles"
                data-amp-service="Cham Cham Cham! (NEON ARCADE)"
                data-amp-section="game"
                className="group p-5 rounded-2xl bg-white/90 text-slate-900 border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">🛸</span>
                  <span className="text-xs font-semibold text-purple-600">
                    NEON ARCADE
                  </span>
                </div>
                <h4 className="font-bold text-lg leading-snug">
                  Cham Cham Cham!
                </h4>
                <p className="text-sm text-slate-600 mt-1">
                  Just switch lanes to dodge the missiles.
                </p>
              </a>
              <a
                href="https://downy.funnyfunny.cloud/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Downy (NEON STAIRS) - switch lanes to climb stairs, fall and it's over"
                data-amp-service="Downy (NEON STAIRS)"
                data-amp-section="game"
                className="group p-5 rounded-2xl bg-white/90 text-slate-900 border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">🪜</span>
                  <span className="text-xs font-semibold text-blue-600">
                    NEON STAIRS
                  </span>
                </div>
                <h4 className="font-bold text-lg leading-snug">Downy</h4>
                <p className="text-sm text-slate-600 mt-1">
                  Switch lanes to step on stairs, fall and it's over!
                </p>
              </a>
              <a
                href="https://tet.funnyfunny.cloud/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="One Round Tetris - single (AI) and 2-player modes"
                data-amp-service="One Round Tetris"
                data-amp-section="game"
                className="group p-5 rounded-2xl bg-white/90 text-slate-900 border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">🧱</span>
                  <span className="text-xs font-semibold text-orange-600">
                    2-player
                  </span>
                </div>
                <h4 className="font-bold text-lg leading-snug">
                  One Round Tetris
                </h4>
                <p className="text-sm text-slate-600 mt-1">
                  Tetris with single (AI) and 2-player modes
                </p>
              </a>
              <a
                href="https://random.funnyfunny.cloud/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Neon Pinball Random Picker - the rolling ball picks for you"
                data-amp-service="Neon Pinball Random Picker"
                data-amp-section="game"
                className="group p-5 rounded-2xl bg-white/90 text-slate-900 border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">🎱</span>
                  <span className="text-xs font-semibold text-amber-600">
                    NEON PINBALL
                  </span>
                </div>
                <h4 className="font-bold text-lg leading-snug">
                  Neon Pinball Random Picker
                </h4>
                <p className="text-sm text-slate-600 mt-1">
                  The rolling ball on the board picks randomly.
                </p>
              </a>
            </div>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-emerald-900 via-red-800 to-emerald-900 text-white pt-6 pb-6 pl-[54px] pr-[54px] sm:pt-14 sm:pb-14 sm:pl-[70px] sm:pr-[70px] shadow-lg">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-amber-200">
                  Winter Picks
                </p>
                <h4 className="mt-1 text-2xl font-bold">
                  Popular tests to enjoy in winter
                </h4>
                <p className="mt-2 text-sm text-emerald-50/90">
                  Pick a few favorites from what people are viewing right now.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3 sm:max-w-2xl">
                <a
                  href="https://winter.funnyfunny.cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white text-slate-900 font-semibold text-sm shadow hover:-translate-y-0.5 transition whitespace-nowrap"
                >
                  Winter Mood Wrecker
                </a>
                <a
                  href="https://year.funnyfunny.cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white text-slate-900 font-semibold text-sm shadow hover:-translate-y-0.5 transition whitespace-nowrap"
                >
                  Life Spending Report
                </a>
                <a
                  href="https://bit.funnyfunny.cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/10 border border-white/30 text-white font-semibold text-sm hover:bg-white/20 transition whitespace-nowrap"
                >
                  Bitcoin Guilt
                </a>
                <a
                  href="https://pick.funnyfunny.cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/10 border border-white/30 text-white font-semibold text-sm hover:bg-white/20 transition whitespace-nowrap"
                >
                  OTT Picks
                </a>
                <a
                  href="https://drain.funnyfunny.cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/10 border border-white/30 text-white font-semibold text-sm hover:bg-white/20 transition whitespace-nowrap"
                >
                  Energy Leak
                </a>
                <a
                  href="https://rest.funnyfunny.cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/10 border border-white/30 text-white font-semibold text-sm hover:bg-white/20 transition whitespace-nowrap"
                >
                  Should I Rest?
                </a>
                <a
                  href="https://coffee.funnyfunny.cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/10 border border-white/30 text-white font-semibold text-sm hover:bg-white/20 transition whitespace-nowrap"
                >
                  Coffee Addiction
                </a>
                <a
                  href="https://hand.funnyfunny.cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/10 border border-white/30 text-white font-semibold text-sm hover:bg-white/20 transition whitespace-nowrap"
                >
                  Palm Story Time
                </a>
                <a
                  href="https://mind.funnyfunny.cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/10 border border-white/30 text-white font-semibold text-sm hover:bg-white/20 transition whitespace-nowrap"
                >
                  Mindfulness Line
                </a>
              </div>
            </div>
          </div>

          <div
            id="faq"
            className="rounded-2xl bg-white/95 border border-emerald-200 shadow-lg p-6 sm:p-8 space-y-4 text-slate-900"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">❓</span>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-emerald-700">
                  FAQ
                </p>
                <h3 className="text-xl font-bold">{t("faqTitle")}</h3>
              </div>
            </div>
            <div className="divide-y divide-emerald-100">
              {seoFaq.map((item) => (
                <details key={item.question} className="py-3 group">
                  <summary className="flex items-center justify-between cursor-pointer">
                    <span className="text-sm font-semibold text-slate-900 group-hover:text-emerald-700">
                      {item.question}
                    </span>
                    <span className="text-emerald-400 text-lg group-open:rotate-45 transition">
                      +
                    </span>
                  </summary>
                  <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>

          <div id="tests" className="scroll-mt-24 sm:scroll-mt-28 pt-2">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-2xl">🧪</span>
              <h3 className="text-xl font-bold">{t("allServicesTitle")}</h3>
            </div>
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-emerald-100">
                  {allServices.length} services are ready right now.
                </p>
                <p className="text-xs text-emerald-100/80">
                  Search by keyword or click to open.
                </p>
              </div>
              <label className="relative w-full sm:w-80">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                  🔍
                </span>
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t("searchPlaceholder")}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 bg-white shadow-sm text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
                />
              </label>
            </div>
            <div className="flex items-center justify-between text-xs text-emerald-100/90 mb-3">
              <span>
                {normalizedQuery
                  ? t("searchBottomSummary", {
                      count: filteredServices.length,
                    })
                  : t("searchBottomEmpty")}
              </span>
              {normalizedQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/90 border border-emerald-200 text-slate-900 shadow-sm hover:border-red-300 hover:text-red-700 transition"
                >
                  {t("searchResetButton")}
                </button>
              )}
            </div>
            {filteredServices.length === 0 ? (
              <div className="p-6 rounded-2xl bg-white border border-dashed border-slate-200 text-center text-sm text-slate-600">
                <p>{t("searchNoMatches")}</p>
                <p className="text-xs text-slate-400 mt-1">
                  {t("searchNoMatchesHint")}
                </p>
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2">
                {filteredServices.map(({ href, icon, title, desc }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${title} - ${desc}`}
                    data-amp-service={title}
                    data-amp-section="all"
                    className="flex items-start gap-3 p-4 rounded-2xl bg-white/95 text-slate-900 shadow-sm border border-emerald-200 hover:border-amber-300 hover:shadow-md transition"
                  >
                    <div className="text-xl">{icon}</div>
                    <div>
                      <h4 className="font-semibold text-lg leading-snug text-slate-900">
                        {title}
                      </h4>
                      <p className="text-sm text-slate-700">{desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="mx-auto max-w-[440px] sm:max-w-5xl px-4 sm:px-6 pb-10 sm:pb-12">
          <div className="mt-6 sm:mt-8">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 bg-white px-3 py-1 rounded-full shadow-sm border border-emerald-100">
              {t("guidesLabel")}
            </div>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {seoGuides.map((guide) => (
                <a
                  key={guide.slug}
                  href={`/guide/${guide.slug}`}
                  aria-label={`${guide.title} - ${guide.desc}`}
                  data-amp-service={guide.title}
                  data-amp-section="guides"
                  className="flex items-start gap-3 p-4 rounded-2xl bg-white text-slate-900 border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-md transition"
                >
                  <div className="text-xl">{guide.emoji}</div>
                  <div>
                    <h3 className="font-semibold text-base text-slate-900">
                      {guide.title}
                    </h3>
                    <p className="text-sm text-slate-600 mt-1">{guide.desc}</p>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-3">
              <a
                href="/guide"
                aria-label={t("viewAllGuides")}
                data-amp-service={t("viewAllGuides")}
                data-amp-section="guides"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white border border-slate-200 text-sm font-semibold text-slate-800 shadow-sm hover:border-blue-400 hover:text-blue-700 transition"
              >
                {t("viewAllGuides")}
              </a>
            </div>
          </div>
        </section>
      </main>

        <FooterPortal t={t} />

      <div
        id="quickBar"
        className="fixed inset-x-0 bottom-3 px-4 sm:px-6 transition transform translate-y-24 opacity-0 pointer-events-none"
      >
        <div className="mx-auto max-w-[440px] sm:max-w-3xl bg-gradient-to-r from-red-600 via-amber-400 to-emerald-600 text-slate-900 rounded-2xl shadow-2xl flex items-center justify-between px-4 py-3 gap-3">
          <div className="text-sm font-semibold drop-shadow">
            {t("quickBarMessage")}
          </div>
          <div className="flex items-center gap-2">
            <a
              href="#hub"
              className="px-3 py-2 rounded-full bg-white/80 text-slate-900 text-sm font-semibold hover:-translate-y-0.5 transition"
            >
              {t("quickBarHub")}
            </a>
            <button
              data-random-btn
              className="px-3 py-2 rounded-full bg-white/90 text-slate-900 text-sm font-semibold hover:-translate-y-0.5 transition"
            >
              {t("quickBarRandomGift")}
            </button>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </div>
  );
}
