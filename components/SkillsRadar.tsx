'use client'
import { motion } from 'framer-motion'

const skills = [
  { label: 'React', value: 0.92 },
  { label: 'Next.js', value: 0.9 },
  { label: 'TypeScript', value: 0.88 },
  { label: '工程化', value: 0.9 },
  { label: '开源协作', value: 0.85 },
]

function getPoint(value: number, index: number, total: number) {
  const angle = (Math.PI * 2 * index) / total - Math.PI / 2
  const radius = 80 * value
  return [100 + radius * Math.cos(angle), 100 + radius * Math.sin(angle)]
}

export default function SkillsRadar() {
  const points = skills.map((skill, index) => getPoint(skill.value, index, skills.length)).flat().join(' ')

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.05 }}
      className="border border-white/[0.08] bg-white/[0.03] p-8 md:p-10"
    >
      <h2 className="text-lg font-medium text-white">技能图谱</h2>
      <p className="mt-3 text-[15px] leading-relaxed text-gray-400">侧重工程化、类型化与开源协作；数值为示意。</p>
      <div className="mt-8 flex items-center justify-center">
        <svg viewBox="0 0 200 200" className="h-80 w-80">
          <circle cx="100" cy="100" r="88" fill="rgba(56,189,248,0.05)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          {[1, 2, 3, 4].map((level) => (
            <circle key={level} cx="100" cy="100" r={level * 18} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          ))}
          <polygon points={points} fill="rgba(56,189,248,0.22)" stroke="#38bdf8" strokeWidth="2" />
          {skills.map((skill, index) => {
            const [x, y] = getPoint(1, index, skills.length)
            return (
              <g key={skill.label}>
                <line x1="100" y1="100" x2={x} y2={y} stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
                <text x={x} y={y} fill="#fff" fontSize="10" textAnchor={x > 100 ? 'start' : 'end'} dominantBaseline="middle">
                  {skill.label}
                </text>
              </g>
            )
          })}
        </svg>
      </div>
    </motion.div>
  )
}
