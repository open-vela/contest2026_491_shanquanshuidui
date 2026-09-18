import storage from '@system.storage'

function saveChat(date, messages) {
  storage.set({
    key: 'chat_' + date,
    value: JSON.stringify(messages)
  })
}

function loadChat(date) {
  return new Promise((resolve) => {
    storage.get({
      key: 'chat_' + date,
      success: (data) => {
        try { resolve(JSON.parse(data) || []) }
        catch(e) { resolve([]) }
      },
      fail: () => resolve([])
    })
  })
}

function listChatDates() {
  return new Promise((resolve) => {
    storage.get({
      key: 'chat_dates',
      success: (data) => {
        try { resolve(JSON.parse(data) || []) }
        catch(e) { resolve([]) }
      },
      fail: () => resolve([])
    })
  })
}

function addChatDate(date) {
  listChatDates().then(dates => {
    if (!dates.includes(date)) {
      dates.unshift(date)
      storage.set({ key: 'chat_dates', value: JSON.stringify(dates) })
    }
  })
}

function saveReport(date, report) {
  storage.set({ key: 'report_' + date, value: JSON.stringify(report) })
}

function todayStr() {
  const d = new Date()
  return `${d.getFullYear()}${String(d.getMonth()+1).padStart(2,'0')}${String(d.getDate()).padStart(2,'0')}`
}

function timeStr(ts) {
  const d = new Date(ts)
  return `${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`
}

export { saveChat, loadChat, listChatDates, addChatDate, saveReport, todayStr, timeStr }
export default { saveChat, loadChat, listChatDates, addChatDate, saveReport, todayStr, timeStr }
