
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
}

export function AnimatedGeometricBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const shapesRef = useRef<FloatingShape[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

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

    // Initialize floating shapes
    const initShapes = () => {
      shapesRef.current = [];
      const shapeCount = Math.floor((dimensions.width * dimensions.height) / 15000);
      
      for (let i = 0; i < shapeCount; i++) {
        shapesRef.current.push({
          id: i,
          x: Math.random() * dimensions.width,
          y: Math.random() * dimensions.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.3 + 0.1,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02,
          type: ['circle', 'triangle', 'square', 'diamond'][Math.floor(Math.random() * 4)] as any
        });
      }
    };

    initShapes();

    const drawShape = (shape: FloatingShape) => {
      ctx.save();
      ctx.translate(shape.x, shape.y);
      ctx.rotate(shape.rotation);
      ctx.globalAlpha = shape.opacity;
      
      // Calculate distance from mouse for interactive effect
      const dx = shape.x - mouseRef.current.x;
      const dy = shape.y - mouseRef.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDistance = 150;
      const influence = Math.max(0, 1 - distance / maxDistance);
      
      // Apply mouse influence
      const dynamicSize = shape.size + influence * 2;
      const dynamicOpacity = shape.opacity + influence * 0.3;
      
      ctx.globalAlpha = Math.min(1, dynamicOpacity);
      ctx.strokeStyle = `rgba(59, 130, 246, ${0.4 + influence * 0.3})`; // Blue color
      ctx.fillStyle = `rgba(59, 130, 246, ${0.1 + influence * 0.2})`;
      ctx.lineWidth = 1;

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
      ctx.strokeStyle = `rgba(59, 130, 246, 0.1)`;
      ctx.lineWidth = 0.5;

      for (let i = 0; i < shapes.length; i++) {
        for (let j = i + 1; j < shapes.length; j++) {
          const dx = shapes[i].x - shapes[j].x;
          const dy = shapes[i].y - shapes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const opacity = 1 - distance / 120;
            ctx.globalAlpha = opacity * 0.3;
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
        // Mouse repulsion effect
        const dx = shape.x - mouseRef.current.x;
        const dy = shape.y - mouseRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const force = (100 - distance) / 100;
          shape.x += (dx / distance) * force * 0.5;
          shape.y += (dy / distance) * force * 0.5;
        }
        
        // Normal movement
        shape.x += shape.speedX;
        shape.y += shape.speedY;
        shape.rotation += shape.rotationSpeed;

        // Wrap around edges
        if (shape.x < -10) shape.x = dimensions.width + 10;
        if (shape.x > dimensions.width + 10) shape.x = -10;
        if (shape.y < -10) shape.y = dimensions.height + 10;
        if (shape.y > dimensions.height + 10) shape.y = -10;

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
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
      onMouseMove={handleMouseMove}
    />
  );
}
