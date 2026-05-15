const leaveTransition = () => {
    const tl = gsap.timeline();

    tl.to('.transition', {
        duration: 0,
        height: '100vh',
    });

    tl.to('.transition li', {
        duration: .5,
        scaleY: 1,
        transformOrigin: 'bottom left',
        stagger: 0.2
    });

    tl.to('.transition li', {
        duration: .5,
        scaleY: 0,
        transformOrigin: 'bottom left',
        stagger: 0.1,
        delay: 0.1
    });

    tl.to('.transition', {
        duration: 0,
        height: '0',
    });
}

const contentAnimation = (data) => {
    const tl = gsap.timeline();

    tl.from('body', {
        duration: .5,
        opacity: 0,
    });
}

const delay = (n) => {
    n = n || 2000;
    return new Promise(done => {
        setTimeout(() => {
            done();
        }, n);
    });
}

barba.init({
    sync: true,
    transitions: [{
        async leave(data) {
            const done = this.async();

            leaveTransition(data);
            await delay(1000);
            done();
        },
        async enter(data) {
            contentAnimation();
            window.scrollTo(0, 0);
        },
        async once(data) {
            contentAnimation();
        }
    }]
});