export const masureResize = () => {
    // const [winSize, setWinSize]
    let initialResize = null;
    const resizeObserver = new ResizeObserver(entities => {
        // console.log(entities);
        for (let entity of entities) {
            // console.log(entity.contentRect.width);
            if (entity.contentRect.width >= 900) {
                // FLEX DIRECTION REVERSE 
                initialResize = false;
            } else {
                initialResize = true;
            }
        }
    });
    resizeObserver.observe(document.body);
    return initialResize;
}