import React, { useEffect, useState } from 'react';
import { motion as m, useSpring } from 'framer-motion';
const motion = m as any;
export default function CustomCursor() {
  const x = useSpring(0, { damping: 30, stiffness: 300 }); const y = useSpring(0, { damping: 30, stiffness: 300 });
  const [label, setLabel] = useState('');
  useEffect(() => { const move=(e:MouseEvent)=>{x.set(e.clientX-16);y.set(e.clientY-16)}; const over=(e:MouseEvent)=>{const el=(e.target as HTMLElement).closest('a,button,[data-cursor]') as HTMLElement|null; setLabel(el?.getAttribute('data-cursor') || (el ? 'View' : ''));}; window.addEventListener('mousemove',move);window.addEventListener('mouseover',over);return()=>{window.removeEventListener('mousemove',move);window.removeEventListener('mouseover',over)}; },[x,y]);
  return <motion.div className={`cursor-orb ${label?'is-active':''}`} style={{x,y}}>{label && <span>{label}</span>}</motion.div>;
}
