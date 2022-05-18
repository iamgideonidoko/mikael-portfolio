export const viewTransition = (type: string, duration: number, delay: number) =>
    `${type} ${duration}s cubic-bezier(0.075, 0.82, 0.165, 1) ${delay}s;`;
