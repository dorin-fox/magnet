paraxify('.video-thumb', '#work-section', '.services-bg', {
    speed: 1, // 0 - 1
});

const sections = [
    document.getElementById('welcome-section'),
    document.getElementById('about-section'),
    document.getElementById('work-section'),
     document.getElementById('services-section'),
    document.getElementById('contact-section')
  ]
Array.prototype.forEach.call(sections, (section) => {
    const elementWatcher = scrollMonitor.create(section, -180)
    elementWatcher.enterViewport(() => {
        const elements = section.querySelectorAll('[data-doorman]')
        Array.prototype.forEach.call(elements, (el) => {
            const doorman = new Doorman(el)
            doorman.start()
        })
        elementWatcher.destroy()
    })
})
