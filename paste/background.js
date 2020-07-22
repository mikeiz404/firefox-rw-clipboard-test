function clipboard_write()
{
    const v = 'BACKGROUND-PASTE ' + Date.now()

    navigator.clipboard.writeText(v)
    .then(
        () => console.log('write success --', v),
        (e) => console.error('write failure --', e)
    )
}

setInterval(() =>
{
    clipboard_write()
}, 1 * 1000)