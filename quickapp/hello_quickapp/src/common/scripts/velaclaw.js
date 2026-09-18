import velaclaw from '@system.velaclaw'

function ask(query) {
  return new Promise((resolve, reject) => {
    velaclaw.ask({
      query: query,
      success: function(res) { resolve(res.reply) },
      fail: function(data, code) { reject({ data, code }) },
      complete: function() {}
    })
  })
}

export { ask }
export default { ask }
