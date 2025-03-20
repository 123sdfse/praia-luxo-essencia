
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    title: "Bem-vindo à Praia Luxo",
    description: "Descubra nossa coleção exclusiva de moda praia premium brasileira",
    image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
  },
  {
    title: "Elegância Atemporal",
    description: "Cada peça é cuidadosamente criada para combinar estilo e conforto",
    image: "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Sustentabilidade",
    description: "Comprometidos com práticas sustentáveis e materiais eco-friendly",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
  }
];

const IntroSlider = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-white">
      <Carousel className="w-full max-w-5xl mx-auto">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 items-center">
                <div className="order-2 md:order-1 space-y-6 text-center md:text-left">
                  <h2 className="font-serif text-4xl md:text-5xl text-navy leading-tight">
                    {slide.title}
                  </h2>
                  <p className="text-lg text-navy/70">
                    {slide.description}
                  </p>
                  {index === slides.length - 1 && (
                    <Button variant="secondary" size="lg" className="bg-sand hover:bg-sand/90 text-navy font-medium group mt-4">
                      Começar
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  )}
                </div>
                <div className="order-1 md:order-2">
                  <div className="rounded-2xl overflow-hidden aspect-square">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
};

export default IntroSlider;
