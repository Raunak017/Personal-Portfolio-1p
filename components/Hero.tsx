"use client"

import { motion } from "framer-motion"
import { ArrowDown, Download, Eye } from "lucide-react"
import Image from "next/image"

import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useState } from "react";
import { AnimatePresence, type Transition, type VariantLabels, type Target, type TargetAndTransition } from "framer-motion";

function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(" ");
}

export interface RotatingTextRef {
  next: () => void;
  previous: () => void;
  jumpTo: (index: number) => void;
  reset: () => void;
}

export interface RotatingTextProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof motion.span>,
    "children" | "transition" | "initial" | "animate" | "exit"
  > {
  texts: string[];
  transition?: Transition;
  initial?: boolean | Target | VariantLabels;
  animate?: boolean | VariantLabels | TargetAndTransition;
  exit?: Target | VariantLabels;
  animatePresenceMode?: "sync" | "wait";
  animatePresenceInitial?: boolean;
  rotationInterval?: number;
  staggerDuration?: number;
  staggerFrom?: "first" | "last" | "center" | "random" | number;
  loop?: boolean;
  auto?: boolean;
  splitBy?: string;
  onNext?: (index: number) => void;
  mainClassName?: string;
  splitLevelClassName?: string;
  elementLevelClassName?: string;
}

const RotatingText = forwardRef<RotatingTextRef, RotatingTextProps>((props, ref) => {
  const {
    texts,
    transition = { type: "spring", damping: 25, stiffness: 300 },
    initial = { y: "100%", opacity: 0 },
    animate = { y: 0, opacity: 1 },
    exit = { y: "-120%", opacity: 0 },
    animatePresenceMode = "wait",
    animatePresenceInitial = false,
    rotationInterval = 2000,
    staggerDuration = 0,
    staggerFrom = "first",
    loop = true,
    auto = true,
    splitBy = "characters",
    onNext,
    mainClassName,
    splitLevelClassName,
    elementLevelClassName,
    ...rest
  } = props;

  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);

  const splitIntoCharacters = (text: string): string[] => {
    if (typeof Intl !== "undefined" && (Intl as any).Segmenter) {
      const segmenter = new (Intl as any).Segmenter("en", { granularity: "grapheme" });
      return Array.from(segmenter.segment(text), (segment: any) => segment.segment);
    }
    return Array.from(text);
  };

  const elements = useMemo(() => {
    const currentText: string = texts[currentTextIndex];
    if (splitBy === "characters") {
      const words = currentText.split(" ");
      return words.map((word, i) => ({
        characters: splitIntoCharacters(word),
        needsSpace: i !== words.length - 1,
      }));
    }
    if (splitBy === "words") {
      return currentText.split(" ").map((word, i, arr) => ({
        characters: [word],
        needsSpace: i !== arr.length - 1,
      }));
    }
    if (splitBy === "lines") {
      return currentText.split("\n").map((line, i, arr) => ({
        characters: [line],
        needsSpace: i !== arr.length - 1,
      }));
    }

    return currentText.split(splitBy).map((part, i, arr) => ({
      characters: [part],
      needsSpace: i !== arr.length - 1,
    }));
  }, [texts, currentTextIndex, splitBy]);

  const getStaggerDelay = useCallback(
    (index: number, totalChars: number): number => {
      const total = totalChars;
      if (staggerFrom === "first") return index * staggerDuration;
      if (staggerFrom === "last") return (total - 1 - index) * staggerDuration;
      if (staggerFrom === "center") {
        const center = Math.floor(total / 2);
        return Math.abs(center - index) * staggerDuration;
      }
      if (staggerFrom === "random") {
        const randomIndex = Math.floor(Math.random() * total);
        return Math.abs(randomIndex - index) * staggerDuration;
      }
      return Math.abs((staggerFrom as number) - index) * staggerDuration;
    },
    [staggerFrom, staggerDuration]
  );

  const handleIndexChange = useCallback(
    (newIndex: number) => {
      setCurrentTextIndex(newIndex);
      if (onNext) onNext(newIndex);
    },
    [onNext]
  );

  const next = useCallback(() => {
    const nextIndex = currentTextIndex === texts.length - 1 ? (loop ? 0 : currentTextIndex) : currentTextIndex + 1;
    if (nextIndex !== currentTextIndex) {
      handleIndexChange(nextIndex);
    }
  }, [currentTextIndex, texts.length, loop, handleIndexChange]);

  const previous = useCallback(() => {
    const prevIndex = currentTextIndex === 0 ? (loop ? texts.length - 1 : currentTextIndex) : currentTextIndex - 1;
    if (prevIndex !== currentTextIndex) {
      handleIndexChange(prevIndex);
    }
  }, [currentTextIndex, texts.length, loop, handleIndexChange]);

  const jumpTo = useCallback(
    (index: number) => {
      const validIndex = Math.max(0, Math.min(index, texts.length - 1));
      if (validIndex !== currentTextIndex) {
        handleIndexChange(validIndex);
      }
    },
    [texts.length, currentTextIndex, handleIndexChange]
  );

  const reset = useCallback(() => {
    if (currentTextIndex !== 0) {
      handleIndexChange(0);
    }
  }, [currentTextIndex, handleIndexChange]);

  useImperativeHandle(
    ref,
    () => ({ next, previous, jumpTo, reset }),
    [next, previous, jumpTo, reset]
  );

  useEffect(() => {
    if (!auto) return;
    const intervalId = setInterval(next, rotationInterval);
    return () => clearInterval(intervalId);
  }, [next, rotationInterval, auto]);

  return (
    <motion.span className={cn("flex flex-wrap whitespace-pre-wrap relative", mainClassName)} {...rest} layout transition={transition}>
      <span className="sr-only">{texts[currentTextIndex]}</span>
      <AnimatePresence mode={animatePresenceMode} initial={animatePresenceInitial}>
        <motion.span
          key={currentTextIndex}
          className={cn(splitBy === "lines" ? "flex flex-col w-full" : "flex flex-wrap")}
          layout
          aria-hidden="true"
        >
          {elements.map((wordObj, wordIndex, array) => {
            const previousCharsCount = array.slice(0, wordIndex).reduce((sum, word) => sum + word.characters.length, 0);
            return (
              <span key={wordIndex} className={cn("inline-flex", splitLevelClassName)}>
                {wordObj.characters.map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    initial={initial}
                    animate={animate}
                    exit={exit}
                    transition={{
                      ...transition,
                      delay: getStaggerDelay(
                        previousCharsCount + charIndex,
                        array.reduce((sum, word) => sum + word.characters.length, 0)
                      ),
                    }}
                    className={cn("inline-block", elementLevelClassName)}
                  >
                    {char}
                  </motion.span>
                ))}
                {wordObj.needsSpace && <span className="whitespace-pre"> </span>}
              </span>
            );
          })}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
});

RotatingText.displayName = "RotatingText";

export default function Hero() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  }

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-purple-600/15 to-blue-500/15 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <motion.div custom={0} variants={textVariants} initial="hidden" animate="visible" className="mb-6">
              <span className="text-lg accent-text font-medium">Hello, I'm</span>
            </motion.div>

            <motion.h1
              custom={1}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-5xl md:text-7xl font-bold mb-6 text-white"
            >
              <motion.span
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="bg-gradient-to-r from-white via-blue-400 to-white bg-clip-text text-transparent"
                style={{ backgroundSize: "200% 100%" }}
              >
                Raunak Shukla
              </motion.span>
            </motion.h1>

            <motion.div
              custom={2}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-xl md:text-2xl text-gray-400 mb-8"
            >
              <div className="flex items-baseline gap-2 justify-center lg:justify-start">
                <RotatingText
                  texts={["Software", "AI"]}
                  rotationInterval={2200}
                  staggerDuration={0.02}
                  staggerFrom="first"
                  auto
                  loop
                  mainClassName="text-white"
                  aria-label="Role prefix rotating"
                />
                <span>Engineer</span>
              </div>
              <p className="text-lg text-gray-500 mt-2">Building intelligent and scalable software systems.</p>
            </motion.div>

            <motion.div
              custom={3}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                onClick={scrollToProjects}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center gap-2 justify-center relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
                <Eye size={20} />
                View Projects
              </motion.button>

              <motion.a
                href="/resume.pdf"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center gap-2 justify-center"
                rel="noreferrer"
              >
                <Download size={20} />
                Download Resume
              </motion.a>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Rotating border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-blue-500 p-1"
              >
                <div className="w-full h-full rounded-full bg-black" />
              </motion.div>

              {/* Main image */}
              <Image
                src="/images/raunak-graduation.jpeg"
                alt="Raunak Shukla"
                width={300}
                height={300}
                className="relative z-10 rounded-full object-cover w-72 h-72 border-4 border-black"
                priority
              />

              {/* Floating elements around image */}
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-80"
              />
              <motion.div
                animate={{
                  y: [10, -10, 10],
                  rotate: [360, 180, 0],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full opacity-80"
              />
              <motion.div
                animate={{
                  x: [-5, 5, -5],
                  y: [-5, 5, -5],
                }}
                transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
                className="absolute top-1/2 -left-8 w-4 h-4 bg-blue-400 rounded-full opacity-60"
              />
              <motion.div
                animate={{
                  x: [5, -5, 5],
                  y: [5, -5, 5],
                }}
                transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY }}
                className="absolute top-1/4 -right-8 w-3 h-3 bg-purple-400 rounded-full opacity-70"
              />

              {/* Pulsing ring */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="absolute inset-0 rounded-full border-2 border-blue-500/30"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="flex flex-col items-center text-gray-500"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            >
              <ArrowDown size={20} className="accent-text" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
