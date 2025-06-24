'use client';

import React, { useEffect, useRef, useState } from 'react';

interface FloatingShape {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
  type: 'circle' | 'triangle' | 'square' | 'diamond';
  color: 'red' | 'amber' | 'emerald';
}

export function AnimatedGeometricBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const shapesRef = useRef<FloatingShape[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const colors = {
    red: { primary: 'rgba(220, 38, 38, 0.8)', secondary: 'rgba(220, 38, 38, 0.3)' },
    amber: { primary: 'rgba(245, 158, 11, 0.8)', secondary: 'rgba(245, 158, 11, 0.3)' },
    emerald: { primary: 'rgba(16, 185, 129, 0.8)', secondary: 'rgba(16, 185, 129, 0.3)' }
  };

  useEffect(() => {
    const updateDimensions = () => {
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || dimensions.width === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    // Initialize floating shapes with luxurious traffic light colors
    const initShapes = () => {
      shapesRef.current = [];
      const shapeCount = Math.floor((dimensions.width * dimensions.height) / 6000);
      
      for (let i = 0; i < shapeCount; i++) {
        shapesRef.current.push({
          id: i,
          x: Math.random() * dimensions.width,
          y: Math.random() * dimensions.height,
          size: Math.random() * 8 + 3,
          speedX: (Math.random() - 0.5) * 1.2,
          speedY: (Math.random() - 0.5) * 1.2,
          opacity: Math.random() * 0.7 + 0.4,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.04,
          type: ['circle', 'triangle', 'square', 'diamond'][Math.floor(Math.random() * 4)] as any,
          color: ['red', 'amber', 'emerald'][Math.floor(Math.random() * 3)] as any
        });
      }
    };

    initShapes();

    const drawShape = (shape: FloatingShape) => {
      ctx.save();
      ctx.translate(shape.x, shape.y);
      ctx.rotate(shape.rotation);
      
      // Calculate distance from mouse for interactive effect
      const dx = shape.x - mouseRef.current.x;
      const dy = shape.y - mouseRef.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDistance = 250;
      const influence = Math.max(0, 1 - distance / maxDistance);
      
      // Apply mouse influence with enhanced visibility
      const dynamicSize = shape.size + influence * 6;
      const dynamicOpacity = shape.opacity + influence * 0.6;
      
      ctx.globalAlpha = Math.min(1, dynamicOpacity);
      
      const shapeColors = colors[shape.color];
      ctx.strokeStyle = shapeColors.primary;
      ctx.fillStyle = shapeColors.secondary;
      ctx.lineWidth = 2.5 + influence * 1.5;

      // Add glow effect
      if (influence > 0.3) {
        ctx.shadowColor = shapeColors.primary;
        ctx.shadowBlur = 15 + influence * 10;
      }

      switch (shape.type) {
        case 'circle':
          ctx.beginPath();
          ctx.arc(0, 0, dynamicSize, 0, Math.PI * 2);
          ctx.stroke();
          ctx.fill();
          break;
        case 'triangle':
          ctx.beginPath();
          ctx.moveTo(0, -dynamicSize);
          ctx.lineTo(-dynamicSize * 0.866, dynamicSize * 0.5);
          ctx.lineTo(dynamicSize * 0.866, dynamicSize * 0.5);
          ctx.closePath();
          ctx.stroke();
          ctx.fill();
          break;
        case 'square':
          ctx.beginPath();
          ctx.rect(-dynamicSize, -dynamicSize, dynamicSize * 2, dynamicSize * 2);
          ctx.stroke();
          ctx.fill();
          break;
        case 'diamond':
          ctx.beginPath();
          ctx.moveTo(0, -dynamicSize);
          ctx.lineTo(dynamicSize, 0);
          ctx.lineTo(0, dynamicSize);
          ctx.lineTo(-dynamicSize, 0);
          ctx.closePath();
          ctx.stroke();
          ctx.fill();
          break;
      }
      
      ctx.restore();
    };

    const drawConnections = () => {
      const shapes = shapesRef.current;

      for (let i = 0; i < shapes.length; i++) {
        for (let j = i + 1; j < shapes.length; j++) {
          const dx = shapes[i].x - shapes[j].x;
          const dy = shapes[i].y - shapes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 180) {
            const opacity = (1 - distance / 180) * 0.6;
            
            // Use gradient for connections
            const gradient = ctx.createLinearGradient(shapes[i].x, shapes[i].y, shapes[j].x, shapes[j].y);
            gradient.addColorStop(0, colors[shapes[i].color].primary);
            gradient.addColorStop(1, colors[shapes[j].color].primary);
            
            ctx.globalAlpha = opacity;
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(shapes[i].x, shapes[i].y);
            ctx.lineTo(shapes[j].x, shapes[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      
      // Draw connections first (behind shapes)
      drawConnections();
      
      // Update and draw shapes
      shapesRef.current.forEach(shape => {
        // Enhanced mouse attraction/repulsion effect
        const dx = shape.x - mouseRef.current.x;
        const dy = shape.y - mouseRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 200) {
          const force = (200 - distance) / 200;
          shape.x += (dx / distance) * force * 1.2;
          shape.y += (dy / distance) * force * 1.2;
        }
        
        // Normal movement
        shape.x += shape.speedX;
        shape.y += shape.speedY;
        shape.rotation += shape.rotationSpeed;

        // Wrap around edges
        if (shape.x < -30) shape.x = dimensions.width + 30;
        if (shape.x > dimensions.width + 30) shape.x = -30;
        if (shape.y < -30) shape.y = dimensions.height + 30;
        if (shape.y > dimensions.width + 30) shape.y = -30;

        drawShape(shape);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    }
  };

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ zIndex: 1 }}
      onMouseMove={handleMouseMove}
    />
  );
}
