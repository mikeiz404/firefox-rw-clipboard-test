function clipboard_read()
{
    navigator.clipboard.readText()
    .then(
        (v) => console.log('read success --', v),
        (e) => console.error('read failure --', e)
    )
}

setInterval(() =>
{
    clipboard_read()
}, 1 * 1000)