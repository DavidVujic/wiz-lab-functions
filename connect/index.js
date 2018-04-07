function handleTrigger (context, blob) {
  const started = new Date(blob.timestamp).toLocaleString()
  const now = new Date().toLocaleString()

  context.log(blob.raw)
  context.log(started)
  context.log(now)

  context.done()
}

module.exports = handleTrigger
