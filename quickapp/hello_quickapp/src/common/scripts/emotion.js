const RESTING_HR = 70

function clamp(val, min, max) {
  if (val < min) return min
  if (val > max) return max
  return val
}

function computeScore(data) {
  const hr = data.hr || RESTING_HR
  const stress = data.stress || 0
  const spo2 = data.spo2 || 98
  const nStress = clamp(stress / 49, 0, 1)  // stress range 1-49
  const nHr = clamp(Math.abs(hr - RESTING_HR) / 60, 0, 1)
  const nSpo2 = clamp((100 - spo2) / 10, 0, 1)
  return Math.round((0.5 * nStress + 0.3 * nHr + 0.2 * nSpo2) * 100)
}

function esLevel(score) {
  if (score < 30) return 1
  if (score < 50) return 2
  if (score < 70) return 3
  return 4
}

function esColor(level) {
  const colors = ['#4a6fa5', '#d4a857', '#e8732c', '#c0392b']
  return colors[level - 1] || colors[0]
}

function esLabel(level) {
  const labels = ['平静', '微波澜', '明显波动', '情绪峰值']
  return labels[level - 1] || '平静'
}

export { computeScore, esLevel, esColor, esLabel, clamp }
export default { computeScore, esLevel, esColor, esLabel, clamp }
