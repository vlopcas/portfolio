"use client";
import {useState} from "react";
type Theme="system"|"light"|"dark";
export function ThemeToggle(){const[theme,setTheme]=useState<Theme>(()=>{if(typeof window==="undefined")return "system";const saved=localStorage.getItem("theme");return saved==="light"||saved==="dark"?saved:"system"});function cycle(){const next:Theme=theme==="system"?"light":theme==="light"?"dark":"system";setTheme(next);if(next==="system"){localStorage.removeItem("theme");delete document.documentElement.dataset.theme}else{localStorage.setItem("theme",next);document.documentElement.dataset.theme=next}}return <button className="theme-toggle" type="button" onClick={cycle} aria-label={`Tema atual: ${theme}. Alterar tema`} suppressHydrationWarning>{theme==="system"?"◐":theme==="light"?"☼":"☾"}</button>}
