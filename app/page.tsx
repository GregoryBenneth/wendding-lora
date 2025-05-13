"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GlowingCard } from "./components/GlowingCard";
import { AnimatedText } from "./components/AnimatedText";
import { AnimatedButton } from "./components/AnimatedButton";
import { Divider } from "./components/Divider";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 py-16 bg-gradient-to-b from-[#2c0515] to-[#3c0718]">
      <motion.div
        className="max-w-lg w-full mx-auto flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Monograma Animado */}
        <motion.div
          className="w-20 h-20 mb-10 relative"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-[#7D424C] rounded-full opacity-10"></div>
          <div className="absolute inset-2 border border-[#E8D5D9]/30 rounded-full flex items-center justify-center">
            <span className="font-cormorant text-3xl text-[#E8D5D9]/80 tracking-wide">
              D&R
            </span>
          </div>
        </motion.div>

        {/* Cabeçalho com os nomes */}
        <div className="mb-8">
          <motion.h1
            className="text-4xl md:text-5xl font-cormorant font-light tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <motion.span
              className="block mb-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              DÉBORA
            </motion.span>
            <motion.span
              className="block w-10 h-px bg-[#E8D5D9]/30 mx-auto my-3"
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            />
            <motion.span
              className="block"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              RODRIGO
            </motion.span>
          </motion.h1>
        </div>

        <Divider />

        {/* Card principal com o convite */}
        <GlowingCard className="p-8 md:p-10 mb-10 backdrop-blur-sm bg-[#3c0719]/40">
          {/* Ícone decorativo */}
          <div className="w-10 h-10 mx-auto mb-6 opacity-70">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
            </svg>
          </div>

          <AnimatedText
            text="Juntamente com suas famílias convidam para o seu casamento a ser realizado dia"
            className="text-sm md:text-base font-light mb-6 leading-relaxed"
            delay={1}
          />

          <motion.p
            className="text-xl md:text-2xl font-cormorant font-semibold mb-6 tracking-wide"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            14/06/2025 ÀS 20:00 HORAS
          </motion.p>

          <motion.div
            className="text-sm opacity-80 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            <p className="mb-2 font-cormorant">
              Catedral Metropolitana Nossa Senhora Aparecida
            </p>
            <p className="text-xs text-[#E8D5D9]/70">
              Praça Pio XI s/n - Centro Montes Claros - MG Brasil
            </p>
          </motion.div>
        </GlowingCard>

        {/* Seção de interação */}
        <motion.div
          className="w-full mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <p className="text-xs opacity-80 mb-8 font-light tracking-wider">
            TOQUE NOS ÍCONES PARA INTERAGIR
          </p>

          <div className="grid grid-cols-3 gap-6">
            {/* Botão de Enviar Mensagem */}
            <AnimatedButton
              href="https://sites.icasei.com.br/rodrigoedebora2025/messages"
              icon={
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M20,16H6L4,18V4H20" />
                </svg>
              }
              label="Enviar uma mensagem"
            />

            {/* Botão de Confirmar Presença - vazio por enquanto */}
            <div className="flex flex-col items-center gap-2">
              <a
                href="#"
                className="block"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.preventDefault()}
              >
                <motion.div
                  className="w-16 h-16 bg-[#6D3841] rounded-full flex items-center justify-center"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 15px 2px rgba(216, 197, 201, 0.3)",
                    backgroundColor: "#7d424c",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
                  </svg>
                </motion.div>
                <motion.span
                  className="text-sm text-center font-medium tracking-wide"
                  whileHover={{ color: "#ffffff" }}
                >
                  Confirmar presença
                </motion.span>
              </a>
            </div>

            {/* Botão de Lista de Presentes */}
            <AnimatedButton
              href="https://sites.icasei.com.br/rodrigoedebora2025/pages/34388127"
              icon={
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22,12V20A2,2 0 0,1 20,22H4A2,2 0 0,1 2,20V12A1,1 0 0,1 1,11V8A2,2 0 0,1 3,6H6.17C6.06,5.69 6,5.35 6,5A3,3 0 0,1 9,2C10,2 10.88,2.5 11.43,3.24V3.23L12,4L12.57,3.23V3.24C13.12,2.5 14,2 15,2A3,3 0 0,1 18,5C18,5.35 17.94,5.69 17.83,6H21A2,2 0 0,1 23,8V11A1,1 0 0,1 22,12M4,20H20V12H17V10H15V12H9V10H7V12H4V20M6,8H9V6H6V8M15,8H18V6H15V8M9,4A1,1 0 0,0 8,5A1,1 0 0,0 9,6A1,1 0 0,0 10,5A1,1 0 0,0 9,4M15,4A1,1 0 0,0 14,5A1,1 0 0,0 15,6A1,1 0 0,0 16,5A1,1 0 0,0 15,4Z" />
                </svg>
              }
              label="Lista de presentes"
            />
          </div>
        </motion.div>

        {/* Website URL */}
        <motion.div
          className="text-xs opacity-70 mt-8 font-cormorant tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 2.3, duration: 0.8 }}
        >
          <p>sites.icasei.com.br/rodrigoedebora2025</p>
        </motion.div>

        {/* Background decorativo */}
        <div className="fixed inset-0 -z-10 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-40 h-40 bg-[#7D424C] rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#7D424C] rounded-full filter blur-3xl"></div>
        </div>
      </motion.div>
    </div>
  );
}
